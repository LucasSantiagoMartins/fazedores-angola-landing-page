import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Gestão Inteligente",
    description: "Acompanhe ganhos, gastos e saques de forma simples.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Transparência",
    description: "Controle total sobre transações e histórico financeiro.",
  },
];

export const WalletFeatureCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="bg-secondary rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Carteira Fazedores — Segurança e Controle Financeiro
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Todos os pagamentos feitos pelo app passam primeiro pela
              plataforma, dentro da Carteira Fazedores. Isso dá ao cliente a
              facilidade de depositar e pagar serviços com um clique, e ao
              prestador o controlo total dos seus ganhos, saques e histórico
              financeiro — tudo num só lugar, com segurança e transparência.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
