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
              Reviews and Feedback – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Transparency and quality: how our community's reputation system works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* 1. Review Rules */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                How to Review
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Star Rating System
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After completing each service, the client gives a rating from 1 to 5 stars based on punctuality, quality, and professionalism.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Written Feedback
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comments are the space to detail the experience. They should be constructive and focused on the work performed by the doer.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Conduct Guidelines */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-destructive" />
                Respect Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                To maintain the ecosystem's integrity, we do not tolerate conduct that manipulates the truthfulness of reviews:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 p-4 bg-destructive/5 rounded-xl border-l-4 border-destructive">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-sm text-foreground">
                    <strong>Prohibited Content:</strong> Offensive language, insults, discrimination, or exposure of private data (phone numbers, addresses) result in immediate removal.
                  </p>
                </div>
                <div className="flex gap-3 p-4 bg-destructive/5 rounded-xl border-l-4 border-destructive">
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-sm text-foreground">
                    <strong>Fraud:</strong> Creating false reviews for one's own benefit or for third parties is prohibited. Ranking manipulation compromises the user's account.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Moderation and Visibility */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Platform Impact
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4 text-primary" />
                    Active Moderation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team reviews reports of unfair or aggressive feedback, ensuring the provider's reputation is protected against abuse.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Penalties
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Repeated behaviors or abusive reviews may lead to loss of visibility in search results or account suspension.
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
