"use client";

import { cn } from "@/lib/utils";
import type { QuizStep } from "@/types";

interface QuizProgressBarProps {
  currentStep: QuizStep;
}

export function QuizProgressBar({ currentStep }: QuizProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted">
          Step {currentStep} of 4
        </span>
        <span className="text-xs text-accent-gold font-semibold">
          {currentStep === 4 ? "Complete!" : `${Math.round((currentStep / 4) * 100)}%`}
        </span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-500",
              step <= currentStep ? "bg-accent-gold" : "bg-white/10"
            )}
          />
        ))}
      </div>
    </div>
  );
}
