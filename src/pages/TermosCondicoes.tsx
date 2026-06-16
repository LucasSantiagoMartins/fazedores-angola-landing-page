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
  AlertTriangle,
  Scale,
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
              Última atualização: 16/06/2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Seção 1-3 */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5" /> 1 a 3. Introdução e Objeto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos regulam o acesso à plataforma{" "}
                <strong>Fazedores Angola</strong>. Somos uma plataforma de
                intermediação tecnológica que facilita a ligação entre Clientes
                e Fazedores. Não executamos os serviços anunciados nem atuamos
                como empregadores.
              </p>
            </section>

            {/* Seção 4-6 */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" /> 4 a 6. Contas e
                Responsabilidades
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Utilizadores:</strong> Devem fornecer dados
                  verdadeiros e manter o sigilo de acesso.
                </li>
                <li>
                  <strong>Fazedores:</strong> Responsáveis pela qualidade, ética
                  e execução real dos serviços.
                </li>
                <li>
                  <strong>Clientes:</strong> Comprometidos com o respeito,
                  profissionalismo e cumprimento de acordos.
                </li>
              </ul>
            </section>

            {/* Seção 7-8 */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <DollarSign className="w-5 h-5" /> 7 e 8. Pagamentos e Planos
              </h2>
              <p className="text-muted-foreground mb-2">
                Os pagamentos são efetuados diretamente entre Cliente e Fazedor.
                A Fazedores Angola não intermedeia valores.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Não somos responsáveis por cobranças ou atrasos financeiros.
                </li>
                <li>
                  Os valores de subscrições e serviços digitais (marketing,
                  conteúdo) não são reembolsáveis.
                </li>
              </ul>
            </section>

            {/* Seção 9-12 */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <AlertTriangle className="w-5 h-5" /> 9 a 12. Conteúdo e
                Limitações
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Conteúdo:</strong> O utilizador detém os direitos, mas
                  concede licença para promoção pela plataforma.
                </li>
                <li>
                  <strong>Mediação:</strong> Reclamações podem levar a
                  advertências, suspensões ou exclusão.
                </li>
                <li>
                  <strong>Limitação:</strong> Não garantimos número mínimo de
                  contratos, faturação ou rendimento.
                </li>
              </ul>
            </section>

            {/* Seção 13-15 */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <Scale className="w-5 h-5" /> 13 a 15. Disposições Finais
              </h2>
              <p className="text-muted-foreground mb-4">
                Estes termos podem ser alterados a qualquer momento. Regem-se
                pelas leis da República de Angola e o foro competente é o dos
                tribunais de Angola.
              </p>
              <div className="p-4 bg-muted/50 rounded-2xl border border-border">
                <p className="text-foreground font-semibold">
                  Dúvidas? Entre em contacto:
                </p>
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
