import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Briefcase,
  UserCheck,
  Clock,
  Shield,
  AlertTriangle,
  User,
  ClipboardList,
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
              Regras e responsabilidades para garantir a qualidade e segurança
              na plataforma.
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
                <UserCheck className="w-5 h-5 text-primary" />
                1. Obrigações do Prestador
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Executar serviços com competência, zelo e dentro do prazo
                  acordado.
                </li>
                <li>
                  Fornecer informações verdadeiras sobre identidade,
                  qualificações e disponibilidade.
                </li>
                <li>
                  Utilizar materiais, equipamentos e técnicas adequadas, salvo
                  acordo diferente aprovado pelo cliente.
                </li>
                <li>
                  Comunicar imediatamente atrasos ou problemas na execução.
                </li>
                <li>Respeitar normas de conduta, ética e comunicação.</li>
                <li>
                  Cumprir obrigações legais e fiscais relativas aos serviços.
                </li>
                 <blockquote className="mt-4 p-3 border-l-4 border-primary bg-primary/10 text-sm text-foreground">  Não aceitar, executar ou negociar serviços fora da plataforma,
                  exceto comunicação pontual via telefone ou WhatsApp, somente
                  para detalhes do serviço, confirmação de informações ou
                  orientação até o local. É estritamente proibido realizar ações
                  que violem as regras da plataforma, incluindo pagamentos por
                  meios não autorizados ou acordos paralelos.
              </blockquote>
                
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                2. Obrigações do Cliente
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Fornecer informações claras e verdadeiras.
                </li>
                <li>
                  Respeitar prazos e orientações do prestador para a execução.
                </li>
                <li>
                  Efetuar pagamentos conforme regras e prazos da plataforma.
                </li>
                <li>
                  Não solicitar ou realizar serviços que violem as normas da
                  plataforma.
                </li>
                <li>
                  Manter comunicação respeitosa e confirmar a conclusão do
                  serviço quando finalizado.
                </li>
                <li>Fornecer feedback honesto e responsável.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                3. Agendamento, Recusas e Cancelamentos
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Clientes devem respeitar prazos mínimos para agendamento.
                </li>
                <li>
                  Prestador pode recusar serviço antes do início ou solicitar
                  cancelamento após aceitação, mediante justificativa válida.
                </li>
                <li>
                  Cancelamentos ou não comparecimento frequentes sem
                  justificativa podem gerar penalidades, restrições ou
                  suspensão.
                </li>
                <li>
                  A plataforma pode intervir em casos recorrentes para mediar
                  conflitos.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-primary" />
                4. Qualidade, Conformidade e Problemas
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Serviços devem ser prestados conforme o que foi acordado e
                  dentro dos padrões de qualidade esperados.
                </li>
                <li>
                  Problemas e não conformidades devem ser reportados
                  imediatamente via aplicativo para moderação.
                </li>
                <li>
                  A simples não confirmação da conclusão pelo cliente não gera
                  direito a reembolso automaticamente.
                </li>
                <li>
                  A plataforma analisará problemas e poderá determinar correção,
                  ajuste de valores, retenção de valores ou outras medidas
                  cabíveis.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                5. Responsabilidades Legais e Limitações
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  O Prestador é responsável pelos seus atos e omissões durante a
                  execução do serviço.
                </li>
                <li>
                  O Cliente é responsável pela veracidade das informações
                  fornecidas.
                </li>
                <li>
                  A Fazedores Angola atua como **intermediadora tecnológica** e
                  não se responsabiliza por serviços ou negociações feitas fora
                  do ambiente oficial da plataforma, salvo exigência legal.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                6. Medidas e Consequências
              </h2>
              <p className="text-muted-foreground mb-4">
                O descumprimento das normas pode gerar:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Advertência formal.</li>
                <li>
                  Restrição temporária de funcionalidades ou redução de
                  visibilidade.
                </li>
                <li>
                  Suspensão ou bloqueio permanente da conta, em casos graves ou
                  reincidência.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Disposições Finais
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estas normas aplicam-se a todos os usuários, serviços e
                pagamentos realizados na Fazedores Angola. As normas atualizadas
                passam a valer imediatamente após a sua publicação.
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
