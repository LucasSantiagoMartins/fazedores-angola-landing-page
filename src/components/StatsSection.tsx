import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { HandCoins, Users, UserCheck, Award } from "lucide-react";

const stats = [
  {
    icon: HandCoins,
    value: 965,
    label: "Serviços concluídos",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Users,
    value: 235,
    label: "Prestadores de serviço",
    prefix: "+",
    suffix: "",
  },
  {
    icon: UserCheck,
    value: 98,
    label: "Satisfação dos clientes",
    prefix: "",
    suffix: "%",
  },
  {
    icon: Award,
    value: 5,
    label: "Anos de experiência",
    prefix: "+",
    suffix: "",
  },
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
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
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
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-card border border-transparent hover:border-border transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
          <stat.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {stat.prefix}{count}{stat.suffix}
          </p>
          <p className="text-muted-foreground text-sm">
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} isInView={isInView} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossa missão: <span className="text-gradient">simplificar e valorizar</span> o talento angolano
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Desde o início, a nossa missão é clara: facilitar a vida de quem
              precisa de um serviço e dar valor ao trabalho dos profissionais
              angolanos. Conectamos talento e necessidade de forma segura e
              eficiente.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Valorizamos a confiança, a transparência e a eficiência,
              princípios que sustentam cada serviço realizado na plataforma.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};