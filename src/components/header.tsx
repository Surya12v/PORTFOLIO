import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "../components/ui/button";
import { useScroll } from "../hooks/use-scroll";
import { useTheme } from "../lib/theme-context";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          theme === 'light'
            ? `${scrollY > 50 ? "bg-white/95 backdrop-blur-sm" : "bg-white/95"} border-gray-200`
            : `${scrollY > 50 ? "bg-black/95 backdrop-blur-sm" : "bg-black/95"} border-gray-800`
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 drop-shadow-md"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
             
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 items-center">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`hover:text-cyan-400 transition-colors duration-300 font-medium ${
                      theme === 'light'
                        ? 'text-black hover:text-cyan-600'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                {/* Theme toggle button */}
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="icon"
                  className={`ml-4 ${
                    theme === 'light'
                      ? 'text-black hover:bg-gray-200'
                      : 'text-gray-300 hover:bg-gray-900'
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile menu and theme toggle */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className={`${
                  theme === 'light'
                    ? 'text-slate-700 hover:bg-slate-200'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${
                  theme === 'light'
                    ? 'text-slate-700 hover:bg-slate-200'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className={`px-6 py-4 space-y-4 border-t ${
            theme === 'light'
              ? 'bg-slate-100 border-slate-300'
              : 'bg-slate-800 border-slate-700'
          }`}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left transition-colors duration-300 font-medium py-2 ${
                  theme === 'light'
                    ? 'text-black hover:text-cyan-600'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
