import React from "react";
import { motion } from "framer-motion";
import medicine1 from "../../assets/medicine1.jpg";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function PopularProducts() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-white max-w-[1300px] mt-10 font-[Poppins] mx-auto py-16 px-6 md:px-20 text-center shadow">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white uppercase bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 rounded-md py-15">
        Our Most <span className="text-indigo-600">Popular</span> Products
      <div className="relative flex justify-center mt-2">
        <div className="h-1 w-36 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse" />
      </div>
      </h2>
      {/* Animated Line */}
      <p className="text-gray-500 mt-3">
        Join the crowd—try our most-loved products!
      </p>

      {/* Products Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 items-start max-w-7xl mx-auto px-4">
      {[ // Product data can be extracted, here inline for simplicity
        {
          id: 1,
          icon: <ChevronLeft className="mb-3 text-gray-400" />,
          imgAlt: "Eye Cream",
          imgSrc: medicine1,
          title: "Swift Night Eye Cream 3.4 fl.oz (100ml)",
          price: "200.5",
          rating: 4.9,
          reviews: "3k",
          imgHeight: "h-40",
        },
        {
          id: 2,
          icon: null,
          imgAlt: "Dietary Supplement",
          imgSrc: medicine1,
          title: "Swift Dietary Supplements Orange Flavor 90 (23g)",
          price: "150.5",
          rating: 4.5,
          reviews: "5k",
          imgHeight: "h-52",
        },
        {
          id: 3,
          icon: <ChevronRight className="mb-3 text-gray-400" />,
          imgAlt: "Foundation",
          imgSrc: medicine1,
          title: "Swift Matte Foundation Light Formula SPF 20 (100ml)",
          price: "550.5",
          rating: 4.0,
          reviews: "100k",
          imgHeight: "h-40",
        },
      ].map((product, i) => (
        <motion.div
          key={product.id}
          className="flex flex-col items-center bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer transform hover:scale-105"
          custom={i}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          tabIndex={0} // accessible focus
          role="group"
          aria-label={product.title}
        >
          {product.icon}
          <img
            src={product.imgSrc}
            alt={product.imgAlt}
            className={`${product.imgHeight} object-contain rounded-lg mb-4 select-none`}
            draggable={false}
          />
          <p className="mt-2 text-center text-gray-900 font-semibold text-base sm:text-lg">
            {product.title}
          </p>
          <p className="text-indigo-700 font-bold mt-1 text-lg">{product.price}</p>
          <p className="text-gray-600 mt-1 text-sm flex items-center gap-1 select-none">
            <span className="flex items-center text-yellow-400 font-semibold">
              {product.rating} <Star size={16} fill="gold" strokeWidth={0} />
            </span>{" "}
            ({product.reviews} reviews)
          </p>
        </motion.div>
      ))}
    </div>
    </section>
  );
}
