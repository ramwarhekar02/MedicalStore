import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Store, ShoppingBag } from "lucide-react";

export default function HealthcareHeroBanner() {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(15px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float2 {
            animation: float2 5s ease-in-out infinite;
          }
        `}
      </style>

      <section className="relative w-full max-w-[1300px] mx-auto my-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden px-6 py-16 rounded-3xl shadow-xl font-sans">
        {/* Floating Background Effects */}
        <div className="absolute top-[-6rem] left-[-6rem] w-80 h-80 bg-indigo-300 rounded-full opacity-30 blur-3xl animate-float"></div>
        <div className="absolute bottom-[-6rem] right-[-6rem] w-64 h-64 bg-purple-300 rounded-full opacity-30 blur-2xl animate-float2"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-blue-900"
          >
            <span className="block uppercase">Your Health,<span className="text-indigo-600">Our Priority</span></span>

          </motion.h1>

          {/* Line Pulse */}
          <div className="relative flex justify-center mt-3 mb-5">
            <div className="h-1 w-36 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse" />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl"
          >
            Trust us for genuine medicines, quick services, and expert guidance. Your reliable partner for everyday and emergency health needs.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-3">24/7 Services</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Round-the-clock Support</li>
                <li>Genuine Medication</li>
                <li>Immediate Assistance</li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-3">*Discounts & Offers</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Up to 50% Off</li>
                <li>Seasonal Health Deals</li>
                <li>Save More on Essentials</li>
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Complete Range</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Allopathy & Ayurveda</li>
                <li>Veterinary Medicine</li>
                <li>Top Brands Available</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Buttons with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Products
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 font-semibold rounded-full shadow-md transition-all duration-300"
            >
              <Store className="w-5 h-5 text-indigo-600" />
              Visit Our Store
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
