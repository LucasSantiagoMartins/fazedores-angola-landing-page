import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contacto brevemente.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 "
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Entrar em Contacto
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tem alguma dúvida, sugestão ou precisa de suporte? Envie-nos uma
              mensagem ou utilize os nossos contactos diretos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8 p-8 bg-card rounded-2xl shadow-lg border border-border h-fit"
            >
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-3">
                Informações de Apoio
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Email de Contacto
                    </p>
                    <a
                      href="mailto:contacto@fazedoresangola.ao"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contacto@fazedoresangola.ao
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <a
                      href="tel:+244921587661"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +244 921 587 661
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-muted-foreground">Luanda, Angola</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Estalagem, Rua Beto Carneiro, perto do antigo banco BIC
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-card rounded-2xl p-6 md:p-10 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Envie-nos uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="O seu nome"
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground transition-all duration-300 focus:outline-none focus:bg-primary/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="o.seu.email@exemplo.com"
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground transition-all duration-300 focus:outline-none focus:bg-primary/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    placeholder="Descreva a sua questão em detalhe..."
                    className="w-full p-2 border border-border rounded-lg bg-background text-foreground transition-all duration-300 focus:outline-none focus:bg-primary/10"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-colors hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;