import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database, Server, Settings, Share2 } from "lucide-react";

const PoliticaPrivacidade = () => {
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Privacy Policy – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              We are committed to protecting your data in full compliance
              with Angola's Personal Data Protection Law.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* 1. Data Collected */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li><span className="font-semibold text-foreground">Identification:</span> Name, ID, and contact details for account validation.</li>
                <li><span className="font-semibold text-foreground">Multimedia Content:</span> Images and videos submitted by doers for editing and the creation of advertising posters.</li>
                <li><span className="font-semibold text-foreground">Location Data:</span> Used to connect clients with nearby doers in Luanda and other provinces.</li>
                <li><span className="font-semibold text-foreground">Plan Transactions:</span> Records of subscription and commission payments via Multicaixa Express or Reference.</li>
              </ul>
            </section>

            {/* 2. Use of Data */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                2. How We Use Your Data
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your data has specific purposes within our ecosystem:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Enable direct connection and communication between client and doer.</li>
                <li>Transform raw material submitted by doers into professional marketing content.</li>
                <li>Manage account activity status based on commission payment history.</li>
                <li>Promote doers' profiles on social networks and the platform's official channels.</li>
              </ul>
            </section>

            {/* 3. Information Sharing */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Between Users:</span> We share the doer's contact with the client only when a request is accepted, to allow direct payment for the service.
                <br /><br />
                <span className="font-semibold text-foreground">Public:</span> Posters and banners created by our design team will be public to maximize visibility and attract new clients.
              </p>
            </section>

            {/* 4. Security */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                4. Security and Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use encryption protocols and secure servers to protect your information. Since we do not process direct service payments (only subscriptions), we do not store client bank card data, only the payment receipts for fees submitted by doers.
              </p>
            </section>

            {/* 5. User Rights */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                5. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In accordance with Angolan legislation, you may request at any time access, correction, or permanent deletion of your personal data from our visibility systems through the official email: <span className="text-primary font-medium">contacto@fazedoresangola.com</span>.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
