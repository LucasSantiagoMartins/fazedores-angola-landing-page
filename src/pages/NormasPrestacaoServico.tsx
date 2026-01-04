import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, UserCheck, Clock, Shield, AlertTriangle, Award } from "lucide-react";

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
              Normas de Prestação de Serviço
            </h1>
            <p className="text-muted-foreground">
              Padrões de qualidade para todos os prestadores
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
                <UserCheck className="w-5 h-5 text-primary" />
                Requisitos para Prestadores
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para ser um prestador na plataforma Fazedores Angola, você deve:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Ter idade mínima de 18 anos</li>
                <li>Possuir documento de identificação válido</li>
                <li>Fornecer informações verídicas e atualizadas</li>
                <li>Possuir habilidades comprovadas na área de atuação</li>
                <li>Manter telefone e email ativos para comunicação</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Padrões de Qualidade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo prestador deve seguir estes padrões:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Executar serviços com profissionalismo e excelência</li>
                <li>Utilizar materiais de qualidade quando aplicável</li>
                <li>Manter comunicação clara e respeitosa com clientes</li>
                <li>Cumprir os prazos acordados</li>
                <li>Fornecer orçamentos transparentes e justos</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Pontualidade e Compromisso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Expectativas de pontualidade:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Chegar no horário agendado (tolerância de 10 minutos)</li>
                <li>Informar com antecedência sobre atrasos inevitáveis</li>
                <li>Reagendar com pelo menos 24 horas de antecedência quando necessário</li>
                <li>Confirmar o serviço com o cliente no dia anterior</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Conduta Profissional
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comportamentos esperados:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Apresentar-se de forma adequada e profissional</li>
                <li>Respeitar a privacidade e propriedade do cliente</li>
                <li>Não fumar, beber ou usar substâncias durante o serviço</li>
                <li>Não solicitar pagamentos fora da plataforma</li>
                <li>Não compartilhar dados do cliente com terceiros</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Condutas Proibidas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As seguintes ações resultarão em penalidades ou desativação:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Assédio ou comportamento inadequado</li>
                <li>Fraude ou falsificação de informações</li>
                <li>Cobranças não autorizadas ou valores abusivos</li>
                <li>Danos intencionais à propriedade do cliente</li>
                <li>Discriminação de qualquer natureza</li>
                <li>Negociar serviços fora da plataforma</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Sistema de Penalidades
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Advertência</h4>
                  <p className="text-muted-foreground text-sm">
                    Para pequenas infrações ou primeiro ocorrido.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Suspensão Temporária</h4>
                  <p className="text-muted-foreground text-sm">
                    De 24 horas a 30 dias, dependendo da gravidade.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Desativação Permanente</h4>
                  <p className="text-muted-foreground text-sm">
                    Para infrações graves ou reincidência.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Benefícios para Bons Prestadores
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prestadores que mantêm altos padrões recebem:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Destaque nas buscas da plataforma</li>
                <li>Taxas de comissão reduzidas</li>
                <li>Selo de "Prestador Verificado"</li>
                <li>Acesso a clientes premium</li>
                <li>Suporte prioritário</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dúvidas sobre normas de prestação: prestadores@fazedoresangola.com
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
