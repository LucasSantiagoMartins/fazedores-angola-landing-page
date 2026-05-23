import { Play } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          {/* Container do Vídeo com efeito visual melhorado */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-muted aspect-video group cursor-pointer">
            {/* Imagem de Thumbnail otimizada */}
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
              alt="Plataforma Fazedores Angola em ação"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay de gradiente para dar destaque ao ícone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

            {/* Ícone de Play com hover interativo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                <Play size={32} className="text-white fill-white ml-1" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <span className="text-primary font-medium text-xs uppercase">
              Conheça nossa solução
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              Como funciona o processo
            </h3>
            <p className="text-foreground text-base leading-relaxed mt-4 max-w-lg mx-auto">
              Assista ao vídeo para entender como funciona a plataforma que
              facilita a contratação de serviços com mais rapidez, praticidade e
              segurança em toda Angola.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
