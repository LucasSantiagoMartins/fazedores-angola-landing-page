import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database, Server, Settings } from "lucide-react";

const PoliticaPrivacidade = () => {
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Política de Privacidade – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              A Fazedores Angola protege a privacidade em conformidade com a
              legislação angolana.
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
                <Database className="w-5 h-5 text-primary" />
                1. Dados Pessoais Coletados
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Nome completo e dados de identificação.</li>
                <li>
                  Contactos (telefone e e-mail), dados de login e autenticação.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Informações de Pagamento e Transações:
                  </span>{" "}
                  Incluindo contas bancárias e carteiras móveis para viabilizar
                  saques e processamento de comissões.
                </li>
                <li>
                  Histórico de serviços solicitados, prestados e avaliações
                  realizadas.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                2. Finalidade da Coleta
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos os seus dados exclusivamente para as seguintes
                finalidades:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Processar solicitações e intermediar a prestação de serviços.
                </li>
                <li>
                  Armazenar informações de pagamento de forma segura para
                  viabilizar transações.
                </li>
                <li>
                  Permitir a comunicação essencial entre clientes e prestadores.
                </li>
                <li>
                  Garantir a conformidade legal e a prevenção rigorosa de
                  fraudes.
                </li>
                <li>
                  Melhorar continuamente a sua experiência e os recursos da
                  plataforma.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                3. Conservação e Segurança
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A sua segurança é a nossa prioridade.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Os dados são armazenados em sistemas altamente seguros.</li>
                <li>
                  O acesso é restrito apenas a colaboradores autorizados,
                  mediante necessidade.
                </li>
                <li>
                  Implementamos medidas técnicas e organizativas robustas para
                  proteger contra acessos não autorizados, perdas ou divulgação
                  indevida.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                4. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos utilizar cookies e tecnologias similares para melhorar a
                navegação, analisar o uso da plataforma e personalizar a sua
                experiência. Você tem a opção de desativá-los no seu navegador,
                reconhecendo que isso pode impactar algumas funcionalidades.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Alterações à Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política pode ser atualizada a qualquer momento. Quaisquer
                alterações significativas serão comunicadas através da
                plataforma. O uso contínuo implica aceitação das novas
                condições.
              </p>
            </section>

           
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
