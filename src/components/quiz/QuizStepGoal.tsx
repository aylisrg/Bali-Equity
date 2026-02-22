"use client";

import { TrendingUp, Home, Shield } from "lucide-react";
import type { InvestmentGoal, QuizAction } from "@/types";
import { cn } from "@/lib/utils";

const goals: {
  id: InvestmentGoal;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "income",
    label: "Income",
    description: "Maximize rental yield and cash flow from short-term rentals",
    icon: TrendingUp,
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    description: "A home base in Bali that appreciates while you enjoy it",
    icon: Home,
  },
  {
    id: "preservation",
    label: "Capital Preservation",
    description: "Protect and grow wealth through premium land and property",
    icon: Shield,
  },
];

interface QuizStepGoalProps {
  selected: InvestmentGoal | null;
  dispatch: React.Dispatch<QuizAction>;
}

export function QuizStepGoal({ selected, dispatch }: QuizStepGoalProps) {
  return (
    <div>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-2">
        What&apos;s your primary goal?
      </h3>
      <p className="text-muted mb-8">
        Select the objective that best describes your investment focus.
      </p>

      <div className="grid gap-3 md:grid-cols-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selected === goal.id;
          return (
            <button
              key={goal.id}
              onClick={() => {
                dispatch({ type: "SET_GOAL", payload: goal.id });
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
                {goal.label}
              </span>
              <span className="text-xs text-muted leading-relaxed">
                {goal.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
