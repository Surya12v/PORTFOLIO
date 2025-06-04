import { Card, CardContent } from "../components/ui/card";

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
  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{edu.level}</h3>
                <p className="text-lg font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.degree}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
                <p className="text-sm text-cyan-300 font-semibold mt-4">{edu.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
