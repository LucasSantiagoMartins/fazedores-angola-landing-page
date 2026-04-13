import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  CreditCard,
  User,
  Shield,
  BookOpen,
  Wallet,
  Clock,
  Tag,
  TrendingUp,
  Lock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const faqData = [
  {
    category: "Sobre a Plataforma",
    icon: HelpCircle,
    questions: [
      {
        question: "O que é a Fazedores Angola?",
        answer:
          "É uma plataforma que conecta clientes a prestadores de serviços qualificados (Fazedores) em Angola. Facilitamos o encontro entre quem precisa de um serviço (como canalização, eletricidade ou consultoria) e quem sabe fazer, garantindo visibilidade e organização.",
      },
      {
        question: "A Fazedores Angola emprega os prestadores?",
        answer:
          "Não. Somos uma intermediária tecnológica. Cada prestador é um profissional independente ou empresa que utiliza a nossa tecnologia para gerir o seu próprio negócio e encontrar novos clientes.",
      },
    ],
  },
  {
    category: "Pagamentos e Comissões",
    icon: Wallet,
    questions: [
      {
        question: "Como faço para pagar o prestador?",
        answer:
          "O pagamento é feito diretamente ao prestador de serviço. Você pode combinar o método que for mais prático: dinheiro vivo, transferência bancária ou MultiCaixa Express. A plataforma não retém o valor do serviço no momento da transação.",
      },
      {
        question: "Sou prestador, como pago a comissão da plataforma?",
        answer:
          "Após receber o pagamento do cliente, você deve reportar a conclusão do serviço no aplicativo e efetuar o pagamento da taxa de intermediação (comissão) à Fazedores Angola. Este pagamento é essencial para manter o seu perfil ativo e com boa visibilidade.",
      },
      {
        question: "O que acontece se o prestador não pagar a comissão?",
        answer:
          "O não pagamento recorrente ou a ocultação de serviços realizados leva à restrição das funcionalidades da conta e, em casos graves, ao banimento permanente do profissional da plataforma.",
      },
    ],
  },
  {
    category: "Fluxo de Serviço",
    icon: Clock,
    questions: [
      {
        question: "Como o serviço é finalizado no sistema?",
        answer:
          "A responsabilidade de marcar o serviço como 'Concluído' é do prestador. Assim que o trabalho terminar e o pagamento for recebido, o fazedor deve atualizar o estado no app para que o cliente possa deixar a sua avaliação.",
      },
      {
        question: "Posso cancelar uma solicitação?",
        answer:
          "Sim. Ambos podem cancelar, mas deve haver uma justificativa justa. Cancelamentos frequentes por parte do prestador após aceitar o serviço prejudicam a sua pontuação de confiança e podem gerar suspensões.",
      },
    ],
  },
  {
    category: "Segurança e Qualidade",
    icon: Shield,
    questions: [
      {
        question: "O serviço ficou mal feito, o que eu faço?",
        answer:
          "O prestador é o responsável direto pela qualidade. Recomendamos que reporte o problema imediatamente via chat na plataforma. Se houver falha técnica comprovada em até 48h, o prestador deve retificar o serviço. A nossa equipa de suporte pode mediar casos de conflito.",
      },
      {
        question: "É seguro deixar o prestador entrar na minha casa?",
        answer:
          "Trabalhamos para verificar perfis, mas recomendamos sempre: verifique as avaliações de outros clientes no perfil do fazedor, confirme a identidade dele ao chegar.",
      },
      {
        question: "Posso negociar 'por fora' da plataforma?",
        answer:
          "Para sua segurança, mantenha o histórico de negociação e o registro do serviço dentro da plataforma. Serviços feitos 'por fora' não possuem suporte de mediação da Fazedores Angola nem contam pontos para a reputação do profissional.",
      },
    ],
  },
];

const FAQItem = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      className="border-b border-border last:border-b-0"
    >
      <button
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-foreground hover:text-primary transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PerguntasRespostas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Perguntas e Respostas
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Central de ajuda da Fazedores Angola. Tire as suas dúvidas sobre pagamentos, segurança e como crescer na plataforma.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {faqData.map((category, catIndex) => (
              <section
                key={catIndex}
                className="bg-card rounded-[2rem] p-6 md:p-8 shadow-lg border border-border"
              >
                <div className="flex items-center mb-6 border-b border-border pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>

                <div className="bg-white rounded-2xl px-6 border border-border shadow-sm">
                  {category.questions.map((item, qIndex) => (
                    <FAQItem
                      key={qIndex}
                      question={item.question}
                      answer={item.answer}
                      delay={0.1 * (catIndex * 2 + qIndex)}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* Card de CTA para Suporte Direto */}
            <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground mb-6">
                A nossa equipa de suporte está pronta para ajudar prestadores e clientes.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md">
                Contactar Suporte via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PerguntasRespostas;