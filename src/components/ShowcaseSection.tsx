import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Sparkles, Share2 } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Vídeos antes e depois",
    description:
      "Mostramos o resultado real do trabalho dos prestadores em vídeos profissionais.",
  },
  {
    icon: Sparkles,
    title: "Edição profissional",
    description:
      "Conteúdo editado com qualidade para destacar o melhor de cada serviço.",
  },
  {
    icon: Share2,
    title: "Publicação nas redes",
    description:
      "Os vídeos são publicados nas redes sociais da Fazedores Angola, dando visibilidade aos prestadores.",
  },
];

export const ShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Showcase — <span className="text-gradient">Marketing</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-2">
            Damos visibilidade ao trabalho dos prestadores com conteúdo profissional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="h-full bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-foreground font-semibold text-lg sm:text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
