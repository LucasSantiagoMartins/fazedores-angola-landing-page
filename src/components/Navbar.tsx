import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logo from "@/assets/log.png";

const navLinks = [
  { href: "#about", label: "Sobre nós" },
  { href: "#wallet", label: "Carteira" },
  { href: "#plans", label: "Planos" },
  { href: "#services", label: "Como funciona" },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/fazedores_angola",
    label: "Instagram",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHome) {
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = "/" + href;
    }
  };

  const shouldShowTransparent = isHome && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowTransparent
          ? "bg-transparent py-5 border-b border-transparent"
          : "bg-background/90 backdrop-blur-xl border-b border-border py-3"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between relative">
          <a href="/" className="flex items-center gap-3 group z-10">
            <img
              src={logo}
              alt="Fazedores Angola"
              className="rounded-full h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 transition-all text-sm font-medium relative group ${
                  shouldShowTransparent ? "text-white/90" : "text-foreground/70"
                } hover:text-primary`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 z-10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  shouldShowTransparent
                    ? "border-white/20 text-white hover:bg-white hover:text-primary"
                    : "border-primary/20 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 z-10 ${
              shouldShowTransparent ? "text-white" : "text-foreground"
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-background p-6 lg:hidden flex flex-col justify-center items-center gap-8 shadow-xl"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-center text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-6 pt-8 border-t border-border w-full justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-primary p-3 bg-primary/10 rounded-full"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
