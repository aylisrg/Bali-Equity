"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useQuizMachine } from "@/hooks/useQuizMachine";
import { QuizProgressBar } from "./QuizProgressBar";
import { QuizStepGoal } from "./QuizStepGoal";
import { QuizStepHorizon } from "./QuizStepHorizon";
import { QuizStepBudget } from "./QuizStepBudget";
import { QuizStepResult } from "./QuizStepResult";

export function QuizContainer() {
  const { state, dispatch } = useQuizMachine();
  const { currentStep, answers } = state;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <QuizStepGoal selected={answers.goal} dispatch={dispatch} />
        );
      case 2:
        return (
          <QuizStepHorizon selected={answers.horizon} dispatch={dispatch} />
        );
      case 3:
        return (
          <QuizStepBudget selected={answers.budget} dispatch={dispatch} />
        );
      case 4:
        return <QuizStepResult answers={answers} dispatch={dispatch} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <QuizProgressBar currentStep={currentStep} />

      {currentStep > 1 && currentStep < 4 && (
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          className="mb-4 flex items-center gap-1 text-sm text-muted hover:text-primary-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
