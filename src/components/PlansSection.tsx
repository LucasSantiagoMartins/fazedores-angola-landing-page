import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { usePlans } from "@/hooks/usePlans";
import { PlanSkeleton } from "./PlanSkeleton";
import { PlanCard } from "./PlanCard";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const PlansSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { plans, loading } = usePlans();

  const sortedPlans = useMemo(() => {
    if (!plans) return [];

    const proPlan = plans.find((p) => p.type === "PRO");
    const otherPlans = plans.filter((p) => p.type !== "PRO");

    if (!proPlan) return plans;

    const result = [...otherPlans];
    result.splice(1, 0, proPlan);

    return result;
  }, [plans]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      scrollRef.current.scrollTo({
        left:
          direction === "right"
            ? scrollLeft + clientWidth
            : scrollLeft - clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="plans"
      className="py-6 md:py-10 bg-background-subtle overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Planos para <span className="text-gradient">Fazedores</span>
          </h2>

          <p className="text-foreground text-lg">
            Escolha o plano ideal para alavancar o seu negócio
          </p>
        </div>

        <div className="relative pt-6">
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-x-auto md:overflow-visible snap-x md:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden items-stretch"
          >
            {loading
              ? [...Array(3)].map((_, i) => <PlanSkeleton key={i} />)
              : sortedPlans?.map((plan, index) => {
                  const isInfluencia = plan.type === "PRO";

                  return (
                    <div
                      key={plan.id}
                      className="relative min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center pt-4"
                    >
                      {isInfluencia && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-6 py-1 rounded-full z-20 shadow-xl uppercase whitespace-nowrap">
                          Mais Popular
                        </div>
                      )}

                      <div
                        className={`h-full p-[2px] rounded-[2.5rem] ${
                          isInfluencia
                            ? "bg-gradient-to-b from-primary to-primary/50 md:scale-105 shadow-2xl"
                            : "bg-transparent border border-white/5"
                        }`}
                      >
                        <div className="h-full bg-background rounded-[2.4rem] overflow-hidden">
                          <PlanCard
                            plan={plan}
                            index={index}
                            isInView={isInView}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-[50%] z-30 hidden size-10 items-center justify-center rounded-full bg-background border border-primary text-primary shadow-lg md:hidden"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-[50%] z-30 flex size-10 items-center justify-center rounded-full bg-background text-white shadow-lg md:hidden"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
