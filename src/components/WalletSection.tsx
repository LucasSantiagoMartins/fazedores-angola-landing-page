import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Target, Shield, Zap } from "lucide-react";
import walletImage from "@/assets/wallet.webp";

const features = [
  {
    icon: Wallet,
    text: "Gestão financeira inteligente — acompanhe ganhos, histórico e saques num só lugar.",
  },
  {
    icon: Target,
    text: "Mais controlo e disciplina — evite gastos impulsivos e planeie melhor seus levantamentos.",
  },
  {
    icon: Shield,
    text: "Transparência total — cada valor, comissão e movimento fica visível e registado.",
  },
  {
    icon: Zap,
    text: "Pagamentos rápidos — pague com Multicaixa Express ou por referência, de forma instantânea e segura.",
  },
];

export const WalletSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="wallet"
      className="py-20 md:py-32 bg-muted relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Carteira Fazedores —
              <span className="text-gradient">
                {" "}
                organização, confiança e controlo financeiro
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A <strong className="text-foreground">Carteira Fazedores</strong>{" "}
              foi criada para organizar e centralizar todos os valores dos
              serviços dentro da plataforma. Cada pagamento recebido fica registado, com
              histórico claro e comissão já aplicada, garantindo confiança,
              previsibilidade e melhor planeamento financeiro para prestadores.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-foreground/80 pt-2">{feature.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
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

              {/* Floating Badge */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-card p-4 rounded-xl shadow-soft"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="w-6 h-6 text-primary mb-1" />
                <p className="text-xs text-foreground font-medium">
                  100% Seguro
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
