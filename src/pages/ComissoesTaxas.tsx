import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Percent,
  Wallet,
  DollarSign,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

const ComissoesTaxas = () => {
  const infoTaxas = [
    {
      icon: Percent,
      title: "Comissão de Intermediação",
      value: "5%",
      description:
        "Calculada sobre o valor total de cada serviço concluído através da plataforma.",
    },
    {
      icon: DollarSign,
      title: "Taxas para Clientes",
      value: "0%",
      description:
        "Os clientes não pagam qualquer taxa à plataforma. O pagamento do serviço é feito 100% ao fazedor.",
    },
    {
      icon: Wallet,
      title: "Responsabilidade",
      value: "Fazedor",
      description:
        "O prestador recebe o valor total do cliente e é responsável por transferir a comissão para a plataforma.",
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
              Transparência total sobre como funciona a sustentabilidade do
              nosso ecossistema.
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
                className="bg-card rounded-[2rem] p-6 md:p-8 border border-border flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <taxa.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {taxa.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {taxa.description}
                  </p>
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
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Prazos e Restrições de Conta
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                  <p className="text-foreground font-medium">
                    Janela de Pagamento: 48 Horas
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Após concluir um serviço, o fazedor tem até 48 horas para
                    liquidar a comissão de 5% à plataforma.
                  </p>
                </div>

                <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
                  <li>
                    <span className="font-semibold text-foreground">
                      Inatividade da Conta:
                    </span>{" "}
                    Se o prazo de 48 horas expirar sem a liquidação da comissão,
                    a conta será marcada como{" "}
                    <span className="text-destructive font-bold">Inativa</span>.
                    O acesso ao sistema será bloqueado até à regularização.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Bloqueio de Ações:
                    </span>{" "}
                    Enquanto houver uma comissão pendente (mesmo dentro do
                    prazo), o fazedor continuará a receber novas solicitações,
                    mas **não poderá aceitar ou recusar** qualquer novo pedido
                    até que o saldo anterior seja liquidado.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">
                      Fluxo Direto:
                    </span>{" "}
                    Reafirmamos que o cliente paga sempre diretamente ao
                    fazedor. A dívida da comissão é um compromisso exclusivo do
                    fazedor para com o Fazedores Angola.
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Conformidade
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  O fazedor é responsável por emitir faturas aos seus clientes e
                  por cumprir as suas obrigações fiscais junto da AGT.
                </li>
                <li>
                  Manter a conta ativa garante o acesso às ferramentas de
                  marketing e edição de perfil profissional.
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
