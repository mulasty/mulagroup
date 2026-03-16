import type { LeadClass, LeadRoutingDecision, LeadScoringSnapshot, PriorityLevel } from "./types";

type ScoringInput = {
  company?: string;
  leadType: LeadRoutingDecision["leadType"];
  message: string;
  secondaryPillarCount: number;
};

const URGENCY_KEYWORDS =
  /\b(asap|deadline|immediately|launch|launching|pilot|pilne|quickly|soon|this month|urgent|urgently|week)\b/i;

const BUDGET_KEYWORDS =
  /\b(budget|funding|grant|grants|investment|investor|pricing|resources)\b/i;

const DECISION_KEYWORDS =
  /\b(board|ceo|co-founder|cofounder|decision|director|founder|investor|owner)\b/i;

function clampScore(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getLeadClass(totalScore: number): LeadClass {
  if (totalScore >= 22) {
    return "strategic-ecosystem-lead";
  }

  if (totalScore >= 18) {
    return "high-value-lead";
  }

  if (totalScore >= 13) {
    return "good-lead";
  }

  if (totalScore >= 8) {
    return "moderate-lead";
  }

  return "low-priority-lead";
}

function getPriorityLevel(totalScore: number, readinessScore: number): PriorityLevel {
  if (totalScore >= 22 || (totalScore >= 18 && readinessScore >= 4)) {
    return "P1";
  }

  if (totalScore >= 18) {
    return "P2";
  }

  if (totalScore >= 13) {
    return "P3";
  }

  if (totalScore >= 8) {
    return "P4";
  }

  return "P5";
}

function inferFitScore(leadType: ScoringInput["leadType"]) {
  switch (leadType) {
    case "ecosystem":
      return 5;
    case "operational":
      return 4;
    case "strategic":
      return 4;
    case "venture":
      return 5;
    case "tactical":
      return 3;
    default:
      return 2;
  }
}

function inferUrgencyScore(message: string) {
  return URGENCY_KEYWORDS.test(message) ? 4 : 2;
}

function inferReadinessScore({ company, message }: Pick<ScoringInput, "company" | "message">) {
  let score = company ? 3 : 2;

  if (message.length >= 160) {
    score += 1;
  }

  return clampScore(score, 1, 5);
}

function inferValuePotentialScore(leadType: ScoringInput["leadType"], secondaryPillarCount: number) {
  const baseScore =
    leadType === "ecosystem"
      ? 5
      : leadType === "venture" || leadType === "strategic"
        ? 4
        : leadType === "operational"
          ? 3
          : 2;

  return clampScore(baseScore + (secondaryPillarCount > 1 ? 1 : 0), 1, 5);
}

function inferEcosystemPotentialScore(
  leadType: ScoringInput["leadType"],
  secondaryPillarCount: number,
) {
  if (leadType === "ecosystem") {
    return 5;
  }

  if (secondaryPillarCount >= 2) {
    return 4;
  }

  if (secondaryPillarCount === 1) {
    return 3;
  }

  return leadType === "venture" || leadType === "strategic" ? 2 : 1;
}

export function buildInitialLeadScoring({
  company,
  leadType,
  message,
  secondaryPillarCount,
}: ScoringInput): LeadScoringSnapshot {
  const fitScore = inferFitScore(leadType);
  const urgencyScore = inferUrgencyScore(message);
  const readinessScore = inferReadinessScore({
    ...(company ? { company } : {}),
    message,
  });
  const valuePotentialScore = inferValuePotentialScore(leadType, secondaryPillarCount);
  const ecosystemPotentialScore = inferEcosystemPotentialScore(leadType, secondaryPillarCount);
  const totalScore =
    fitScore + urgencyScore + readinessScore + valuePotentialScore + ecosystemPotentialScore;
  const leadClass = getLeadClass(totalScore);
  const priorityLevel = getPriorityLevel(totalScore, readinessScore);

  return {
    ...(BUDGET_KEYWORDS.test(message) ? { budgetConfidenceScore: 2 } : {}),
    ...(DECISION_KEYWORDS.test(message) ? { decisionPowerScore: 2 } : {}),
    ecosystemPotentialScore,
    fitScore,
    leadClass,
    priorityLevel,
    readinessScore,
    relationshipPotentialScore:
      leadType === "ecosystem" || leadType === "venture" || leadType === "strategic" ? 2 : 1,
    scoringStatus: "estimated",
    totalScore,
    urgencyScore,
    valuePotentialScore,
  };
}
