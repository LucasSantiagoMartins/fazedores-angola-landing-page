import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, MessageSquare, ThumbsUp, Award } from "lucide-react";

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
              Avaliações e Feedback
            </h1>
            <p className="text-muted-foreground">
              Sistema de avaliação para garantir qualidade
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
                <Star className="w-5 h-5 text-primary" />
                Sistema de Estrelas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Após cada serviço concluído, tanto clientes quanto prestadores podem avaliar a experiência:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xl">★★★★★</span>
                    <span className="font-medium text-foreground">5 estrelas</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Excelente - Superou expectativas</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xl">★★★★</span>
                    <span className="font-medium text-foreground">4 estrelas</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Muito bom - Atendeu expectativas</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xl">★★★</span>
                    <span className="font-medium text-foreground">3 estrelas</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Regular - Pode melhorar</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xl">★★</span>
                    <span className="font-medium text-foreground">2 estrelas</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Ruim - Abaixo do esperado</p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Comentários
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Além das estrelas, você pode deixar comentários detalhados:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Descreva sua experiência de forma honesta e construtiva</li>
                <li>Mencione pontos positivos e áreas de melhoria</li>
                <li>Comentários devem ser respeitosos e relevantes</li>
                <li>Comentários ofensivos serão removidos</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-primary" />
                Diretrizes de Avaliação
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para manter a qualidade das avaliações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Avalie apenas serviços que você realmente utilizou</li>
                <li>Seja justo e imparcial na sua avaliação</li>
                <li>Não utilize avaliações para chantagear ou pressionar</li>
                <li>Relate problemas graves ao suporte, não apenas nas avaliações</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Impacto das Avaliações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As avaliações têm impacto direto na plataforma:
              </p>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Para Prestadores</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Maior visibilidade para prestadores bem avaliados</li>
                    <li>Acesso a benefícios exclusivos</li>
                    <li>Taxas reduzidas para top performers</li>
                  </ul>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-2">Para Clientes</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Clientes bem avaliados têm prioridade no atendimento</li>
                    <li>Prestadores preferem clientes com bom histórico</li>
                    <li>Descontos especiais para avaliadores frequentes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contestação de Avaliações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se você acredita que recebeu uma avaliação injusta:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>Acesse seu perfil e vá para "Minhas Avaliações"</li>
                <li>Selecione a avaliação em questão</li>
                <li>Clique em "Contestar Avaliação"</li>
                <li>Forneça evidências e explicações</li>
                <li>Nossa equipe analisará em até 7 dias úteis</li>
              </ol>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dúvidas sobre avaliações: avaliacoes@fazedoresangola.com
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AvaliacoesFeedback;
