import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RefreshCcw, Clock, CheckCircle, AlertCircle, TrendingUp, DollarSign } from "lucide-react";

const PoliticaReembolso = () => {
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
              <RefreshCcw className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Política de Reembolso – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Regras e procedimentos para estornos de valores na plataforma.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                1. Elegibilidade para Reembolso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O reembolso é aplicável **somente** nas seguintes condições:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Pagamento 100% Antecipado:</span> O serviço foi pago integralmente e se enquadra nas regras de cancelamento ou falha de execução.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Cancelamento:</span> O serviço foi cancelado após aceitação, mas a plataforma determinou que o cliente tem direito ao estorno (conforme Política de Cancelamento).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Execução Incorreta:</span> Foi verificada uma execução significativa e comprovada incorreta do serviço pelo prestador.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                2. Situações NÃO Elegíveis
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não há direito a reembolso nos seguintes casos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Pagamentos realizados em **50% antecipado ou em mão** (fora do ambiente digital da plataforma).</li>
                <li>Insatisfação subjetiva que não se baseia em uma falha de serviço clara.</li>
                <li>Serviços corretamente concluídos e **confirmados** pelo cliente na plataforma.</li>
                <li>A simples **não confirmação** da conclusão de um serviço pelo cliente.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                3. Processo de Análise e Decisão
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Solicitação:</span> O pedido deve ser feito pelo cliente via funcionalidade de **reportar problema** na plataforma.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Análise:</span> A solicitação será analisada pela equipe da Fazedores Angola. Serão considerados todos os dados, evidências e a comunicação entre as partes.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Decisão Final:</span> A decisão sobre a concessão ou recusa do reembolso é exclusiva e final da plataforma.
                </li>
                <li>Casos de força maior ou contestação por abuso/má-fé serão analisados individualmente.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                4. Prazos e Processamento
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Prazo de Processamento:</span> Os reembolsos aprovados serão processados em até **10 dias úteis** após a comunicação da decisão final ao cliente.
                </li>
                <li>O tempo para o valor estornado aparecer na conta do cliente é variável e depende estritamente dos prazos de processamento das instituições bancárias envolvidas.</li>
                <li>Recursos contestados são analisados individualmente, com a decisão comunicada claramente ao cliente.</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaReembolso;