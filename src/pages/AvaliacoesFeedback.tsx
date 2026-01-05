import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Star,
  MessageSquare,
  ThumbsDown,
  Shield,
  TrendingUp,
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
              A sua opinião é essencial para a qualidade e confiança na nossa
              plataforma.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                Regras de Avaliação
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-1 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Avaliação Padrão
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Clientes avaliam prestadores após a conclusão do serviço,
                    usando um sistema de **estrelas** (1 a 5) e um
                    **comentário** opcional.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Critérios para Comentários
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Comentários devem ser **honestos, respeitosos** e baseados
                    estritamente na **experiência real** do serviço prestado.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-500" />
                Comportamento Proibido
              </h2>
              <p className="text-muted-foreground mb-6">
                Para manter um ambiente de confiança, as seguintes práticas são
                estritamente proibidas e sujeitas a moderação:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <blockquote className="mt-4 p-3 border-l-4 border-red-600 bg-red-600/10 text-sm text-foreground">
                  É proibido publicar conteúdo **ofensivo, falso,
                  discriminatório** ou que inclua **informações pessoais** de
                  terceiros.
                </blockquote>
                <blockquote className="mt-4 p-3 border-l-4 border-red-600 bg-red-600/10 text-sm text-foreground">
                  Prestadores não podem **solicitar avaliações falsas** ou
                  oferecer **benefícios em troca** de avaliações.
                </blockquote>
                <li>
                  Qualquer forma de manipulação do sistema de feedback será
                  tratada com rigor.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Moderação e Penalidades
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-1 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4 text-primary" />
                    Ações da Plataforma
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A plataforma pode **moderar ou remover** qualquer avaliação
                    que viole as diretrizes.
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-medium text-foreground mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Uso Indevido
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    O uso indevido das regras pode resultar em **advertência**,
                    **restrição de visibilidade** ou **suspensão temporária** da
                    conta.
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
