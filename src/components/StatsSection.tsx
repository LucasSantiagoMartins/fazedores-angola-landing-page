import { useRef } from "react";
import { Briefcase, Users, Star } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 0,
    label: "Serviços realizados",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Users,
    value: 0,
    label: "Fazedores ativos",
    prefix: "+",
    suffix: "",
  },
  {
    icon: Star,
    value: 95,
    label: "Avaliação",
    prefix: "",
    suffix: "%",
  },
];

const StatItem = ({ stat }: { stat: (typeof stats)[0] }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3 p-2 relative z-10">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>

      <div>
        <p className="text-xl md:text-3xl font-thin text-white tabular-nums">
          {stat.prefix}
          {stat.value}
          {stat.suffix}
        </p>

        <p className="text-[10px] md:text-xs text-white/80 font-thin uppercase tracking-wider mt-1">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-10 md:py-12 bg-gradient-primary overflow-visible relative">
      <img
        src="/provider-man.png"
        alt="Fazedor"
        className="absolute bottom-0 right-0 lg:left-10 lg:right-auto h-[180px] md:h-[240px] lg:h-[420px] w-auto object-contain z-20 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10 flex justify-end">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-auto pr-24 md:pr-0">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
