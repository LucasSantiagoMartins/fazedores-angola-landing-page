import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  MessageCircle,
  CreditCard,
  Star,
} from "lucide-react";
import homeImage from "@/assets/home.webp";
import serviceRequestsImage from "@/assets/service_requests.webp";

const features = [
  {
    icon: Search,
    text: "Compare orçamentos e escolha o melhor para você.",
  },
  {
    icon: MessageCircle,
    text: "Comunique-se diretamente com o prestador.",
  },
  {
    icon: CreditCard,
    text: "Pague de forma segura e rápida usando Multicaixa Express de forma instantânea e segura ou pagamentos por referência em ATM",
  },
  {
    icon: Star,
    text: "Avalie o serviço e ajude a comunidade a crescer.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-muted relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Como <span className="text-gradient">funciona?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Na Fazedores Angola, a vida fica mais simples. O cliente pede o
              serviço, e o prestador atende. Com segurança e rapidez, o trabalho
              é feito. É a solução ideal para quem busca serviços de qualidade e
              profissionais de confiança.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-foreground/80 pt-2">{feature.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="flex gap-4">
              {/* First Phone - Home */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-48 md:w-56 aspect-[9/19] bg-secondary rounded-[2.5rem] p-2 shadow-card"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-full z-10" />
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img 
                    src={homeImage} 
                    alt="Página Inicial" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Second Phone - Service Requests */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="relative w-48 md:w-56 aspect-[9/19] bg-secondary rounded-[2.5rem] p-2 shadow-card mt-12"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-background rounded-full z-10" />
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
                  <img 
                    src={serviceRequestsImage} 
                    alt="Solicitações de Serviço" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
