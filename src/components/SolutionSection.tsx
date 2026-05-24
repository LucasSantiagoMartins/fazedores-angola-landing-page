import { Play } from "lucide-react";
import { motion } from "framer-motion";

export const SolutionSection = () => {
  return (
    <section className="bg-background-subtle pt-4 md:pt-6 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Ordem invertida */}
        <div className="flex flex-col lg:flex-row-reverse items-end gap-4 lg:gap-12">
          {/* Mulher agora do lado direito */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1 relative hidden lg:flex items-end justify-center min-h-[480px]"
          >
            <img
              src="/model.png"
              alt="Mulher sorrindo"
              className="absolute bottom-0 h-[500px] w-auto object-contain z-10"
            />
          </motion.div>

          {/* Vídeo + texto agora do lado esquerdo */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-[100vw] md:w-full lg:w-1/2 -mx-4 md:mx-0"
          >
            <div className="relative w-full">
              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-3 px-4 md:px-0"
              >
                <span className="text-primary font-bold tracking-wider text-sm uppercase">
                  Conheça nossa solução
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2">
                  Como funciona o processo
                </h3>

                <p className="text-foreground/70 text-base leading-relaxed max-w-md mt-2">
                  Veja rapidamente como funciona a plataforma de serviços.
                </p>
              </motion.div>

              {/* Card vídeo */}
              <div className="group cursor-pointer w-full">
                <div className="w-full rounded-none md:rounded-t-2xl overflow-hidden shadow-2xl shadow-blue-500/20 bg-blue-600 h-72 md:h-[320px] flex items-center justify-center border-0 md:border-t md:border-x border-white/10">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110">
                    <Play
                      size={32}
                      className="text-blue-600 fill-blue-600 ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
