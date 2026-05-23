import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import DoerButton from "./DoerButton";

export const MobileMenu = ({ isOpen, onClose, navLinks, handleNavClick }) => {
  // Efeito para travar/destravar o scroll do body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup caso o componente seja desmontado
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center px-6 overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-foreground"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-8 w-full max-w-sm items-center py-20">
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
              <DoerButton variant="outline" className="w-full">
                <a
                  href="https://app.fazedoresangola.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  Entrar
                </a>
              </DoerButton>
              <DoerButton variant="primary" className="w-full">
                <a
                  href="https://app.fazedoresangola.ao/criar-conta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  Criar conta
                </a>
              </DoerButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
