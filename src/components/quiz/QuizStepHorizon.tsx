"use client";

import { Zap, Search } from "lucide-react";
import type { InvestmentHorizon, QuizAction } from "@/types";
import { cn } from "@/lib/utils";

const horizons: {
  id: InvestmentHorizon;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "ready",
    label: "Ready to Invest",
    description:
      "I have the budget and I'm ready to move within the next 1–3 months",
    icon: Zap,
  },
  {
    id: "exploring",
    label: "Still Exploring",
    description:
      "I'm researching the market and want to understand my options first",
    icon: Search,
  },
];

interface QuizStepHorizonProps {
  selected: InvestmentHorizon | null;
  dispatch: React.Dispatch<QuizAction>;
}

export function QuizStepHorizon({ selected, dispatch }: QuizStepHorizonProps) {
  return (
    <div>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-2">
        What&apos;s your investment timeline?
      </h3>
      <p className="text-muted mb-8">
        This helps us tailor the right properties and strategy for you.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {horizons.map((horizon) => {
          const Icon = horizon.icon;
          const isSelected = selected === horizon.id;
          return (
            <button
              key={horizon.id}
              onClick={() => {
                dispatch({ type: "SET_HORIZON", payload: horizon.id });
                dispatch({ type: "NEXT_STEP" });
              }}
              className={cn(
                "flex flex-col items-center gap-3 rounded-xl border p-6 text-center transition-all duration-300 cursor-pointer",
                isSelected
                  ? "border-accent-gold bg-accent-gold/10"
                  : "border-white/10 bg-white/5 hover:border-accent-gold/40 hover:bg-white/10"
              )}
            >
              <Icon
                className={cn(
                  "h-8 w-8",
                  isSelected ? "text-accent-gold" : "text-muted"
                )}
              />
              <span className="font-semibold text-primary-white">
                {horizon.label}
              </span>
              <span className="text-xs text-muted leading-relaxed">
                {horizon.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
