import { formatPrice } from "@/utils/currency";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const PlanCard = ({ plan, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 h-full bg-card rounded-3xl"
    >
      <div className="h-full flex flex-col">
        <h3 className="font-semibold text-xl mb-1">{plan.name}</h3>
        <div className="mb-3">
          <span className="text-2xl text-gradient font-medium">
            {formatPrice(plan.price)}
          </span>
        </div>
        <p className="text-xs mb-4 text-muted-foreground leading-relaxed">
          {plan.description}
        </p>
        <ul className="space-y-2 flex-1">
          {plan.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};