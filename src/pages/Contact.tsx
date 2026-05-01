import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_ehq54qn";
const EMAILJS_TEMPLATE_ID = "template_xj3zj4b";
const EMAILJS_PUBLIC_KEY = "vjkJCSBfaIettKHQz";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Formato de e-mail inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "A mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto consigo em breve.",
      });

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
              Entre em Contacto
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
              className="lg:col-span-2 space-y-8 p-8 bg-card rounded-[2.5rem] shadow-lg border border-border h-fit"
            >
              <h2 className="text-xl font-semibold text-foreground border-b border-border/50 pb-3">
                Informações de Suporte
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      E-mail de Contacto
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
                      href="tel:+244924686977"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +244 924 686 977
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-card rounded-[2.5rem] p-6 md:p-10 shadow-lg border border-border"
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
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={`w-full p-2 border rounded-lg bg-background text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.name ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      className={`w-full p-2 border rounded-lg bg-background text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                        errors.email ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva a sua dúvida em detalhe..."
                    className={`w-full p-2 border rounded-lg bg-background text-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full transition-colors hover:bg-primary/90 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
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