import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { usePlans } from "@/hooks/usePlans";
import { PlanSkeleton } from "./PlanSkeleton";

export const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { plans, loading } = usePlans();

  return (
    <section id="plans" className="py-16 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Planos para prestadores
          </h2>
        </div>

        {/* Grid SEM GAP, com bordas divididas (divide) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-3xl overflow-hidden max-w-5xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {loading ? (
            <div className="col-span-full p-10 text-center">Carregando...</div>
          ) : (
            plans?.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 h-full bg-background"
              >
                <div className="h-full flex flex-col">
                  <h3 className="font-semibold text-2xl mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">
                      {new Intl.NumberFormat("pt-AO", {
                        style: "currency",
                        currency: "AOA",
                      }).format(plan.price)}
                    </span>
                  </div>
                  <p className="text-sm mb-6 text-muted-foreground">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-8 flex items-center justify-center h-11 rounded-full bg-primary text-white font-medium"
                  >
                    Assinar <ArrowRight className="ml-2 w-4 h-4" />
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
