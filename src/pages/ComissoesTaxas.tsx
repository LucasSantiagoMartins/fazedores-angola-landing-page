import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Percent, CreditCard, Wallet, Calculator } from "lucide-react";

const ComissoesTaxas = () => {
  const taxas = [
    {
      icon: Wallet,
      title: "Taxa de Serviço",
      value: "10%",
      description: "Aplicada sobre o valor total de cada serviço prestado através da plataforma."
    },
    {
      icon: CreditCard,
      title: "Taxa de Transferência",
      value: "1.5%",
      description: "Aplicada ao transferir fundos da carteira Fazedores para sua conta bancária."
    },
    {
      icon: Calculator,
      title: "Taxa de Processamento",
      value: "2%",
      description: "Taxa aplicada em pagamentos via cartão de crédito ou débito."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Percent className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comissões e Taxas
            </h1>
            <p className="text-muted-foreground">
              Transparência total sobre nossos custos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 mb-12"
          >
            {taxas.map((taxa, index) => (
              <motion.div
                key={taxa.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <taxa.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{taxa.title}</h3>
                  <p className="text-muted-foreground">{taxa.description}</p>
                </div>
                <div className="text-3xl font-bold text-primary">{taxa.value}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Como funcionam as comissões?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Fazedores Angola cobra uma comissão sobre cada transação realizada com sucesso na plataforma. Esta comissão nos permite manter e melhorar continuamente nossos serviços.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>As taxas são automaticamente calculadas e deduzidas</li>
                <li>Você sempre verá o valor líquido antes de aceitar um serviço</li>
                <li>Não há taxas ocultas ou cobranças surpresa</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Isenções e Descontos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em algumas situações, você pode ter direito a taxas reduzidas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Prestadores com alta avaliação podem ter taxas reduzidas</li>
                <li>Promoções especiais podem oferecer períodos com taxas zero</li>
                <li>Programas de fidelidade oferecem benefícios progressivos</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Pagamento das Taxas
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As taxas são deduzidas automaticamente do valor do serviço antes do depósito na sua carteira Fazedores. Você não precisa se preocupar com pagamentos separados de taxas.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComissoesTaxas;
