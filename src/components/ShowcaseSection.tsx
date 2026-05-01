import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImagePlus, Sparkles, Download } from "lucide-react";

const features = [
  {
    icon: ImagePlus,
    title: "Submissão de Conteúdo",
    description:
      "Envie fotos e vídeos reais dos seus serviços diretamente pela plataforma para nossa equipa.",
  },
  {
    icon: Sparkles,
    title: "Transformação Profissional",
    description:
      "Transformamos os seus registos em cartazes digitais e conteúdos de alto impacto para atrair mais clientes.",
  },
  {
    icon: Download,
    title: "Visibilidade e Downloads",
    description:
      "Promovemos o seu trabalho nas nossas redes e, conforme o seu plano, pode baixar os conteúdos para as suas próprias redes.",
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
            Montra — <span className="text-gradient">Marketing para Si</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Não apenas listamos o seu serviço. Construímos a sua imagem profissional para você se destacar no mercado.
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
              <div className="h-full bg-card p-6 md:p-8 rounded-[2.5rem] border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors duration-300">
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