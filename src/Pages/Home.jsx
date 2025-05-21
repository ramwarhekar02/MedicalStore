import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Home/Banner"
import Products from "./Home/Products";
import Shop from "./Home/Shop"
import About from "../Components/About";
import FeaturedProducts from "./Home/FeaturedProducts";
import Info from "../Pages/Info";
import { motion } from "framer-motion";
import peel from "../assets/peel.png";


export default function Home() {
  return (
    <div className="bg-gray-50 overflow-hidden font-[Poppins]">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-100/40 to-indigo-200/20 blur-3xl"></div>
        {/* <div className="absolute bottom-0 right-0 w-[800px] h-[800px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-orange-100/40 to-orange-200/20 blur-3xl"></div> */}
      </div>

      <Banner/>
      {/* Hero Section */}
      <Info/>

      <Products/>

      {/* Categories Section */}
      <Shop/>

      {/* About Section */}
      <section className="bg-white py-20 px-6 md:px-20 max-w-[1300px] mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 uppercase"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-indigo-600">Dubey </span> Medical Stores
      {/* Animated Line */}
      <div className="relative flex justify-center mt-2">
        <div className="h-1 w-36 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse" />
      </div>
      </motion.h2>

      {/* Image + Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 items-center">
        {/* Image */}
        <motion.img
          src={peel}
          alt="Dubey Medical Store"
          className="w-full h-auto rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Your Trusted Local Pharmacy
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to <span className="text-indigo-600 font-semibold">Dubey Medical Stores</span>, your trusted destination for
            genuine and affordable <span className="font-medium">Ayurvedic and Allopathic medicines</span> in Gorakhpur. 
            Conveniently located at <strong>Shahpur Urwa Bazar near Dubey Complex</strong>, 
            we are committed to providing high-quality pharmaceutical products backed by 
            expert guidance and friendly service.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Whether you're looking for day-to-day medicines or specialized wellness products, 
            we ensure authenticity, affordability, and care in everything we offer.
          </p>
        </motion.div>
      </div>

      {/* Learn More Button */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-xl transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>

      {/* Featured Products */}
      <FeaturedProducts/>

      {/* CTA Section */}
      <section className="relative md:max-w-[1300px] md:mx-auto mx-2 rounded-md my-10 bg-gradient-to-br from-zinc-900 via-indigo-900 to-black py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Ready to start your wellness journey?
          </motion.h2>

          {/* Discount Offer Sub-Heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl text-green-400 font-semibold mb-6"
          >
            Get <span className="text-yellow-300">5% – 50% Discount</span> when you chat with us on WhatsApp!
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-10"
          >
            Visit <span className="text-indigo-400 font-semibold">Dubey Medical Store</span> for trusted medicines and expert guidance tailored to your health.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <Link
              to="/products"
              className="px-8 py-3.5 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all duration-300"
            >
              Shop Products
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3.5 font-medium rounded-lg border border-zinc-200 text-white hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/919654803662?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Dubey%20Medical%20Stores!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-medium rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-300 shadow-lg"
            >
              Get Discount on WhatsApp
            </a>
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-sm text-zinc-400 mt-6 italic"
          >
            *We respect your privacy and won’t spam you.
          </motion.p>
        </div>

        {/* Decorative blurred gradient circle */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}