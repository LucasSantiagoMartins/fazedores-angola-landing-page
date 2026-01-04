import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RefreshCcw, Clock, CheckCircle, AlertCircle } from "lucide-react";

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
              Política de Reembolso
            </h1>
            <p className="text-muted-foreground">
              Garantimos sua satisfação com nossos serviços
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Quando o Reembolso é Aplicável
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você pode solicitar reembolso total nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>O prestador não compareceu ao serviço agendado</li>
                <li>O serviço não foi executado conforme acordado</li>
                <li>Houve cobrança duplicada ou erro no valor</li>
                <li>O serviço foi cancelado dentro do prazo gratuito</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Reembolso Parcial
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reembolsos parciais podem ser concedidos quando:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Parte do serviço foi executada de forma satisfatória</li>
                <li>Houve atraso significativo no início do serviço</li>
                <li>Ambas as partes concordam com uma compensação parcial</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Prazo para Solicitar Reembolso
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Até 48 horas</h4>
                  <p className="text-muted-foreground text-sm">
                    Após a conclusão do serviço para serviços presenciais.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Até 7 dias</h4>
                  <p className="text-muted-foreground text-sm">
                    Para serviços digitais ou que requerem verificação posterior.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Até 30 dias</h4>
                  <p className="text-muted-foreground text-sm">
                    Para disputas envolvendo cobrança indevida ou fraude.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Como Solicitar Reembolso
              </h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acesse "Histórico de Serviços" no aplicativo</li>
                <li>Selecione o serviço em questão</li>
                <li>Clique em "Solicitar Reembolso"</li>
                <li>Descreva o motivo detalhadamente</li>
                <li>Anexe evidências se necessário (fotos, mensagens)</li>
                <li>Aguarde a análise em até 5 dias úteis</li>
              </ol>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Forma de Reembolso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os reembolsos são processados da seguinte forma:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Crédito na Carteira Fazedores:</strong> Imediato após aprovação</li>
                <li><strong>Cartão de crédito:</strong> 5 a 10 dias úteis</li>
                <li><strong>Transferência bancária:</strong> 3 a 5 dias úteis</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Situações Não Elegíveis
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reembolsos não serão concedidos quando:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>O serviço foi concluído e aprovado pelo cliente</li>
                <li>O cliente não estava presente no horário agendado</li>
                <li>A insatisfação for subjetiva e não baseada em falhas</li>
                <li>O prazo de solicitação já expirou</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre reembolsos: reembolso@fazedoresangola.com
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaReembolso;
