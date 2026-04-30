import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Gostei da confiança que transmitem por meio dos vídeos de alguns serviços prestados publicados nas redes sociais da Fazedores Angola.",
    name: "Fátima José",
    role: "Cliente",
  },
  {
    quote:
      "A plataforma facilitou muito o meu trabalho. Hoje recebo pedidos no telemóvel e organizo melhor os meus serviços.",
    name: "Miguel Kiala",
    role: "Decorador de Eventos",
  },
  {
    quote:
      "Foi simples e prático. Fiz o pagamento e fiquei muito mais tranquila durante todo o processo.",
    name: "Maria Souza",
    role: "Designer Gráfica",
  },
  {
    quote:
      "Graças à Fazedores Angola, recebo pedidos pela plataforma e aumentei minha base de clientes.",
    name: "Osvaldo Fernandes",
    role: "Técnico de Frio",
  },
  {
    quote:
      "Com a Carteira consigo acompanhar tudo com clareza — ganhos, saques e o que recebo.",
    name: "Marcos Pereira",
    role: "Prestador de Serviços",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-16 md:py-28 bg-background-subtle overflow-x-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              O que dizem os nossos <span className="text-gradient">utilizadores</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Clientes e prestadores partilham as suas experiências com a Fazedores Angola.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-card relative">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-foreground text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="text-foreground font-semibold text-base sm:text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-6 md:mt-8 pt-6 border-t border-border">
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
                    className="w-10 h-10 rounded-full border border-primary hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-primary hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
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
