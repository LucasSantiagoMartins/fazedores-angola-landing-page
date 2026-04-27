import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
}

export const WaveDivider = ({
  fromColor = "hsl(var(--background))",
  toColor = "hsl(var(--muted))",
  flip = false,
  className,
}: WaveDividerProps) => {
  return (
    <div
      className={cn("relative w-full overflow-hidden leading-[0]", className)}
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn("block w-full h-[60px] md:h-[100px]", flip && "rotate-180")}
      >
        <path
          d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
};
