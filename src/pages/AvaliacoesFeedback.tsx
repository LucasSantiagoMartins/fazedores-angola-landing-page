import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Star,
  MessageSquare,
  ThumbsDown,
  Shield,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const AvaliacoesFeedback = () => {
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
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Avaliações e Feedback – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Transparência e qualidade: como funciona o sistema de reputação da
              nossa comunidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Como Avaliar
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Sistema de Estrelas
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Após a conclusão de cada serviço, o cliente atribui uma nota
                    de 1 a 5 estrelas com base na pontualidade, qualidade e
                    profissionalismo.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Feedback Escrito
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Os comentários são o espaço para detalhar a experiência.
                    Devem ser construtivos e focados no trabalho realizado pelo
                    fazedor.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-destructive" />
                Política de Respeito
              </h2>
              <p className="text-muted-foreground mb-6">
                Para manter a integridade do ecossistema, não toleramos condutas
                que manipulem a veracidade das avaliações:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 p-4 bg-destructive/5   border-l-4 border-destructive">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-sm text-foreground">
                    <strong>Conteúdo Proibido:</strong> Linguagem ofensiva,
                    insultos, discriminação ou exposição de dados privados
                    resultam em remoção imediata.
                  </p>
                </div>
                <div className="flex gap-3 p-4 bg-destructive/5   border-l-4 border-destructive">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-sm text-foreground">
                    <strong>Fraude:</strong> É proibido criar avaliações falsas
                    para benefício próprio ou de terceiros. A manipulação do
                    ranking compromete a conta do utilizador.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Impacto na Plataforma
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4 text-primary" />
                    Moderação Ativa
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A nossa equipa analisa denúncias de feedbacks injustos ou
                    agressivos, garantindo que a reputação do prestador seja
                    protegida contra abusos.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Penalizações
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comportamentos repetidos ou avaliações abusivas podem levar
                    à perda de visibilidade nos resultados de busca ou suspensão
                    da conta.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvaliacoesFeedback;
