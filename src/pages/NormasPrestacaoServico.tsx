import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Briefcase,
  UserCheck,
  Shield,
  AlertTriangle,
  User,
  Wallet,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const NormasPrestacaoServico = () => {
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
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Normas de Prestação de Serviço – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Diretrizes oficiais sobre pagamentos, comissões e conduta
              profissional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                1. Política de Pagamento e Comissão
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Handshake className="w-4 h-4 text-primary" />
                    Pagamento ao Prestador
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O pagamento pelo serviço executado é feito pelo cliente
                    diretamente ao prestador (fazedor). A plataforma não retém o
                    valor do serviço, sendo a transação de inteira
                    responsabilidade das partes.
                  </p>
                </div>
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                    Comissão Obrigatória
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O prestador deve pagar a taxa de serviço ao Fazedores Angola
                    por cada trabalho fechado. O não pagamento ou atrasos
                    recorrentes impossibilitam a recepção de novas solicitações.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                2. Obrigações do Fazedor
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Executar os serviços com transparência e respeitar o orçamento
                  inicial.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Conclusão do Serviço:
                  </span>{" "}
                  É obrigação do prestador marcar o serviço como concluído no
                  sistema assim que o trabalho for finalizado.
                </li>
                <li>
                  Reportar o valor real recebido para o cálculo correto da
                  comissão.
                </li>
                <li>
                  Manter uma conduta ética e profissional durante todo o
                  atendimento.
                </li>
              </ul>

              <div className="mt-6 p-5 bg-destructive/5 border-l-4 border-destructive rounded-r-xl space-y-3">
                <h4 className="text-sm font-bold text-destructive flex items-center gap-2">
                  <Shield className="w-4 h-4" /> AVISO DE TOLERÂNCIA ZERO
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  Cancelamentos indevidos resultam na suspensão imediata e
                  permanente da conta, sem aviso prévio.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                3. Obrigações do Cliente
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Garantir o pagamento integral ao prestador conforme o
                  acordado.
                </li>
                <li>Facilitar o acesso do profissional ao local do serviço.</li>
                <li>
                  Denunciar à plataforma caso o prestador solicite pagamentos
                  "por fora" para evitar as taxas do sistema.
                </li>
                <li>
                  Avaliar com honestidade o prestador após a confirmação da
                  conclusão.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-destructive" />
                4. Monitoramento e Sanções
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-destructive mb-2 text-sm uppercase">
                    Aviso
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Aplicado em casos de atrasos no reporte de conclusão ou
                    falhas leves de comunicação.
                  </p>
                </div>
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-destructive mb-2 text-sm uppercase">
                    Bloqueio
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Aplicado por fraude financeira, cancelamentos falsos após
                    aceitação ou comportamento abusivo.
                  </p>
                </div>
              </div>
            </section>

           

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                O Fazedores Angola é um intermediário tecnológico. A relação de
                prestação de serviço é estabelecida exclusivamente entre cliente
                e fazedor. Todas as obrigações fiscais decorrentes da transação
                são da responsabilidade do prestador.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NormasPrestacaoServico;
