import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Pronto para <span className="text-gradient">começar?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 md:mb-10 px-2">
            Junte-se a centenas de clientes e prestadores que já confiam na Fazedores Angola.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-glow"
            >
              Quero um serviço
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#plans"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary hover:bg-primary/10 text-primary font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300"
            >
              Quero ser prestador
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
