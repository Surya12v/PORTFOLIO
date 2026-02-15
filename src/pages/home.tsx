import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Education from "../components/education";
import { useTheme } from "../lib/theme-context";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'min-h-screen bg-white text-black' : 'min-h-screen bg-black text-white'}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
