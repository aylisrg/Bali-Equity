"use client";

import { useReducer } from "react";
import type { QuizState, QuizAction, QuizStep } from "@/types";

const initialState: QuizState = {
  currentStep: 1,
  answers: {
    goal: null,
    horizon: null,
    budget: null,
  },
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_GOAL":
      return {
        ...state,
        answers: { ...state.answers, goal: action.payload },
      };
    case "SET_HORIZON":
      return {
        ...state,
        answers: { ...state.answers, horizon: action.payload },
      };
    case "SET_BUDGET":
      return {
        ...state,
        answers: { ...state.answers, budget: action.payload },
      };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 4) as QuizStep,
      };
    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1) as QuizStep,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useQuizMachine() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return { state, dispatch };
}
