import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users } from "lucide-react";
import myProfilePic from "../assets/me.jpg";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Conectar clientes e fazedores com praticidade, promovendo renda e valorizando o talento nacional.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser o ecossistema líder em Angola para serviços, reconhecido pela inovação e impacto digital.",
  },
  {
    icon: Users,
    title: "Cultura",
    description: "Dividir para conquistar: distribuímos oportunidades e crescemos juntos como uma comunidade.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-[3rem] blur opacity-25 transition duration-1000"></div>
              <img
                src={myProfilePic}
                alt="Lucas Santiago - Fazedores Angola"
                className="relative w-full max-w-md rounded-[2.5rem] shadow-2xl transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Lado Direito: Texto Institucional e Cards Integrados */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
                Fazedores Angola Prestação de Serviços (SU) LDA
              </p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                Lucas Santiago de Oliveira Martins
              </h3>
              <p className="text-muted-foreground font-medium text-xl">
                Fundador & Gerente
              </p>
            </div>

            <div className="space-y-6 text-foreground/80 leading-relaxed text-lg mb-10">
              <p>
                A <strong>Fazedores Angola</strong> nasceu da visão de transformar o mercado de serviços em Angola através da tecnologia. Como especialistas em sistemas digitais e negócios, focamos em criar uma solução que não seja apenas um intermediário, mas um motor de crescimento.
              </p>
              <p>
                Acreditamos no princípio <em className="text-primary font-semibold">"Dividir para conquistar"</em>: nossa plataforma assegura que as oportunidades sejam distribuídas de forma justa, garantindo que o sucesso de um prestador impulsione todo o ecossistema.
              </p>
            </div>

            {/* Values - Lista Integrada no Fluxo do Texto */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-5 p-6 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-lg mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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