import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { XCircle, Clock, AlertTriangle, User, Briefcase } from "lucide-react";

const PoliticaCancelamento = () => {
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
              <XCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Política de Cancelamento – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Regras e fluxo de cancelamento de serviços para clientes e
              prestadores.
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
                <User className="w-5 h-5 text-primary" />
                Cancelamento pelo Cliente
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clientes podem cancelar solicitações de serviço **pendentes ou
                já aceitas** pelo prestador, mediante **justificativa
                plausível**.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Confirmação de conclusão de serviço
                  </span>{" "}
                  Para serviços que exigem confirmação de conclusão, o cliente
                  deve reportar um problema usando a funcionalidade na
                  plataforma. A simples não confirmação da conclusão não gera
                  cancelamento automático.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamento 100% Antecipado:
                  </span>{" "}
                  Em casos de cancelamento após a aceitação, o cliente pode ser
                  elegível ao estorno total do valor. Este reembolso será
                  concedido somente após análise detalhada e decisão final da
                  equipe da plataforma.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Cancelamento pelo Prestador
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prestadores podem cancelar solicitações já aceitas ou em
                andamento, mediante **justificativa plausível**.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Serviço em Andamento:
                  </span>{" "}
                  Cancelamentos quando o serviço já foi iniciado são
                  considerados graves e serão analisados individualmente pela
                  equipa da plataforma para determinar responsabilidades e
                  medidas.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Justificativa:
                  </span>{" "}
                  A justificativa deve ser clara e verdadeira para evitar
                  penalidades.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Penalidades e Restrições
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancelamentos frequentes, injustificados ou em desacordo com as
                normas da plataforma podem resultar em:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Clientes:
                  </span>{" "}
                  Impedimento temporário de realizar novas solicitações de
                  serviço.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Prestadores:
                  </span>{" "}
                  Impedimento temporário de receber novas solicitações de
                  serviço.
                </li>
                <li>
                  Todos os problemas e cancelamentos são registrados para
                  análise do histórico e aplicação de medidas.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Processo de Estorno
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Em casos de estorno determinado pela plataforma (após análise do
                cancelamento e pagamento antecipado), o tempo de processamento
                pode variar dependendo das instituições bancárias envolvidas
                sendo assim processados em até 10 dias úteis após decisão final.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCancelamento;
