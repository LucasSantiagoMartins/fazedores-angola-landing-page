import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { XCircle, Clock, AlertTriangle, User, Briefcase, MessageSquare, Headphones } from "lucide-react";

const PoliticaCancelamento = () => {
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
              <XCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Cancellation Policy – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Understand the cancellation flow and the importance of our mediation for the safety of clients and doers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* 1. Cancellation Flow */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Request States
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Each service on the platform is linked to a specific doer. Cancellation follows strict rules depending on the request status:
                </p>
                <ul className="list-disc list-inside space-y-4 ml-4">
                  <li>
                    <span className="font-semibold text-foreground italic">Pending Request:</span> The client can cancel the request directly through the platform while the assigned doer has not yet confirmed acceptance of the service.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground italic">Accepted Service or Later:</span> Once the doer accepts the commitment, direct cancellation is blocked. Any interruption must be requested through our official channels for review.
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. How to Request Cancellation */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-primary" />
                Mandatory Mediation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Both the <span className="font-semibold text-foreground">Client</span> and the <span className="font-semibold text-foreground">Doer</span> can request cancellation after acceptance, by contacting our team directly.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-primary" /> Internal Channels
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Submit your detailed situation through the support channel available within the platform itself for immediate validation.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-primary" /> External Channels
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Communication via official support email or WhatsApp to report incidents that prevent the service from being carried out.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Limits and Inspections */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Cancellation Limit
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To maintain the integrity of the Fazedores Angola community, we have established a <span className="font-semibold text-foreground">limit of 3 monthly cancellations</span> per user.
                <br /><br />
                Upon reaching this limit, the account will automatically enter a process of <span className="font-semibold text-foreground">technical inspection and behavior analysis</span> by our quality team. Recurring improper cancellations may result in administrative sanctions or access suspension.
              </p>
            </section>

            {/* 4. Safety and Conduct */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Doer Schedule Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This flow exists to prevent last-minute cancellations that cause logistical losses and the loss of other work opportunities for the doer. Likewise, it protects the client against withdrawals without prior notice from the provider.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCancelamento;
