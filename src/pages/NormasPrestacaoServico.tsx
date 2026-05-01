import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Briefcase,
  UserCheck,
  Clock,
  Shield,
  AlertTriangle,
  User,
  ClipboardList,
  Wallet,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const NormasPrestacaoServico = () => {
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
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Service Guidelines – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Official guidelines on payments, commissions, and professional conduct.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* 1. Payment and Commission Flow */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                1. Payment and Commission Policy
              </h2>
              <div className="space-y-4">
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Handshake className="w-4 h-4 text-primary" />
                    Payment to the Provider
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Payment for the executed service is made by the client directly to the provider (doer). The platform does not retain the service amount, and the transaction is the sole responsibility of the parties.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary">
                    <AlertTriangle className="w-4 h-4" />
                    Mandatory Commission
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The provider must pay the service fee to Fazedores Angola for each closed job. Non-payment or recurring delays prevent the receipt of new requests.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Provider Obligations */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                2. Doer's Obligations
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Perform services with transparency and respect the initial budget.</li>
                <li>
                  <span className="font-semibold text-foreground">Service Completion:</span> It is the provider's obligation to mark the service as completed in the system as soon as the work is finished.
                </li>
                <li>Report the actual amount received for the correct calculation of the commission.</li>
                <li>Maintain ethical and professional conduct throughout the service.</li>
              </ul>

              <div className="mt-6 p-5 bg-destructive/5 border-l-4 border-destructive rounded-r-xl space-y-3">
                <h4 className="text-sm font-bold text-destructive flex items-center gap-2">
                  <Shield className="w-4 h-4" /> ZERO TOLERANCE NOTICE
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  Improper cancellations result in immediate and permanent account suspension, without prior notice.
                </p>
              </div>
            </section>

            {/* 3. Client Obligations */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                3. Client Obligations
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Ensure full payment to the provider as agreed.</li>
                <li>Facilitate the professional's access to the service location.</li>
                <li>Report to the platform if the provider requests "off-platform" payments to bypass system fees.</li>
                <li>Honestly evaluate the provider after confirmed completion.</li>
              </ul>
            </section>

            {/* 4. Sanctions and Monitoring */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-destructive" />
                4. Monitoring and Sanctions
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-destructive mb-2 text-sm uppercase">Warning</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Applied in cases of delays in completion reporting or minor communication failures.</p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-destructive mb-2 text-sm uppercase">Block</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Applied for financial fraud, false cancellations after acceptance, or abusive behavior.</p>
                </div>
              </div>
            </section>

            {/* 5. Quality and Rectifications */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                5. Warranty and Rectification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By confirming completion, the provider ensures the service was delivered with quality. If technical issues arise within 48h, the provider must perform the rectification. Failure to do so within this period directly impacts their trust seal on the platform.
              </p>
            </section>

            {/* 6. Final Provisions */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Fazedores Angola is a technological intermediary. The service provision relationship is established exclusively between client and doer. All tax obligations arising from the transaction are the responsibility of the provider.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NormasPrestacaoServico;
