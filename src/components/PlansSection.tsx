import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Presença",
    price: "7.500 Kz",
    description: "Plano básico para presença na plataforma.",
    highlight: false,
    features: [
      "Até 1 submissão",
      "Até 1 vídeo produzido (edição básica)",
      "Conteúdos para suas redes",
      "Até 1 imagem promocional",
    ],
  },
  {
    name: "Influência",
    price: "19.900 Kz",
    description: "Plano com maior visibilidade e produção de conteúdo.",
    highlight: true,
    features: [
      "Até 2 submissões",
      "Até 2 vídeos (edição profissional)",
      "Conteúdos para suas redes",
      "Até 2 imagens promocionais",
      "1 publicação nas redes da Fazedores",
    ],
  },
  {
    name: "Escala de Resultados",
    price: "49.890 Kz",
    description: "Plano completo com máximo destaque e suporte dedicado.",
    highlight: false,
    features: [
      "Até 4 submissões",
      "Até 4 vídeos (edição avançada)",
      "Formatos prontos para redes sociais",
      "3 Publicações nas redes da Fazedores",
      "Até 2 imagens promocionais",
    ],
  },
];

export const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="plans"
      className="relative py-16 md:py-28 bg-background-subtle overflow-hidden"
      ref={ref}
    >
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full   opacity-60" />
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
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
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
                {plan.highlight && (
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-4 py-1 px-3 bg-background/20 rounded-full w-fit">
                    Mais Popular
                  </span>
                )}
                <h3
                  className={`font-semibold text-xl sm:text-2xl mb-1 ${
                    plan.highlight
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span
                    className={`text-2xl sm:text-3xl font-bold ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ml-1 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    /mês
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${
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
                        className={`text-sm ${
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
                  className={`mt-8 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-medium whitespace-nowrap text-[13px] sm:text-sm transition-all active:scale-[0.98] ${
                    plan.highlight
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "btn-gradient shadow-glow hover:brightness-110"
                  }`}
                >
                  Assinar {plan.name}
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
