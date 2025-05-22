import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-white min-h-screen py-16 mt-10 px-6 md:px-20 font-[Poppins]" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 rounded-md py-15 uppercase">
          Contact Us
        <div className="relative flex justify-center mt-2">
          <div className="h-1 w-36 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse" />
        </div>
        </h1>
      {/* Animated Line */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
          {/* Contact Info Section */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
                <FaMapMarkerAlt /> Our Location
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="text-xl text-black font-semibold">Dubey Medical Stores</span> <br />
                Shahpur Urwa Bazar, Near Dubey Hata, <br />
                Gorakhpur, Uttar Pradesh, 273407, India
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
                <FaPhone /> Call Us
              </h2>
              <p className="text-gray-700 text-lg space-y-2">
                <a
                  href="tel:+917379496704"
                  className="text-blue-600 hover:text-blue-400 font-medium block"
                >
                  +91 73794 96704 (Owner - Brijesh Dubey)
                </a>
                <a
                  href="tel:+919654803662"
                  className="text-blue-600 hover:text-blue-400 font-medium block"
                >
                  +91 96548 03662 (Primary Pharmacist - Manish Dubey)
                </a>
                <a
                  href="tel:+919643798365"
                  className="text-black text-lg font-semibold hover:text-blue-400 block"
                >
                  +91 96437 98365 (Secondary Pharmacist - Tushar Dubey)
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
                <FaWhatsapp /> WhatsApp
              </h2>
              <a
                href="https://wa.me/9654803662"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
                <FaEnvelope /> Email Us
              </h2>
              <a
                href="mailto:email@dubeymedical.com"
                className="text-blue-600 hover:text-blue-400 font-medium underline"
              >
                tushardubey1993@gmail.com
              </a>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="">
            <iframe
              title="Dubey Medical Stores Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.334820752527!2d83.25696235097308!3d26.45235326775166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39916decc734172b%3A0x57f699038b163e16!2sDubey%20Medical%20Store!5e0!3m2!1sen!2sin!4v1747736323145!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
}