import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import partners from "../assets/partners.jpg"
import team from "../assets/team.jpg"
import delivery from "../assets/delivery.png"
import medicines from "../assets/medicines.jpeg"
import offer from "../assets/offer.png"

const sectionVariants = {
  hidden: { opacity: 1, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const images = [
  medicines,
  team,
  offer,
  delivery,
  partners,
];

export default function AboutSection() {
  return (
    <section
      className="bg-white py-16 px-6 md:px-20 mt-10 lg:px-32 font-[Poppins]"
      id="about"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          custom={0}
          className="text-5xl font-extrabold text-center text-blue-700 mb-12 select-none"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-black uppercase">
            Dubey Medical Stores
          </h1>
          <div className="relative flex justify-center mt-2">
            <div className="h-1 w-36 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse" />
          </div>
        </motion.div>

        {/* About Us */}
        <motion.div
          custom={1}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center mb-16 gap-8"
        >
          <img
            src={images[0]}
            alt="Pharmacy Front"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover bg-cover h-64"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-blue-800">💡 About Us</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to <strong>Dubey Medical Stores</strong>, your trusted
              destination for genuine and affordable medicines in{" "}
              <strong>Gorakhpur</strong>. Conveniently located near Dubey Hata in
              Shahpur Urwa Bazar, we take pride in delivering high-quality
              pharmaceutical products and personalized care.
            </p>
            <p className="text-blue-700 text-lg font-semibold">⏰ Store Timings: 7:00 AM – 9:00 PM (All Days)</p>
          </div>
        </motion.div>

        {/* Operated By */}
        <motion.div
          custom={2}
          variants={sectionVariants}
          className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8"
        >
          <img
            src={images[1]}
            alt="Store Team"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-blue-800">👨‍⚕️ Operated By</h3>
            <ul className="text-gray-700 space-y-3 list-disc pl-5 text-lg">
              <li><strong>Owner:</strong> Mr. Brijesh Kumar Dubey (<a href="tel:+917379496704" className="text-blue-600 hover:underline">+91 7379496704</a>)</li>
              <li><strong>Primary Pharmacist:</strong> Manish Dubey (<a href="tel:+919654803662" className="text-blue-600 hover:underline">+91 9654803662</a>)</li>
              <li><strong>Secondary Pharmacist:</strong> Tushar Dubey (<a href="tel:+919643798365" className="text-blue-600 hover:underline">+91 9643798365</a>)</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Team
            </Link>
          </div>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          custom={3}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center mb-16 gap-8"
        >
          <img
            src={images[2]}
            alt="Medical Supplies"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-blue-800">💊 What We Offer</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5 text-lg">
              <li>Allopathic, Ayurvedic, Veterinary & General Medicines</li>
              <li>Surgical Items & Daily Healthcare Needs</li>
              <li>100% Genuine & Quality-Assured Products</li>
              <li>Discounts from 5% to 50%</li>
              <li>Friendly Service & Expert Consultation</li>
            </ul>
            <Link
              to="/products"
              className="inline-block mt-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>

        {/* Home Delivery */}
        <motion.div
          custom={4}
          variants={sectionVariants}
          className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8"
        >
          <img
            src={images[3]}
            alt="Medicine Delivery"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-blue-800">🚚 Home Delivery & Personalized Care</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Get your medicines at your doorstep! Contact us via phone for home
              delivery (subject to availability and delivery location).
              <br />
              <strong>Note:</strong> Delivery service launches in{" "}
              <strong>April 2026</strong>.
            </p>
            <Link
              to="/products"
              className="inline-block mt-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Order Now
            </Link>
          </div>
        </motion.div>

        {/* Get In Touch */}
        <motion.div
          custom={5}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <img
            src={images[4]}
            alt="Contact Us"
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64"
          />
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl font-semibold text-blue-800">📞 Get In Touch</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              📍 Shahpur Urwa Bazar, Near Dubey Hata, Gorakhpur <br />
              📱 Call/WhatsApp:{" "}
              <a href="tel:+917379496704" className="text-blue-600 hover:underline font-semibold">
                Mr. Brijesh Dubey – +91 7379496704
              </a>
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
