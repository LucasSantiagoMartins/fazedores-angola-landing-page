import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database, Server, Settings, Share2 } from "lucide-react";

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
              Comprometemo-nos com a proteção dos seus dados em total conformidade 
              com a Lei de Proteção de Dados Pessoais de Angola.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* 1. Dados Coletados */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                1. Informações que Coletamos
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li><span className="font-semibold text-foreground">Identificação:</span> Nome, BI, e dados de contacto para validação de conta.</li>
                <li><span className="font-semibold text-foreground">Conteúdo Multimédia:</span> Imagens e vídeos enviados pelos fazedores para edição e criação de cartazes publicitários.</li>
                <li><span className="font-semibold text-foreground">Dados de Localização:</span> Utilizados para conectar clientes a fazedores próximos em Luanda e outras províncias.</li>
                <li><span className="font-semibold text-foreground">Transações de Planos:</span> Registos de pagamento de subscrições e comissões via Multicaixa Express ou Referência.</li>
              </ul>
            </section>

            {/* 2. Uso dos Dados */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                2. Como Utilizamos os Seus Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os seus dados têm finalidades específicas dentro do nosso ecossistema:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Viabilizar a conexão direta e comunicação entre cliente e fazedor.</li>
                <li>Transformar o material bruto enviado pelos fazedores em conteúdos de marketing profissionais.</li>
                <li>Gerir o estado de atividade da conta com base no histórico de pagamentos de comissões.</li>
                <li>Promover o perfil dos fazedores em redes sociais e canais oficiais da plataforma.</li>
              </ul>
            </section>

            {/* 3. Partilha de Informação */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                3. Partilha de Informação
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Entre Usuários:</span> Partilhamos o contacto do fazedor com o cliente apenas quando uma solicitação é aceite, para permitir o pagamento direto do serviço.
                <br /><br />
                <span className="font-semibold text-foreground">Público:</span> Os cartazes e banners criados pela nossa equipa de design serão públicos para maximizar a sua visibilidade e atrair novos clientes.
              </p>
            </section>

            {/* 4. Segurança */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                4. Segurança e Retenção
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos protocolos de criptografia e servidores seguros para proteger as suas informações. Como não processamos o pagamento direto do serviço (apenas subscrições), não armazenamos dados de cartões bancários de clientes, apenas os comprovativos de pagamento de taxas enviados pelos fazedores.
              </p>
            </section>

            {/* 5. Direitos do Usuário */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                5. Seus Direitos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                De acordo com a legislação angolana, você pode solicitar a qualquer momento o acesso, correção ou eliminação definitiva dos seus dados pessoais dos nossos sistemas de visibilidade através do email oficial: <span className="text-primary font-medium">contacto@fazedoresangola.com</span>.
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