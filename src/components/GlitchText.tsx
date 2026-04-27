import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3";
}

// Mantido por compatibilidade — agora renderiza apenas texto limpo, sem efeito glitch.
export const GlitchText = ({ text, className, as: Tag = "span" }: GlitchTextProps) => {
  return <Tag className={cn(className)}>{text}</Tag>;
};
