import React from "react";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    name: "Ayurvedic Tonic",
    desc: "Boosts immunity and promotes wellness.",
    price: "₹199",
    tip: "Best Seller",
    svg: <span role="img" aria-label="bottle">🧴</span>,
  },
  {
    name: "Pain Relief Balm",
    desc: "Effective for headaches and body aches.",
    price: "₹99",
    tip: "Top Rated",
    svg: <span role="img" aria-label="ointment">💊</span>,
  },
  {
    name: "Cough Syrup",
    desc: "Soothes sore throat and reduces cough.",
    price: "₹149",
    tip: "Doctor Recommended",
    svg: <span role="img" aria-label="syrup">🥤</span>,
  },
  {
    name: "Vitamin Capsules",
    desc: "Daily dose of essential nutrients in Body.",
    price: "₹249",
    tip: "New Arrival",
    svg: <span role="img" aria-label="capsules">💊</span>,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative font-[Poppins] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase">Featured Products</h2>
      {/* Animated Line */}
      <div className="relative flex justify-center mt-2">
        <div className="h-1 w-36 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse" />
      </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto py-4">
          Quality medicines recommended by our pharmacists
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.name}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Product Image/Icon */}
            <div className="p-6 pb-0 flex justify-center">
              <div className="w-28 h-28 flex items-center justify-center text-4xl bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors duration-300">
                {product.svg}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">{product.name}</h3>
              <p className="text-gray-600 text-sm text-center mb-3">{product.desc}</p>

              {/* Price + Tip */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-indigo-600">{product.price}</span>
                <motion.span
                  className="text-xs bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 font-medium"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {product.tip}
                </motion.span>
              </div>

              {/* CTA Button */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-all duration-300"
              >
                See More
              </motion.button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
