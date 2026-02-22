export type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";

export interface TrackRecordCase {
  id: string;
  title: string;
  location: string;
  entryPrice: number;
  capitalization: number;
  annualROI: number;
  status: string;
  imageUrl: string;
}

export interface StrategicPick {
  id: string;
  title: string;
  location: string;
  price: number;
  expectedROI: number;
  insightBadge: string;
  insightReason: string;
  features: string[];
  imageUrl: string;
}

export interface JTBDTab {
  id: "yield" | "lifestyle" | "capital";
  label: string;
  headline: string;
  description: string;
  metrics: string[];
  imageUrl: string;
}

export interface LegalItem {
  icon: string;
  title: string;
  description: string;
}

export type InvestmentGoal = "income" | "lifestyle" | "preservation";
export type InvestmentHorizon = "ready" | "exploring";
export type BudgetRange = "under-250k" | "250k-500k" | "over-500k";

export interface QuizAnswers {
  goal: InvestmentGoal | null;
  horizon: InvestmentHorizon | null;
  budget: BudgetRange | null;
}

export type QuizStep = 1 | 2 | 3 | 4;

export interface QuizState {
  currentStep: QuizStep;
  answers: QuizAnswers;
}

export type QuizAction =
  | { type: "SET_GOAL"; payload: InvestmentGoal }
  | { type: "SET_HORIZON"; payload: InvestmentHorizon }
  | { type: "SET_BUDGET"; payload: BudgetRange }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "RESET" };
