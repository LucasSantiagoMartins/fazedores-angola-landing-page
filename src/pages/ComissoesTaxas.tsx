import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Percent, Wallet, DollarSign, AlertCircle, ShieldCheck } from "lucide-react";

const ComissoesTaxas = () => {
  const infoTaxas = [
    {
      icon: Percent,
      title: "Intermediation Commission",
      value: "10%",
      description:
        "Calculated on the total value of each service completed through the platform.",
    },
    {
      icon: DollarSign,
      title: "Client Fees",
      value: "0%",
      description:
        "Clients do not pay any fees to the platform. The service payment is made 100% to the doer.",
    },
    {
      icon: Wallet,
      title: "Responsibility",
      value: "Doer",
      description:
        "The provider receives the full amount from the client and is responsible for transferring the commission to the platform.",
    },
  ];

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
              <Percent className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Commissions and Fees – Fazedores Angola
            </h1>
            <p className="text-muted-foreground">
              Full transparency on how the sustainability of our ecosystem works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 mb-12"
          >
            {infoTaxas.map((taxa, index) => (
              <motion.div
                key={taxa.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-[2rem] p-6 md:p-8 border border-border flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <taxa.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {taxa.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{taxa.description}</p>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {taxa.value}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Payment Rules and Deadlines */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Deadlines and Account Restrictions
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                  <p className="text-foreground font-medium">Payment Window: 48 Hours</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    After completing a service, the doer has up to 48 hours to pay the 10% commission to the platform.
                  </p>
                </div>

                <ul className="list-disc list-inside text-muted-foreground space-y-4 ml-4">
                  <li>
                    <span className="font-semibold text-foreground">Account Inactivity:</span> If the 48-hour deadline expires without commission settlement, the account will be marked as <span className="text-destructive font-bold">Inactive</span>. Access to the system will be blocked until regularization.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Action Lock:</span> While there is a pending commission (even within the deadline), the doer will continue to receive new client requests, but **will not be able to accept or refuse** any new request until the previous balance is settled.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Direct Flow:</span> We reaffirm that the client always pays the doer directly. The commission debt is an exclusive commitment of the doer to Fazedores Angola.
                  </li>
                </ul>
              </div>
            </section>

            {/* Tax Notes */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Compliance
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  The doer is responsible for issuing invoices to their clients and for fulfilling their tax obligations with the AGT.
                </li>
                <li>
                  Maintaining an active account ensures access to marketing tools and professional content editing.
                </li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComissoesTaxas;
