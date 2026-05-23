import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Star, Rocket } from "lucide-react";

// Hook auxiliar para evitar conflitos de Hydration
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
};

const stats = [
  {
    icon: Briefcase,
    value: 965,
    label: "Serviços realizados",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Users,
    value: 235,
    label: "Fazedores ativos",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Star,
    value: 98,
    label: "Avaliação positiva",
    prefix: "",
    suffix: "%",
  },
  {
    icon: Rocket,
    value: 100,
    label: "Foco em crescimento",
    prefix: "",
    suffix: "%",
  },
];

const useCountUp = (
  end: number,
  duration: number = 2000,
  start: boolean = false,
) => {
  const [count, setCount] = useState(0);
  const isClient = useIsClient();

  useEffect(() => {
    if (!start || !isClient) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start, isClient]);

  return count;
};

const StatItem = ({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
}) => {
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group will-change-transform"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-card/50 md:hover:bg-card border border-border/50 md:hover:border-primary/30 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
          <stat.icon className="w-5 h-5 text-primary" />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-2xl font-bold text-foreground tabular-nums">
            {stat.prefix}
            {count}
            {stat.suffix}
          </p>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-28 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                stat={stat}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Transformando serviços em{" "}
              <span className="text-gradient">renda e impacto</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Damos o suporte necessário para que você, prestador, deixe de
                depender apenas de indicações informais e passe a ter um fluxo
                constante de oportunidades profissionais.
              </p>
              <p>
                Nossa tecnologia foi desenhada para valorizar o seu talento,
                organizando o mercado angolano com transparência e justiça.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
