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
} from "lucide-react";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const faqData = [
  {
    category: "Geral e Solicitação",
    icon: HelpCircle,
    questions: [
      {
        question: "Como posso solicitar um serviço?",
        answer:
          "É simples! Abra o aplicativo e descreva o serviço que você precisa — seja pelo nome ou com detalhes. Clique em 'pesquisar' e, em seguida, escolha um dos serviços exibidos na lista. Ao selecionar um serviço, será aberto um popup com duas opções: clique em 'solicitar'. Depois, defina para quando precisa o serviço ou uma data específica. Se quiser, você também pode anexar fotos para que o prestador compreenda melhor o que estás precisando. Por fim, basta aguardar o prestador aceitar a sua solicitação.",
      },
      {
        question: "Quem pode usar a plataforma?",
        answer:
          "É necessário ter mais de 18 anos para criar uma conta na plataforma.",
      },
      {
        question: "Quais são as regras de conduta na plataforma?",
        answer:
          "Consulte os nossos Termos e Condições para ter acesso às regras completas de conduta na plataforma.",
      },
    ],
  },
  {
    category: "Pagamentos e Carteira",
    icon: CreditCard,
    questions: [
      {
        question: "Como funcionam os pagamentos?",
        answer:
          "Você pode optar por pagar pelo aplicativo ou diretamente ao prestador de serviço, dependendo do que for acordado. Se você pagar pelo app, o valor é seguro e só é repassado ao prestador de serviço após a conclusão e a sua aprovação. No caso de pagamento em mão, o prestador de serviços fica responsável por liquidar a comissão em até 4 dias úteis após a conclusão do serviço.",
      },
      {
        question: "O que é a Carteira Fazedores?",
        answer:
          "A Carteira Fazedores foi criada para dar mais praticidade e controlo aos pagamentos dentro da plataforma. Todo valor recebido pelos prestadores passa pela carteira, já com a comissão descontada, permitindo uma visão clara dos ganhos, permitindo também ao usuário fazer depósitos, saques dos seus ganhos, ver o histórico de transações de forma segura e eficiente.",
      },
      {
        question: "Quem paga as comissões na plataforma?",
        answer:
          "As comissões incidem exclusivamente sobre os prestadores de serviços, como remuneração pela utilização da plataforma. Nenhum encargo adicional é transferido aos clientes.",
      },
    ],
  },
  {
    category: "Cancelamento e Reembolso",
    icon: Clock,
    questions: [
      {
        question: "Como funciona o cancelamento de um serviço pelo cliente?",
        answer:
          "O cliente pode cancelar um pedido sem penalidade antes que ele seja aceito. Para pedidos já aceitos, o cliente pode cancelar até 2 vezes por mês, informando o motivo. Consulte a nossa Política de Cancelamento.",
      },
      {
        question: "E se o prestador de serviço cancelar?",
        answer:
          "O prestador pode cancelar um serviço em casos justificados, como imprevistos ou impossibilidade de execução, devendo sempre informar o motivo. Cancelamentos injustificados ou frequentes podem afetar a classificação do prestador. Consulte a nossa Política de Cancelamento.",
      },
      {
        question:
          "Em que casos posso solicitar um reembolso (funcionalidade futura)?",
        answer:
          "Você pode solicitar um reembolso se o serviço não for realizado conforme solicitado, houver falha na comunicação, ou o cancelamento for autorizado pela plataforma. A solicitação deve ser feita em até 5 dias úteis após a conclusão do serviço. Consulte a nossa Política de Reembolso.",
      },
    ],
  },
  {
    category: "Responsabilidade e Avaliações",
    icon: Shield,
    questions: [
      {
        question: "A Fazedores Angola garante a execução perfeita do serviço?",
        answer:
          "A Fazedores Angola atua como intermediária tecnológica e não garante a execução perfeita do serviço. A responsabilidade pela prestação do serviço é exclusivamente do prestador de serviços.",
      },
      {
        question: "Como funciona o sistema de avaliações e feedback?",
        answer:
          "O sistema de avaliações permite que os clientes avaliem os serviços com comentários e uma classificação de 1 a 5 estrelas. A plataforma se reserva o direito de moderar ou remover avaliações que violem os termos, e os prestadores podem contestar avaliações injustas. Consulte a nossa política de avaliações e feedback.",
      },
    ],
  },
  {
    category: "Privacidade",
    icon: Lock,
    questions: [
      {
        question:
          "Quais dados pessoais a plataforma coleta e para que são usados?",
        answer:
          "A plataforma coleta dados como nome, contactos, informações de login, dados de pagamento e histórico de serviços. Esses dados são usados para processar solicitações, gerir pagamentos, personalizar a experiência e melhorar a plataforma. Consulte a nossa Política de Privacidade.",
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
      className="border-b border-border last:border-b-0 overflow-hidden "
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium text-foreground hover:text-primary transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

    
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="text-muted-foreground leading-relaxed"
          >
            <div className="pb-4 pr-6">{answer}</div>
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

      <header className=" pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Perguntas e Respostas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa saber sobre a plataforma Fazedores Angola.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {faqData.map((category, catIndex) => (
              <section
                key={catIndex}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border"
              >
                <div className="flex items-center mb-6 border-b border-border pb-4">
                  <category.icon className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-1">
                  {category.questions.map((item, qIndex) => (
                    <FAQItem
                      key={qIndex}
                      question={item.question}
                      answer={item.answer}
                      delay={0.1 * (catIndex * 3 + qIndex)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PerguntasRespostas;
