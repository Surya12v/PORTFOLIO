import { Button } from "./ui/button";
import surya from "../assets/surya.jpeg"
import { motion } from "framer-motion";
import { PROFESSIONAL_SUMMARY } from "../lib/constants";
import { ArrowRight, Download } from "lucide-react";
import { useTheme } from "../lib/theme-context";
import { useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden ${
      theme === 'light' 
        ? 'bg-white' 
        : 'bg-black'
    }`} onMouseMove={handleMouseMove}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Background */}
        <motion.div
          className={`absolute inset-0 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-white via-cyan-100 to-white'
              : 'bg-gradient-to-br from-black via-gray-950 to-black'
          }`}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />

        {/* Large Animated Blob 1 */}
        <motion.div
          className={`absolute -top-40 -left-40 w-96 h-96 rounded-full filter blur-3xl ${
            theme === 'light'
              ? 'bg-cyan-300/60'
              : 'bg-cyan-500/30'
          }`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Large Animated Blob 2 */}
        <motion.div
          className={`absolute -bottom-32 -right-40 w-96 h-96 rounded-full filter blur-3xl ${
            theme === 'light'
              ? 'bg-teal-300/60'
              : 'bg-teal-500/30'
          }`}
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 100, -70, 0],
            scale: [1, 0.95, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Large Animated Blob 3 */}
        <motion.div
          className={`absolute top-1/2 left-1/3 w-80 h-80 rounded-full filter blur-3xl ${
            theme === 'light'
              ? 'bg-purple-300/50'
              : 'bg-purple-600/25'
          }`}
          animate={{
            x: [0, 60, -100, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Animated Waves */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <motion.path
            d="M0,40 Q180,60 360,40 T720,40 T1080,40 T1440,40 L1440,120 L0,120 Z"
            fill={theme === 'light' ? '#06b6d4' : '#06b6d4'}
            animate={{ d: ['M0,40 Q180,60 360,40 T720,40 T1080,40 T1440,40 L1440,120 L0,120 Z', 'M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60 L1440,120 L0,120 Z', 'M0,40 Q180,60 360,40 T720,40 T1080,40 T1440,40 L1440,120 L0,120 Z'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'light'
                ? 'bg-cyan-600/50'
                : 'bg-cyan-400/50'
            }`}
            animate={{
              y: [0, -300],
              opacity: [0, 1, 0],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 md:order-1 space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`font-semibold text-lg tracking-widest uppercase ${
                  theme === 'light' 
                    ? 'text-cyan-600' 
                    : 'text-cyan-400'
                }`}
              >
                Welcome to my portfolio
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
              >
                <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>I'm </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  theme === 'light' 
                    ? 'from-cyan-600 via-teal-500 to-sky-600' 
                    : 'from-cyan-400 via-teal-300 to-sky-400'
                }`}>
                  Surya V
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`text-2xl sm:text-3xl font-semibold ${
                  theme === 'light' 
                    ? 'text-slate-700' 
                    : 'text-slate-300'
                }`}
              >
                {PROFESSIONAL_SUMMARY.title}
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`text-lg leading-relaxed max-w-lg ${
                theme === 'light' 
                  ? 'text-gray-600' 
                  : 'text-gray-400'
              }`}
            >
              {PROFESSIONAL_SUMMARY.intro}
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className={`grid grid-cols-2 gap-8 py-6 border-y ${
                theme === 'light' 
                  ? 'border-gray-200' 
                  : 'border-gray-700'
              }`}
            >
              <div>
                <p className={`text-3xl md:text-4xl font-bold ${
                  theme === 'light' 
                    ? 'text-cyan-600' 
                    : 'text-cyan-400'
                }`}>10+</p>
                <p className={`text-sm ${
                  theme === 'light' 
                    ? 'text-slate-600' 
                    : 'text-slate-400'
                }`}>Projects Built</p>
              </div>
              <div>
                <p className={`text-3xl md:text-4xl font-bold ${
                  theme === 'light' 
                    ? 'text-cyan-600' 
                    : 'text-cyan-400'
                }`}>1+</p>
                <p className={`text-sm ${
                  theme === 'light' 
                    ? 'text-slate-600' 
                    : 'text-slate-400'
                }`}>Years Experience</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                onClick={scrollToProjects}
                className={`px-8 py-6 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-base ${
                  theme === 'light'
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-cyan-600/50'
                    : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 hover:shadow-cyan-500/50'
                }`}
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a href={PROFESSIONAL_SUMMARY.resume} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  className={`w-full px-8 py-6 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base border ${
                    theme === 'light'
                      ? 'bg-transparent text-cyan-700 border-cyan-600 hover:bg-cyan-50'
                      : 'bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Get Resume
                </Button>
              </a>
            </motion.div>

          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden sm:flex justify-center order-1 md:order-2"
            style={{ perspective: "1200px" }}
          >
            <motion.div 
              className="relative"
              animate={{
                x: (mousePosition.x - 0.5) * 50,
                y: (mousePosition.y - 0.5) * 50,
                rotateX: (mousePosition.y - 0.5) * 20,
                rotateY: (mousePosition.x - 0.5) * 20,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <motion.div
                className={`w-96 h-96 rounded-full p-[4px] bg-gradient-to-br from-cyan-400 via-teal-400 to-sky-500 shadow-[0_0_80px_#06b6d4]`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-full h-full rounded-full p-[2px] ${
                  theme === 'light'
                    ? 'bg-white'
                    : 'bg-black'
                }`}>
                  <img
                    src={surya}
                    alt="Surya V - Full Stack Developer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Glow shadow effect on hover */}
              <motion.div
                className={`absolute inset-0 w-full h-full rounded-full filter blur-2xl -z-10 ${
                  theme === 'light'
                    ? 'bg-cyan-300/40'
                    : 'bg-cyan-500/30'
                }`}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
