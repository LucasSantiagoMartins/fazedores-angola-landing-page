import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { GlitchText } from "./GlitchText";

const slides = [
  {
    title: "Serviços e crescimento profissional em Angola",
    description:
      "Conectamos clientes a prestadores qualificados. Peça um serviço ou torne-se prestador e cresça com a plataforma.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Gestão, marketing e oportunidades para prestadores",
    description:
      "Mais do que um marketplace — uma plataforma completa de crescimento profissional para quem faz acontecer.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <h1 className="sr-only">Fazedores Angola — Serviços e crescimento profissional</h1>

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80 z-10" />
            <div className="absolute inset-0 bg-radial-primary z-10 opacity-80" />
            <img
              src={slides[currentSlide].image}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center gpu"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass-dark text-white/90 text-xs sm:text-sm font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary-glow" />
              Plataforma #1 de serviços em Angola
            </motion.div>

            <motion.h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {slides[currentSlide].title.split(" ").map((word, i) => {
                const isAccent = i === 0 || i === 1;
                return (
                  <span key={i}>
                    {isAccent ? (
                      <GlitchText
                        text={word + " "}
                        className="text-primary inline-block"
                      />
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                );
              })}
            </motion.h2>

            <motion.p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
              {slides[currentSlide].description}
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-glow"
              >
                Criar conta
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#plans"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-primary hover:bg-primary/10 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                Entrar na plataforma
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-10 md:mt-12 relative z-30">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-primary bg-transparent hover:bg-primary/20 flex items-center justify-center transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-primary bg-transparent hover:bg-primary/20 flex items-center justify-center transition-all duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
