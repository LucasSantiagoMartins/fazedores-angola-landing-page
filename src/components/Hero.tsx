import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Encontre profissionais e serviços em Angola",
    description:
      "O Fazedores Angola é uma plataforma digital para encontrar profissionais de serviços em Angola e solicitar trabalhos com segurança. Conectamos clientes a técnicos, freelancers e prestadores qualificados, valorizando talentos locais e fortalecendo a economia angolana.",
    cta: {
      text: "Solicitar serviço agora",
      link: "https://wa.me/244921587661?text=Olá! Gostaria de solicitar um serviço.",
      icon: <FaWhatsapp className="w-5 h-5 mr-2" />,
    },
  },
  {
    title: "Solicite serviços e contrate com confiança",
    description:
      "Precisa de um técnico, freelancer ou prestador de serviços em Angola? Na Fazedores Angola, podes solicitar serviços, comparar profissionais, acompanhar o trabalho e pagar de forma simples e segura — tudo num só lugar.",
    cta: {
      text: "Baixar o App",
      link: "#",
      icon: <Download className="w-5 h-5 mr-2" />,
    },
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <h1 className="sr-only">
        Encontre profissionais e serviços em Angola e solicite serviços com
        segurança
      </h1>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                y: index === currentSlide ? 0 : -30,
              }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className={`max-w-4xl mx-auto text-center ${
                index !== currentSlide ? "hidden" : ""
              }`}
            >
              <motion.h2
                className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slide.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === 0 ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                ))}
              </motion.h2>

              <motion.p
                className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slide.description}
              </motion.p>

              {slide.cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={slide.cta.link}
                      target={
                        slide.cta.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel="noopener noreferrer"
                    >
                      {slide.cta.icon}
                      {slide.cta.text}
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-secondary hover:bg-primary/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary flex items-center justify-center transition-all duration-300 group"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
          </button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
