import type { AppLocale } from "@mulagroup/content-models";

export type AgenticAiPortSide = "bottom" | "left" | "right" | "top";

export type AgenticAiPoint = {
  x: number;
  y: number;
};

export type AgenticAiNodeKind =
  | "data"
  | "executive"
  | "gateway"
  | "input"
  | "module"
  | "orchestration";

export type AgenticAiBoardNode = {
  chip: string;
  h: number;
  id: string;
  kind: AgenticAiNodeKind;
  subtitle: Record<AppLocale, string>;
  title: Record<AppLocale, string>;
  tone: string;
  w: number;
  x: number;
  y: number;
};

export type AgenticAiEdge = {
  dashed?: boolean;
  from: {
    id: string;
    side: AgenticAiPortSide;
  };
  id: string;
  pulseCount?: 0 | 1 | 2;
  pulseDuration?: number;
  pulseTone?: string;
  to: {
    id: string;
    side: AgenticAiPortSide;
  };
  tone: string;
  via?: AgenticAiPoint[];
};

export type AgenticAiLane = {
  id: string;
  label: Record<AppLocale, string>;
  x: number;
};

export type AgenticAiModuleDetail = {
  description: Record<AppLocale, string>;
  integrations: Record<AppLocale, string[]>;
  name: Record<AppLocale, string>;
  outputs: Record<AppLocale, string[]>;
};

export type AgenticAiDepartmentCard = {
  helper: Record<AppLocale, string>;
  id: string;
  modules: AgenticAiModuleDetail[];
  title: Record<AppLocale, string>;
};

export type AgenticAiAutonomyLevel = {
  description: Record<AppLocale, string>;
  id: string;
  title: Record<AppLocale, string>;
};

export type AgenticAiRolloutStage = {
  id: string;
  items: Record<AppLocale, string[]>;
  title: Record<AppLocale, string>;
};

export type AgenticAiCopy = {
  ctaLabel: string;
  ctaTitle: string;
  description: string;
  eyebrow: string;
  helper: string;
  supportLine: string;
  title: string;
};

export type AgenticAiOperatingSystemModel = {
  autonomyLevels: AgenticAiAutonomyLevel[];
  board: {
    edges: AgenticAiEdge[];
    height: number;
    lanes: AgenticAiLane[];
    nodes: AgenticAiBoardNode[];
    width: number;
  };
  copy: AgenticAiCopy;
  departments: AgenticAiDepartmentCard[];
  governanceRules: string[];
  locale: AppLocale;
  rolloutStages: AgenticAiRolloutStage[];
};

function localized<T>(en: T, pl: T): Record<AppLocale, T> {
  return { en, pl };
}

function node(
  id: string,
  kind: AgenticAiNodeKind,
  chip: string,
  tone: string,
  x: number,
  y: number,
  w: number,
  h: number,
  titleEn: string,
  titlePl: string,
  subtitleEn: string,
  subtitlePl: string,
): AgenticAiBoardNode {
  return {
    chip,
    h,
    id,
    kind,
    subtitle: localized(subtitleEn, subtitlePl),
    title: localized(titleEn, titlePl),
    tone,
    w,
    x,
    y,
  };
}

function moduleDetail(
  nameEn: string,
  namePl: string,
  descriptionEn: string,
  descriptionPl: string,
  integrationsEn: string[],
  integrationsPl: string[],
  outputsEn: string[],
  outputsPl: string[],
): AgenticAiModuleDetail {
  return {
    description: localized(descriptionEn, descriptionPl),
    integrations: localized(integrationsEn, integrationsPl),
    name: localized(nameEn, namePl),
    outputs: localized(outputsEn, outputsPl),
  };
}

export const AGENTIC_AI_BOARD = {
  height: 980,
  width: 1500,
} as const;

const COPY = {
  en: {
    ctaLabel: "Book a strategy conversation",
    ctaTitle: "Want to map the first governed Agentic AI layer for your company?",
    description:
      "This board shows how Mula Group can design an AI-native operating system for a commercial company: shared memory, orchestration, governed agents and cross-department decision loops working as one controlled business machine.",
    eyebrow: "Agentic AI operating system",
    helper:
      "Not one chatbot. A governed network of agents, data memory, workflows, approvals and executive intelligence.",
    supportLine:
      "A semi-autonomous company needs shared memory, event logic, decision limits and specialized agents working across one controlled operating system.",
    title: "How Mula Group Designs an AI-Native Operating System for Commercial Companies",
  },
  pl: {
    ctaLabel: "Umów rozmowę strategiczną",
    ctaTitle: "Chcesz rozpisać pierwszą, kontrolowaną warstwę Agentic AI dla swojej firmy?",
    description:
      "Ta mapa pokazuje, jak Mula Group może zaprojektować AI-native operating system dla firmy handlowej: wspólna pamięć, orkiestracja, agenci z guardrailami i pętle decyzyjne między działami, działające jak jeden kontrolowany organizm biznesowy.",
    eyebrow: "Agentic AI operating system",
    helper:
      "To nie jest jeden chatbot. To kontrolowana sieć agentów, pamięci danych, workflowów, approvali i executive intelligence.",
    supportLine:
      "Półautonomiczna firma potrzebuje wspólnej pamięci, logiki zdarzeń, limitów decyzyjnych i wyspecjalizowanych agentów pracujących w jednym systemie operacyjnym.",
    title: "Jak Mula Group projektuje AI-native operating system dla firmy handlowej",
  },
} as const;

const LANES: AgenticAiLane[] = [
  { id: "inputs", label: localized("Input channels", "Kanały wejściowe"), x: 136 },
  { id: "control", label: localized("Input control", "Control center"), x: 384 },
  { id: "memory", label: localized("Memory and data core", "Pamięć i rdzeń danych"), x: 646 },
  { id: "orchestration", label: localized("Orchestration", "Orkiestracja"), x: 898 },
  { id: "departments", label: localized("AI departments", "AI departments"), x: 1188 },
];

const NODES: AgenticAiBoardNode[] = [
  node(
    "inbound-web",
    "input",
    "WEB",
    "#3b82f6",
    54,
    96,
    182,
    54,
    "Web forms and lead capture",
    "WWW, formularze i lead capture",
    "Site forms, chat widgets, landing pages",
    "Formularze, chat, landing pages",
  ),
  node(
    "inbound-mail",
    "input",
    "MAIL",
    "#6366f1",
    54,
    166,
    182,
    54,
    "Email, calls and transcripts",
    "E-mail, telefony i transkrypcje",
    "Inbox, VoIP, call center, summaries",
    "Inbox, VoIP, call center, podsumowania",
  ),
  node(
    "inbound-chat",
    "input",
    "CHAT",
    "#8b5cf6",
    54,
    236,
    182,
    54,
    "Chat and service messaging",
    "Chat i komunikacja serwisowa",
    "WhatsApp, Messenger, customer threads",
    "WhatsApp, Messenger, wątki klienta",
  ),
  node(
    "inbound-marketplaces",
    "input",
    "MKT",
    "#ec4899",
    54,
    306,
    182,
    54,
    "Marketplaces and stores",
    "Marketplace i sklepy",
    "Allegro, Amazon, e-commerce orders",
    "Allegro, Amazon, zamówienia e-commerce",
  ),
  node(
    "inbound-ops",
    "input",
    "OPS",
    "#14b8a6",
    54,
    376,
    182,
    54,
    "ERP, CRM, WMS and service data",
    "ERP, CRM, WMS i dane serwisowe",
    "Operational records and stock events",
    "Rekordy operacyjne i zdarzenia stocku",
  ),
  node(
    "inbound-finance",
    "input",
    "FIN",
    "#f97316",
    54,
    446,
    182,
    54,
    "Finance, banking and documents",
    "Finanse, bankowość i dokumenty",
    "Invoices, payments, PDFs, approvals",
    "Faktury, płatności, PDF-y, approvale",
  ),
  node(
    "inbound-suppliers",
    "input",
    "SUP",
    "#84cc16",
    54,
    516,
    182,
    54,
    "Suppliers and catalog feeds",
    "Dostawcy i feedy katalogowe",
    "Price lists, XML, APIs, product data",
    "Cenniki, XML, API, dane produktowe",
  ),
  node(
    "inbound-signals",
    "input",
    "ADS",
    "#0ea5e9",
    54,
    586,
    182,
    54,
    "Ads, analytics and competitor signals",
    "Ads, analityka i sygnały konkurencji",
    "GA4, Search Console, ROAS, market watch",
    "GA4, Search Console, ROAS, market watch",
  ),
  node(
    "input-control",
    "gateway",
    "INTAKE",
    "#3b82f6",
    288,
    292,
    198,
    94,
    "AI Reception / Input Control Center",
    "AI Reception / Input Control Center",
    "Classification, deduplication, urgency and routing",
    "Klasyfikacja, deduplikacja, priorytet i routing",
  ),
  node(
    "lead-intelligence",
    "module",
    "LEAD",
    "#8b5cf6",
    288,
    404,
    198,
    82,
    "Lead Intelligence",
    "Lead Intelligence",
    "Scoring, enrichment and assignment",
    "Scoring, enrichment i assignment",
  ),
  node(
    "master-data",
    "data",
    "MDM",
    "#10b981",
    540,
    148,
    170,
    64,
    "Master Data",
    "Master Data",
    "Clients, products, suppliers, prices, stock",
    "Klienci, produkty, dostawcy, ceny, stock",
  ),
  node(
    "event-bus",
    "data",
    "BUS",
    "#f59e0b",
    736,
    148,
    170,
    64,
    "Event Bus",
    "Event Bus",
    "Every business action becomes an event",
    "Każde działanie zapisuje się jako event",
  ),
  node(
    "data-lake",
    "data",
    "DWH",
    "#14b8a6",
    540,
    232,
    170,
    64,
    "Warehouse / Lake",
    "Warehouse / Lake",
    "History, analytics, AI models, reporting",
    "Historia, analityka, modele AI, raportowanie",
  ),
  node(
    "vector-memory",
    "data",
    "RAG",
    "#22c55e",
    736,
    232,
    170,
    64,
    "Vector Memory",
    "Vector Memory",
    "Playbooks, calls, docs, SOPs, FAQ",
    "Playbooki, rozmowy, dokumenty, SOP-y, FAQ",
  ),
  node(
    "ai-core",
    "gateway",
    "CORE",
    "#2563eb",
    592,
    362,
    270,
    112,
    "AI Commerce OS Core",
    "AI Commerce OS Core",
    "Shared company memory, context and governed action layer",
    "Wspólna pamięć firmy, kontekst i warstwa kontrolowanego działania",
  ),
  node(
    "workflow-engine",
    "orchestration",
    "FLOW",
    "#3b82f6",
    558,
    522,
    156,
    60,
    "Workflow Engine",
    "Workflow Engine",
    "Triggers, tasks, queues, retries",
    "Triggery, zadania, kolejki, retry",
  ),
  node(
    "agent-router",
    "orchestration",
    "ROUTE",
    "#8b5cf6",
    740,
    522,
    156,
    60,
    "Agent Router",
    "Agent Router",
    "Department and scenario delegation",
    "Delegacja między działami i scenariuszami",
  ),
  node(
    "business-rules",
    "orchestration",
    "RULE",
    "#0ea5e9",
    558,
    600,
    156,
    60,
    "Business Rules",
    "Business Rules",
    "Limits, margins, priorities, exceptions",
    "Limity, marże, priorytety, wyjątki",
  ),
  node(
    "approval-layer",
    "orchestration",
    "HITL",
    "#f59e0b",
    740,
    600,
    156,
    60,
    "Approval Layer",
    "Approval Layer",
    "Human checks for high-risk actions",
    "Human checks dla działań wysokiego ryzyka",
  ),
  node(
    "schedules",
    "orchestration",
    "CTRL",
    "#64748b",
    649,
    678,
    156,
    60,
    "Schedules and Escalations",
    "Schedules i eskalacje",
    "Timing, reminders, watchdogs and SLAs",
    "Timing, przypomnienia, watchdogi i SLA",
  ),
  node(
    "sales-command",
    "module",
    "SALE",
    "#8b5cf6",
    990,
    132,
    188,
    72,
    "Sales Command Center",
    "Sales Command Center",
    "Offers, follow-up, pricing support",
    "Oferty, follow-up, pricing support",
  ),
  node(
    "product-brain",
    "module",
    "PIM",
    "#3b82f6",
    1200,
    132,
    188,
    72,
    "Product and Catalog Brain",
    "Product and Catalog Brain",
    "SKU mapping, attributes, translations",
    "SKU mapping, atrybuty, tłumaczenia",
  ),
  node(
    "pricing-engine",
    "module",
    "PRICE",
    "#f97316",
    990,
    224,
    188,
    72,
    "Pricing and Margin Engine",
    "Pricing and Margin Engine",
    "Competitor watch, margin logic, promotions",
    "Konkurencja, marża, promocje",
  ),
  node(
    "procurement",
    "module",
    "PO",
    "#10b981",
    1200,
    224,
    188,
    72,
    "Procurement Intelligence",
    "Procurement Intelligence",
    "Forecasts, replenishment, supplier risk",
    "Forecasty, replenishment, ryzyko dostawców",
  ),
  node(
    "warehouse",
    "module",
    "WMS",
    "#14b8a6",
    990,
    316,
    188,
    72,
    "Warehouse Intelligence",
    "Warehouse Intelligence",
    "Stock health, picking, anomaly detection",
    "Stock health, picking, anomaly detection",
  ),
  node(
    "order-orchestration",
    "module",
    "ORD",
    "#22c55e",
    1200,
    316,
    188,
    72,
    "Order Orchestration",
    "Order Orchestration",
    "Validation, allocation, exception handling",
    "Walidacja, allocation, exception handling",
  ),
  node(
    "logistics",
    "module",
    "SHIP",
    "#06b6d4",
    990,
    408,
    188,
    72,
    "Logistics Brain",
    "Logistics Brain",
    "Carrier choice, delays, delivery issues",
    "Dobór przewoźnika, opóźnienia, delivery issues",
  ),
  node(
    "finance-guardian",
    "module",
    "FIN",
    "#f59e0b",
    1200,
    408,
    188,
    72,
    "Finance Guardian",
    "Finance Guardian",
    "Receivables, cashflow, risk, profitability",
    "Receivables, cashflow, ryzyko, rentowność",
  ),
  node(
    "customer-success",
    "module",
    "CS",
    "#ec4899",
    990,
    500,
    188,
    72,
    "Customer Success Brain",
    "Customer Success Brain",
    "Support, complaints, retention and tone",
    "Support, reklamacje, retencja i ton komunikacji",
  ),
  node(
    "marketing-growth",
    "module",
    "GROW",
    "#a855f7",
    1200,
    500,
    188,
    72,
    "Marketing Growth Engine",
    "Marketing Growth Engine",
    "Campaigns, content, CAC, marketplace growth",
    "Kampanie, content, CAC, growth marketplace",
  ),
  node(
    "hr-ops",
    "module",
    "HR",
    "#64748b",
    990,
    592,
    188,
    72,
    "HR and Internal Ops",
    "HR and Internal Ops",
    "Onboarding, SOP coaching, workload routing",
    "Onboarding, SOP coaching, workload routing",
  ),
  node(
    "executive",
    "executive",
    "CEO",
    "#111827",
    1200,
    592,
    188,
    86,
    "Executive Command Center",
    "Executive Command Center",
    "Daily briefings, risk alerts, opportunity discovery",
    "Daily briefings, risk alerts, opportunity discovery",
  ),
];

const EDGES: AgenticAiEdge[] = [
  {
    from: { id: "inbound-web", side: "right" },
    id: "e-web-intake",
    pulseCount: 1,
    pulseTone: "#60a5fa",
    to: { id: "input-control", side: "left" },
    tone: "#3b82f6",
  },
  {
    from: { id: "inbound-mail", side: "right" },
    id: "e-mail-intake",
    pulseCount: 1,
    pulseTone: "#818cf8",
    to: { id: "input-control", side: "left" },
    tone: "#6366f1",
  },
  {
    from: { id: "inbound-chat", side: "right" },
    id: "e-chat-intake",
    pulseCount: 1,
    pulseTone: "#c084fc",
    to: { id: "input-control", side: "left" },
    tone: "#8b5cf6",
  },
  {
    from: { id: "inbound-marketplaces", side: "right" },
    id: "e-market-intake",
    pulseCount: 1,
    pulseTone: "#f472b6",
    to: { id: "input-control", side: "left" },
    tone: "#ec4899",
  },
  {
    from: { id: "inbound-ops", side: "right" },
    id: "e-ops-intake",
    pulseCount: 1,
    pulseTone: "#2dd4bf",
    to: { id: "input-control", side: "left" },
    tone: "#14b8a6",
  },
  {
    from: { id: "inbound-finance", side: "right" },
    id: "e-fin-intake",
    pulseCount: 1,
    pulseTone: "#fb923c",
    to: { id: "input-control", side: "left" },
    tone: "#f97316",
  },
  {
    from: { id: "inbound-suppliers", side: "right" },
    id: "e-supplier-intake",
    pulseCount: 1,
    pulseTone: "#a3e635",
    to: { id: "input-control", side: "left" },
    tone: "#84cc16",
  },
  {
    from: { id: "inbound-signals", side: "right" },
    id: "e-signal-intake",
    pulseCount: 1,
    pulseTone: "#38bdf8",
    to: { id: "input-control", side: "left" },
    tone: "#0ea5e9",
  },
  {
    from: { id: "input-control", side: "bottom" },
    id: "e-intake-lead",
    pulseCount: 1,
    pulseTone: "#c084fc",
    to: { id: "lead-intelligence", side: "top" },
    tone: "#8b5cf6",
  },
  {
    from: { id: "input-control", side: "right" },
    id: "e-intake-mdm",
    pulseCount: 1,
    pulseTone: "#34d399",
    to: { id: "master-data", side: "left" },
    tone: "#10b981",
    via: [{ x: 516, y: 220 }],
  },
  {
    from: { id: "input-control", side: "right" },
    id: "e-intake-bus",
    pulseCount: 1,
    pulseTone: "#fbbf24",
    to: { id: "event-bus", side: "left" },
    tone: "#f59e0b",
    via: [{ x: 516, y: 190 }],
  },
  {
    from: { id: "lead-intelligence", side: "right" },
    id: "e-lead-core",
    pulseCount: 2,
    pulseTone: "#c084fc",
    to: { id: "ai-core", side: "left" },
    tone: "#8b5cf6",
    via: [{ x: 520, y: 445 }],
  },
  {
    from: { id: "master-data", side: "bottom" },
    id: "e-mdm-core",
    pulseCount: 1,
    pulseTone: "#34d399",
    to: { id: "ai-core", side: "top" },
    tone: "#10b981",
  },
  {
    from: { id: "event-bus", side: "bottom" },
    id: "e-bus-core",
    pulseCount: 1,
    pulseTone: "#fbbf24",
    to: { id: "ai-core", side: "top" },
    tone: "#f59e0b",
  },
  {
    from: { id: "data-lake", side: "bottom" },
    id: "e-lake-core",
    pulseCount: 1,
    pulseTone: "#2dd4bf",
    to: { id: "ai-core", side: "top" },
    tone: "#14b8a6",
  },
  {
    from: { id: "vector-memory", side: "bottom" },
    id: "e-vector-core",
    pulseCount: 1,
    pulseTone: "#4ade80",
    to: { id: "ai-core", side: "top" },
    tone: "#22c55e",
  },
  {
    from: { id: "ai-core", side: "bottom" },
    id: "e-core-flow",
    pulseCount: 2,
    pulseTone: "#60a5fa",
    to: { id: "workflow-engine", side: "top" },
    tone: "#3b82f6",
  },
  {
    from: { id: "ai-core", side: "bottom" },
    id: "e-core-router",
    pulseCount: 2,
    pulseTone: "#c084fc",
    to: { id: "agent-router", side: "top" },
    tone: "#8b5cf6",
  },
  {
    from: { id: "workflow-engine", side: "bottom" },
    id: "e-flow-rules",
    pulseCount: 1,
    pulseTone: "#38bdf8",
    to: { id: "business-rules", side: "top" },
    tone: "#0ea5e9",
  },
  {
    from: { id: "agent-router", side: "bottom" },
    id: "e-router-approval",
    pulseCount: 1,
    pulseTone: "#fbbf24",
    to: { id: "approval-layer", side: "top" },
    tone: "#f59e0b",
  },
  {
    from: { id: "business-rules", side: "bottom" },
    id: "e-rules-schedule",
    pulseCount: 1,
    pulseTone: "#94a3b8",
    to: { id: "schedules", side: "left" },
    tone: "#64748b",
  },
  {
    from: { id: "approval-layer", side: "bottom" },
    id: "e-approval-schedule",
    pulseCount: 1,
    pulseTone: "#cbd5e1",
    to: { id: "schedules", side: "right" },
    tone: "#64748b",
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-sales",
    pulseCount: 1,
    pulseTone: "#c084fc",
    to: { id: "sales-command", side: "left" },
    tone: "#8b5cf6",
    via: [{ x: 946, y: 552 }, { x: 946, y: 168 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-product",
    pulseCount: 1,
    pulseTone: "#60a5fa",
    to: { id: "product-brain", side: "left" },
    tone: "#3b82f6",
    via: [{ x: 960, y: 552 }, { x: 960, y: 168 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-pricing",
    pulseCount: 1,
    pulseTone: "#fb923c",
    to: { id: "pricing-engine", side: "left" },
    tone: "#f97316",
    via: [{ x: 934, y: 552 }, { x: 934, y: 260 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-procurement",
    pulseCount: 1,
    pulseTone: "#34d399",
    to: { id: "procurement", side: "left" },
    tone: "#10b981",
    via: [{ x: 952, y: 552 }, { x: 952, y: 260 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-warehouse",
    pulseCount: 1,
    pulseTone: "#2dd4bf",
    to: { id: "warehouse", side: "left" },
    tone: "#14b8a6",
    via: [{ x: 932, y: 552 }, { x: 932, y: 352 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-order",
    pulseCount: 1,
    pulseTone: "#4ade80",
    to: { id: "order-orchestration", side: "left" },
    tone: "#22c55e",
    via: [{ x: 956, y: 552 }, { x: 956, y: 352 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-logistics",
    pulseCount: 1,
    pulseTone: "#67e8f9",
    to: { id: "logistics", side: "left" },
    tone: "#06b6d4",
    via: [{ x: 932, y: 552 }, { x: 932, y: 444 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-finance",
    pulseCount: 1,
    pulseTone: "#fbbf24",
    to: { id: "finance-guardian", side: "left" },
    tone: "#f59e0b",
    via: [{ x: 958, y: 552 }, { x: 958, y: 444 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-customer",
    pulseCount: 1,
    pulseTone: "#f472b6",
    to: { id: "customer-success", side: "left" },
    tone: "#ec4899",
    via: [{ x: 936, y: 552 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-marketing",
    pulseCount: 1,
    pulseTone: "#d8b4fe",
    to: { id: "marketing-growth", side: "left" },
    tone: "#a855f7",
    via: [{ x: 962, y: 552 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-hr",
    pulseCount: 1,
    pulseTone: "#cbd5e1",
    to: { id: "hr-ops", side: "left" },
    tone: "#64748b",
    via: [{ x: 934, y: 628 }],
  },
  {
    from: { id: "agent-router", side: "right" },
    id: "e-router-exec",
    pulseCount: 1,
    pulseTone: "#e2e8f0",
    to: { id: "executive", side: "left" },
    tone: "#475569",
    via: [{ x: 960, y: 636 }],
  },
  {
    dashed: true,
    from: { id: "sales-command", side: "right" },
    id: "e-sales-exec",
    pulseCount: 1,
    pulseTone: "#e2e8f0",
    to: { id: "executive", side: "top" },
    tone: "#94a3b8",
    via: [{ x: 1406, y: 168 }, { x: 1406, y: 592 }],
  },
  {
    dashed: true,
    from: { id: "order-orchestration", side: "right" },
    id: "e-ops-exec",
    pulseCount: 1,
    pulseTone: "#e2e8f0",
    to: { id: "executive", side: "left" },
    tone: "#94a3b8",
    via: [{ x: 1412, y: 352 }, { x: 1412, y: 635 }],
  },
  {
    dashed: true,
    from: { id: "finance-guardian", side: "right" },
    id: "e-fin-exec",
    pulseCount: 1,
    pulseTone: "#f8fafc",
    to: { id: "executive", side: "left" },
    tone: "#94a3b8",
    via: [{ x: 1412, y: 444 }, { x: 1412, y: 635 }],
  },
  {
    dashed: true,
    from: { id: "executive", side: "left" },
    id: "e-exec-memory",
    pulseCount: 2,
    pulseTone: "#f8fafc",
    to: { id: "vector-memory", side: "right" },
    tone: "#94a3b8",
    via: [{ x: 920, y: 720 }, { x: 920, y: 264 }],
  },
  {
    dashed: true,
    from: { id: "marketing-growth", side: "left" },
    id: "e-marketing-pricing",
    pulseCount: 1,
    pulseTone: "#f472b6",
    to: { id: "pricing-engine", side: "right" },
    tone: "#ec4899",
    via: [{ x: 1188, y: 536 }, { x: 1188, y: 260 }],
  },
  {
    dashed: true,
    from: { id: "procurement", side: "left" },
    id: "e-procurement-warehouse",
    pulseCount: 1,
    pulseTone: "#86efac",
    to: { id: "warehouse", side: "right" },
    tone: "#22c55e",
    via: [{ x: 1188, y: 260 }, { x: 1188, y: 352 }],
  },
  {
    dashed: true,
    from: { id: "customer-success", side: "top" },
    id: "e-customer-sales",
    pulseCount: 1,
    pulseTone: "#f9a8d4",
    to: { id: "sales-command", side: "bottom" },
    tone: "#ec4899",
    via: [{ x: 1084, y: 236 }],
  },
];

const DEPARTMENTS: AgenticAiDepartmentCard[] = [
  {
    helper: localized(
      "Commercial intelligence that turns inbound demand into scored, priced and actionable opportunities.",
      "Commercial intelligence, które zamienia sygnały wejściowe w ocenione, wycenione i gotowe do działania szanse.",
    ),
    id: "commercial",
    modules: [
      moduleDetail(
        "Input Control Center",
        "Input Control Center",
        "Receives every inbound signal, classifies it, removes duplicates and routes it to the correct next layer.",
        "Odbiera każdy sygnał wejściowy, klasyfikuje go, usuwa duplikaty i kieruje do właściwej warstwy.",
        ["Email", "Forms", "VoIP", "WhatsApp", "Messenger", "OCR"],
        ["Email", "Formularze", "VoIP", "WhatsApp", "Messenger", "OCR"],
        ["Normalized case", "Urgency score", "Routing event"],
        ["Znormalizowana sprawa", "Ocena pilności", "Routing event"],
      ),
      moduleDetail(
        "Lead Intelligence",
        "Lead Intelligence",
        "Researches companies, estimates fit, scores potential and recommends the best sales path.",
        "Bada firmy, ocenia dopasowanie, punktuje potencjał i rekomenduje najlepszą ścieżkę sprzedaży.",
        ["CRM", "Website data", "Firm registries", "Analytics"],
        ["CRM", "Dane strony", "Rejestry firm", "Analityka"],
        ["Lead score", "Suggested owner", "Closing probability"],
        ["Lead score", "Sugerowany owner", "Prawdopodobieństwo domknięcia"],
      ),
      moduleDetail(
        "Sales Command Center",
        "Sales Command Center",
        "Builds offers, drives follow-up loops, supports negotiations and detects deal risk before revenue is lost.",
        "Buduje oferty, prowadzi pętle follow-up, wspiera negocjacje i wykrywa ryzyko utraty dealu zanim zniknie przychód.",
        ["CRM", "Email", "Calendar", "CPQ", "E-signature"],
        ["CRM", "Email", "Kalendarz", "CPQ", "E-signature"],
        ["Offer draft", "Follow-up sequence", "Deal health alert"],
        ["Draft oferty", "Sekwencja follow-up", "Alert deal health"],
      ),
      moduleDetail(
        "Product and Catalog Brain",
        "Product and Catalog Brain",
        "Keeps product data coherent across ERP, marketplaces and content surfaces.",
        "Utrzymuje spójność danych produktowych między ERP, marketplace i warstwami contentu.",
        ["PIM", "ERP", "XML", "CSV", "Marketplaces", "DAM"],
        ["PIM", "ERP", "XML", "CSV", "Marketplace", "DAM"],
        ["Mapped SKU set", "Attribute updates", "Localized product content"],
        ["Zmapowany zestaw SKU", "Aktualizacje atrybutów", "Zlokalizowany content produktowy"],
      ),
      moduleDetail(
        "Pricing and Margin Engine",
        "Pricing and Margin Engine",
        "Calculates safe pricing moves by combining stock, demand, supplier cost and competitor pressure.",
        "Wylicza bezpieczne ruchy cenowe, łącząc stock, popyt, koszt dostawcy i presję konkurencji.",
        ["ERP", "Marketplaces", "Supplier feeds", "Sales reports"],
        ["ERP", "Marketplace", "Feedy dostawców", "Raporty sprzedaży"],
        ["Price recommendation", "Margin protection alert", "Promotion logic"],
        ["Rekomendacja ceny", "Alert ochrony marży", "Logika promocji"],
      ),
    ],
    title: localized("Commercial layer", "Warstwa commercial"),
  },
  {
    helper: localized(
      "Operational agents coordinate stock, procurement, orders and delivery as one controlled execution layer.",
      "Agenci operacyjni koordynują stock, zakupy, zamówienia i dostawy jako jedną kontrolowaną warstwę wykonawczą.",
    ),
    id: "operations",
    modules: [
      moduleDetail(
        "Procurement Intelligence",
        "Procurement Intelligence",
        "Forecasts demand, compares suppliers and prepares purchase actions before shortages hit revenue.",
        "Prognozuje popyt, porównuje dostawców i przygotowuje działania zakupowe zanim braki uderzą w przychód.",
        ["ERP", "WMS", "Supplier APIs", "Price sheets", "Forecasts"],
        ["ERP", "WMS", "API dostawców", "Cenniki", "Forecasty"],
        ["Replenishment recommendation", "Supplier risk score", "PO proposal"],
        ["Rekomendacja replenishment", "Ocena ryzyka dostawcy", "Propozycja PO"],
      ),
      moduleDetail(
        "Warehouse Intelligence",
        "Warehouse Intelligence",
        "Monitors stock health, predicts shortages and helps optimize picking and movement decisions.",
        "Monitoruje zdrowie stocku, przewiduje braki i pomaga optymalizować decyzje pickingowe oraz ruch towaru.",
        ["WMS", "ERP", "Scanners", "IoT", "Orders"],
        ["WMS", "ERP", "Skanery", "IoT", "Zamówienia"],
        ["Stock anomaly alert", "Picking suggestion", "Inventory audit signal"],
        ["Alert anomalii stocku", "Sugestia pickingu", "Sygnał audytu inventory"],
      ),
      moduleDetail(
        "Order Orchestration",
        "Order Orchestration",
        "Supervises the full life of the order: validation, allocation, exceptions and customer status communication.",
        "Nadzoruje całe życie zamówienia: walidację, allocation, wyjątki i komunikację statusową z klientem.",
        ["E-commerce", "ERP", "WMS", "Payments", "Courier APIs"],
        ["E-commerce", "ERP", "WMS", "Płatności", "API kurierów"],
        ["Allocated order", "Exception path", "Status update plan"],
        ["Przydzielone zamówienie", "Ścieżka wyjątku", "Plan aktualizacji statusu"],
      ),
      moduleDetail(
        "Logistics Brain",
        "Logistics Brain",
        "Chooses carriers, watches delays and manages transport issues before they become customer problems.",
        "Dobiera przewoźników, śledzi opóźnienia i zarządza problemami transportowymi zanim staną się problemem klienta.",
        ["Carrier APIs", "GPS", "WMS", "ERP", "Maps"],
        ["API przewoźników", "GPS", "WMS", "ERP", "Mapy"],
        ["Carrier selection", "Delay warning", "Delivery resolution plan"],
        ["Dobór przewoźnika", "Ostrzeżenie o opóźnieniu", "Plan rozwiązania delivery"],
      ),
    ],
    title: localized("Operations and fulfillment layer", "Warstwa operations i fulfillment"),
  },
  {
    helper: localized(
      "Customer-facing agents keep communication, support and growth loops connected to operational truth.",
      "Agenci frontowi utrzymują komunikację, support i pętle wzrostu w oparciu o prawdę operacyjną firmy.",
    ),
    id: "customer-growth",
    modules: [
      moduleDetail(
        "Customer Success Brain",
        "Customer Success Brain",
        "Handles support, complaints, tone detection and retention opportunities from one customer timeline.",
        "Obsługuje support, reklamacje, wykrywanie tonu i okazje retencyjne z jednej osi czasu klienta.",
        ["Helpdesk", "Email", "Chat", "CRM", "ERP", "Knowledge base"],
        ["Helpdesk", "Email", "Chat", "CRM", "ERP", "Knowledge base"],
        ["Response plan", "Risk-of-churn flag", "Resolution summary"],
        ["Plan odpowiedzi", "Flaga churn risk", "Podsumowanie rozwiązania"],
      ),
      moduleDetail(
        "Marketing Growth Engine",
        "Marketing Growth Engine",
        "Plans campaigns and content with awareness of stock, margin, funnel quality and marketplace opportunity.",
        "Planuje kampanie i content, uwzględniając stock, marżę, jakość lejka i okazje marketplace.",
        ["Meta Ads", "Google Ads", "GA4", "GSC", "Mailing", "CRM"],
        ["Meta Ads", "Google Ads", "GA4", "GSC", "Mailing", "CRM"],
        ["Audience recommendation", "Campaign draft", "Performance action"],
        ["Rekomendacja odbiorców", "Draft kampanii", "Działanie performance"],
      ),
      moduleDetail(
        "Knowledge and Memory Layer",
        "Knowledge and Memory Layer",
        "Stores SOPs, playbooks, calls, proposals and company context so every agent works on current memory.",
        "Przechowuje SOP-y, playbooki, rozmowy, oferty i kontekst firmy, aby każdy agent pracował na aktualnej pamięci.",
        ["Vector DB", "Documents", "CRM notes", "Call transcripts", "Policies"],
        ["Vector DB", "Dokumenty", "Notatki CRM", "Transkrypcje rozmów", "Polityki"],
        ["Retrieval context", "Policy recall", "Learning loop input"],
        ["Kontekst retrieval", "Przypomnienie polityk", "Wejście do pętli uczenia"],
      ),
    ],
    title: localized("Customer and growth layer", "Warstwa customer i growth"),
  },
  {
    helper: localized(
      "Financial governance and executive oversight keep autonomy bounded, measurable and commercially safe.",
      "Governance finansowy i nadzór executive utrzymują autonomię w granicach bezpieczeństwa i mierzalności.",
    ),
    id: "finance-executive",
    modules: [
      moduleDetail(
        "Finance Guardian",
        "Finance Guardian",
        "Monitors receivables, cashflow, profitability and anomaly risk before autonomy creates financial exposure.",
        "Monitoruje należności, cashflow, rentowność i ryzyko anomalii zanim autonomia stworzy ekspozycję finansową.",
        ["Accounting", "ERP", "Banking", "Payments", "CRM"],
        ["Księgowość", "ERP", "Bankowość", "Płatności", "CRM"],
        ["Payment alert", "Cashflow forecast", "Margin health signal"],
        ["Alert płatniczy", "Prognoza cashflow", "Sygnał zdrowia marży"],
      ),
      moduleDetail(
        "HR and Internal Ops",
        "HR and Internal Ops",
        "Coordinates internal workload, onboarding, SOP coaching and human routing around the AI system.",
        "Koordynuje obciążenie zespołu, onboarding, SOP coaching i routing ludzi wokół systemu AI.",
        ["HR system", "Task manager", "LMS", "Documents", "Calendars"],
        ["System HR", "Task manager", "LMS", "Dokumenty", "Kalendarze"],
        ["Onboarding checklist", "Internal helpdesk answer", "Workload alert"],
        ["Checklist onboardingu", "Odpowiedź helpdesku wewnętrznego", "Alert obciążenia"],
      ),
      moduleDetail(
        "Executive Command Center",
        "Executive Command Center",
        "Produces daily company intelligence: where margin is falling, where revenue is at risk and what AI recommends next.",
        "Produkuje codzienną inteligencję firmy: gdzie spada marża, gdzie ryzyko dotyczy przychodu i co AI rekomenduje dalej.",
        ["BI", "Data warehouse", "Alerts", "All department outputs"],
        ["BI", "Data warehouse", "Alerty", "Wyjścia wszystkich działów"],
        ["Daily briefing", "Strategic risk alert", "Opportunity report"],
        ["Daily briefing", "Alert ryzyka strategicznego", "Raport szans"],
      ),
      moduleDetail(
        "Governance and Policy Layer",
        "Governance and Policy Layer",
        "Sets decision limits, human approval rules, audit logging and rollback paths for every high-risk action.",
        "Ustawia limity decyzji, zasady human approval, audit logging i ścieżki rollbacku dla działań wysokiego ryzyka.",
        ["Policies", "Approval flows", "Audit logs", "Prompt registry"],
        ["Polityki", "Approval flows", "Logi audytowe", "Rejestr promptów"],
        ["Approved action", "Escalated exception", "Compliance trail"],
        ["Zatwierdzone działanie", "Zaeskalowany wyjątek", "Ścieżka compliance"],
      ),
    ],
    title: localized("Finance, governance and executive layer", "Warstwa finance, governance i executive"),
  },
];

const AUTONOMY_LEVELS: AgenticAiAutonomyLevel[] = [
  {
    description: localized(
      "AI assists people, but people still make the final move.",
      "AI wspiera ludzi, ale to człowiek podejmuje finalny ruch.",
    ),
    id: "assisted",
    title: localized("AI assisted company", "AI assisted company"),
  },
  {
    description: localized(
      "Routine actions are automated and humans focus on exceptions.",
      "Rutynowe działania są zautomatyzowane, a ludzie skupiają się na wyjątkach.",
    ),
    id: "automated",
    title: localized("AI automated operations", "AI automated operations"),
  },
  {
    description: localized(
      "Whole departments run autonomously within defined limits.",
      "Całe działy działają autonomicznie w zdefiniowanych limitach.",
    ),
    id: "managed",
    title: localized("AI managed departments", "AI managed departments"),
  },
  {
    description: localized(
      "Departments coordinate with each other through shared memory and events.",
      "Działy współpracują między sobą przez wspólną pamięć i eventy.",
    ),
    id: "coordinated",
    title: localized("AI coordinated corporation", "AI coordinated corporation"),
  },
  {
    description: localized(
      "AI detects, decides and acts inside guardrails while people supervise strategy.",
      "AI wykrywa, decyduje i działa w guardrailach, a ludzie nadzorują strategię.",
    ),
    id: "self-driving",
    title: localized("Self-driving business", "Self-driving business"),
  },
];

const GOVERNANCE_RULES = {
  en: [
    "Decision limits define where AI can act alone and where human approval is mandatory.",
    "Every sensitive action needs audit trail, policy context and rollback logic.",
    "Financial, legal and supplier commitments stay governed by thresholds and exception handling.",
    "Prompt, policy and workflow changes should be versioned like operating infrastructure.",
  ],
  pl: [
    "Limity decyzji określają, gdzie AI może działać samodzielnie, a gdzie approval człowieka jest obowiązkowy.",
    "Każde wrażliwe działanie potrzebuje audytu, kontekstu polityk i logiki rollbacku.",
    "Zobowiązania finansowe, prawne i zakupowe muszą być kontrolowane przez progi oraz obsługę wyjątków.",
    "Zmiany promptów, polityk i workflowów powinny być wersjonowane jak infrastruktura operacyjna.",
  ],
} as const;

const ROLLOUT_STAGES: AgenticAiRolloutStage[] = [
  {
    id: "foundation",
    items: localized(
      ["Central CRM and customer data", "Intake classification", "Lead scoring", "Offer and follow-up loops"],
      ["Centralny CRM i baza klientów", "Klasyfikacja intake", "Lead scoring", "Pętle ofert i follow-up"],
    ),
    title: localized("Stage 1 - Foundation", "Etap 1 - Fundament"),
  },
  {
    id: "operations",
    items: localized(
      ["Order orchestration", "Warehouse intelligence", "Procurement flows", "Receivables monitoring"],
      ["Order orchestration", "Warehouse intelligence", "Przepływy zakupowe", "Monitoring należności"],
    ),
    title: localized("Stage 2 - Operations", "Etap 2 - Operacje"),
  },
  {
    id: "growth",
    items: localized(
      ["Pricing AI", "Marketing growth engine", "Anomaly detection", "Forecasting and churn risk"],
      ["Pricing AI", "Marketing growth engine", "Wykrywanie anomalii", "Forecasting i churn risk"],
    ),
    title: localized("Stage 3 - Growth", "Etap 3 - Wzrost"),
  },
  {
    id: "autonomy",
    items: localized(
      ["Automated decisions in bounded limits", "Autonomous replenishment and follow-up", "Executive AI briefings", "Continuous learning loops"],
      ["Automatyczne decyzje w limitach", "Autonomiczny replenishment i follow-up", "Executive AI briefings", "Ciągłe pętle uczenia"],
    ),
    title: localized("Stage 4 - Autonomy", "Etap 4 - Autonomia"),
  },
];

export function getAgenticAiOperatingSystemModel(locale: AppLocale): AgenticAiOperatingSystemModel {
  return {
    autonomyLevels: AUTONOMY_LEVELS,
    board: {
      edges: EDGES,
      height: AGENTIC_AI_BOARD.height,
      lanes: LANES,
      nodes: NODES,
      width: AGENTIC_AI_BOARD.width,
    },
    copy: COPY[locale],
    departments: DEPARTMENTS,
    governanceRules: [...GOVERNANCE_RULES[locale]],
    locale,
    rolloutStages: ROLLOUT_STAGES,
  };
}
