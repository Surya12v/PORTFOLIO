import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { PROFESSIONAL_SUMMARY } from "../lib/constants";
import { motion } from "framer-motion";
import { useTheme } from "../lib/theme-context";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: PROFESSIONAL_SUMMARY.email,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFESSIONAL_SUMMARY.phone,
    },
    {
      icon: MapPin,
      label: "Location",
      value: PROFESSIONAL_SUMMARY.location,
    },
  ];

  const socialLinks = [
    { icon: SiGithub, href: PROFESSIONAL_SUMMARY.github, label: "GitHub" },
    { icon: SiLinkedin, href: PROFESSIONAL_SUMMARY.linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${
            theme === 'light'
              ? 'text-slate-900'
              : 'text-white'
          }`}>Get In Touch</h2>
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              theme === 'light'
                ? 'text-slate-900'
                : 'text-white'
            }`}>Let's Work Together</h3>
            <p className={`text-lg mb-8 leading-relaxed ${
              theme === 'light'
                ? 'text-gray-600'
                : 'text-gray-300'
            }`}>
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to discuss tech, feel free to reach out. I'll make sure to get back to you as soon as possible!
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a 
                      href={item.label === "Email" ? `mailto:${item.value}` : item.label === "Phone" ? `tel:${item.value}` : "#"}
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 border ${
                        theme === 'light'
                          ? 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-cyan-500/50'
                          : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:border-cyan-400/50'
                      }`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className={`font-medium text-sm ${
                          theme === 'light'
                            ? 'text-slate-700'
                            : 'text-slate-200'
                        }`}>{item.label}</p>
                        <p className={`text-sm ${
                          theme === 'light'
                            ? 'text-cyan-700'
                            : 'text-cyan-400'
                        }`}>{item.value}</p>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Button
                      className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                      <IconComponent className="h-5 w-5" />
                    </Button>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 60 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, margin: "-50px" }}
            style={{ perspective: "1200px" }}
          >
            <Card className={`${
              theme === 'light'
                ? 'bg-gray-50 border-gray-300'
                : 'bg-gray-800 border-gray-700'
            }`}>
              <CardContent className="p-8">
                <h3 className={`text-xl font-semibold mb-6 ${
                  theme === 'light'
                    ? 'text-slate-900'
                    : 'text-white'
                }`}>Send me a message</h3>
                <form action="https://formspree.io/f/xzzgzypp" method="POST" className="space-y-6">
                <div>
                  <Label htmlFor="name" className={`text-sm font-medium mb-2 block ${
                    theme === 'light'
                      ? 'text-gray-700'
                      : 'text-gray-300'
                  }`}>
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`transition-colors ${
                      theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500'
                        : 'bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className={`text-sm font-medium mb-2 block ${
                    theme === 'light'
                      ? 'text-slate-700'
                      : 'text-slate-300'
                  }`}>
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`transition-colors ${
                      theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500'
                        : 'bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className={`text-sm font-medium mb-2 block ${
                    theme === 'light'
                      ? 'text-slate-700'
                      : 'text-slate-300'
                  }`}>
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    className={`transition-colors ${
                      theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500'
                        : 'bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className={`text-sm font-medium mb-2 block ${
                    theme === 'light'
                      ? 'text-slate-700'
                      : 'text-slate-300'
                  }`}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    className={`resize-none transition-colors ${
                      theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500'
                        : 'bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-cyan-600/50'
                      : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 hover:shadow-cyan-500/50'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
