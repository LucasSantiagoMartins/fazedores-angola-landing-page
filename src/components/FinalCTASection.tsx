import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { DoerButton } from "./DoerButton";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center glass rounded-2xl p-8 md:p-14 gpu"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pronto para <span className="text-gradient">começar?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Crie a sua conta gratuitamente e descubra como a Fazedores Angola
            pode acelerar o seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DoerButton
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href="https://app.fazedoresangola.ao/criar-conta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Criar conta grátis
                <ArrowRight className="w-5 h-5" />
              </a>
            </DoerButton>
            <DoerButton
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href="https://app.fazedoresangola.ao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Já tenho conta
              </a>
            </DoerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
