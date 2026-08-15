import React from "react";
import { motion } from "framer-motion";


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16 font-roboto">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} 
            className="font-montserrat text-4xl font-bold text-gray-900">
            About{" "}
            <span className="text-btnColor">
              GoMiniUrl
            </span>
          </motion.h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A simple and fast way to shorten your long URLs and make them
            easier to share.
          </p>
        </div>

        {/* About Section */}
        <div className="mt-12 rounded-xl p-8 shadow-custom">
          <h2 className="font-montserrat text-2xl font-semibold text-gray-900">
            What is GoMiniUrl?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            GoMiniUrl is a URL shortening service that converts long and
            complicated URLs into short, clean, and easy-to-share links.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Whether you're sharing links on social media, sending them through
            email, or using them in your projects, GoMiniUrl makes link
            sharing simple and convenient.
          </p>
        </div>

        {/* Features */}
        <motion.div
         initial={{ opacity: 0, y: -60 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
        className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Fast */}
          <div className="rounded-xl bg-white p-6 text-center shadow-custom">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              ⚡
            </div>

            <h3 className="mt-4 font-montserrat text-lg font-semibold text-gray-900">
              Fast
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Quickly create short URLs and share them instantly.
            </p>
          </div>

          {/* Simple */}
          <div className="rounded-xl bg-white p-6 text-center shadow-custom">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              ✨
            </div>

            <h3 className="mt-4 font-montserrat text-lg font-semibold text-gray-900">
              Simple
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              A clean and easy-to-use interface for everyone.
            </p>
          </div>

          {/* Reliable */}
          <div className="rounded-xl bg-white p-6 text-center shadow-custom">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
              🔒
            </div>

            <h3 className="mt-4 font-montserrat text-lg font-semibold text-gray-900">
              Reliable
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Create and manage your shortened links with confidence.
            </p>
          </div>

        </motion.div>

        {/* How It Works */}
        <div className="mt-16 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-3 text-gray-600">
            Shorten your URL in just three simple steps.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-gray-100 p-6">
              <span className="text-3xl font-bold text-btnColor">01</span>
              <h3 className="mt-3 font-montserrat font-semibold">
                Paste URL
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Enter your long URL into GoMiniUrl.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 p-6">
              <span className="text-3xl font-bold text-btnColor">02</span>
              <h3 className="mt-3 font-montserrat font-semibold">
                Shorten
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Click the shorten button to generate your link.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 p-6">
              <span className="text-3xl font-bold text-btnColor">03</span>
              <h3 className="mt-3 font-montserrat font-semibold">
                Share
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Copy your short URL and share it anywhere.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12 text-center text-white shadow-custom">
          <h2 className="font-montserrat text-3xl font-bold">
            Make Your Links Shorter
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-blue-50">
            Start using GoMiniUrl today and make your long URLs simple,
            clean, and easy to share.
          </p>

          <motion.a
          initial={{ opacity: 0.5, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            href="/dashboard"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-linkColor transition hover:scale-105"
          >
            Shorten a URL
          </motion.a>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;