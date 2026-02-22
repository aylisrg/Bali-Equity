import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "outlined";
}

const variantStyles = {
  glass: "bg-white/5 backdrop-blur-md border border-white/10",
  solid: "bg-surface border border-white/5",
  outlined: "border border-accent-gold/20 bg-transparent",
};

export function Card({ children, className, variant = "glass" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
