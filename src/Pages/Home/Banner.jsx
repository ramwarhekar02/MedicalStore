import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PARTICLE_COUNT = 150;
const PARTICLE_SIZE = 5;
const REPULSION_RADIUS = 100;
const REPULSION_STRENGTH = 1500;
const INTER_PARTICLE_REPULSION_RADIUS = 20;
const INTER_PARTICLE_REPULSION_STRENGTH = 80;
const MAX_SPEED = 1.2;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

export default function HealthcareHeroBanner() {
  const containerRef = useRef(null);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const initialParticles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      initialParticles.push({
        id: i,
        x: randomRange(0, width),
        y: randomRange(0, height),
        vx: randomRange(-0.5, 0.5),
        vy: randomRange(-0.5, 0.5),
      });
    }
    setParticles(initialParticles);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    let animationFrameId;

    const animate = () => {
      setParticles(oldParticles =>
        oldParticles.map((p, idx) => {
          let ax = 0;
          let ay = 0;

          const dx = p.x - cursor.x;
          const dy = p.y - cursor.y;
          const distToCursor = Math.max(distance(p.x, p.y, cursor.x, cursor.y), 0.1);

          if (distToCursor < REPULSION_RADIUS) {
            const force = REPULSION_STRENGTH / (distToCursor * distToCursor);
            const angle = Math.atan2(dy, dx);
            ax += Math.cos(angle) * force;
            ay += Math.sin(angle) * force;
          }

          oldParticles.forEach((other, otherIdx) => {
            if (idx !== otherIdx) {
              const d = distance(p.x, p.y, other.x, other.y);
              if (d < INTER_PARTICLE_REPULSION_RADIUS && d > 0.1) {
                const force = INTER_PARTICLE_REPULSION_STRENGTH / (d * d);
                const angle = Math.atan2(p.y - other.y, p.x - other.x);
                ax += Math.cos(angle) * force;
                ay += Math.sin(angle) * force;
              }
            }
          });

          ax += randomRange(-0.03, 0.03);
          ay += randomRange(-0.03, 0.03);

          let vx = p.vx + ax;
          let vy = p.vy + ay;
          const speed = Math.hypot(vx, vy);
          if (speed > MAX_SPEED) {
            vx = (vx / speed) * MAX_SPEED;
            vy = (vy / speed) * MAX_SPEED;
          }

          vx *= 0.98;
          vy *= 0.98;

          let x = p.x + vx;
          let y = p.y + vy;
          if (x < 0 || x > width) vx = -vx;
          if (y < 0 || y > height) vy = -vy;

          x = Math.max(0, Math.min(x, width));
          y = Math.max(0, Math.min(y, height));

          return { ...p, x, y, vx, vy };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursor, isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      onMouseMove={e => {
        if (isMobile) return;
        const rect = containerRef.current.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => {
        if (isMobile) return;
        setCursor({ x: -1000, y: -1000 });
      }}
    >
      {/* Discount Banner */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="absolute top-6 left-1/2 w-full md:w-auto transform mt-17 -translate-x-1/2 z-50"
      >
        <div className="px-4 py-1 mx-5 text-sm sm:px-6 sm:py-2 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-400 sm:text-lg md:text-xl font-bold rounded-full shadow-2xl animate-pulse border-4 border-white/40">
          🎉 Flat <span className="text-lg sm:text-2xl md:text-3xl font-extrabold">5% - 50% OFF</span> on Retail and Wholesale on Selected Medicines!
        </div>
      </motion.div>

      {/* Store Timing */}
      <div className="absolute bottom-4 left-4 text-xs sm:text-sm md:text-base bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg border border-white/10 z-40">
        🕒 <span className="font-semibold text-white">Open Daily: 7:00 AM – 9:00 PM</span>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-blue-600 rounded-full opacity-30 blur-3xl hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-[-4rem] right-[-4rem] w-80 h-80 bg-indigo-500 rounded-full opacity-30 blur-2xl hidden lg:block animate-ping"></div>

      {/* Particles */}
      {!isMobile &&
        particles.map(p => (
          <div
            key={p.id}
            style={{
              transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
              width: PARTICLE_SIZE,
              height: PARTICLE_SIZE,
            }}
            className="absolute rounded-full bg-indigo-300 opacity-70 pointer-events-none"
          />
        ))}

      {/* Content */}
      <div className="relative z-10 font-[Poppins] max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-28 flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-12">
        <div className="flex-1 text-center py-6 sm:py-10 lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4 sm:mb-6">
            Your Trusted <span className="text-indigo-400">Medical Store</span> in Gorakhpur
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-6 sm:mb-8">
            Genuine Ayurvedic, Allopathic & Veterinary medicines with expert advice and care you can rely on.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/products"
              className="flex items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 text-center justify-center"
            >
              Shop Products
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-xl shadow-lg transition-all duration-300 text-center justify-center"
            >
              Visit Our Store
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
          <div className="relative w-full aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <ellipse cx="200" cy="350" rx="150" ry="30" fill="#818CF8" fillOpacity="0.2" />
              <rect x="120" y="120" width="160" height="180" rx="80" fill="#FBBF24" fillOpacity="0.8" />
              <rect x="180" y="80" width="40" height="80" rx="20" fill="#34D399" fillOpacity="0.8" />
              <rect x="60" y="220" width="40" height="100" rx="10" fill="#6366F1" fillOpacity="0.8" />
              <rect x="300" y="200" width="50" height="120" rx="12" fill="#F59E0B" fillOpacity="0.8" />
            </svg>
            {!isMobile && (
              <>
                <div className="absolute top-10 left-10 w-12 h-12 bg-indigo-300/30 rounded-xl animate-float shadow-lg"></div>
                <div className="absolute bottom-14 right-14 w-16 h-16 bg-yellow-300/30 rounded-full animate-float2 shadow-lg"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
