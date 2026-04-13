import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { XCircle, Clock, AlertTriangle, User, Briefcase, MessageSquare, Headphones } from "lucide-react";

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
              Entenda o fluxo de cancelamento e a importância da nossa mediação para a segurança de clientes e fazedores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* 1. Fluxo de Cancelamento */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Estados da Solicitação
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Cada serviço na plataforma está vinculado a um fazedor específico. O cancelamento segue regras rigorosas dependendo do estado do pedido:
                </p>
                <ul className="list-disc list-inside space-y-4 ml-4">
                  <li>
                    <span className="font-semibold text-foreground italic">Solicitação Pendente:</span> O cliente pode cancelar o pedido diretamente pela plataforma enquanto o fazedor designado ainda não tiver confirmado o aceite do serviço.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground italic">Serviço Aceite ou Posterior:</span> Uma vez que o fazedor aceita o compromisso, o cancelamento direto é bloqueado. Qualquer interrupção deve ser solicitada através dos nossos canais oficiais para análise.
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. Como Solicitar o Cancelamento */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-primary" />
                Mediação Obrigatória
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tanto o <span className="font-semibold text-foreground">Cliente</span> quanto o <span className="font-semibold text-foreground">Fazedor</span> podem solicitar o cancelamento após o aceite, entrando em contacto direto com a nossa equipa.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-primary" /> Canais Internos
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Envie a sua situação detalhada através do canal de apoio disponível dentro da própria plataforma para validação imediata.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-primary" /> Canais Externos
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Comunicação via e-mail oficial de suporte ou WhatsApp para reportar incidentes que impeçam a realização do serviço.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Limites e Vistorias */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Limite de Cancelamentos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para manter a integridade da comunidade Fazedores Angola, estabelecemos um <span className="font-semibold text-foreground">limite de 3 cancelamentos mensais</span> por usuário. 
                <br /><br />
                Ao atingir este limite, a conta entrará automaticamente em um processo de <span className="font-semibold text-foreground">vistoria técnica e análise de comportamento</span> pela nossa equipa de qualidade. Cancelamentos indevidos recorrentes podem resultar em sanções administrativas ou suspensão do acesso.
              </p>
            </section>

            {/* 4. Segurança e Conduta */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Proteção à Agenda do Fazedor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este fluxo existe para prevenir cancelamentos de última hora que geram prejuízos logísticos e perda de outras oportunidades de trabalho para o fazedor. Da mesma forma, protege o cliente contra desistências sem aviso prévio por parte do prestador.
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