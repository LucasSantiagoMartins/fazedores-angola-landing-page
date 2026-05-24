import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Linkedin } from "lucide-react";
import DoerButton from "./DoerButton";

export const MobileMenu = ({ isOpen, onClose, navLinks, handleNavClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Função interna para garantir que o menu feche ao clicar no link
  const handleLinkClick = (href) => {
    onClose();
    handleNavClick(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center px-6"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-foreground"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-8 w-full max-w-sm items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}

            <div className="w-full flex flex-col gap-4 pt-8 border-t border-border">
              <DoerButton
                variant="outline"
                className="w-full flex items-center justify-center"
              >
                <a
                  href="https://app.fazedoresangola.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  Entrar
                </a>
              </DoerButton>
              <DoerButton
                variant="primary"
                className="w-full flex items-center justify-center"
              >
                <a
                  href="https://app.fazedoresangola.ao/criar-conta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  Criar conta
                </a>
              </DoerButton>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-6 pt-4 text-foreground/60">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
