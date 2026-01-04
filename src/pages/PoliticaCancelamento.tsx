import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { XCircle, Clock, AlertTriangle, CheckCircle } from "lucide-react";

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
              Política de Cancelamento
            </h1>
            <p className="text-muted-foreground">
              Entenda como funcionam os cancelamentos na plataforma
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
                <Clock className="w-5 h-5 text-primary" />
                Cancelamento pelo Cliente
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Como cliente, você pode cancelar um serviço nas seguintes condições:
              </p>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Cancelamento Gratuito</h4>
                  <p className="text-muted-foreground text-sm">
                    Até 24 horas antes do horário agendado, sem nenhuma taxa.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Cancelamento com Taxa</h4>
                  <p className="text-muted-foreground text-sm">
                    Entre 24 e 2 horas antes: taxa de 25% do valor do serviço.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Cancelamento Tardio</h4>
                  <p className="text-muted-foreground text-sm">
                    Menos de 2 horas antes: taxa de 50% do valor do serviço.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Cancelamento pelo Prestador
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prestadores que cancelam serviços frequentemente podem sofrer penalidades:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Primeiro cancelamento: advertência</li>
                <li>Segundo cancelamento em 30 dias: suspensão temporária de 24h</li>
                <li>Terceiro cancelamento em 30 dias: suspensão de 7 dias</li>
                <li>Cancelamentos recorrentes: análise para possível desativação da conta</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Exceções
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancelamentos sem penalidade são permitidos em casos de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Emergência médica comprovada</li>
                <li>Desastres naturais ou eventos de força maior</li>
                <li>Problemas técnicos da plataforma</li>
                <li>Comportamento inadequado da outra parte</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Como Cancelar um Serviço
              </h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acesse a seção "Meus Serviços" no aplicativo</li>
                <li>Selecione o serviço que deseja cancelar</li>
                <li>Clique em "Cancelar Serviço"</li>
                <li>Selecione o motivo do cancelamento</li>
                <li>Confirme o cancelamento</li>
              </ol>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Dúvidas sobre Cancelamentos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas ou precisar contestar uma taxa de cancelamento, entre em contato com nosso suporte: suporte@fazedoresangola.com
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
