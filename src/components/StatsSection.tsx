import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HandCoins, Users, UserCheck, Award } from "lucide-react";

const stats = [
  {
    icon: HandCoins,
    value: "965",
    label: "Serviços concluídos",
  },
  {
    icon: Users,
    value: "235",
    label: "Prestadores de serviço",
  },
  {
    icon: UserCheck,
    value: "150",
    label: "Clientes satisfeitos",
  },
  {
    icon: Award,
    value: "5",
    label: "Anos de experiência",
  },
];

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
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-card border border-transparent hover:border-border transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
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