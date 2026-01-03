import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "O app facilitou muito o meu trabalho. Agora recebo pedidos no telemóvel e consigo organizar melhor os meus serviços.",
    name: "Miguel Kiala",
    role: "Decorador de Eventos",
  },
  {
    quote:
      "Foi simples e rápido fechar o serviço. Paguei pelo app e fiquei muito mais tranquilo.",
    name: "Maria Souza",
    role: "Designer Gráfica",
  },
  {
    quote:
      "Antes eu dependia só de indicações. Agora recebo pedidos direto no app e consigo gerir os pagamentos sem stress.",
    name: "Osvaldo Fernandes",
    role: "Técnico de Frio",
  },
  {
    quote:
      "Com a Carteira Fazedores vejo tudo certinho: quanto ganhei, quanto saquei e até consigo juntar algum dinheiro.",
    name: "Marcos Pereira",
    role: "Prestador de Serviços",
  },
  {
    quote:
      "Gostei porque consigo comparar preços e ver as avaliações antes de escolher o prestador. Fiquei bem mais confiante.",
    name: "Fatima José",
    role: "Cliente",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A experiência de quem já usa o{" "}
              <span className="text-gradient">nosso app</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              O Fazedores Angola já está a facilitar a vida de clientes e
              prestadores. Veja o que alguns deles dizem sobre o dia a dia com a
              aplicação.
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card relative">
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Testimonial Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-foreground text-lg md:text-xl mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <p className="text-foreground font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-secondary hover:bg-primary/50"
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
