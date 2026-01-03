import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Conectar clientes e prestadores de serviços com praticidade, promovendo oportunidades e valorizando o talento angolano.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser a principal plataforma de solicitação de serviços em Angola, reconhecida pela inovação, credibilidade e impacto social.",
  },
  {
    icon: Users,
    title: "Cultura",
    description:
      "Dividir para conquistar: distribuímos oportunidades, fortalecendo profissionais e garantindo serviços de qualidade para todos.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-card ring-4 ring-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-display font-bold text-foreground/50">
                      LS
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-primary px-6 py-3 rounded-full shadow-glow"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-primary-foreground font-semibold text-sm">Fundador</span>
                </motion.div>
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-primary font-semibold mb-2">FAZEDORES ANGOLA PRESTAÇÃO DE SERVIÇOS (SU) LDA</p>
              <p className="text-muted-foreground text-lg mb-4">NIF - 5002629992</p>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Lucas Santiago de Oliveira Martins
              </h3>
              <p className="text-muted-foreground text-lg mb-6">Sócio Único e Gerente</p>
              
              <div className="w-16 h-1 bg-primary rounded-full mb-6" />
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Lucas Santiago de Oliveira Martins é o fundador, Sócio Único
                e Gerente da <strong>Fazedores Angola</strong>. Com
                experiência na área de tecnologia e desenvolvimento de
                soluções digitais, criou a plataforma para conectar clientes
                e prestadores de serviços de forma simples e segura.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A empresa tem como base o princípio
                <em className="text-primary"> "Dividir para conquistar"</em>: distribuir
                oportunidades, valorizar o talento angolano e assegurar que
                o sucesso seja alcançado de forma coletiva.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card hover:bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-foreground font-semibold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
