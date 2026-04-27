import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Zap, Camera, CheckCircle2, TrendingUp } from "lucide-react";
import { GlitchText } from "./GlitchText";

const steps = [
  {
    icon: MessageSquare,
    label: "Pedido",
    description: "O cliente descreve o serviço pela plataforma ou WhatsApp.",
  },
  {
    icon: Zap,
    label: "Escolha ou Direcionamento",
    description: "Selecione o profissional na plataforma ou receba um direcionamento inteligente.",
  },
  {
    icon: Camera,
    label: "Execução",
    description: "O serviço é realizado e o prestador envia fotos do trabalho para a equipa.",
  },
  {
    icon: CheckCircle2,
    label: "Confirmação",
    description: "O prestador confirma a conclusão, garantindo transparência no processo.",
  },
  {
    icon: TrendingUp,
    label: "Crescimento",
    description: "As evidências do serviço são transformadas em marketing profissional.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="relative py-16 md:py-28 bg-background overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial-primary opacity-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Como <GlitchText text="funciona?" className="text-gradient" />
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Um processo otimizado para gerar confiança ao cliente e visibilidade ao profissional.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col items-center text-center relative gpu"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-gradient-to-r from-primary/60 to-transparent z-0" />
              )}

              <motion.div
                whileHover={{ scale: 1.08, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow"
              >
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </motion.div>

              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-1">
                {step.label}
              </h3>
              <p className="text-muted-foreground text-sm max-w-[180px] leading-relaxed">
                {step.description}
              </p>

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