import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-primary opacity-80" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center glass rounded-[2.5rem] p-8 md:p-14 shadow-glow gpu"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pronto para <span className="text-gradient">começar?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Crie a sua conta gratuitamente e descubra como a Fazedores Angola pode acelerar o seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.fazedoresangola.ao/criar-conta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-glow animate-pulse-glow hover:scale-[1.03] transition-transform duration-300 gpu"
            >
              Criar conta grátis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://app.fazedoresangola.ao/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Já tenho conta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
