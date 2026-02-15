import { motion } from "framer-motion";
import { SKILLS } from "../lib/constants";
import { useTheme } from "../lib/theme-context";
import { SiReact, SiSvelte, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiSupabase, SiPostman, SiGithub, SiServicenow, SiJira, SiGit, SiVmware, SiC } from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  "React.js": <SiReact />,
  "Svelte": <SiSvelte />,
  "SvelteKit": <SiSvelte />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "HTML5": <SiHtml5 />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "PostgreSQL": <SiPostgresql />,
  "SQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Supabase": <SiSupabase />,
  "Postman": <SiPostman />,
  "Git": <SiGit />,
  "GitHub": <SiGithub />,
  "ServiceNow": <SiServicenow />,
  "Jira Service Management": <SiJira />,
  "JIRA": <SiJira />,
  "VMware": <SiVmware />,
  "GoHighLevel": <SiGit />,
  "C": <SiC />,
};

export default function Skills() {
  const { theme } = useTheme();

  const SkillIcon = ({ name }: { name: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div className={`text-5xl transition-colors ${
        theme === 'light'
          ? 'text-slate-700 hover:text-slate-900'
          : 'text-slate-400 hover:text-slate-200'
      }`}>
        {skillIcons[name] || <span>•</span>}
      </div>
      <span className={`text-xs font-medium text-center ${
        theme === 'light'
          ? 'text-slate-600'
          : 'text-slate-400'
      }`}>
        {name}
      </span>
    </motion.div>
  );

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${
      theme === 'light'
        ? 'bg-white text-black'
        : 'bg-black text-white'
    }`}>
      {/* Subtle Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-3 ${
          theme === 'light'
            ? 'bg-gray-400'
            : 'bg-gray-600'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-3 ${
          theme === 'light'
            ? 'bg-gray-300'
            : 'bg-gray-700'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            theme === 'light'
              ? 'text-slate-900'
              : 'text-white'
          }`}>
            Technical Skills
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${
            theme === 'light'
              ? 'bg-gray-400'
              : 'bg-gray-600'
          }`}></div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-slate-200'
          }`}>
            Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {SKILLS.languages.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} />
            ))}
          </div>
        </motion.div>

        {/* Frameworks / Libraries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-slate-200'
          }`}>
            Libraries & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {SKILLS.frameworks.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} />
            ))}
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-slate-200'
          }`}>
            Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {SKILLS.database.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} />
            ))}
          </div>
        </motion.div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-slate-200'
          }`}>
            Platforms & Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.platforms.map((platform) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-lg border ${
                  theme === 'light'
                    ? 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    : 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-4xl ${
                    theme === 'light'
                      ? 'text-slate-700'
                      : 'text-slate-400'
                  }`}>
                    {skillIcons[platform.name] || <span>•</span>}
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${
                      theme === 'light'
                        ? 'text-slate-800'
                        : 'text-slate-200'
                    }`}>
                      {platform.name}
                    </h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {platform.details.map((detail, idx) => (
                    <li key={idx} className={`text-sm flex items-center gap-2 ${
                      theme === 'light'
                        ? 'text-slate-600'
                        : 'text-slate-400'
                    }`}>
                      <span className={`text-lg ${
                        theme === 'light'
                          ? 'text-slate-700'
                          : 'text-slate-400'
                      }`}>▪</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Integrations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-slate-200'
          }`}>
            Tools & Integrations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {SKILLS.tools.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} />
            ))}
          </div>
        </motion.div>

        {/* Concepts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className={`text-2xl font-semibold mb-8 ${
            theme === 'light'
              ? 'text-slate-800'
              : 'text-slate-200'
          }`}>
            Core Concepts & Methodologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS.concepts.map((concept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  theme === 'light'
                    ? 'bg-gray-100 text-gray-700 border border-gray-300'
                    : 'bg-gray-800/50 text-gray-300 border border-gray-700'
                }`}
              >
                <span className={`text-xl font-bold ${
                  theme === 'light'
                    ? 'text-slate-700'
                    : 'text-slate-400'
                }`}>✓</span>
                <span className="font-medium">{concept}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}