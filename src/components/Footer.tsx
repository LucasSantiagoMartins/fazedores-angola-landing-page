import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Facebook, Youtube, Linkedin, ArrowUp } from "lucide-react";

const usefulLinks = [
  { label: "FAQ / Perguntas Frequentes", href: "#" },
  { label: "Entrar em contacto", href: "#" },
];

const policies = [
  { label: "Termos e Condições", href: "#" },
  { label: "Comissões e Taxas", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Política de Cancelamento", href: "#" },
  { label: "Política de Reembolso", href: "#" },
  { label: "Avaliações e feedback", href: "#" },
  { label: "Normas de Prestação de Serviço", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="text-foreground font-display font-bold text-xl">
                Fazedores Angola
              </span>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Luanda, Angola</p>
                  <p className="text-sm">
                    Estalagem, Rua Beto Carneiro, casa nº 20, perto do antigo banco bic
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:fazedoresangola@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  fazedoresangola@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+244921587661"
                  className="hover:text-primary transition-colors"
                >
                  +244 921 587 661
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">
              Políticas
            </h3>
            <ul className="space-y-3">
              {policies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 <span className="text-foreground font-semibold">Fazedores Angola</span>. 
              Todos os direitos reservados.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors shadow-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
