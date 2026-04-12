import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Wallet, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Serviços sob demanda",
    description:
      "Peça o serviço que precisa e receba propostas de prestadores qualificados em minutos.",
  },
  {
    icon: Wallet,
    title: "Gestão para prestadores",
    description:
      "Carteira digital, histórico de pedidos e controlo financeiro — tudo num só lugar.",
  },
  {
    icon: TrendingUp,
    title: "Marketing e crescimento",
    description:
      "Vídeos profissionais, visibilidade nas redes e oportunidades de crescimento na plataforma.",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            A <span className="text-gradient">solução</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-2">
            A Fazedores Angola resolve esses problemas com tecnologia, organização e oportunidades reais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="h-full bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300">
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
