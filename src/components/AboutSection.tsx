import { Target, Eye, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Conectar clientes e fazedores com praticidade, promovendo renda e valorizando o talento nacional.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser o ecossistema líder em Angola para serviços, reconhecido pela inovação e impacto digital.",
  },
  {
    icon: Users,
    title: "Cultura",
    description:
      "Dividir para conquistar: distribuímos oportunidades e crescemos juntos como uma comunidade.",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-8 md:py-14 bg-background relative z-20 mt-20"
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8 text-center lg:text-left">
              <p className="text-primary font-bold uppercase text-[10px] md:text-xs mb-3">
                Fazedores Angola Prestação de Serviços (SU) LDA
              </p>

              <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
                Sobre a <span className="text-gradient">Fazedores Angola</span>
              </h3>

              <p className="text-muted-foreground font-medium text-sm md:text-base">
                Tecnologia e oportunidades para o mercado de serviços em Angola.
              </p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
              <p>
                A <strong>Fazedores Angola</strong> nasceu para modernizar a
                forma como serviços são encontrados e realizados em Angola.
              </p>

              <p>
                Criamos oportunidades, visibilidade e crescimento para os
                fazedores que movimentam o mercado nacional.
              </p>

              <p>
                Acreditamos no princípio{" "}
                <span className="text-primary font-semibold">
                  "Dividir para conquistar"
                </span>
                .
              </p>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 h-full">
            {values.map((value, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl bg-card border border-border/50 p-6 flex flex-col justify-end ${
                  index === 2 ? "col-span-2 h-48" : "h-64"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>

                <h4 className="text-foreground font-bold text-lg">
                  {value.title}
                </h4>

                <p className="text-muted-foreground text-sm mt-1 max-w-[85%]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden flex-col gap-4 w-full">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative overflow-hidden p-6 rounded-3xl bg-card"
              >
                <div className="absolute top-6 right-6 z-10">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="relative z-10 pt-8">
                  <h4 className="font-bold text-lg mb-2 text-foreground">
                    {value.title}
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
