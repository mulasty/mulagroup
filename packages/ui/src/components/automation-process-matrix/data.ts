import type { AppLocale } from "@mulagroup/content-models";

import { AUTOMATION_PROCESS_MATRIX_ROWS } from "./raw-data";

type SourceRow = (typeof AUTOMATION_PROCESS_MATRIX_ROWS)[number];

export type AutomationProcessMatrixRow = {
  actionType: string;
  agent: string;
  autonomousDecision: string;
  autonomyLevel: number;
  businessImpact: string;
  functionality: string;
  guardrails: string;
  implementationStatus: string;
  integrations: string;
  layerId: string;
  layerName: string;
  module: string;
  roiScore: number | null;
};

export type AutomationProcessLayerSummary = {
  count: number;
  id: string;
  shortCode: string;
  title: string;
  tone: string;
};

export type AutomationProcessMatrixModel = {
  copy: {
    ctaLabel: string;
    ctaTitle: string;
    description: string;
    eyebrow: string;
    helper: string;
    supportLine: string;
    title: string;
  };
  layers: AutomationProcessLayerSummary[];
  locale: AppLocale;
  metrics: {
    averageAutonomy: string;
    averageRoi: string;
    governedProcesses: number;
    liveProcesses: number;
    totalLayers: number;
    totalProcesses: number;
  };
  rows: AutomationProcessMatrixRow[];
};

const COPY = {
  en: {
    ctaLabel: "Map your automation operating matrix",
    ctaTitle: "Want to turn this kind of process matrix into a real operating system for your company?",
    description:
      "This table is a concrete example of how Mula Group can break down commercial automation into governed processes, agent roles, integrations, autonomy levels, guardrails and business impact.",
    eyebrow: "Automation process matrix",
    helper:
      "A premium automation stack should not hide behind vague claims. It should show process ownership, autonomy limits, ROI logic and implementation status in one readable operating matrix.",
    supportLine:
      "From input capture to executive briefing: one table, one governance view, one realistic map of what can already be automated.",
    title: "Example of a Fully Structured Automation Matrix",
  },
  pl: {
    ctaLabel: "Rozpisz macierz automatyzacji swojej firmy",
    ctaTitle: "Chcesz zamienić taką macierz procesów w realny system operacyjny dla swojej firmy?",
    description:
      "Ta tabela pokazuje konkretny przykład, jak Mula Group może rozpisać automatyzację firmy na procesy, role agentów, integracje, poziomy autonomii, guardraile i business impact.",
    eyebrow: "Automation process matrix",
    helper:
      "Premium automatyzacja nie powinna chować się za ogólnikami. Powinna pokazywać właściciela procesu, granice autonomii, logikę ROI i status wdrożenia w jednej czytelnej macierzy operacyjnej.",
    supportLine:
      "Od intake do executive briefingu: jedna tabela, jeden governance view i jedna realistyczna mapa tego, co naprawdę da się automatyzować.",
    title: "Przykład w pełni rozpisanej macierzy automatyzacji",
  },
} as const;

const LAYER_META = {
  "CUSTOMER SUCCESS": { shortCode: "CS", tone: "#ec4899" },
  EXECUTIVE: { shortCode: "EX", tone: "#111827" },
  FINANCE: { shortCode: "FIN", tone: "#f59e0b" },
  "HR & INTERNAL": { shortCode: "HR", tone: "#64748b" },
  "INPUT & RECEPTION": { shortCode: "IN", tone: "#2563eb" },
  "LEAD INTELLIGENCE": { shortCode: "LI", tone: "#8b5cf6" },
  LOGISTICS: { shortCode: "LOG", tone: "#06b6d4" },
  MARKETING: { shortCode: "MKT", tone: "#a855f7" },
  "ORDER ORCHESTRATION": { shortCode: "ORD", tone: "#22c55e" },
  "PRICING & MARGIN": { shortCode: "PRC", tone: "#f97316" },
  PROCUREMENT: { shortCode: "PO", tone: "#10b981" },
  "PRODUCT & CATALOG": { shortCode: "PIM", tone: "#3b82f6" },
  "SALES COMMAND CENTER": { shortCode: "SAL", tone: "#7c3aed" },
  WAREHOUSE: { shortCode: "WMS", tone: "#14b8a6" },
} as const;

function normalizeLayerName(layer: string) {
  const [, name = layer] = layer.split(":");
  return name.trim();
}

function localizeImpact(value: string, locale: AppLocale) {
  if (locale === "en") {
    if (value === "Krytyczny") {
      return "Critical";
    }
    if (value === "Wysoki") {
      return "High";
    }
    if (value === "Średni") {
      return "Medium";
    }
  }

  return value || (locale === "pl" ? "Brak danych" : "No data");
}

function localizeGuardrails(value: string, locale: AppLocale) {
  if (locale === "en") {
    if (value === "Tak") {
      return "Yes";
    }
    if (value === "Nie") {
      return "No";
    }
  }

  return value || (locale === "pl" ? "Brak" : "None");
}

function statusLabel(value: string, locale: AppLocale) {
  if (value.includes("Live")) {
    return locale === "pl" ? "Live" : "Live";
  }
  if (value.includes("Pilot")) {
    return locale === "pl" ? "Pilot" : "Pilot";
  }
  if (value.includes("Planned")) {
    return locale === "pl" ? "Planned" : "Planned";
  }
  if (value.includes("Concept")) {
    return locale === "pl" ? "Concept" : "Concept";
  }

  return locale === "pl" ? "Brak danych" : "No data";
}

function statusTone(value: string) {
  if (value.includes("Live")) {
    return "#22c55e";
  }
  if (value.includes("Pilot")) {
    return "#eab308";
  }
  if (value.includes("Planned")) {
    return "#3b82f6";
  }
  if (value.includes("Concept")) {
    return "#a855f7";
  }

  return "#94a3b8";
}

function toRow(source: SourceRow, locale: AppLocale): AutomationProcessMatrixRow {
  const layerName = normalizeLayerName(source.layer);

  return {
    actionType: source.actionType,
    agent: source.agent,
    autonomousDecision: source.autonomousDecision,
    autonomyLevel: source.autonomyLevel,
    businessImpact: localizeImpact(source.businessImpact, locale),
    functionality: source.functionality,
    guardrails: localizeGuardrails(source.guardrails, locale),
    implementationStatus: statusLabel(source.implementationStatus, locale),
    integrations: source.integrations,
    layerId: layerName,
    layerName,
    module: source.module,
    roiScore: source.roiScore,
  };
}

function getLayerSummaries(rows: AutomationProcessMatrixRow[]) {
  return Object.entries(
    rows.reduce<Record<string, number>>((accumulator, row) => {
      accumulator[row.layerId] = (accumulator[row.layerId] ?? 0) + 1;
      return accumulator;
    }, {}),
  ).map(([layerId, count]) => {
    const meta = Object.prototype.hasOwnProperty.call(LAYER_META, layerId)
      ? LAYER_META[layerId as keyof typeof LAYER_META]
      : undefined;

    return {
      count,
      id: layerId,
      shortCode: meta ? meta.shortCode : layerId.slice(0, 3),
      title: layerId,
      tone: meta ? meta.tone : "#3b82f6",
    };
  });
}

export function getAutomationProcessMatrixModel(locale: AppLocale): AutomationProcessMatrixModel {
  const rows = AUTOMATION_PROCESS_MATRIX_ROWS.map((row) => toRow(row, locale));
  const layers = getLayerSummaries(rows);
  const roiRows = rows.filter((row) => typeof row.roiScore === "number");
  const averageAutonomy = rows.reduce((total, row) => total + row.autonomyLevel, 0) / rows.length;
  const averageRoi = roiRows.reduce((total, row) => total + (row.roiScore ?? 0), 0) / roiRows.length;

  return {
    copy: COPY[locale],
    layers,
    locale,
    metrics: {
      averageAutonomy: averageAutonomy.toFixed(1),
      averageRoi: averageRoi.toFixed(1),
      governedProcesses: rows.filter((row) => row.guardrails === (locale === "pl" ? "Tak" : "Yes")).length,
      liveProcesses: rows.filter((row) => row.implementationStatus === "Live").length,
      totalLayers: layers.length,
      totalProcesses: rows.length,
    },
    rows,
  };
}

export function getAutomationProcessLayerTone(layerId: string) {
  if (Object.prototype.hasOwnProperty.call(LAYER_META, layerId)) {
    return LAYER_META[layerId as keyof typeof LAYER_META].tone;
  }

  return "#3b82f6";
}

export function getAutomationProcessLayerCode(layerId: string) {
  if (Object.prototype.hasOwnProperty.call(LAYER_META, layerId)) {
    return LAYER_META[layerId as keyof typeof LAYER_META].shortCode;
  }

  return layerId.slice(0, 3);
}

export function getAutomationProcessStatusTone(status: string) {
  return statusTone(status);
}
