import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Network,
  HandshakeIcon,
  Camera,
  CheckCircle2,
  Wallet,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    label: "Pedido",
    description:
      "O cliente solicita um serviço pela plataforma ou canais integrados (ex: WhatsApp).",
  },
  {
    icon: Network,
    label: "Distribuição Inteligente",
    description:
      "A plataforma direciona o pedido para prestadores disponíveis, equilibrando oportunidades e priorizando qualidade.",
  },
  {
    icon: HandshakeIcon,
    label: "Aceitação",
    description: "O prestador aceita o serviço e assume a execução.",
  },
  {
    icon: Camera,
    label: "Execução",
    description:
      "O serviço é realizado no local combinado. O prestador pode registar evidências (fotos/vídeos).",
  },
  {
    icon: CheckCircle2,
    label: "Conclusão",
    description: "O prestador marca o serviço como concluído na plataforma.",
  },
  {
    icon: Wallet,
    label: "Pagamento e Comissão",
    description:
      "Pela plataforma: comissão descontada automaticamente. Em mãos: comissão fica pendente até regularização.",
  },
  {
    icon: PiggyBank,
    label: "Carteira",
    description:
      "O valor do serviço é refletido na carteira do prestador dentro da plataforma.",
  },
  {
    icon: TrendingUp,
    label: "Crescimento",
    description:
      "Os serviços realizados podem ser transformados em conteúdo e marketing para aumentar visibilidade.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="services"
      className="relative py-16 md:py-28 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Um processo simples, controlado e transparente — do pedido ao pagamento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="relative p-6 rounded-2xl glass hover:border-primary/40 transition-all gpu"
            >
              <div className="absolute top-4 right-4 text-xs font-bold text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <step.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">
                {step.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
