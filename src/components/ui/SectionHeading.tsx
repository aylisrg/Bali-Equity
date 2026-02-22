"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  light = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-12 md:mb-16",
        alignment === "center" && "text-center"
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-primary-white" : "text-deep-blue"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg md:text-xl",
            alignment === "center" && "mx-auto",
            light ? "text-muted" : "text-light-blue/70"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-16",
          alignment === "center" && "mx-auto",
          "bg-accent-gold"
        )}
      />
    </motion.div>
  );
}
