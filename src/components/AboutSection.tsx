import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Conectar clientes e fazedores com praticidade, promovendo renda e valorizando o talento nacional.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser o ecossistema líder em Angola para serviços, reconhecido pela inovação e impacto digital.",
  },
  {
    icon: Users,
    title: "Cultura",
    description:
      "Dividir para conquistar: distribuímos oportunidades e crescemos juntos como uma comunidade.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="gpu"
          >
            <div className="mb-12 text-center lg:text-left">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
                Fazedores Angola Prestação de Serviços (SU) LDA
              </p>
              <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2">
                Lucas Santiago de Oliveira Martins
              </h3>
              <p className="text-muted-foreground font-medium text-xl">
                Fundador & Gerente
              </p>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg mb-16 max-w-4xl">
              <p>
                A <strong>Fazedores Angola</strong> nasceu da visão de
                transformar o mercado de serviços em Angola através da
                tecnologia. Como especialistas em sistemas digitais e negócios,
                focamos em criar uma solução que não seja apenas um
                intermediário, mas um motor de crescimento.
              </p>
              <p>
                Acreditamos no princípio{" "}
                <em className="text-primary font-semibold">
                  "Dividir para conquistar"
                </em>
                : nossa plataforma assegura que as oportunidades sejam
                distribuídas de forma justa, garantindo que o sucesso de um
                prestador impulsione todo o ecossistema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col gap-5 p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 h-full shadow-sm"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-xl mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
