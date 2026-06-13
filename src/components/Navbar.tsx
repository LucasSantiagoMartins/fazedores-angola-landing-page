import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import DoerButton from "./DoerButton";
import { MobileMenu } from "./MobileMenu";

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    isHome ? scrollToSection(id) : navigate("/", { state: { targetId: id } });
  };

  const shouldShowTransparent = isHome && !isScrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          shouldShowTransparent
            ? "bg-transparent py-5"
            : "bg-background/90 backdrop-blur-xl border-b border-border py-3"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between relative">
          <a
            href="/"
            className="cursor-pointer z-10"
            onClick={(e) => {
              e.preventDefault();
              isHome
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : navigate("/");
            }}
          >
            <img src={logo} alt="Logo" className="rounded-full h-10 w-auto" />
          </a>

          {/* Desktop Nav centralizada */}
          <div className="hidden lg:flex gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium ${
                  shouldShowTransparent ? "text-white/90" : "text-foreground/70"
                } hover:text-primary transition-colors`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Ações à direita */}
          <div className="hidden lg:flex items-center gap-6 z-10">
            {/* Redes Sociais */}
            <div
              className={`flex items-center gap-4 ${shouldShowTransparent ? "text-white/70" : "text-foreground/60"}`}
            >
              <a
                href="https://instagram.com/fazedores_angola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/fazedores_angola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/fazedores-angola"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <DoerButton
                variant="outline"
                className={
                  shouldShowTransparent ? "text-white border-white/20" : ""
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
              <DoerButton variant="primary">
                <a
                  href="https://app.fazedoresangola.ao/criar-conta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Criar conta
                </a>
              </DoerButton>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden z-10 ${
              shouldShowTransparent ? "text-white" : "text-foreground"
            }`}
          >
            <Menu size={28} />
          </button>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks}
        handleNavClick={handleNavClick}
      />
    </>
  );
};
