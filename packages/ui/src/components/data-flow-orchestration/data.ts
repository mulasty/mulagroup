import type { AppLocale } from "@mulagroup/content-models";

export type DataFlowSceneKey =
  | "core"
  | "mainFirst"
  | "mainSecond"
  | "marketingSupport"
  | "salesCommerce"
  | "serviceOperations"
  | "logisticsFinance"
  | "erpAiReporting"
  | "crossLinks"
  | "liveState";

export type LocalizedLabel = Record<AppLocale, string[]>;

export type DataFlowSubnodeConfig = {
  id: string;
  label: LocalizedLabel;
};

export type DataFlowBranchConfig = {
  id: string;
  label: LocalizedLabel;
  mainAngle: number;
  mainRadius: number;
  mainScene: "mainFirst" | "mainSecond";
  sectorEnd: number;
  sectorStart: number;
  subRadiusInner: number;
  subRadiusOuter: number;
  subScene:
    | "marketingSupport"
    | "salesCommerce"
    | "serviceOperations"
    | "logisticsFinance"
    | "erpAiReporting";
  subnodes: DataFlowSubnodeConfig[];
  tone: string;
};

export type DataFlowCrossLink = {
  from: string;
  id: string;
  to: string;
};

export type DataFlowMobileCluster = {
  id: string;
  items: string[];
  label: string;
};

export type DataFlowCopy = {
  ctaLabel: string;
  ctaTitle: string;
  description: string;
  eyebrow: string;
  supportLine: string;
  title: string;
};

export type DataFlowOrchestrationModel = {
  branches: DataFlowBranchConfig[];
  copy: DataFlowCopy;
  core: {
    label: Record<AppLocale, string>;
  };
  crossLinks: DataFlowCrossLink[];
  locale: AppLocale;
  mobileClusters: DataFlowMobileCluster[];
};

export const DATA_FLOW_CANVAS = {
  center: { x: 760, y: 552 },
  height: 1120,
  width: 1520,
} as const;

export const DATA_FLOW_DELAYS: Record<DataFlowSceneKey, number> = {
  core: 0.35,
  crossLinks: 7.4,
  erpAiReporting: 6.3,
  liveState: 8.15,
  logisticsFinance: 5.45,
  mainFirst: 1.05,
  mainSecond: 2.05,
  marketingSupport: 3.05,
  salesCommerce: 4.0,
  serviceOperations: 4.85,
} as const;

export const DATA_FLOW_NODE_DIMENSIONS = {
  coreRadius: 112,
  main: {
    height: 72,
    width: 152,
  },
  subDotRadius: 5,
} as const;

const COPY = {
  en: {
    ctaLabel: "Book a strategy conversation",
    ctaTitle: "Want to see what this architecture could look like in your company?",
    description:
      "See how Mula Group can connect acquisition, sales, CRM, operations, logistics, finance, ERP, automation, AI and reporting into one coherent business ecosystem.",
    eyebrow: "Example integrated company architecture",
    supportLine:
      "One connected business core. Multiple integrated operating layers. One measurable system.",
    title: "Example of a Fully Integrated Company Architecture",
  },
  pl: {
    ctaLabel: "Umow rozmowe strategiczna",
    ctaTitle: "Chcesz zobaczyc, jak taka architektura moglaby wygladac w Twojej firmie?",
    description:
      "Zobacz, jak Mula Group moze polaczyc marketing, sprzedaz, CRM, obsluge klienta, operacje, logistyke, finanse, ERP, automatyzacje, AI i raportowanie w jeden spojny ekosystem biznesowy.",
    eyebrow: "Przykladowa architektura zintegrowanej firmy",
    supportLine:
      "Jeden polaczony rdzen biznesu. Wiele zintegrowanych warstw operacyjnych. Jeden mierzalny system.",
    title: "Przyklad Pelnej Architektury Zintegrowanej Firmy",
  },
} as const;

function label(en: string | string[], pl: string | string[]): LocalizedLabel {
  return {
    en: Array.isArray(en) ? en : [en],
    pl: Array.isArray(pl) ? pl : [pl],
  };
}

const BRANCHES: DataFlowBranchConfig[] = [
  {
    id: "sales",
    label: label(["Sales", "& CRM"], ["Sprzedaz", "i CRM"]),
    mainAngle: 270,
    mainRadius: 258,
    mainScene: "mainFirst",
    sectorEnd: 287,
    sectorStart: 253,
    subRadiusInner: 372,
    subRadiusOuter: 478,
    subScene: "salesCommerce",
    subnodes: [
      { id: "sales-crm-pipeline", label: label(["CRM", "Pipeline"], ["Pipeline", "CRM"]) },
      { id: "sales-lead-scoring", label: label(["Lead", "Scoring"], ["Scoring", "leadow"]) },
      { id: "sales-ai-triage", label: label(["AI Triage"], ["AI triage"]) },
      { id: "sales-follow-up", label: label(["Follow-up"], ["Follow-up"]) },
      { id: "sales-proposals", label: label(["Proposals"], ["Oferty"]) },
      { id: "sales-meetings", label: label(["Meeting", "Handling"], ["Obsluga", "spotkan"]) },
      { id: "sales-owner-routing", label: label(["Owner", "Routing"], ["Routing", "wlasciciela"]) },
      { id: "sales-history", label: label(["Customer", "History"], ["Historia", "klienta"]) },
    ],
    tone: "#3b82f6",
  },
  {
    id: "marketing",
    label: label(["Marketing", "& Acquisition"], ["Marketing", "i pozyskiwanie"]),
    mainAngle: 312,
    mainRadius: 264,
    mainScene: "mainFirst",
    sectorEnd: 329,
    sectorStart: 291,
    subRadiusInner: 384,
    subRadiusOuter: 492,
    subScene: "marketingSupport",
    subnodes: [
      { id: "marketing-website", label: label(["Website"], ["Strona", "WWW"]) },
      { id: "marketing-landing-pages", label: label(["Landing", "Pages"], ["Landing", "pages"]) },
      { id: "marketing-forms", label: label(["Forms"], ["Formularze"]) },
      { id: "marketing-seo", label: label(["SEO"], ["SEO"]) },
      { id: "marketing-campaigns", label: label(["Campaigns"], ["Kampanie"]) },
      { id: "marketing-lead-capture", label: label(["Lead", "Capture"], ["Lead", "capture"]) },
      { id: "marketing-social", label: label(["Social", "Capture"], ["Social", "capture"]) },
      {
        id: "marketing-analytics",
        label: label(["Marketing", "Analytics"], ["Analityka", "marketingu"]),
      },
    ],
    tone: "#60a5fa",
  },
  {
    id: "operations",
    label: label(["Operations", "& Workflow"], ["Operacje", "i workflow"]),
    mainAngle: 350,
    mainRadius: 268,
    mainScene: "mainFirst",
    sectorEnd: 8,
    sectorStart: 332,
    subRadiusInner: 394,
    subRadiusOuter: 506,
    subScene: "serviceOperations",
    subnodes: [
      { id: "operations-task-routing", label: label(["Task", "Routing"], ["Routing", "zadan"]) },
      { id: "operations-delivery-stages", label: label(["Delivery", "Stages"], ["Etapy", "realizacji"]) },
      { id: "operations-approvals", label: label(["Approvals"], ["Akceptacje"]) },
      { id: "operations-documents", label: label(["Document", "Flow"], ["Obieg", "dokumentow"]) },
      { id: "operations-workflow", label: label(["Delivery", "Workflow"], ["Workflow", "dostawy"]) },
      { id: "operations-sop", label: label(["SOP /", "Checklists"], ["SOP /", "checklisty"]) },
      { id: "operations-escalations", label: label(["Escalations"], ["Eskalacje"]) },
      { id: "operations-status", label: label(["Operating", "Status"], ["Status", "operacyjny"]) },
    ],
    tone: "#34d399",
  },
  {
    id: "ai",
    label: label(["AI &", "Automation"], ["AI i", "automatyzacje"]),
    mainAngle: 28,
    mainRadius: 268,
    mainScene: "mainSecond",
    sectorEnd: 46,
    sectorStart: 10,
    subRadiusInner: 398,
    subRadiusOuter: 508,
    subScene: "erpAiReporting",
    subnodes: [
      { id: "ai-summaries", label: label(["AI", "Summaries"], ["Podsumowania", "AI"]) },
      { id: "ai-routing", label: label(["Routing", "Logic"], ["Logika", "routingu"]) },
      { id: "ai-triggers", label: label(["Automation", "Triggers"], ["Triggery", "automatyzacji"]) },
      { id: "ai-anomaly", label: label(["Anomaly", "Detection"], ["Wykrywanie", "anomalii"]) },
      { id: "ai-support", label: label(["Decision", "Support"], ["Wsparcie", "decyzji"]) },
      { id: "ai-reminders", label: label(["Automated", "Reminders"], ["Automatyczne", "przypomnienia"]) },
      { id: "ai-webhooks", label: label(["Webhook", "Orchestration"], ["Webhook", "orchestration"]) },
      { id: "ai-monitoring", label: label(["Automation", "Monitoring"], ["Monitoring", "automatyzacji"]) },
    ],
    tone: "#a78bfa",
  },
  {
    id: "reporting",
    label: label(["Reporting &", "Management"], ["Raportowanie", "i zarzadzanie"]),
    mainAngle: 64,
    mainRadius: 262,
    mainScene: "mainFirst",
    sectorEnd: 82,
    sectorStart: 46,
    subRadiusInner: 394,
    subRadiusOuter: 504,
    subScene: "erpAiReporting",
    subnodes: [
      { id: "reporting-owner", label: label(["Owner", "View"], ["Widok", "wlasciciela"]) },
      { id: "reporting-sales", label: label(["Sales", "View"], ["Widok", "sprzedazy"]) },
      { id: "reporting-weekly", label: label(["Weekly", "Summary"], ["Tygodniowe", "podsumowanie"]) },
      { id: "reporting-monthly", label: label(["Monthly", "Review"], ["Miesieczny", "przeglad"]) },
      { id: "reporting-alerts", label: label(["Alerts"], ["Alerty"]) },
      { id: "reporting-kpi", label: label(["KPI", "Board"], ["Tablica", "KPI"]) },
      { id: "reporting-forecasting", label: label(["Forecasting"], ["Prognozowanie"]) },
      {
        id: "reporting-management",
        label: label(["Management", "Summary"], ["Podsumowanie", "zarzadzania"]),
      },
    ],
    tone: "#fb7185",
  },
  {
    id: "erp",
    label: label(["ERP &", "Inventory"], ["ERP i", "magazyn"]),
    mainAngle: 100,
    mainRadius: 256,
    mainScene: "mainSecond",
    sectorEnd: 118,
    sectorStart: 82,
    subRadiusInner: 388,
    subRadiusOuter: 496,
    subScene: "erpAiReporting",
    subnodes: [
      { id: "erp-stock", label: label(["Stock", "Levels"], ["Stany", "magazynowe"]) },
      { id: "erp-sku", label: label(["SKU", "Logic"], ["Logika", "SKU"]) },
      { id: "erp-suppliers", label: label(["Supplier", "Sync"], ["Synchronizacja", "dostawcow"]) },
      { id: "erp-movement", label: label(["Inventory", "Movement"], ["Ruch", "towaru"]) },
      { id: "erp-warehouse", label: label(["Warehouse"], ["Magazyn"]) },
      { id: "erp-reorder", label: label(["Reorder", "Alerts"], ["Alerty", "domowien"]) },
      {
        id: "erp-multi-warehouse",
        label: label(["Multi-", "Warehouse"], ["Multi-", "magazyn"]),
      },
      {
        id: "erp-reporting-feed",
        label: label(["ERP", "Reporting"], ["Raportowanie", "ERP"]),
      },
    ],
    tone: "#f59e0b",
  },
  {
    id: "finance",
    label: label(["Finance &", "Accounting"], ["Finanse", "i ksiegowosc"]),
    mainAngle: 138,
    mainRadius: 260,
    mainScene: "mainSecond",
    sectorEnd: 157,
    sectorStart: 119,
    subRadiusInner: 384,
    subRadiusOuter: 492,
    subScene: "logisticsFinance",
    subnodes: [
      { id: "finance-invoicing", label: label(["Invoicing"], ["Fakturowanie"]) },
      { id: "finance-reconciliation", label: label(["Reconcili-", "ation"], ["Uzgodnie-", "nia"]) },
      { id: "finance-accounting", label: label(["Accounting"], ["Ksiegowosc"]) },
      { id: "finance-margin", label: label(["Margin", "Control"], ["Kontrola", "marzy"]) },
      { id: "finance-view", label: label(["Finance", "View"], ["Widok", "finansow"]) },
      {
        id: "finance-receivables",
        label: label(["Receivables", "& Payments"], ["Naleznosci", "i platnosci"]),
      },
      { id: "finance-costs", label: label(["Cost", "Centers"], ["Centra", "kosztow"]) },
      {
        id: "finance-dashboard",
        label: label(["Finance", "Dashboard"], ["Dashboard", "finansow"]),
      },
    ],
    tone: "#f97316",
  },
  {
    id: "logistics",
    label: label(["Logistics &", "Fulfillment"], ["Logistyka", "i realizacja"]),
    mainAngle: 174,
    mainRadius: 268,
    mainScene: "mainSecond",
    sectorEnd: 194,
    sectorStart: 154,
    subRadiusInner: 392,
    subRadiusOuter: 502,
    subScene: "logisticsFinance",
    subnodes: [
      { id: "logistics-courier", label: label(["Courier", "Sync"], ["Sync", "kurierow"]) },
      { id: "logistics-labels", label: label(["Labels"], ["Etykiety"]) },
      { id: "logistics-tracking", label: label(["Tracking", "Sync"], ["Sync", "trackingu"]) },
      { id: "logistics-alerts", label: label(["Shipping", "Alerts"], ["Alerty", "wysylki"]) },
      { id: "logistics-returns", label: label(["Returns", "Handling"], ["Obsluga", "zwrotow"]) },
      { id: "logistics-dispatch", label: label(["Dispatch", "Workflow"], ["Workflow", "wysylki"]) },
      { id: "logistics-pickup", label: label(["Pickup", "Points"], ["Punkty", "odbioru"]) },
      { id: "logistics-proof", label: label(["Delivery", "Proof"], ["Potwierdzenie", "dostawy"]) },
    ],
    tone: "#14b8a6",
  },
  {
    id: "commerce",
    label: label(["Commerce &", "Orders"], ["Commerce", "i zamowienia"]),
    mainAngle: 206,
    mainRadius: 262,
    mainScene: "mainSecond",
    sectorEnd: 227,
    sectorStart: 185,
    subRadiusInner: 388,
    subRadiusOuter: 494,
    subScene: "salesCommerce",
    subnodes: [
      { id: "commerce-orders", label: label(["Orders"], ["Zamowienia"]) },
      { id: "commerce-catalog", label: label(["Catalog", "Logic"], ["Logika", "katalogu"]) },
      {
        id: "commerce-marketplace",
        label: label(["Marketplace", "Sync"], ["Sync", "marketplace"]),
      },
      { id: "commerce-payments", label: label(["Payment", "Status"], ["Status", "platnosci"]) },
      { id: "commerce-quotations", label: label(["Quotations"], ["Wyceny"]) },
      { id: "commerce-b2b", label: label(["B2B", "Pricing"], ["Cenniki", "B2B"]) },
      {
        id: "commerce-checkout",
        label: label(["Checkout", "Events"], ["Zdarzenia", "checkout"]),
      },
      { id: "commerce-history", label: label(["Order", "History"], ["Historia", "zamowien"]) },
    ],
    tone: "#84cc16",
  },
  {
    id: "support",
    label: label(["Customer", "Service"], ["Obsluga", "klienta"]),
    mainAngle: 236,
    mainRadius: 258,
    mainScene: "mainSecond",
    sectorEnd: 255,
    sectorStart: 218,
    subRadiusInner: 386,
    subRadiusOuter: 492,
    subScene: "marketingSupport",
    subnodes: [
      { id: "support-ticketing", label: label(["Ticketing"], ["Ticketing"]) },
      { id: "support-sla", label: label(["SLA"], ["SLA"]) },
      { id: "support-complaints", label: label(["Complaints"], ["Reklamacje"]) },
      { id: "support-returns", label: label(["Returns"], ["Zwroty"]) },
      {
        id: "support-notifications",
        label: label(["Client", "Notifications"], ["Powiadomienia", "klienta"]),
      },
      {
        id: "support-knowledge",
        label: label(["Knowledge", "Base"], ["Baza", "wiedzy"]),
      },
      {
        id: "support-satisfaction",
        label: label(["Satisfaction"], ["Satysfakcja"]),
      },
      { id: "support-timeline", label: label(["Client", "Timeline"], ["Timeline", "klienta"]) },
    ],
    tone: "#22c55e",
  },
];

const CROSS_LINKS: DataFlowCrossLink[] = [
  { from: "marketing-forms", id: "forms-to-crm", to: "sales-crm-pipeline" },
  { from: "marketing-campaigns", id: "campaigns-to-scoring", to: "sales-lead-scoring" },
  { from: "commerce-orders", id: "orders-to-logistics", to: "logistics-dispatch" },
  { from: "commerce-payments", id: "payments-to-invoicing", to: "finance-invoicing" },
  { from: "erp-stock", id: "stock-to-orders", to: "commerce-orders" },
  { from: "sales-crm-pipeline", id: "crm-to-ai-triage", to: "sales-ai-triage" },
  { from: "support-ticketing", id: "tickets-to-ai", to: "ai-summaries" },
  { from: "ai-summaries", id: "ai-to-reporting", to: "reporting-management" },
  { from: "operations-workflow", id: "ops-to-logistics", to: "logistics-courier" },
  { from: "finance-dashboard", id: "finance-to-kpi", to: "reporting-kpi" },
];

const MOBILE_CLUSTERS = {
  en: [
    {
      id: "front-office",
      items: ["Website", "Forms", "CRM Pipeline", "Ticketing"],
      label: "Acquisition, Sales & Service",
    },
    {
      id: "commerce-ops",
      items: ["Orders", "Task Routing", "Delivery Workflow", "Dispatch Workflow"],
      label: "Commerce & Operations",
    },
    {
      id: "erp-finance",
      items: ["Stock Levels", "Invoicing", "Accounting", "Finance Dashboard"],
      label: "ERP & Finance Control",
    },
    {
      id: "ai",
      items: ["AI Summaries", "Routing Logic", "Automation Triggers", "Monitoring"],
      label: "AI & Automation Layer",
    },
    {
      id: "reporting",
      items: ["Owner View", "Weekly Summary", "KPI Board", "Management Summary"],
      label: "Reporting & Management",
    },
  ],
  pl: [
    {
      id: "front-office",
      items: ["Strona WWW", "Formularze", "Pipeline CRM", "Ticketing"],
      label: "Pozyskiwanie, sprzedaz i obsluga",
    },
    {
      id: "commerce-ops",
      items: ["Zamowienia", "Routing zadan", "Workflow dostawy", "Workflow wysylki"],
      label: "Commerce i operacje",
    },
    {
      id: "erp-finance",
      items: ["Stany magazynowe", "Fakturowanie", "Ksiegowosc", "Dashboard finansow"],
      label: "ERP i kontrola finansowa",
    },
    {
      id: "ai",
      items: ["Podsumowania AI", "Logika routingu", "Triggery automatyzacji", "Monitoring"],
      label: "Warstwa AI i automatyzacji",
    },
    {
      id: "reporting",
      items: ["Widok wlasciciela", "Tygodniowe podsumowanie", "Tablica KPI", "Podsumowanie zarzadzania"],
      label: "Raportowanie i zarzadzanie",
    },
  ],
} as const;

export function getDataFlowOrchestrationModel(locale: AppLocale): DataFlowOrchestrationModel {
  return {
    branches: BRANCHES,
    copy: COPY[locale],
    core: {
      label: {
        en: "Business Core",
        pl: "Rdzen biznesu",
      },
    },
    crossLinks: CROSS_LINKS,
    locale,
    mobileClusters: MOBILE_CLUSTERS[locale].map((cluster) => ({
      id: cluster.id,
      items: [...cluster.items],
      label: cluster.label,
    })),
  };
}
