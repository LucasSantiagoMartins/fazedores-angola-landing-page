import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Star, Rocket } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 965, label: "Serviços realizados", prefix: "+", suffix: "" },
  { icon: Users, value: 235, label: "Fazedores ativos", prefix: "+", suffix: "" },
  { icon: Star, value: 98, label: "Avaliação positiva", prefix: "", suffix: "%" },
  { icon: Rocket, value: 100, label: "Foco em crescimento", prefix: "", suffix: "%" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  return count;
};

const StatItem = ({ stat, index, isInView }: { stat: typeof stats[0]; index: number; isInView: boolean }) => {
  const count = useCountUp(stat.value, 2000, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-[2rem] bg-card/50 hover:bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
          <stat.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {stat.prefix}{count}{stat.suffix}
          </p>
          <p className="text-muted-foreground text-xs md:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-28 bg-background overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} isInView={isInView} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Transformando serviços em <span className="text-gradient">renda e impacto</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 md:mb-6 leading-relaxed">
              Damos o suporte necessário para que você, prestador, deixe de depender apenas de indicações informais e passe a ter um fluxo constante de oportunidades profissionais.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Nossa tecnologia foi desenhada para valorizar o seu talento, organizando o mercado angolano com transparência, justiça e visibilidade digital.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};