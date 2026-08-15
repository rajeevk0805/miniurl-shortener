import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShortenUrlPage from "./components/ShortenUrlPage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./components/ErrorPage";

// <PrivateRoute publicPage={true}>
//      <RegisterPage />
// </PrivateRoute>

const AppRouter = () => {
  const { pathname } = useLocation();

  // Static app pages that should show NavBar/Footer.
  // Any other single-segment path is treated as a short URL code.
  const appPaths = ["/", "/about", "/register", "/login", "/dashboard", "/error"];
  const isAppPath = appPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );
  const hideHeaderFooter = !isAppPath;

    return (
        <>
        {!hideHeaderFooter && <NavBar /> }
        <Toaster position='bottom-center'/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/s/:url" element={<ShortenUrlPage />} />
          <Route path="/:url" element={<ShortenUrlPage />} />

          <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
          <Route path="/login" element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />
          
          <Route path="/dashboard" element={ <PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
          <Route path="/error" element={ <ErrorPage />} />
          <Route path="*" element={ <ErrorPage message="We can't seem to find the page you're looking for"/>} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </>
    );
}


export default AppRouter;

export const SubDomainRouter = () => {
    return (
        <Routes>
          <Route path="/:url" element={<ShortenUrlPage />} />
        </Routes>
    )
}