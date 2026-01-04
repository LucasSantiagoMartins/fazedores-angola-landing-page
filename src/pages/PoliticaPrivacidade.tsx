import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database } from "lucide-react";

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
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: Janeiro de 2024
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
                <Database className="w-5 h-5 text-primary" />
                1. Dados que Coletamos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos os seguintes tipos de informações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Informações de cadastro (nome, email, telefone)</li>
                <li>Dados de localização para conectar você a prestadores próximos</li>
                <li>Histórico de transações e serviços</li>
                <li>Informações do dispositivo e navegador</li>
                <li>Comunicações com suporte ao cliente</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                2. Como Usamos seus Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar pagamentos e transações</li>
                <li>Enviar comunicações importantes sobre sua conta</li>
                <li>Personalizar sua experiência na plataforma</li>
                <li>Garantir a segurança da plataforma</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                3. Proteção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas de segurança robustas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Criptografia de ponta a ponta para dados sensíveis</li>
                <li>Servidores seguros com proteção avançada</li>
                <li>Monitoramento contínuo contra ameaças</li>
                <li>Acesso restrito a dados pessoais</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Compartilhamento de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Compartilhamos seus dados apenas quando necessário:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Com prestadores de serviço para executar o trabalho contratado</li>
                <li>Com processadores de pagamento para transações</li>
                <li>Quando exigido por lei ou autoridades competentes</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Seus Direitos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar exclusão de seus dados</li>
                <li>Exportar seus dados</li>
                <li>Retirar consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Cookies e Tecnologias
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre privacidade, entre em contato: privacidade@fazedoresangola.com
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
