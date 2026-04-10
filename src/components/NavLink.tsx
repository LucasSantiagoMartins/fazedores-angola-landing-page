import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        setIsAtTop(window.scrollY < 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            "transition-colors duration-200",
            isAtTop ? "text-white" : "text-foreground",
            className,
            isActive && cn("text-primary font-bold", activeClassName),
            isPending && pendingClassName,
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
