import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-br font-[Poppins] from-black via-indigo-800 to-black text-gray-300 pt-12 mt-16 border-t border-blue-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
      {/* Brand Info */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-5 select-none">
          Dubey Medical Stores
        </div>
        <p className="text-blue-200 text-sm sm:text-base max-w-xs leading-relaxed">
          Your trusted medical store for quality healthcare products and personalized services.
        </p>
        <p className="mt-6 text-xs text-blue-300 font-semibold select-none">
          &copy; {new Date().getFullYear()} Dubey Medical Stores. All rights reserved.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-white font-semibold mb-4 sm:mb-5 text-lg sm:text-xl">Quick Links</h3>
        <ul className="space-y-2 sm:space-y-3 text-white text-base sm:text-lg">
          <li>
            <Link to="/" onClick={scrollToTop} className="hover:text-blue-400 transition-colors duration-300 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={scrollToTop} className="hover:text-blue-400 transition-colors duration-300 font-medium">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={scrollToTop} className="hover:text-blue-400 transition-colors duration-300 font-medium">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop} className="hover:text-blue-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Media & Contact */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-blue-300 font-semibold mb-4 sm:mb-5 text-lg sm:text-xl">Connect with Us</h3>
        <div className="flex space-x-6 sm:space-x-8 text-2xl sm:text-3xl mb-5 sm:mb-6">
          <a href="#" aria-label="Instagram" className="text-pink-500 hover:drop-shadow-glow-pink hover:scale-110 transition-transform">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="text-blue-500 hover:drop-shadow-glow-blue hover:scale-110 transition-transform">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/9654803662" aria-label="WhatsApp" className="text-green-500 hover:drop-shadow-glow-green hover:scale-110 transition-transform">
            <FaWhatsapp />
          </a>
        </div>
        <div className="text-white font-bold text-sm sm:text-base space-y-2 leading-snug text-center md:text-left">
          <p>📞 Contact: +91-9643798365</p>
          <p>
            📧 Email:{" "}
            <a href="mailto:email@dubeymedical.com" className="hover:text-blue-400 underline">
              tushardubey1993@gmail.com
            </a>
          </p>
          <p>📍 Shahpur Urwa Bazar, Gorakhpur, <br /> <span className="md:pl-7 sm:pl-7">Uttar Pradesh 273407</span></p>
        </div>
      </div>
    </div>

      {/* Bottom Line */}
      <div className="text-center text-xs sm:text-sm text-blue-200 py-4 border-t border-blue-700">
        <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          Powered by <span>{" "}</span>
          <a
            href="https://pigo-pi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Pigopi
          </a>
        </span>
      </div>

    </footer>
  );
}
