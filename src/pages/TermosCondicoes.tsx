import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FileText,
  CheckCircle,
  DollarSign,
  RefreshCcw,
  Handshake,
  ShieldCheck,
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
              Estes Termos regem o uso da plataforma e estabelecem os direitos e
              deveres de clientes e fazedores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                1. Aceitação e Propósito
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Fazedores Angola é um **ecossistema tecnológico de conexão**.
                Ao utilizar os nossos serviços, concorda que a plataforma atua
                como facilitadora de visibilidade e gestão, não sendo parte
                direta na transação financeira do serviço prestado.
              </p>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                2. Pagamentos e Transações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para garantir agilidade no mercado local, o fluxo financeiro
                funciona da seguinte forma:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Pagamento Direto:
                  </span>{" "}
                  O valor total da execução do serviço é pago pelo cliente
                  **diretamente ao Fazedor**, através dos métodos acordados
                  entre ambos (Dinheiro, Express ou Transferência).
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Responsabilidade do Fazedor:
                  </span>{" "}
                  O fazedor é responsável por honrar a comissão ou taxa de
                  utilização da plataforma gerada pela intermediação do serviço.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Independência Financeira:
                  </span>{" "}
                  O Fazedores Angola não retém, não guarda, nem se
                  responsabiliza por valores pagos pelos clientes aos
                  prestadores.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                3. Marketing e Planos de Crescimento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O fazedor investe na sua presença digital através dos nossos
                planos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">
                    Subscrição:
                  </span>{" "}
                  O pagamento efetuado à plataforma refere-se estritamente aos
                  serviços de tecnologia, marketing, edição de conteúdo e
                  ferramentas de gestão.
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Uso de Imagem:
                  </span>{" "}
                  Ao submeter media para edição, o fazedor garante a autoria do
                  trabalho. O Fazedores Angola reserva-se o direito de usar este
                  conteúdo para promover o talento do profissional nas nossas
                  redes.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <RefreshCcw className="w-5 h-5 text-primary" />
                4. Mediação e Conduta
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Embora o pagamento seja direto, a plataforma zela pela
                qualidade:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  Fazedores com histórico de cobranças indevidas ou serviços
                  inacabados serão removidos do ecossistema.
                </li>
                <li>
                  A equipa realiza auditorias em caso de reclamações para
                  verificar se o acordo entre as partes foi cumprido.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-primary" />
                5. Lei Aplicável e Suporte
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em conformidade com as leis da República de Angola. Para
                questões sobre faturação de planos ou conduta:
              </p>
              <div className="p-4 bg-muted/50 rounded-2xl border border-border">
                <p className="text-foreground font-medium">
                  contacto@fazedoresangola.com
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Luanda, Angola
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
