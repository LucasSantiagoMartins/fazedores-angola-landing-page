import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Scale, LineChart, Wrench } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Imagem Profissional",
    description:
      "Possibilidade de enviar fotos e vídeos dos seus trabalhos para criação de conteúdos promocionais, maior destaque no perfil e mais atratividade dentro da plataforma.",
  },
  {
    icon: Scale,
    title: "Oportunidades Justas",
    description:
      "As solicitações são distribuídas de forma equilibrada entre os fazedores.",
  },
  {
    icon: LineChart,
    title: "Mais Visibilidade",
    description:
      "Maior destaque dentro da plataforma, mais engajamento no perfil e mais oportunidades para atrair novos clientes.",
  },
];

export const GrowthSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-16 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Elemento decorativo com tamanho reduzido e animação de subida */}
      <motion.img
        initial={{ opacity: 0, x: 100, rotate: -15, scale: 0.8 }}
        animate={isInView ? { opacity: 0.6, x: 0, rotate: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: "backOut" }}
        src="/triangle.png"
        alt=""
        className="absolute bottom-0 right-0 h-[85%] max-h-[500px] w-auto object-contain z-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cresça com a <span className="text-gradient">Fazedores Angola</span>
          </h2>

          <p className="text-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Mais visibilidade, oportunidades equilibradas e ferramentas para
            ajudar o seu negócio a crescer de forma profissional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="h-full bg-card p-5 md:p-7 rounded-3xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-foreground font-semibold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
