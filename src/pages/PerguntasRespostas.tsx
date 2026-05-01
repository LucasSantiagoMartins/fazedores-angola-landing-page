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
    category: "About the Platform",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Fazedores Angola?",
        answer:
          "It is a platform that connects clients with qualified service providers (Doers) in Angola. We facilitate the meeting between those who need a service (such as plumbing, electricity, or consulting) and those who know how to do it, ensuring visibility and organization.",
      },
      {
        question: "Does Fazedores Angola employ the providers?",
        answer:
          "No. We are a technological intermediary. Each provider is an independent professional or company that uses our technology to manage their own business and find new clients.",
      },
    ],
  },
  {
    category: "Payments and Commissions",
    icon: Wallet,
    questions: [
      {
        question: "How do I pay the provider?",
        answer:
          "Payment is made directly to the service provider. You can agree on the most convenient method: cash, bank transfer, or MultiCaixa Express. The platform does not retain the service amount at the time of the transaction.",
      },
      {
        question: "I am a provider, how do I pay the platform commission?",
        answer:
          "After receiving payment from the client, you must report the service completion in the app and pay the intermediation fee (commission) to Fazedores Angola. This payment is essential to keep your profile active and visible.",
      },
      {
        question: "What happens if the provider doesn't pay the commission?",
        answer:
          "Recurring non-payment or hiding completed services leads to restriction of account features and, in serious cases, permanent banning of the professional from the platform.",
      },
    ],
  },
  {
    category: "Service Flow",
    icon: Clock,
    questions: [
      {
        question: "How is the service completed in the system?",
        answer:
          "The responsibility for marking the service as 'Completed' belongs to the provider. As soon as the work is finished and payment is received, the doer must update the status in the app so the client can leave their review.",
      },
      {
        question: "Can I cancel a request?",
        answer:
          "Yes. Both can cancel, but there must be a fair justification. Frequent cancellations by the provider after accepting the service harm their trust score and may lead to suspensions.",
      },
    ],
  },
  {
    category: "Safety and Quality",
    icon: Shield,
    questions: [
      {
        question: "The service was poorly done, what do I do?",
        answer:
          "The provider is directly responsible for quality. We recommend reporting the issue immediately via the platform chat. If a technical failure is proven within 48h, the provider must rectify the service. Our support team can mediate conflict cases.",
      },
      {
        question: "Is it safe to let the provider into my home?",
        answer:
          "We work to verify profiles, but we always recommend: check reviews from other clients on the doer's profile, and confirm their identity upon arrival.",
      },
      {
        question: "Can I negotiate 'outside' the platform?",
        answer:
          "For your safety, keep the negotiation history and service record within the platform. Services done 'off-platform' have no mediation support from Fazedores Angola and don't count points toward the professional's reputation.",
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
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fazedores Angola Help Center. Get answers to your questions about payments, security, and how to grow on the platform.
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

            {/* Direct Support CTA Card */}
            <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/20 text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to help providers and clients.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md">
                Contact Support via WhatsApp
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
