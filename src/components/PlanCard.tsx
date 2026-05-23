import { formatPrice } from "@/utils/currency";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const PlanCard = ({ plan, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-8 h-full bg-card rounded-3xl"
    >
      <div className="h-full flex flex-col">
        <h3 className="font-semibold text-2xl mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-3xl text-gradient font-medium">{formatPrice(plan.price)}</span>
        </div>
        <p className="text-sm mb-6 text-muted-foreground">{plan.description}</p>
        <ul className="space-y-3 flex-1">
          {plan.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
