import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import { usePlans } from "@/hooks/usePlans";
import { PlanSkeleton } from "./PlanSkeleton";

export const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { plans, loading } = usePlans();

  return (
    <section
      id="plans"
      className="relative py-16 md:py-28 bg-background-subtle overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Planos para <span className="text-gradient">prestadores</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-stretch">
          {loading ? (
            // Exibe 3 cards de shimmer enquanto carrega
            <>
              {[1, 2, 3].map((i) => (
                <PlanSkeleton key={i} />
              ))}
            </>
          ) : (
            // Exibe os dados reais
            plans?.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full p-6 md:p-8 rounded-3xl glass flex flex-col transition-all duration-300 hover:border-primary/40">
                  <h3 className="font-semibold text-xl sm:text-2xl mb-1 text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-foreground">
                      {new Intl.NumberFormat("pt-AO", {
                        style: "currency",
                        currency: "AOA",
                      }).format(plan.price)}
                    </span>
                    <span className="text-xs ml-1 text-muted-foreground">
                      /mês
                    </span>
                  </div>
                  <p className="text-sm mb-6 text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                        <span className="text-sm text-foreground/80">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://app.fazedoresangola.ao/criar-conta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-medium btn-gradient shadow-glow hover:brightness-110 transition-all"
                  >
                    Assinar {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
