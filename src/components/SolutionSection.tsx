import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Share2,
  Target,
  LayoutGrid,
  MessageSquare,
  CheckCircle2,
  PlayCircle,
  Wallet,
} from "lucide-react";

const solutions = [
  {
    icon: LayoutGrid,
    title: "Centralização e Facilidade",
    description:
      "Encontre e solicite serviços em poucos cliques pela plataforma ou via WhatsApp, sem burocracia.",
  },
  {
    icon: Share2,
    title: "Marketing Profissional",
    description:
      "Transformamos as fotos e vídeos dos seus serviços em conteúdos profissionais de alta qualidade para redes sociais, ajudando a destacar o seu trabalho e atrair mais clientes.",
  },
  {
    icon: Target,
    title: "Distribuição Inteligente",
    description:
      "Equilibramos a visibilidade para que todos os prestadores tenham chances reais e justas de trabalho.",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Pedido",
    description: "O cliente solicita um serviço pela plataforma.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Aceitação",
    description: "Um prestador disponível aceita o serviço.",
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "Execução",
    description: "O serviço é realizado conforme solicitado.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Conclusão",
    description: "O prestador marca o serviço como concluído.",
  },
  {
    number: "05",
    icon: Wallet,
    title: "Comissão",
    description: "A plataforma aplica a comissão sobre o serviço realizado.",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="relative py-16 md:py-28 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="pointer-events-none absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-radial-primary opacity-70" />

      <div className="container mx-auto px-4 relative mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            A <span className="text-gradient">solução</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Criamos um ecossistema que organiza o mercado, profissionaliza quem
            faz e oferece confiança para quem contrata.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group gpu"
            >
              <div className="h-full glass p-6 md:p-8 rounded-[2rem] hover:border-primary/40 transition-all duration-300 hover:shadow-card">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary-soft group-hover:bg-gradient-primary flex items-center justify-center mb-5 transition-all duration-300">
                  <solution.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-foreground font-semibold text-lg sm:text-xl mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Como funciona
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Um processo simples — do pedido à conclusão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-6 relative">
                <span className="absolute -top-4 -right-4 text-xs font-bold bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </span>
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center bg-background/50 group">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-full w-full h-[2px] bg-gradient-to-r from-primary/20 to-transparent -z-10" />
                )}
              </div>
              <h4 className="text-foreground font-bold text-lg mb-2">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-snug">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
