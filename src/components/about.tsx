import surya from "../assets/surya.jpeg"
export default function About() {

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Image Section */}
          <div className="relative animate-slide-up group">
            <div className="absolute -inset-2 bg-cyan-500 opacity-20 blur-lg rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
            <img
              src={surya}
              alt="Professional developer portrait"
              className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-semibold mb-6 text-cyan-400">Full Stack Developer</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a results-driven full-stack developer with expertise in modern web technologies and a passion for building scalable, user-focused applications.
            </p>
            {/* <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Currently, I’m working as a Full Stack Developer at Frigate.ai, where I contribute to building intelligent, efficient, and robust digital solutions.
            </p> */}
            <p className="text-slate-300 text-lg leading-relaxed">
              My work bridges clean code and scalable architecture, delivering smooth, responsive interfaces powered by reliable backend systems.
              I enjoy turning complex challenges into elegant digital experiences through collaboration, innovation, and practical problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
