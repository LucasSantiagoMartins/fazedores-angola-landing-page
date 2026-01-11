import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FileText,
  CheckCircle,
  Smartphone,
  DollarSign,
  RefreshCcw,
  Handshake,
} from "lucide-react";

const TermosCondicoes = () => {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Termos e Condições – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Estes Termos regulam o uso da plataforma e estabelecem direitos e
              deveres.
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
                <CheckCircle className="w-5 h-5 text-primary" />
                1. Aceitação e Objeto
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O uso da plataforma constitui um contrato legal. Você declara
                que leu, entendeu e concorda com estes Termos. Caso não
                concorde, não utilize a plataforma.
              </p>
              <h3 className="font-semibold text-foreground mt-4 mb-2">
                2. Sobre a Plataforma
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Fazedores Angola é uma **intermediária tecnológica** que
                conecta clientes e prestadores de serviços qualificados.
                Oferecemos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                <li>
                  Solicitação e acompanhamento de serviços: Permite que clientes
                  façam pedidos de forma organizada e que prestadores gerenciem
                  sua agenda com facilidade.
                </li>
                <li>
                  Suporte e mediação de conflitos: Protege prestadores e
                  clientes em situações de desacordo, assegurando decisões
                  justas e imparciais.
                </li>
                <li>
                  Histórico e evidência de serviços realizados: Permite aos
                  prestadores mostrar experiência e competências adquiridas, e
                  aos clientes verificar o desempenho e confiabilidade de quem
                  vai contratar.
                </li>
                <li>
                  Avaliações e reputação: Prestadores recebem feedback
                  construtivo dos clientes, fortalecendo sua reputação e
                  permitindo melhoria contínua nos serviços.
                </li>
              </ul>
              <blockquote className="mt-4 p-3 border-l-4 border-primary bg-primary/10 text-sm text-foreground">
                A plataforma não se responsabiliza pela execução do serviço, que
                é de responsabilidade exclusiva do Prestador.
              </blockquote>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                3. Cadastro, Conduta e Responsabilidade
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  É necessário ter **mais de 18 anos** e fornecer informações
                  verdadeiras e atualizadas.
                </li>
                <li>
                  O usuário é responsável por manter a segurança das credenciais
                  de acesso.
                </li>
                <li>
                  Contas podem ser suspensas em caso de fraude ou violação
                  destes Termos.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Regras de Conduta:
                  </span>{" "}
                  É proibido publicar conteúdo ofensivo ou ilegal. Clientes e
                  prestadores devem usar os métodos de pagamento autorizados e
                  agir com profissionalismo.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                4. Pagamentos e Modalidades
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aceitamos Multicaixa Express, Pagamento por Referência e
                Pagamento em Mão (dependendo do serviço). As modalidades são:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamento 100% Antecipado:
                  </span>{" "}
                  Valor pago no início, liberado ao prestador apenas após a
                  confirmação de conclusão do cliente.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamento parcialmente antecipado 50%:
                  </span>{" "}
                  Valor pago parcialmente no início para aquisição de materiais
                  necessários, o restante é pago após a conclusão do serviço.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamento Após a Conclusão:
                  </span>{" "}
                  Feito somente após a finalização. **Não disponível para
                  serviços remotos.**
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <RefreshCcw className="w-5 h-5 text-primary" />
                5. Cancelamentos e Reembolsos
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Clientes:
                  </span>{" "}
                  Podem cancelar solicitações pendentes ou aceitas com
                  justificativa plausível.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Prestadores:
                  </span>{" "}
                  Podem cancelar solicitações já aceitas ou em andamento com
                  justificativa plausível.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Reembolso:
                  </span>{" "}
                  Somente Pagamento 100% Antecipado serão estornados em caso de
                  cancelamento após aceitação, mediante análise da plataforma.
                </li>
                <li>
                  Cancelamentos excessivos ou injustificados podem gerar
                  penalidades e restrições.
                </li>
                <li>
                  Problemas são reportados via funcionalidade na própria plataforma para
                  análise da equipe, o estado do serviço não é alterado
                  automaticamente garantindo que a equipe possa analisar e tomar decisões adequadas.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-primary" />
                6. Disposições Finais
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Mediação:
                  </span>{" "}
                  A plataforma oferece suporte para mediação de conflitos. Se
                  não houver acordo, o recurso é às vias judiciais competentes.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Limitação de Responsabilidade:
                  </span>{" "}
                  A Fazedores Angola não se responsabiliza por serviços mal
                  executados, informações falsas ou interrupções técnicas.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Lei Aplicável:
                  </span>{" "}
                  Estes Termos são regidos pelas leis da República de Angola. O
                  foro competente é a comarca de Luanda.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Proteção de Dados:
                  </span>{" "}
                  O tratamento de dados pessoais é regido pela Política de
                  Privacidade, em conformidade com a legislação angolana.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes Termos e Condições, entre em contato:
                contacto@fazedoresangola.com
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosCondicoes;
