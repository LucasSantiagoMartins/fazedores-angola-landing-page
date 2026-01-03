import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Wallet, ShieldCheck, CalendarCheck } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Solicitação de Serviços",
    description: "Peça o que precisas de forma rápida e segura.",
  },
  {
    icon: Wallet,
    title: "Carteira Fazedores",
    description: "Receba, e saque seus ganhos com facilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Transparência",
    description: "Pagamentos controlados e histórico completo.",
  },
  {
    icon: CalendarCheck,
    title: "Gestão Simplificada",
    description: "Solicitações, pagamentos e muito mais em um só lugar.",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefícios da <span className="text-gradient">plataforma</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para conectar talentos e oportunidades
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card hover:bg-gradient-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
