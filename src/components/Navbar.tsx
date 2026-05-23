import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logo from "@/assets/logo.webp";
import { DoerButton } from "./DoerButton"; // Importando seu componente de botão

const navLinks = [
  { href: "about", label: "Sobre nós" },
  { href: "plans", label: "Planos" },
  { href: "services", label: "Como funciona" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/", { state: { targetId: id } });
    }
  };

  useEffect(() => {
    if (isHome && location.state?.targetId) {
      const targetId = location.state.targetId;
      setTimeout(() => {
        scrollToSection(targetId);
        window.history.replaceState({}, document.title);
      }, 300);
    }
  }, [isHome, location]);

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
          <a
            onClick={(e) => {
              e.preventDefault();
              isHome
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : navigate("/");
            }}
            href="/"
            className="flex items-center gap-3 group z-10 cursor-pointer"
          >
            <img
              src={logo}
              alt="Fazedores Angola"
              className="rounded-full h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
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

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            <DoerButton
              asChild
              variant="ghost"
              className={
                shouldShowTransparent ? "text-white/80" : "text-foreground/70"
              }
            >
              <a
                href="https://app.fazedoresangola.ao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar
              </a>
            </DoerButton>
            <DoerButton asChild variant="primary">
              <a
                href="https://app.fazedoresangola.ao/criar-conta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Criar conta
              </a>
            </DoerButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 z-[101] relative ${shouldShowTransparent ? "text-white" : "text-foreground"}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-[100] bg-background lg:hidden pt-24 pb-8 px-6 flex flex-col items-center"
            >
              <div className="flex flex-col gap-8 w-full max-w-sm items-center">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="w-full flex flex-col gap-4 pt-8 border-t border-border">
                  <DoerButton
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <a href="https://app.fazedoresangola.ao/">Entrar</a>
                  </DoerButton>
                  <DoerButton
                    asChild
                    variant="primary"
                    className="w-full"
                  >
                    <a href="https://app.fazedoresangola.ao/criar-conta">
                      Criar conta
                    </a>
                  </DoerButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
