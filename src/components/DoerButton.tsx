import React from "react";

interface DoerButtonProps {
  children: React.ReactNode;
  variant?:
    | "none"
    | "primary"
    | "secondary"
    | "outline"
    | "outline-blue"
    | "social"
    | "gray"
    | "danger";
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const DoerButton: React.FC<DoerButtonProps> = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  isLoading = false,
}) => {
  const baseStyles =
    "h-9 rounded-full font-medium text-md flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "btn-gradient text-primary-foreground",
    secondary: "bg-card text-foreground border border-border lg:hover:bg-muted",
    outline:
      "bg-transparent text-white/60 border border-white/10 lg:hover:bg-white/5 lg:hover:text-white",
    "outline-blue":
      "bg-transparent text-primary border border-primary lg:hover:bg-primary/10",
    social:
      "bg-card border border-border lg:hover:bg-muted text-foreground text-sm font-semibold",
    gray: "bg-transparent border border-blue-500 text-blue-500 lg:hover:bg-blue-500/5",
    danger:
      "bg-transparent text-red-500 border border-red-500/40 lg:hover:bg-red-500/10",
    none: "",
  };

  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? "w-full" : "px-6"}
        ${className}
      `}
    >
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="material-symbols-outlined">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="material-symbols-outlined">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default DoerButton;
