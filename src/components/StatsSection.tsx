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
    value: 0,
    label: "Serviços realizados",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Users,
    value: 0,
    label: "Fazedores ativos",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Star,
    value: 95,
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
    if (!start || !isClient || end === 0) return;

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
      className="group will-change-transform min-w-[200px] md:min-w-0 snap-center"
    >
      <div className="flex flex-col gap-2 p-3 md:p-8 rounded-3xl bg-card border border-border/50 shadow-2xl transition-all duration-300 h-full">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
        </div>

        <div>
          <p className="text-xl md:text-2xl font-medium text-foreground tabular-nums">
            {stat.prefix}
            {count}
            {stat.suffix}
          </p>

          <p className="text-[10px] md:text-base leading-relaxed text-muted-foreground">
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
    <section
      className="py-16 md:py-28 bg-background-subtle overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                DamoTransformando serviços em renda e impactos o suporte
                necessário para que você, prestador, deixe de depender apenas de
                indicações informais e passe a ter um fluxo constante de
                oportunidades profissionais.
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
