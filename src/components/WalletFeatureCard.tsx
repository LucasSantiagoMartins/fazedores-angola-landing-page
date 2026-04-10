import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Pagamento com Garantia",
    description:
      "Quando o pagamento é feito de forma 100% antecipada, o valor fica cativo na plataforma até a conclusão do serviço.",
  },
  {
    icon: BarChart3,
    title: "Regras Claras para Todos",
    description:
      "A plataforma organiza os pagamentos e garante transparência, evitando conflitos entre cliente e prestador.",
  },
];

export const WalletFeatureCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              Carteira Fazedores — Garantia e confiança nos pagamentos
            </h3>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Na Fazedores, os pagamentos passam primeiro pela plataforma para
              garantir organização e segurança. Nos casos em que o cliente opta
              pelo pagamento 100% antecipado, o valor fica cativo na Carteira
              Fazedores até a conclusão do serviço. Após a confirmação da
              finalização, o pagamento é então liberado ao prestador, seguindo
              as regras e comissões definidas pela plataforma.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
