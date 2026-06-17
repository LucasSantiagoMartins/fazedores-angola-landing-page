import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

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
              TERMOS E CONDIÇÕES DE UTILIZAÇÃO DA PLATAFORMA FAZEDORES ANGOLA
            </h1>
            <p className="text-muted-foreground mb-6">
              Última atualização: 16/06/2026
            </p>
            <div className="bg-primary/5 border border-primary/20 p-4 rounded-3xl max-w-2xl mx-auto">
              <p className="text-sm text-foreground font-medium">
                Ao criar uma conta, aceder ou utilizar a plataforma e os
                serviços da Fazedores Angola, o utilizador declara expressamente
                ter lido, compreendido e aceite integralmente os Termos e
                Condições definidos neste documento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                1. Introdução
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bem-vindo à Fazedores Angola. Os presentes Termos e Condições
                regulam o acesso e utilização da plataforma Fazedores Angola,
                incluindo o website, aplicações, serviços digitais e demais
                funcionalidades disponibilizadas pela empresa. Ao criar uma
                conta, aceder ou utilizar a plataforma, o utilizador declara ter
                lido, compreendido e aceite integralmente os presentes Termos e
                Condições.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                2. Definições
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Plataforma:</strong> Sistema digital Fazedores Angola
                  destinado à ligação entre clientes e prestadores de serviços.
                </li>
                <li>
                  <strong>Cliente:</strong> Pessoa singular ou coletiva que
                  procura contratar serviços através da plataforma.
                </li>
                <li>
                  <strong>Fazedor:</strong> Prestador de serviços registado na
                  plataforma.
                </li>
                <li>
                  <strong>Utilizador:</strong> Qualquer pessoa que utilize a
                  plataforma, independentemente da sua categoria.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                3. Objeto da Plataforma
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Fazedores Angola é uma plataforma tecnológica de intermediação
                e promoção de serviços que facilita a ligação entre clientes e
                prestadores de serviços. A empresa disponibiliza ferramentas de
                divulgação, gestão de perfil profissional, marketing digital,
                produção de conteúdo e outros recursos destinados ao crescimento
                dos prestadores registados. A Fazedores Angola não executa os
                serviços anunciados nem atua como empregadora dos Fazedores.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                4. Criação e Gestão de Conta
              </h2>
              <p className="text-muted-foreground mb-4">
                Para utilizar determinadas funcionalidades da plataforma poderá
                ser necessário criar uma conta. O utilizador compromete-se a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Fornecer informações verdadeiras e atualizadas;</li>
                <li>Manter a confidencialidade dos seus dados de acesso;</li>
                <li>
                  Não utilizar a conta para fins ilícitos ou fraudulentos;
                </li>
                <li>Atualizar os seus dados sempre que necessário.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                A Fazedores Angola reserva-se o direito de suspender ou encerrar
                contas que violem estes Termos.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                5. Responsabilidades dos Fazedores
              </h2>
              <p className="text-muted-foreground mb-4">
                Ao registar-se na plataforma, o Fazedor declara que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Possui capacidade e competência para executar os serviços
                  anunciados;
                </li>
                <li>
                  Disponibilizará informações verdadeiras sobre a sua atividade;
                </li>
                <li>Cumprirá os acordos celebrados com os clientes;</li>
                <li>Atuará com profissionalismo, ética e respeito;</li>
                <li>
                  <strong>
                    Compromete-se a pagar a comissão de intermediação gerada por
                    cada serviço prestado através da plataforma.
                  </strong>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                O Fazedor é o único responsável pela qualidade, execução e
                conclusão dos serviços prestados.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                6. Responsabilidades dos Clientes
              </h2>
              <p className="text-muted-foreground mb-4">
                Os clientes comprometem-se a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Fornecer informações corretas sobre os serviços pretendidos;
                </li>
                <li>Tratar os prestadores com respeito e profissionalismo;</li>
                <li>Cumprir os acordos estabelecidos com os Fazedores;</li>
                <li>
                  <strong>
                    Pagar devidamente pelo serviço prestado, conforme o valor
                    acordado com o Fazedor.
                  </strong>
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                7. Pagamentos e Relação Comercial
              </h2>
              <p className="text-muted-foreground mb-4">
                Salvo indicação expressa em contrário, os pagamentos são
                efetuados diretamente entre Cliente e Fazedor. A Fazedores
                Angola não controla os valores e:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Não é responsável por cobranças realizadas pelos Fazedores;
                </li>
                <li>Não é responsável por atrasos de pagamento;</li>
                <li>
                  Não garante a recuperação de valores pagos entre as partes;
                </li>
                <li>
                  O Fazedor poderá estar sujeito ao pagamento de taxas,
                  comissões ou subscrições relacionadas com a utilização da
                  plataforma.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                8. Planos, Subscrições e Serviços Adicionais
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Fazedores Angola poderá disponibilizar planos pagos, serviços
                de marketing, produção de conteúdo, videomaker, promoção digital
                e outras soluções destinadas ao crescimento dos Fazedores. Os
                valores, benefícios e condições de cada plano serão apresentados
                na plataforma e poderão ser atualizados a qualquer momento. Os
                pagamentos efetuados referentes a subscrições e serviços
                digitais não são reembolsáveis, salvo disposição legal em
                contrário.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                9. Conteúdo e Direitos de Utilização
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao enviar fotografias, vídeos ou outros materiais para a
                plataforma, o utilizador declara possuir os direitos necessários
                para a sua utilização. O utilizador concede à Fazedores Angola
                autorização não exclusiva para utilizar esse conteúdo para fins
                de divulgação, marketing, promoção da plataforma e promoção dos
                serviços do próprio Fazedor. A propriedade intelectual do
                conteúdo permanece com o respetivo titular.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                10. Avaliações e Reclamações
              </h2>
              <p className="text-muted-foreground mb-4">
                Os utilizadores poderão apresentar reclamações. A Fazedores
                Angola poderá analisar as situações e tomar medidas como:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Advertências;</li>
                <li>Suspensão temporária;</li>
                <li>Remoção definitiva da plataforma.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                A atuação da empresa não constitui arbitragem nem substitui os
                mecanismos legais competentes.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                11. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground mb-4">
                A Fazedores Angola atua como intermediária e não garante:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  A concretização de contratos entre clientes e Fazedores;
                </li>
                <li>
                  Um número mínimo de pedidos ou clientes para qualquer Fazedor;
                </li>
                <li>Um nível específico de faturação ou rendimento.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                A empresa não será responsável por danos, prejuízos, perdas
                financeiras ou conflitos decorrentes da relação entre Clientes e
                Fazedores.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                12. Suspensão e Encerramento de Contas
              </h2>
              <p className="text-muted-foreground mb-4">
                A Fazedores Angola poderá suspender ou encerrar contas que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Violem estes Termos;</li>
                <li>Utilizem a plataforma de forma fraudulenta;</li>
                <li>Prejudiquem outros utilizadores;</li>
                <li>
                  Coloquem em risco a reputação ou funcionamento da plataforma.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                13. Alterações dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Fazedores Angola poderá alterar os presentes Termos e
                Condições a qualquer momento. As alterações entrarão em vigor
                após a sua publicação na plataforma. A continuação da utilização
                da plataforma após a atualização constitui aceitação das novas
                condições.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                14. Lei Aplicável e Foro
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Os presentes Termos e Condições são regidos pelas leis da
                República de Angola. Qualquer litígio relacionado com a
                utilização da plataforma será submetido aos tribunais
                competentes de Angola.
              </p>
            </section>

            <section className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                15. Contactos
              </h2>
              <p className="text-muted-foreground mb-4">
                Para esclarecimentos ou questões relacionadas com estes Termos e
                Condições, os utilizadores poderão contactar a Fazedores Angola
                através dos canais oficiais disponibilizados pela empresa.
              </p>
              <div className="p-4 bg-muted/50 rounded-3xl border border-border">
                <p className="text-primary font-medium">
                  contacto@fazedoresangola.com
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosCondicoes;
