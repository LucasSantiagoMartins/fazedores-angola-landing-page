import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Receipt, Shield, Zap, ListChecks, Lock } from "lucide-react";
import transactionsImage from "@/assets/transactions.webp";
import transactionsResumeImage from "@/assets/transactions_resume.webp";

const features = [
  {
    icon: Receipt,
    text: "Histórico detalhado — veja cada pagamento, comissão aplicada e saque.",
  },
  {
    icon: Shield,
    text: "Segurança garantida — todas as transações são registradas com transparência.",
  },
  {
    icon: Zap,
    text: "Organização financeira — tenha uma visão clara do fluxo de transações num só lugar.",
  },
];

const infoCards = [
  {
    icon: ListChecks,
    title: "Visão Geral Financeira",
    description:
      "Veja rapidamente gastos, ganhos, valores sacados e outras informações importantes.",
  },
  {
    icon: Lock,
    title: "Dados Confiáveis",
    description:
      "As informações exibidas refletem transações registadas e validadas na plataforma.",
  },
];

export const TransactionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="transactions"
      className="py-20 md:py-32 bg-muted relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transações Fazedores —
              <span className="text-gradient">
                {" "}
                histórico financeiro completo
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Todas{" "}
              <strong className="text-foreground">
                Transações Na Carteira Fazedores
              </strong>{" "}
              ficam registadas de forma organizada e acessível. Consulte
              pagamentos, ganhos e gastos, acompanhe o estado de cada operação e
              tenha uma visão clara de tudo o que acontece financeiramente na
              plataforma.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-foreground/80 pt-2">{feature.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="flex gap-4">
              {/* First Phone - Transactions */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-48 md:w-56 aspect-[9/19] bg-secondary rounded-[2.5rem] p-2 shadow-card"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-full z-10" />
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img
                    src={transactionsImage}
                    alt="Histórico de Transações"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Second Phone - Resume */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="relative w-48 md:w-56 aspect-[9/19] bg-secondary rounded-[2.5rem] p-2 shadow-card mt-12"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-full z-10" />
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img
                    src={transactionsResumeImage}
                    alt="Resumo Financeiro"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards - Alterado para Branco */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Visão Geral das Transações
              </h3>

              <p className="text-muted-foreground mb-8">
                Além do histórico detalhado, a área de transações apresenta uma
                visão clara dos principais números financeiros. São exibidos
                valores como gastos, ganhos, total sacado e outros dados
                importantes, ajudando a entender rapidamente a situação
                financeira dentro da plataforma.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {infoCards.map((card, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">
                        {card.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
