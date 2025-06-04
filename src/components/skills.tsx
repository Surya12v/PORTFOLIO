import { Card, CardContent } from "./ui/card";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const frontendSkills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
];

const backendSkills = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-white" }
];

const Tools = [
  { name: "VS Code", icon: VscCode, color: "text-blue-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
];


export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Frontend & Database Skills */}
          <Card className="bg-gray-800 border-cyan-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">
                Frontend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <skill.icon className={`text-4xl ${skill.color} mb-2 transition-transform group-hover:scale-110`} />
                    <span className="text-gray-300 text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend & Tools */}
          <Card className="bg-gray-800 border-cyan-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">
                Backend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <skill.icon className={`text-4xl ${skill.color} mb-2 transition-transform group-hover:scale-110`} />
                    <span className="text-gray-300 text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-5/6 md:w-1/3 mt-12 mx-auto">
        <Card className="bg-gray-800  border-cyan-500 ">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">
              Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Tools.map((skill, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <skill.icon className={`text-4xl ${skill.color} mb-2 transition-transform group-hover:scale-110`} />
                  <span className="text-gray-300 text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

    </section>
  );
}