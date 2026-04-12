import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Para quem está a começar na plataforma.",
    highlight: false,
    features: [
      "Perfil de prestador activo",
      "Receber pedidos de serviço",
      "Carteira Fazedores",
      "Histórico de transações",
    ],
  },
  {
    name: "Pro",
    description: "Para prestadores que querem crescer mais rápido.",
    highlight: true,
    features: [
      "Tudo do plano Básico",
      "Prioridade em novos pedidos",
      "Destaque no perfil",
      "Relatórios de desempenho",
      "Suporte prioritário",
    ],
  },
  {
    name: "Elite",
    description: "Máxima visibilidade e crescimento acelerado.",
    highlight: false,
    features: [
      "Tudo do plano Pro",
      "Vídeos profissionais do trabalho",
      "Marketing nas redes Fazedores",
      "Badge de prestador verificado",
      "Acesso a grandes projectos",
      "Gestor de conta dedicado",
    ],
  },
];

export const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="plans" className="py-16 md:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Planos para <span className="text-gradient">prestadores</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-2">
            Escolha o plano ideal e cresça dentro da plataforma.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div
                className={`h-full p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-card"
                }`}
              >
                <h3
                  className={`font-semibold text-xl sm:text-2xl mb-2 ${
                    plan.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm sm:text-base mb-6 ${
                    plan.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlight
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm sm:text-base ${
                          plan.highlight
                            ? "text-primary-foreground/90"
                            : "text-foreground/80"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
