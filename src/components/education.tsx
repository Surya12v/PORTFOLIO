import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "../lib/theme-context";
import { BookOpen } from "lucide-react";

const educationData = [
  {
    level: "Bachelor's Degree",
    institution: "Erode Sengunthar Engineering College",
    degree: "B.Tech in Information Technology",
    duration: "2021 - 2025",
    result: "CGPA: 8.33",
  },
  {
    level: "Higher Secondary",
    institution: "Sakthi Vigneswara Higher Secondary School",
    degree: "HSC",
    duration: "2020 - 2021",
    result: "90%",
  },
  {
    level: "Secondary School",
    institution: "Sakthi Vigneswara Higher Secondary School",
    degree: "SSLC",
    duration: "2017 - 2018",
    result: "79.8%",
  },
];

export default function Education() {
  const { theme } = useTheme();

  return (
    <section id="education" className={`py-20 relative overflow-hidden ${
      theme === 'light'
        ? 'bg-white text-black'
        : 'bg-black text-white'
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight flex items-center justify-center gap-3`}>
            <BookOpen className={`w-10 h-10 ${
              theme === 'light'
                ? 'text-cyan-700'
                : 'text-cyan-400'
            }`} />
            Education
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600'
              : 'bg-gradient-to-r from-cyan-400 to-teal-400'
          }`}></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <Card
                className={`transition-all duration-300 h-full ${
                  theme === 'light'
                    ? 'bg-gray-50 border-gray-300 hover:border-cyan-500/70 hover:shadow-lg hover:shadow-cyan-600/15'
                    : 'bg-gray-800 border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10'
                }`}
              >
                <CardContent className="p-6">
                  <h3 className={`text-2xl font-semibold mb-4 ${
                    theme === 'light'
                      ? 'text-cyan-700'
                      : 'text-cyan-400'
                  }`}>{edu.level}</h3>
                  <p className={`text-lg font-medium mb-1 ${
                    theme === 'light'
                      ? 'text-black'
                      : 'text-white'
                  }`}>{edu.institution}</p>
                  <p className={`text-sm mt-1 ${
                    theme === 'light'
                      ? 'text-gray-600'
                      : 'text-gray-400'
                  }`}>{edu.degree}</p>
                  <p className={`text-sm mt-1 ${
                    theme === 'light'
                      ? 'text-gray-600'
                      : 'text-gray-400'
                  }`}>{edu.duration}</p>
                  <p className={`text-sm font-semibold mt-4 ${
                    theme === 'light'
                      ? 'text-cyan-700 bg-cyan-100/50 px-3 py-1 rounded inline-block'
                      : 'text-cyan-300'
                  }`}>{edu.result}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
