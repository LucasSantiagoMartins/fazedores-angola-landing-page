import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Target, LayoutGrid } from "lucide-react";
import { GlitchText } from "./GlitchText";

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

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative py-16 md:py-28 bg-muted overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-radial-primary opacity-70" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            A <GlitchText text="solução" className="text-gradient" />
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
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
              className="group gpu"
            >
              <div className="h-full glass p-6 md:p-8 rounded-[2rem] hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
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
    </section>
  );
};
