import { Button } from "./ui/button";
import surya from "../assets/surya.jpeg"
import { motion } from "framer-motion";

export default function Hero() {
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in order-2 md:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white font-[Bungee]">Hi I'am</h1>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 drop-shadow-[0_1px_5px_rgba(0,255,255,0.5)] font-[Bungee]"
            >
              Surya V<br />
              Full Stack Developer
            </h1>


            <p className="text-xl sm:text-2xl text-slate-400 mb-8">
     
        </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-3 bg-transparent text-cyan-400 border border-cyan-400 font-semibold shadow-md ring-1 ring-cyan-400/50 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-cyan-400/40 transition-all duration-300"
              >
                View My Work
              </Button>

              <a
                href="/suryavRESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  className="w-full sm:w-auto px-8 py-3 bg-transparent text-cyan-400 border border-cyan-400 font-semibold shadow-md ring-1 ring-cyan-400/50 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-cyan-400/40 transition-all duration-300"
                >
                  View Resume
                </Button>
              </a>
            </div>

          </div>

          {/* Profile Photo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="hidden sm:flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Glowing Aqua Border */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-96 h-96 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_40px_#22d3ee]"
              >
                {/* Only the image - no inner background */}
                <img
                  src={surya}
                  alt="helo"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>

              {/* Floating Aqua Dot Animations */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full shadow-[0_0_20px_#22d3ee]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
