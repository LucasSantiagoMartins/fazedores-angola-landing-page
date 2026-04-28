import { motion } from "framer-motion";
import { MapPin, Mail, Phone, PlaySquare, ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const usefulLinks = [
  { label: "FAQ / Perguntas Frequentes", href: "/perguntas-respostas" },
  { label: "Entrar em contacto", href: "/contactar" },
];

const policies = [
  { label: "Termos e Condições", href: "/termos-condicoes" },
  { label: "Comissões e Taxas", href: "/comissoes-taxas" },
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Política de Cancelamento", href: "/politica-cancelamento" },
  { label: "Avaliações e feedback", href: "/avaliacoes-feedback" },
  {
    label: "Normas de Prestação de Serviço",
    href: "/normas-prestacao-servico",
  },
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/fazedores_angola",
    label: "Instagram",
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-foreground font-display font-bold text-xl">
                Fazedores Angola
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Plataforma de serviços e crescimento profissional para clientes e prestadores em Angola.
            </p>

            <div className="space-y-3.5 text-muted-foreground text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground/90">Luanda, Angola</p>
                  <p className="text-muted-foreground">Estalagem, Rua Beto Carneiro</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contacto@fazedoresangola.ao"
                  className="hover:text-primary transition-colors"
                >
                  contacto@fazedoresangola.ao
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                <a
                  href="tel:+244924686977"
                  className="hover:text-primary transition-colors"
                >
                  +244 924 686 977
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-primary/40 hover:bg-primary hover:border-primary flex items-center justify-center transition-all group"
                >
                  <social.icon className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">
              Links Úteis
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-4">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">
              Políticas
            </h3>
            <ul className="space-y-3">
              {policies.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
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
              © 2026{" "}
              <span className="text-foreground font-semibold">
                Fazedores Angola
              </span>
              . Todos os direitos reservados.
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
