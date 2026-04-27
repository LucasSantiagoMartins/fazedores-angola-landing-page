import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3";
}

export const GlitchText = ({ text, className, as: Tag = "span" }: GlitchTextProps) => {
  return (
    <Tag className={cn("glitch", className)} data-text={text}>
      {text}
    </Tag>
  );
};
