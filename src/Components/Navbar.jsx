import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && visible) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current && !visible) {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 font-[Poppins] w-full bg-zinc-900/70 backdrop-blur-md shadow-sm"
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-extrabold uppercase bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wider hover:scale-105 transition-transform whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Dubey Medical Store
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-medium text-base transition group ${
                    isActive ? "text-indigo-400" : "text-zinc-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-indigo-500 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 relative group"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="block w-6 h-0.5 bg-indigo-400 rounded transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block w-6 h-0.5 bg-indigo-400 rounded transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="block w-6 h-0.5 bg-indigo-400 rounded transition-all duration-300"
            />
          </button>
        </div>

        {/* Address Desktop */}
        <div className="hidden md:flex items-center text-xs text-white mt-2 gap-1 font-medium">
          <MapPin className="w-4 h-4 text-red-600" />
          Shahpur Urwa Bazar, Gorakhpur, UP – 273407
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-zinc-900/90 backdrop-blur-sm px-6 pb-6 pt-3 flex flex-col gap-4 border-t border-zinc-700 rounded-b-2xl max-w-screen-sm mx-auto"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium rounded px-4 py-3 transition ${
                    isActive
                      ? "bg-indigo-700 text-white"
                      : "text-zinc-200 hover:text-indigo-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Address Mobile */}
            <div className="flex flex-wrap items-center text-xs text-white mt-2 gap-1">
              <MapPin className="w-4 h-4 text-white" />
              Shahpur Urwa Bazar, Gorakhpur, UP – 273407
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
