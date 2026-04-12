import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileCheck, Wrench, CreditCard, Wallet } from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Pedido",
    description: "O cliente descreve o serviço que precisa.",
  },
  {
    icon: FileCheck,
    label: "Aceitação",
    description: "Prestadores enviam propostas e o cliente escolhe.",
  },
  {
    icon: Wrench,
    label: "Serviço",
    description: "O prestador realiza o trabalho com qualidade.",
  },
  {
    icon: CreditCard,
    label: "Pagamento",
    description: "Pagamento seguro via Multicaixa Express ou referência.",
  },
  {
    icon: Wallet,
    label: "Carteira",
    description: "O valor fica disponível na Carteira Fazedores.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-16 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Como <span className="text-gradient">funciona?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-2">
            Um fluxo simples, do pedido ao pagamento.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-border z-0" />
              )}

              <div className="relative z-10 w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-glow">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-1">
                {step.label}
              </h3>
              <p className="text-muted-foreground text-sm max-w-[180px]">
                {step.description}
              </p>

              {/* Connector arrow (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-0.5 h-6 bg-border my-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
