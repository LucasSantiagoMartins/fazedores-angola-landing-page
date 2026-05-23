import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
      className="py-16 md:py-32 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Cabeçalho */}
            <div className="mb-12 text-center lg:text-left">
              <p className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3">
                Fazedores Angola Prestação de Serviços (SU) LDA
              </p>
              <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">
                Lucas Santiago de Oliveira Martins
              </h3>
              <p className="text-muted-foreground font-medium text-lg md:text-xl">
                Fundador & Gerente
              </p>
            </div>

            {/* Texto principal */}
            <div className="space-y-6 text-foreground/80 leading-relaxed text-base md:text-lg mb-12 max-w-3xl">
              <p>
                A <strong>Fazedores Angola</strong> nasceu da visão de
                transformar o mercado de serviços em Angola através da
                tecnologia. Como especialistas em sistemas digitais, focamos em
                criar uma solução que é um verdadeiro motor de crescimento.
              </p>
              <p>
                Acreditamos no princípio{" "}
                <span className="text-primary font-semibold">
                  "Dividir para conquistar"
                </span>
                : nossa plataforma garante que oportunidades sejam distribuídas
                de forma justa, permitindo que cada prestador impulsione todo o
                ecossistema.
              </p>
            </div>

            {/* Carrossel de Valores */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.1} // Mostra um pouco do próximo card no mobile
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {values.map((value, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="flex flex-col gap-4 p-6 md:p-8 rounded-[2rem] bg-card border border-border/50 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-foreground font-bold text-lg">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
