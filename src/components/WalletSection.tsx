import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, Target, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Wallet,
    text: "Gestão financeira inteligente — acompanhe ganhos, depósitos e saques.",
  },
  {
    icon: Target,
    text: "Controle e disciplina — guarda os ganhos e saca só quando precisa.",
  },
  {
    icon: Shield,
    text: "Transparência e segurança em cada transação.",
  },
  {
    icon: Zap,
    text: "Pagamentos rápidos — clientes depositam e pagam com 1 clique.",
  },
];

export const WalletSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="wallet" className="py-20 md:py-32 bg-muted relative overflow-hidden">
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
              <span className="text-gradient"> o seu dinheiro mais seguro</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A <strong className="text-foreground">Carteira Fazedores</strong> foi criada para dar mais
              praticidade e controlo aos pagamentos dentro da plataforma. Todo
              valor recebido pelos prestadores passa pela carteira, já com a
              comissão descontada, permitindo uma visão clara dos ganhos.
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
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-background rounded-full" />
                <div className="w-full h-full bg-gradient-to-b from-card to-background rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <Wallet className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-semibold">Carteira</p>
                    <p className="text-4xl font-bold text-primary mt-2">50.000 Kz</p>
                    <p className="text-muted-foreground text-sm mt-4">Saldo disponível</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
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
