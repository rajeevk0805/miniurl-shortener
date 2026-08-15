import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token) => {
  return useQuery({
    queryKey: ["my-shortenurls"],
    queryFn: async () => {
      return await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
    },

    select: (data) => {
      const sortedData = (data.data || []).sort(
        (a, b) =>
          new Date(b.createdDate) - new Date(a.createdDate)
      );

      return sortedData;
    },

    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};

export const useFetchTotalClicks = (token) => {
  return useQuery({
    queryKey: ["url-totalclick"],
    queryFn: async () => {
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 30); // Last 30 days

      // Use local date parts (not UTC) to avoid off-by-one-day issues
      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      return await api.get(
        `/api/urls/totalClicks?startDate=${formatDate(
          startDate
        )}&endDate=${formatDate(endDate)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    },

    select: (data) => {
      const convertToArray = Object.keys(data.data || {}).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));

      // Sort chronologically by date
      return convertToArray.sort(
        (a, b) => new Date(a.clickDate) - new Date(b.clickDate)
      );
    },

    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
