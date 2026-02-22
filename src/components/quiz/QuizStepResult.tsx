"use client";

import { MessageCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/constants";
import type { QuizAnswers, QuizAction } from "@/types";

const goalLabels = {
  income: "Income / Rental Yield",
  lifestyle: "Lifestyle / Home Base",
  preservation: "Capital Preservation",
};

const horizonLabels = {
  ready: "Ready to invest now",
  exploring: "Still exploring",
};

const budgetLabels = {
  "under-250k": "Up to $250,000",
  "250k-500k": "$250,000 – $500,000",
  "over-500k": "$500,000+",
};

interface QuizStepResultProps {
  answers: QuizAnswers;
  dispatch: React.Dispatch<QuizAction>;
}

export function QuizStepResult({ answers, dispatch }: QuizStepResultProps) {
  const message = [
    `Hello! I completed the investment quiz on your website.`,
    ``,
    `My goal: ${answers.goal ? goalLabels[answers.goal] : "Not specified"}`,
    `Timeline: ${answers.horizon ? horizonLabels[answers.horizon] : "Not specified"}`,
    `Budget: ${answers.budget ? budgetLabels[answers.budget] : "Not specified"}`,
    ``,
    `I'd like to discuss suitable properties.`,
  ].join("\n");

  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/10 border border-accent-gold/20">
        <MessageCircle className="h-8 w-8 text-accent-gold" />
      </div>

      <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-white mb-2">
        Your Profile is Ready
      </h3>
      <p className="text-muted mb-8 max-w-md mx-auto">
        We&apos;ve prepared your investment profile. Send it to our team via
        WhatsApp to get a personalized property selection.
      </p>

      {/* Summary */}
      <div className="mx-auto max-w-sm space-y-3 mb-8 text-left">
        {[
          {
            label: "Goal",
            value: answers.goal ? goalLabels[answers.goal] : "—",
          },
          {
            label: "Timeline",
            value: answers.horizon ? horizonLabels[answers.horizon] : "—",
          },
          {
            label: "Budget",
            value: answers.budget ? budgetLabels[answers.budget] : "—",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 border border-white/5"
          >
            <span className="text-sm text-muted">{item.label}</span>
            <span className="text-sm font-semibold text-accent-gold">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <Button
          variant="whatsapp"
          size="lg"
          href={whatsappUrl(message)}
          icon={<MessageCircle className="h-5 w-5" />}
          className="w-full sm:w-auto"
        >
          Send to WhatsApp
        </Button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="flex items-center gap-2 text-sm text-muted hover:text-primary-white transition-colors cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          Start over
        </button>
      </div>
    </div>
  );
}
