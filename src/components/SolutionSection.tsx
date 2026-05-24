import { Play } from "lucide-react";

export const SolutionSection = () => {
  return (
    // Removi o 'py-16 md:py-24' e substituí por 'pt-16 md:pt-24' para eliminar o espaço inferior
    <section className="bg-background-subtle pt-16 md:pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Usamos flex, items-end alinha os elementos na base da seção */}
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">
          {/* Texto à esquerda */}
          <div className="flex-1 flex flex-col gap-6 pb-16 md:pb-24">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">
              Conheça nossa solução
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Como funciona o processo
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-md">
              Assista ao vídeo para entender como funciona a plataforma que
              facilita a contratação de serviços com mais rapidez, praticidade e
              segurança em toda Angola.
            </p>
          </div>

          <div className="w-[100vw] md:w-full lg:w-1/2 -mx-4 md:mx-0">
            <div className="relative w-full">
              <div className="group cursor-pointer w-full">
                <div className="w-full rounded-none md:rounded-t-2xl overflow-hidden shadow-2xl shadow-blue-500/20 bg-blue-600 h-80 flex items-center justify-center border-0 md:border-t md:border-x border-white/10">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play
                      size={32}
                      className="text-blue-600 fill-blue-600 ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};  