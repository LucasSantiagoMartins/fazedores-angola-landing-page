import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

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
    <section id="plans" className="relative py-16 md:py-28 bg-background-subtle overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-radial-primary opacity-60" />
      <div className="container mx-auto px-4 relative">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group gpu h-full"
            >
              <div
                className={`h-full p-6 md:p-8 rounded-3xl transition-all duration-300 flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass hover:border-primary/40 hover:shadow-card"
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
                      ? "text-primary-foreground/85"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 flex-1">
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

                <a
                  href="https://app.fazedoresangola.ao/criar-conta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-gradient-primary text-primary-foreground shadow-glow"
                  }`}
                >
                  Começar agora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
