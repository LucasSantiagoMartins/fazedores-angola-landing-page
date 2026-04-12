import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Target, Shield, Zap } from "lucide-react";
import walletImage from "@/assets/wallet.webp";

const features = [
  {
    icon: Wallet,
    text: "Acompanhe ganhos, histórico e saques num só lugar.",
  },
  {
    icon: Target,
    text: "Planeie melhor seus levantamentos com controlo total.",
  },
  {
    icon: Shield,
    text: "Cada valor, comissão e movimento fica visível e registado.",
  },
  {
    icon: Zap,
    text: "Pagamentos rápidos via Multicaixa Express ou referência.",
  },
];

export const WalletSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="wallet" className="py-16 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Carteira Fazedores —
              <span className="text-gradient"> controlo financeiro total</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mb-6 md:mb-8 leading-relaxed">
              Todos os pagamentos ficam registados com comissão já aplicada, garantindo transparência e previsibilidade.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-foreground/80 text-sm sm:text-base pt-2">{feature.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative w-64 md:w-72 aspect-[9/19] bg-secondary rounded-[3rem] p-3 shadow-card">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-background rounded-full z-10" />
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                  <img
                    src={walletImage}
                    alt="Carteira Fazedores"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <motion.div
                className="absolute -right-4 top-1/4 bg-card p-4 rounded-xl shadow-soft"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="w-6 h-6 text-primary mb-1" />
                <p className="text-xs text-foreground font-medium">100% Seguro</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
