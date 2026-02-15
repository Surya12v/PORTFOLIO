import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { PROJECTS } from "../lib/constants";
import { motion } from "framer-motion";
import { useTheme } from "../lib/theme-context";
import { useState } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...PROJECTS, ...PROJECTS];
  const totalWidth = PROJECTS.length * 340; // 320px card + 20px gap

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${
      theme === 'light'
        ? 'bg-gray-50 text-black'
        : 'bg-gray-900 text-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 ${
          theme === 'light'
            ? 'bg-cyan-300'
            : 'bg-cyan-500'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 ${
          theme === 'light'
            ? 'bg-teal-300'
            : 'bg-teal-500'
        }`}></div>
      </div>

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${
            theme === 'light'
              ? 'text-slate-900'
              : 'text-white'
          }`}>Projects</h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'light'
              ? 'bg-gradient-to-r from-cyan-600 to-teal-600'
              : 'bg-gradient-to-r from-cyan-400 to-teal-400'
          }`}></div>
          <p className={`mt-4 max-w-2xl mx-auto text-lg ${
            theme === 'light'
              ? 'text-gray-600'
              : 'text-gray-400'
          }`}>
            Showcase of full-stack applications demonstrating technical expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Infinite Scrolling Ribbon */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-5 px-4"
            animate={{ x: isHovered ? 0 : -totalWidth }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`overflow-hidden group transition-all duration-300 h-full ${
                  theme === 'light'
                    ? 'bg-gray-50 border-gray-300 hover:border-cyan-500/70 hover:shadow-2xl hover:shadow-cyan-600/15'
                    : 'bg-gray-800 border-gray-700 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                }`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity ${
                      theme === 'light'
                        ? 'bg-gradient-to-t from-gray-50 via-transparent to-transparent'
                        : 'bg-gradient-to-t from-gray-900 via-transparent to-transparent'
                    }`}></div>
                  </div>
                  <CardContent className={`p-4 flex-1 flex flex-col ${
                    theme === 'light'
                      ? 'border-t border-gray-200'
                      : 'border-t border-gray-700'
                  }`}>
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className={`text-lg font-bold flex-1 line-clamp-2 ${
                        theme === 'light'
                          ? 'text-cyan-700'
                          : 'text-cyan-400'
                      }`}>{project.title}</h3>
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 ml-2" />
                    </div>
                    <p className={`mb-3 text-xs leading-relaxed flex-1 line-clamp-2 ${
                      theme === 'light'
                        ? 'text-gray-600'
                        : 'text-gray-400'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Highlights */}
                    {project.highlights && (
                      <div className="mb-3 flex flex-wrap gap-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <Badge 
                            key={idx}
                            className={`text-xs border-0 ${
                              theme === 'light'
                                ? 'bg-cyan-100 text-cyan-700'
                                : 'bg-cyan-500/20 text-cyan-300'
                            }`}
                          >
                            ✓ {highlight}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className={`text-xs transition-all duration-300 ${
                            theme === 'light'
                              ? 'bg-slate-200 text-slate-700 hover:bg-cyan-200 hover:text-cyan-800'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-cyan-500/30 hover:text-cyan-300'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className={`flex gap-2 pt-2 ${
                      theme === 'light'
                        ? 'border-t border-gray-200'
                        : 'border-t border-gray-700'
                    }`}>
                      {project.livedemo && (
                        <a href={project.livedemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className={`w-full h-8 text-xs gap-1 transition-all ${
                            theme === 'light'
                              ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-lg hover:shadow-cyan-600/50'
                              : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 hover:shadow-lg hover:shadow-cyan-500/50'
                          }`}>
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </Button>
                        </a>
                      )}
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className={`w-full h-8 text-xs gap-1 transition-all ${
                          theme === 'light'
                            ? 'bg-slate-300 hover:bg-slate-400 text-slate-900'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}>
                          <Github className="w-3 h-3" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <p className={`mb-6 ${
            theme === 'light'
              ? 'text-gray-600'
              : 'text-gray-300'
          }`}>
            Want to see more? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a href="https://github.com/Surya12v" target="_blank" rel="noopener noreferrer">
            <Button className={`px-8 py-6 font-semibold transition-all gap-2 ${
              theme === 'light'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-2xl hover:shadow-cyan-600/50'
                : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 hover:shadow-2xl hover:shadow-cyan-500/50'
            }`}>
              <Github className="w-5 h-5" />
              Visit My GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
