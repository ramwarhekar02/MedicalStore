import { motion } from "framer-motion";
import { HeartPulse, Pill, Stethoscope, Syringe } from "lucide-react";

const categories = [
  {
    name: "Heart & Cardio",
    desc: "Essential care for heart health and circulation.",
    icon: <HeartPulse className="text-indigo-600" size={28} />,
  },
  {
    name: "Supplements",
    desc: "Vitamins and minerals for everyday wellness.",
    icon: <Pill className="text-pink-500" size={28} />,
  },
  {
    name: "Diagnostics",
    desc: "Medical devices for health tracking.",
    icon: <Stethoscope className="text-purple-500" size={28} />,
  },
  {
    name: "Vaccination",
    desc: "Safe and reliable immunization products.",
    icon: <Syringe className="text-rose-500" size={28} />,
  },
];

export default function ShopByCategory() {
  return (
    <section className="relative max-w-7xl mx-auto font-[Poppins] px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase">
          Shop by <span className="text-indigo-600">Category</span>
        </h2>
        {/* Animated line */}
        <div className="relative flex justify-center mt-3">
          <div className="h-1 w-48 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-pulse shadow-lg shadow-indigo-300" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          Quality medicines and wellness products for all your health needs.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 hover:border-indigo-200 hover:scale-105 cursor-pointer"
            whileHover={{ rotate: [0, 1.5, -1.5, 0], transition: { duration: 0.4 } }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mb-6 mx-auto bg-gradient-to-br from-indigo-100 to-white rounded-2xl flex items-center justify-center shadow-md">
              {cat.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              {cat.name}
            </h3>
            <p className="text-gray-600 text-sm text-center">{cat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
