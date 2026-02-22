import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "gold" | "blue" | "red";
}

const variantStyles = {
  gold: "bg-accent-gold/20 text-accent-gold border-accent-gold/30",
  blue: "bg-light-blue/20 text-blue-300 border-light-blue/30",
  red: "bg-primary-red/20 text-red-300 border-primary-red/30",
};

export function Badge({ label, variant = "gold" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant]
      )}
    >
      {label}
    </span>
  );
}
