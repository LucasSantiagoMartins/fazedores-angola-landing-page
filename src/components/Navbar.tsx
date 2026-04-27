import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logo from "@/assets/log.png";

const navLinks = [
  { href: "#about", label: "Sobre nós" },
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
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  shouldShowTransparent
                    ? "border-white/20 text-white hover:bg-white hover:text-primary"
                    : "border-primary/20 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                <social.icon size={16} />
              </a>
            ))}
            <a
              href="https://app.fazedoresangola.ao/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                shouldShowTransparent
                  ? "text-white border-white/30 hover:bg-white/10"
                  : "text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              Entrar
            </a>
            <a
              href="https://app.fazedoresangola.ao/criar-conta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.04] transition-transform duration-300"
            >
              Criar conta
            </a>
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
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-0 z-[100] w-full h-[100dvh] bg-background lg:hidden flex flex-col shadow-2xl"
            >
              {/* Top bar com logo + botão fechar sempre visível */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <img
                  src={logo}
                  alt="Fazedores Angola"
                  className="rounded-full h-9 w-auto"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Fechar menu"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 text-foreground flex items-center justify-center transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Conteúdo centrado */}
              <div className="flex-1 flex flex-col justify-center items-center gap-7 px-6 overflow-y-auto py-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-center text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex flex-col gap-3 w-full max-w-xs pt-4">
                  <a
                    href="https://app.fazedoresangola.ao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    Entrar
                  </a>
                  <a
                    href="https://app.fazedoresangola.ao/criar-conta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow"
                  >
                    Criar conta
                  </a>
                </div>
                <div className="flex gap-4 pt-6 border-t border-border w-full justify-center mt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-primary p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
