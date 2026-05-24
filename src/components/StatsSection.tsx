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
  { icon: Users, value: 0, label: "Fazedores ativos", prefix: "+", suffix: "" },
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
      className="flex flex-col items-center justify-center text-center gap-3 p-2"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>

      <div>
        <p className="text-xl md:text-3xl font-bold text-white tabular-nums">
          {stat.prefix}
          {count}
          {stat.suffix}
        </p>
        <p className="text-[10px] md:text-xs text-white/80 font-medium uppercase tracking-wider mt-1">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className="py-10 md:py-12 bg-gradient-primary overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
