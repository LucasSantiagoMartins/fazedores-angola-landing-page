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
      className="py-8 md:py-14 bg-background relative z-20 mt-20"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8 text-center lg:text-left">
              <p className="text-primary font-bold uppercase text-[10px] md:text-xs mb-3">
                Fazedores Angola Prestação de Serviços (SU) LDA
              </p>

              <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">
                Sobre a <span className="text-gradient">Fazedores Angola</span>
              </h3>

              <p className="text-muted-foreground font-medium text-base md:text-lg">
                Tecnologia, oportunidades e crescimento para o mercado de
                serviços em Angola.
              </p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base max-w-3xl">
              <p>
                A <strong>Fazedores Angola</strong> nasceu para modernizar a
                forma como serviços são encontrados e realizados em Angola,
                criando uma experiência mais rápida, organizada e acessível.
              </p>

              <p>
                Construímos um ecossistema focado em oportunidades, visibilidade
                e crescimento sustentável para os fazedores que movimentam o
                mercado nacional.
              </p>

              <p>
                Acreditamos no princípio{" "}
                <span className="text-primary font-semibold">
                  "Dividir para conquistar"
                </span>
                , fortalecendo toda a comunidade através de uma distribuição
                mais equilibrada de oportunidades.
              </p>
            </div>
          </motion.div>

          {/* Cards agora no fundo */}
          <div className="flex md:grid md:grid-cols-3 gap-4 w-full mt-12 md:mt-20 overflow-x-auto pb-4 md:pb-0 snap-x scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col gap-2 p-3 md:p-8 rounded-3xl bg-card border border-border/50 shadow-2xl min-w-[200px] md:min-w-0 snap-center"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>

                <h4 className="text-foreground font-bold text-xs md:text-lg">
                  {value.title}
                </h4>

                <p className="text-muted-foreground text-[10px] md:text-base leading-relaxed flex-grow">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
