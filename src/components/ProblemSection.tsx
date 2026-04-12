import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, EyeOff, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Mercado desorganizado",
    description:
      "Falta de estrutura no mercado de serviços em Angola dificulta a contratação segura.",
  },
  {
    icon: EyeOff,
    title: "Prestadores invisíveis",
    description:
      "Profissionais qualificados não têm visibilidade nem ferramentas para crescer.",
  },
  {
    icon: ShieldOff,
    title: "Falta de confiança",
    description:
      "Encontrar profissionais confiáveis é um desafio para clientes em todo o país.",
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            O <span className="text-gradient">problema</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-2">
            O mercado de serviços em Angola enfrenta desafios reais que afectam clientes e profissionais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="h-full bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 group-hover:bg-destructive flex items-center justify-center mb-5 transition-colors duration-300">
                  <problem.icon className="w-7 h-7 text-destructive group-hover:text-destructive-foreground transition-colors" />
                </div>
                <h3 className="text-foreground font-semibold text-lg sm:text-xl mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
