import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Percent, Wallet, DollarSign, Repeat, Shield } from "lucide-react";

const ComissoesTaxas = () => {
  const infoTaxas = [
    {
      icon: Percent,
      title: "Comissão Única",
      value: "10%",
      description:
        "Aplicada apenas sobre o valor total dos serviços prestados pelos prestadores.",
    },
    {
      icon: DollarSign,
      title: "Taxas para Clientes",
      value: "0%",
      description:
        "Os clientes não pagam taxas adicionais, apenas o valor do serviço acordado.",
    },
    {
      icon: Wallet,
      title: "Natureza da Comissão",
      value: "Remuneração",
      description:
        "Pela intermediação, infraestrutura digital e segurança das transações na plataforma.",
    },
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
              Comissões e Taxas – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Transparência na remuneração da Fazedores Angola pela
              intermediação dos seus serviços.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 mb-12"
          >
            {infoTaxas.map((taxa, index) => (
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
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {taxa.title}
                  </h3>
                  <p className="text-muted-foreground">{taxa.description}</p>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {taxa.value}
                </div>
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
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Repeat className="w-5 h-5 text-primary" />
                Formas de Dedução da Comissão
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamentos Digitais (Multicaixa Express ou Referência):
                  </span>{" "}
                  A comissão é deduzida automaticamente antes de o valor ser
                  liberado na Carteira Fazedores do prestador.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamento em Mão:
                  </span>{" "}
                  O prestador deve registrar o pagamento recebido. A comissão de
                  10% deve ser quitada pelo prestador através da plataforma, na
                  seção de comissões aplicadas, dentro do prazo de **3 dias
                  úteis**. A plataforma pode deduzir automaticamente do saldo
                  disponível na Carteira Fazedores no momento do registro do
                  serviço concluído.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Observações Importantes
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  O prestador é o único responsável por todas as **obrigações
                  fiscais** relativas aos serviços prestados e receitas geradas.
                </li>
                <li>
                  A Fazedores Angola reserva-se o direito de **revisar a taxa de
                  comissão** mediante **comunicação prévia** aos prestadores.
                </li>
                <li>
                  O uso contínuo da plataforma implica na aceitação
                  incondicional destas condições e de quaisquer futuras revisões
                  comunicadas.
                </li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComissoesTaxas;
