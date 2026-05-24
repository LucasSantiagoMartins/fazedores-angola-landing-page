import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Conectar clientes e fazedores com praticidade, promovendo renda e valorizando o talento nacional.",
    image: "/missao.webp",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser o ecossistema líder em Angola para serviços, reconhecido pela inovação e impacto digital.",
    image: "/visao.webp",
  },
  {
    icon: Users,
    title: "Cultura",
    description:
      "Dividir para conquistar: distribuímos oportunidades e crescemos juntos como uma comunidade.",
    image: "/cultura.webp",
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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna da Esquerda: Conteúdo */}
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

            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
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

          {/* Coluna da Direita: Grid de Imagens com Conteúdo */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-full">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-2xl ${
                  index === 2 ? "col-span-2 h-48" : "h-64"
                }`}
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />

                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-foreground font-bold text-lg">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="flex lg:hidden gap-4 w-full overflow-x-auto pb-4 snap-x scrollbar-hide">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative overflow-hidden flex flex-col gap-2 p-6 rounded-3xl bg-card  shadow-2xl min-w-[260px] snap-center"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <value.icon className="w-8 h-8 text-primary" />
                <h4 className="font-bold text-lg">{value.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
