import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut",
  },
  rotate: {
    duration: 2,
    yoyo: Infinity,
    ease: "easeInOut",
  }
};

export default function WhatsApp() {
  return (
    <motion.a
      href="https://wa.me/9654803662"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-10 font-[Poppins] bg-green-600 text-white rounded-full p-4 shadow-lg cursor-pointer z-50"
      initial={{ scale: 0.8, rotate: -10 }}
      animate={{ scale: 1.2, y: ["0%", "-20%", "0%"], rotate: [0, 20, 0] }}
      transition={bounceTransition}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}
