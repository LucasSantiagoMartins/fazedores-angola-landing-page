import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePlans } from "@/hooks/usePlans";
import { PlanSkeleton } from "./PlanSkeleton";
import { PlanCard } from "./PlanCard";

export const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { plans, loading } = usePlans();

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

        {/* Slider manual no mobile, Grid no desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-x-auto pb-4 md:pb-0 snap-x scrollbar-hide">
          {loading ? (
            <PlanSkeleton />
          ) : (
            plans?.map((plan, index) => (
              <div
                key={plan.id}
                className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center"
              >
                <PlanCard plan={plan} index={index} isInView={isInView} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
