import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import carpenterImg from "../assets/carpenter.jpg";
import mechanicImg from "../assets/mechanic.jpg";
import marketingImg from "../assets/marketing_team.jpg";

const slides = [
  {
    title: "Serviços e crescimento profissional em Angola",
    description:
      "Conectamos clientes a prestadores qualificados. Peça um serviço ou torne-se prestador e cresça com a plataforma.",
    image: carpenterImg,
  },
  {
    title: "Soluções técnicas com especialistas locais",
    description:
      "Encontre mecânicos e técnicos preparados para resolver os seus problemas com confiança e agilidade.",
    image: mechanicImg,
  },
  {
    title: "Gestão, marketing e oportunidades para prestadores",
    description:
      "Mais do que um marketplace — uma plataforma completa de crescimento profissional para quem faz acontecer.",
    image: marketingImg,
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
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <h1 className="sr-only">
        Fazedores Angola — Serviços e crescimento profissional
      </h1>

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
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

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center gpu"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              {slides[currentSlide].title}
            </h2>

            <p className="text-foreground/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-12 md:gap-20 mt-10 md:mt-12 relative z-30">
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
