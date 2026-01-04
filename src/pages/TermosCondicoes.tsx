import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, CheckCircle } from "lucide-react";

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
              Termos e Condições
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
                <CheckCircle className="w-5 h-5 text-primary" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar a plataforma Fazedores Angola, você concorda em cumprir e ficar vinculado a estes Termos e Condições. Se você não concordar com qualquer parte destes termos, não deverá usar nossos serviços.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                2. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Fazedores Angola é uma plataforma que conecta prestadores de serviços a clientes que necessitam desses serviços. Funcionamos como intermediários, facilitando a comunicação e transações entre as partes.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                3. Cadastro e Conta
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para utilizar nossos serviços, você deve criar uma conta fornecendo informações precisas e atualizadas. Você é responsável por:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades realizadas em sua conta</li>
                <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                4. Obrigações do Usuário
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao usar nossa plataforma, você concorda em:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Não violar leis ou regulamentos aplicáveis</li>
                <li>Não publicar conteúdo falso ou enganoso</li>
                <li>Respeitar outros usuários da plataforma</li>
                <li>Não tentar acessar sistemas não autorizados</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                5. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo da plataforma, incluindo logos, textos, gráficos e software, é propriedade da Fazedores Angola ou de seus licenciadores e está protegido por leis de propriedade intelectual.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                6. Modificações dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor após a publicação na plataforma. O uso continuado após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                7. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes Termos e Condições, entre em contato através do email: suporte@fazedoresangola.com
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
