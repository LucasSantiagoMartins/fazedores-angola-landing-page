import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Encontre profissionais e serviços em Angola",
    description:
      "Conectamos você aos melhores canalizadores, eletricistas e técnicos de manutenção em Luanda e em todo o país. Profissionais validados para sua total segurança.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Solicite serviços e contrate com confiança",
    description:
      "Precisa de obras ou reparos? Encontre prestadores qualificados para transformar sua casa ou escritório com a garantia de qualidade Fazedores Angola.",
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
      <h1 className="sr-only">Encontre profissionais e serviços em Angola</h1>

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 0 || i === 1 ? (
                    <span className="text-primary">{word} </span>
                  ) : (
                    <span>{word} </span>
                  )}
                </span>
              ))}
            </motion.h2>

            <motion.p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              <h1>{slides[currentSlide].description}</h1>
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-12 relative z-30">
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
