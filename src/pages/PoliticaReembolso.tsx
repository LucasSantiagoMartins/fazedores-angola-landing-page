import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RefreshCcw, Clock, CheckCircle, AlertCircle, TrendingUp, DollarSign } from "lucide-react";

const PoliticaReembolso = () => {
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
              <RefreshCcw className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Refund Policy – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Rules and procedures for refunds on the platform.
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
                <DollarSign className="w-5 h-5 text-primary" />
                1. Refund Eligibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Refunds are applicable **only** under the following conditions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">100% Upfront Payment:</span> The service was paid in full and falls within the cancellation or execution failure rules.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Cancellation:</span> The service was cancelled after acceptance, and the platform determined that the client is entitled to a refund (per the Cancellation Policy).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Incorrect Execution:</span> A significant and proven incorrect execution of the service by the provider was verified.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                2. Non-Eligible Situations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                There is no right to a refund in the following cases:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Payments made as **50% upfront or in cash** (outside the platform's digital environment).</li>
                <li>Subjective dissatisfaction not based on a clear service failure.</li>
                <li>Services correctly completed and **confirmed** by the client on the platform.</li>
                <li>Simple **non-confirmation** of service completion by the client.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                3. Review and Decision Process
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Request:</span> The request must be made by the client via the **report a problem** feature on the platform.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Review:</span> The request will be reviewed by the Fazedores Angola team. All data, evidence, and communication between the parties will be considered.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Final Decision:</span> The decision to grant or deny the refund is exclusive and final by the platform.
                </li>
                <li>Force majeure cases or contestations for abuse/bad faith will be reviewed individually.</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                4. Deadlines and Processing
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Processing Time:</span> Approved refunds will be processed within up to **10 business days** after communicating the final decision to the client.
                </li>
                <li>The time for the refunded amount to appear in the client's account is variable and depends strictly on the processing times of the banking institutions involved.</li>
                <li>Contested appeals are reviewed individually, with the decision clearly communicated to the client.</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaReembolso;
