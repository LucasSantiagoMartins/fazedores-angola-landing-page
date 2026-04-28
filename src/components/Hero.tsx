import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black -mb-px">
      <h1 className="sr-only">Fazedores Angola — Serviços e crescimento profissional</h1>

      {/* Background image layer (fills entire hero, no gaps) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 gpu"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/85 z-10" />
            <div className="absolute inset-0 bg-radial-primary z-10 opacity-70" />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center gpu"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass-dark text-white/90 text-xs sm:text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse" />
              Serviços profissionais em Angola
            </motion.div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight">
              {slides[currentSlide].title}
            </h2>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
              {slides[currentSlide].description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <a
                href="https://app.fazedoresangola.ao/criar-conta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold text-base sm:text-lg px-8 py-4 rounded-full shadow-glow transition-transform duration-300 hover:scale-[1.03] gpu"
              >
                Criar conta
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://app.fazedoresangola.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-dark text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/15 hover:scale-[1.03] gpu"
              >
                Entrar na plataforma
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-10 md:mt-12 relative z-30">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
