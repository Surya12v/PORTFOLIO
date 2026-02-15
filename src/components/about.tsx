import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { PROFESSIONAL_SUMMARY } from "../lib/constants";
import surya from "../assets/surya.jpeg"
import { Code2, Zap, Users, Target } from "lucide-react";
import { useTheme } from "../lib/theme-context";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description: "Proficient in building complete web applications from frontend to backend"
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Creating fast, responsive, and scalable applications"
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working effectively with teams and stakeholders"
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions"
  }
];

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${
      theme === 'light'
        ? 'bg-gradient-to-br from-gray-50 to-white text-black'
        : 'bg-gradient-to-br from-gray-900 to-black text-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 ${
          theme === 'light' 
            ? 'bg-cyan-300' 
            : 'bg-cyan-500'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 ${
          theme === 'light'
            ? 'bg-teal-300'
            : 'bg-teal-500'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${
            theme === 'light'
              ? 'text-slate-900'
              : 'text-white'
          }`}>About Me</h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600'
              : 'bg-gradient-to-r from-cyan-400 to-teal-400'
          }`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -80, rotateY: -60 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative group"
            style={{ perspective: "1200px" }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 opacity-20 blur-lg rounded-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src={surya}
              alt="Surya V - Professional developer portrait"
              className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Text Section */}
          <div className="animate-slide-up">
            <h3 className={`text-3xl font-semibold mb-6 ${
              theme === 'light'
                ? 'text-cyan-700'
                : 'text-cyan-400'
            }`}>Full Stack Developer</h3>
            <p className={`text-lg leading-relaxed mb-6 ${
              theme === 'light'
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}>
              I'm a results-driven full-stack developer with expertise in modern web technologies and a passion for building scalable, user-focused applications.
            </p>
            {/* <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Currently, I’m working as a Full Stack Developer at Frigate.ai, where I contribute to building intelligent, efficient, and robust digital solutions.
            </p> */}
            <p className={`text-lg leading-relaxed ${
              theme === 'light'
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}>
              My work bridges clean code and scalable architecture, delivering smooth, responsive interfaces powered by reliable backend systems.
              I enjoy turning complex challenges into elegant digital experiences through collaboration, innovation, and practical problem-solving.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index} 
                className={`transition-all duration-300 hover:shadow-lg ${
                  theme === 'light'
                    ? 'bg-slate-100 border-slate-300 hover:border-cyan-600/50 hover:shadow-cyan-600/10'
                    : 'bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 hover:shadow-cyan-500/10'
                }`}
              >
                <CardContent className="p-6">
                  <IconComponent className={`w-10 h-10 mb-4 ${
                    theme === 'light'
                      ? 'text-cyan-700'
                      : 'text-cyan-400'
                  }`} />
                  <h4 className={`text-lg font-semibold mb-2 ${
                    theme === 'light'
                      ? 'text-slate-900'
                      : 'text-white'
                  }`}>{item.title}</h4>
                  <p className={`text-sm ${
                    theme === 'light'
                      ? 'text-gray-700'
                      : 'text-gray-400'
                  }`}>{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>

  );
}
