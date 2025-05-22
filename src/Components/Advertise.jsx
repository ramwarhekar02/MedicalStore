import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom"; // <-- Add this
import "../animations.css";
import "../index.css";

export default function Advertise() {
  const [showPopup, setShowPopup] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsAnimating(false);
      setShowRing(true);
    }, 1000);
  };

  const handleRingClick = () => {
    setShowRing(false);
    setShowPopup(true);
  };

  return (
    <>
      {(showPopup || isAnimating) && (
        <div
          className={`fixed inset-0 flex justify-center bg-black/40 items-center z-50 ${
            isAnimating ? "animate-move-to-corner" : ""
          }`}
          style={isAnimating ? { animationFillMode: "forwards" } : {}}
        >
          <div
            className={`relative bg-white max-w-md w-full mx-4 rounded-xl shadow-xl text-center px-6 py-8 border-4 border-blue-700 ${
              isAnimating ? "popup-animating" : ""
            }`}
          >
            {!isAnimating && (
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
                onClick={handleClose}
                aria-label="Close popup"
              >
                <IoMdClose />
              </button>
            )}

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Get Upto 50% Off
            </h2>
            <p className="text-gray-700 mb-6">
              Tap the button below to chat with us on WhatsApp and receive your
              5% - 50% discount code on Retail and WholeSale Medicines!
            </p>

            <a
              href="https://wa.me/919654803662?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Dubey%20Medical%20Stores!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 inline-block"
            >
              Chat on WhatsApp
            </a>

            <p className="text-sm text-gray-500 mt-5 italic">
              *We respect your privacy and won’t spam you.
            </p>

            {!isAnimating && (
              <Link
                to="/contact"
                className="mt-4 inline-block text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium"
              >
                Contact Us Instead
              </Link>
            )}
          </div>
        </div>
      )}

      {showRing && (
        <div
          className="fixed top-28 right-10 w-16 h-16 rounded-full border-4 border-blue-700 flex justify-center items-center cursor-pointer animate-pulse-slow z-50 ring-container"
          onClick={handleRingClick}
          aria-label="Open Advertise Popup"
          title="Open Advertise Popup"
        >
          <div className="w-10 h-10 rounded-full border-4 border-blue-300"></div>
        </div>
      )}
    </>
  );
}
