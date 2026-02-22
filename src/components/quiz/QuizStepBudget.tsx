"use client";

import type { BudgetRange, QuizAction } from "@/types";
import { cn } from "@/lib/utils";

const budgets: {
  id: BudgetRange;
  label: string;
  description: string;
}[] = [
  {
    id: "under-250k",
    label: "Up to $250,000",
    description: "Entry-level villas and managed apartments",
  },
  {
    id: "250k-500k",
    label: "$250,000 — $500,000",
    description: "Premium villas with strong rental potential",
  },
  {
    id: "over-500k",
    label: "$500,000+",
    description: "Beachfront, cliff-edge, and portfolio-grade assets",
  },
];

interface QuizStepBudgetProps {
  selected: BudgetRange | null;
  dispatch: React.Dispatch<QuizAction>;
}

export function QuizStepBudget({ selected, dispatch }: QuizStepBudgetProps) {
  return (
    <div>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-2">
        What&apos;s your budget?
      </h3>
      <p className="text-muted mb-8">
        Select the range that fits your investment capacity.
      </p>

      <div className="grid gap-3">
        {budgets.map((budget) => {
          const isSelected = selected === budget.id;
          return (
            <button
              key={budget.id}
              onClick={() => {
                dispatch({ type: "SET_BUDGET", payload: budget.id });
                dispatch({ type: "NEXT_STEP" });
              }}
              className={cn(
                "flex items-center justify-between rounded-xl border px-6 py-5 text-left transition-all duration-300 cursor-pointer",
                isSelected
                  ? "border-accent-gold bg-accent-gold/10"
                  : "border-white/10 bg-white/5 hover:border-accent-gold/40 hover:bg-white/10"
              )}
            >
              <div>
                <span className="font-semibold text-primary-white block">
                  {budget.label}
                </span>
                <span className="text-xs text-muted mt-1 block">
                  {budget.description}
                </span>
              </div>
              <div
                className={cn(
                  "h-5 w-5 rounded-full border-2 shrink-0 ml-4 transition-all",
                  isSelected
                    ? "border-accent-gold bg-accent-gold"
                    : "border-white/20"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
