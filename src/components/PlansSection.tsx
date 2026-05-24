import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { usePlans } from "@/hooks/usePlans";
import { PlanSkeleton } from "./PlanSkeleton";
import { PlanCard } from "./PlanCard";

export const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { plans, loading } = usePlans();

  // Inverte a ordem para que o plano PRO (Influência) apareça sempre primeiro
  const sortedPlans = useMemo(() => {
    if (!plans) return [];
    return [...plans].sort((a, b) => {
      const aIsPro = a.type === "PRO" ? 1 : -1;
      const bIsPro = b.type === "PRO" ? 1 : -1;
      return bIsPro - aIsPro;
    });
  }, [plans]);

  return (
    <section
      id="plans"
      className="py-10 md:py-28 bg-background-subtle"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Planos para <span className="text-gradient">Fazedores</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para alavancar o seu negócio
          </p>
        </div>

        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-x-auto pb-4 md:pb-0 snap-x pr-8 md:pr-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {loading ? (
              <PlanSkeleton />
            ) : (
              sortedPlans?.map((plan, index) => {
                const isInfluencia = plan.type === "PRO";
                return (
                  <div
                    key={plan.id}
                    className={`relative min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center p-[2px] rounded-[2.5rem] transition-all duration-300 ${
                      isInfluencia
                        ? "bg-gradient-to-b from-primary to-primary/50"
                        : "bg-transparent"
                    }`}
                  >
                    {isInfluencia && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-6 py-1 rounded-full z-20 whitespace-nowrap shadow-xl uppercase">
                        Mais Popular
                      </div>
                    )}
                    <div className="h-full bg-background rounded-[2.4rem] overflow-hidden">
                      <PlanCard plan={plan} index={index} isInView={isInView} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background-subtle to-transparent pointer-events-none md:hidden z-10" />
        </div>
      </div>
    </section>
  );
};
