import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  dark = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 md:px-8 py-16 md:py-24",
        dark ? "bg-deep-blue" : "bg-surface",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
