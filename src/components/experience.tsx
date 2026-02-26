import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { EXPERIENCE } from "../lib/constants";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { useTheme } from "../lib/theme-context";

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className={`py-20 relative overflow-hidden ${
      theme === 'light'
        ? 'bg-gray-50 text-black'
        : 'bg-gray-900 text-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 ${
          theme === 'light'
            ? 'bg-teal-300'
            : 'bg-teal-500'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 ${
          theme === 'light'
            ? 'bg-cyan-300'
            : 'bg-cyan-500'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight flex items-center justify-center gap-3`}>
            <Briefcase className={`w-10 h-10 ${
              theme === 'light'
                ? 'text-cyan-700'
                : 'text-cyan-400'
            }`} />
            Experience
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600'
              : 'bg-gradient-to-r from-cyan-400 to-teal-400'
          }`}></div>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              viewport={{ once: false, margin: "-50px" }}
              style={{ perspective: "1200px" }}
            >
              <Card className={`transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-gray-50 border-gray-300 hover:border-cyan-500/70 hover:shadow-lg hover:shadow-cyan-600/15'
                  : 'bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10'
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className={`text-2xl ${
                        theme === 'light'
                          ? 'text-cyan-700'
                          : 'text-cyan-400'
                      }`}>{exp.title}</CardTitle>
                      <p className={`font-medium mt-2 ${
                        theme === 'light'
                          ? 'text-slate-700'
                          : 'text-slate-300'
                      }`}>{exp.company}</p>
                    </div>
                    <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                      theme === 'light'
                        ? 'text-gray-700 bg-gray-300'
                        : 'text-gray-400 bg-gray-900/50'
                    }`}>
                      {exp.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((desc, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 mt-1 flex-shrink-0 ${
                          theme === 'light'
                            ? 'text-cyan-700'
                            : 'text-cyan-400'
                        }`} />
                        <span className={`text-sm leading-relaxed ${
                          theme === 'light'
                            ? 'text-gray-700'
                            : 'text-gray-300'
                        }`}>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className={`inline-block rounded-full px-6 py-3 border ${
            theme === 'light'
              ? 'bg-gray-200 border-gray-300'
              : 'bg-gray-800/50 border-gray-700'
          }`}>
            <p className={`text-sm ${
              theme === 'light'
                ? 'text-gray-700'
                : 'text-gray-300'
            }`}>
              <span className={`font-semibold ${
                theme === 'light'
                  ? 'text-cyan-700'
                  : 'text-cyan-400'
              }`}>1.5+ years</span> of web development experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
