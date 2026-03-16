import type { AppLocale } from "@mulagroup/content-models";

import type { IntegrationArchitectureModel, IntegrationSceneKey } from "./types";

export const INTEGRATION_SCENE_DELAYS: Record<IntegrationSceneKey, number> = {
  aiReporting: 7.05,
  commerceOperations: 5.1,
  core: 0.35,
  crossLinks: 7.95,
  liveState: 8.7,
  logisticsFinanceErp: 6.1,
  mainFirst: 1.05,
  mainSecond: 2.35,
  marketing: 3.55,
  sales: 4.25,
};

const SECTION_COPY = {
  en: {
    ctaLabel: "Book a strategy conversation",
    ctaTitle: "Want to see what this architecture could look like in your company?",
    description:
      "See how Mula Group can connect acquisition, sales, CRM, operations, logistics, finance, ERP, automation, AI and reporting into one coherent business ecosystem.",
    eyebrow: "Example integrated architecture",
    supportLine:
      "One connected business core. Multiple integrated operating layers. One measurable system.",
    title: "How Mula Group Connects the Entire Business",
  },
  pl: {
    ctaLabel: "Umów rozmowę strategiczną",
    ctaTitle: "Chcesz zobaczyć, jak taka architektura mogłaby wyglądać w Twojej firmie?",
    description:
      "Zobacz, jak Mula Group może połączyć marketing, sprzedaż, CRM, operacje, logistykę, finanse, ERP, automatyzacje, AI i raportowanie w jeden spójny system działania firmy.",
    eyebrow: "Przykładowa architektura integracji",
    supportLine:
      "Jeden spójny rdzeń firmy. Wiele zintegrowanych warstw operacyjnych. Jeden mierzalny system.",
    title: "Jak Mula Group łączy cały biznes w jeden system",
  },
} as const;

const CORE_LABEL = {
  en: "Business Core",
  pl: "Rdzeń biznesu",
} as const;

const BRANCH_TRANSLATIONS = {
  en: {
    ai: "AI & Automation",
    commerce: "Commerce & Orders",
    erp: "ERP & Inventory",
    finance: "Finance & Accounting",
    logistics: "Logistics & Fulfillment",
    marketing: "Marketing & Acquisition",
    operations: "Operations & Workflow",
    reporting: "Reporting & Management",
    sales: "Sales & CRM",
  },
  pl: {
    ai: "AI i automatyzacje",
    commerce: "Commerce i zamówienia",
    erp: "ERP i magazyn",
    finance: "Finanse i księgowość",
    logistics: "Logistyka i realizacja",
    marketing: "Marketing i pozyskiwanie",
    operations: "Operacje i workflow",
    reporting: "Raportowanie i zarządzanie",
    sales: "Sprzedaż i CRM",
  },
} as const;

const SUBNODE_TRANSLATIONS = {
  en: {
    aiSummaries: "AI Summaries",
    aiTriage: "AI Triage",
    anomalyDetection: "Anomaly Detection",
    approvals: "Approvals",
    automationTriggers: "Automation Triggers",
    bookkeepingExport: "Bookkeeping",
    campaignInputs: "Campaigns",
    catalogLogic: "Catalog Logic",
    courierIntegrations: "Courier Sync",
    crmPipeline: "CRM Pipeline",
    decisionSupport: "Decision Support",
    deliveryWorkflow: "Delivery Workflow",
    dispatchAlerts: "Dispatch Alerts",
    documentFlow: "Document Flow",
    financeDashboard: "Finance View",
    followUpAutomation: "Follow-up",
    forms: "Forms",
    inventoryMovement: "Stock Movement",
    invoicing: "Invoicing",
    labelCreation: "Labels",
    landingPages: "Landing Pages",
    leadScoring: "Lead Scoring",
    managementAlerts: "Alerts",
    marginChecks: "Margin Checks",
    marketplaceSync: "Marketplace Sync",
    meetingFlow: "Meeting Flow",
    monthlyReview: "Monthly Review",
    orders: "Orders",
    ownerDashboard: "Owner View",
    paymentStatus: "Payment Status",
    proposals: "Proposals",
    quotationFlow: "Quotation Flow",
    reconciliation: "Reconciliation",
    returnsFlow: "Returns Flow",
    routingRecommendations: "Routing Logic",
    salesDashboard: "Sales View",
    seo: "SEO",
    serviceStages: "Service Stages",
    skuLogic: "SKU Logic",
    socialCapture: "Social Capture",
    stockLevels: "Stock Levels",
    supplierSync: "Supplier Sync",
    taskRouting: "Task Routing",
    trackingSync: "Tracking Sync",
    warehouseStatus: "Warehouse",
    website: "Website",
    weeklySummary: "Weekly Summary",
  },
  pl: {
    aiSummaries: "Podsumowania AI",
    aiTriage: "AI triage",
    anomalyDetection: "Wykrywanie anomalii",
    approvals: "Akceptacje",
    automationTriggers: "Triggery automatyzacji",
    bookkeepingExport: "Księgowość",
    campaignInputs: "Kampanie",
    catalogLogic: "Logika katalogu",
    courierIntegrations: "Synchronizacja kurierów",
    crmPipeline: "Pipeline CRM",
    decisionSupport: "Wsparcie decyzji",
    deliveryWorkflow: "Workflow dostawy",
    dispatchAlerts: "Alerty wysyłki",
    documentFlow: "Obieg dokumentów",
    financeDashboard: "Widok finansów",
    followUpAutomation: "Follow-up",
    forms: "Formularze",
    inventoryMovement: "Ruch towaru",
    invoicing: "Fakturowanie",
    labelCreation: "Etykiety",
    landingPages: "Landing pages",
    leadScoring: "Scoring leadów",
    managementAlerts: "Alerty",
    marginChecks: "Kontrola marży",
    marketplaceSync: "Synchronizacja marketplace",
    meetingFlow: "Obsługa spotkań",
    monthlyReview: "Miesięczny przegląd",
    orders: "Zamówienia",
    ownerDashboard: "Widok właściciela",
    paymentStatus: "Status płatności",
    proposals: "Oferty",
    quotationFlow: "Obieg wycen",
    reconciliation: "Uzgodnienia",
    returnsFlow: "Obsługa zwrotów",
    routingRecommendations: "Logika routingu",
    salesDashboard: "Widok sprzedaży",
    seo: "SEO",
    serviceStages: "Etapy realizacji",
    skuLogic: "Logika SKU",
    socialCapture: "Pozyskanie z social",
    stockLevels: "Stany magazynowe",
    supplierSync: "Synchronizacja dostawców",
    taskRouting: "Routing zadań",
    trackingSync: "Synchronizacja trackingu",
    warehouseStatus: "Magazyn",
    website: "Strona WWW",
    weeklySummary: "Tygodniowe podsumowanie",
  },
} as const;

const BRANCH_CONFIG = [
  {
    id: "marketing",
    scene: "mainFirst",
    subScene: "marketing",
    subnodes: ["website", "landingPages", "forms", "seo", "campaignInputs", "socialCapture"],
  },
  {
    id: "sales",
    scene: "mainFirst",
    subScene: "sales",
    subnodes: [
      "crmPipeline",
      "leadScoring",
      "aiTriage",
      "followUpAutomation",
      "proposals",
      "meetingFlow",
    ],
  },
  {
    id: "operations",
    scene: "mainFirst",
    subScene: "commerceOperations",
    subnodes: ["taskRouting", "serviceStages", "approvals", "documentFlow", "deliveryWorkflow"],
  },
  {
    id: "reporting",
    scene: "mainFirst",
    subScene: "aiReporting",
    subnodes: [
      "ownerDashboard",
      "salesDashboard",
      "weeklySummary",
      "monthlyReview",
      "managementAlerts",
    ],
  },
  {
    id: "commerce",
    scene: "mainSecond",
    subScene: "commerceOperations",
    subnodes: ["orders", "catalogLogic", "marketplaceSync", "paymentStatus", "quotationFlow"],
  },
  {
    id: "logistics",
    scene: "mainSecond",
    subScene: "logisticsFinanceErp",
    subnodes: [
      "courierIntegrations",
      "labelCreation",
      "trackingSync",
      "dispatchAlerts",
      "returnsFlow",
    ],
  },
  {
    id: "finance",
    scene: "mainSecond",
    subScene: "logisticsFinanceErp",
    subnodes: ["invoicing", "reconciliation", "bookkeepingExport", "marginChecks", "financeDashboard"],
  },
  {
    id: "erp",
    scene: "mainSecond",
    subScene: "logisticsFinanceErp",
    subnodes: ["stockLevels", "skuLogic", "supplierSync", "inventoryMovement", "warehouseStatus"],
  },
  {
    id: "ai",
    scene: "mainSecond",
    subScene: "aiReporting",
    subnodes: [
      "aiSummaries",
      "routingRecommendations",
      "automationTriggers",
      "anomalyDetection",
      "decisionSupport",
    ],
  },
] as const;

const CROSS_LINKS = [
  { from: "forms", id: "forms-to-crm", to: "crmPipeline" },
  { from: "orders", id: "orders-to-logistics", to: "courierIntegrations" },
  { from: "paymentStatus", id: "payments-to-invoicing", to: "invoicing" },
  { from: "stockLevels", id: "inventory-to-orders", to: "orders" },
  { from: "crmPipeline", id: "crm-to-ai-triage", to: "aiTriage" },
  { from: "aiSummaries", id: "ai-to-reporting", to: "ownerDashboard" },
  { from: "proposals", id: "proposals-to-followup", to: "followUpAutomation" },
] as const;

const MOBILE_CLUSTER_TRANSLATIONS = {
  en: {
    acquisitionSales: "Marketing, Sales & CRM",
    commerceOperations: "Commerce & Operations",
    erpAutomation: "ERP, Inventory & AI",
    logisticsFinance: "Logistics & Finance",
    reporting: "Reporting & Management",
  },
  pl: {
    acquisitionSales: "Marketing, sprzedaż i CRM",
    commerceOperations: "Commerce i operacje",
    erpAutomation: "ERP, magazyn i AI",
    logisticsFinance: "Logistyka i finanse",
    reporting: "Raportowanie i zarządzanie",
  },
} as const;

const MOBILE_CLUSTER_CONFIG = [
  {
    id: "acquisitionSales",
    items: ["website", "forms", "crmPipeline"],
  },
  {
    id: "commerceOperations",
    items: ["orders", "paymentStatus", "taskRouting"],
  },
  {
    id: "logisticsFinance",
    items: ["courierIntegrations", "invoicing", "marginChecks"],
  },
  {
    id: "erpAutomation",
    items: ["stockLevels", "automationTriggers", "aiSummaries"],
  },
  {
    id: "reporting",
    items: ["ownerDashboard", "weeklySummary", "managementAlerts"],
  },
] as const;

export function getIntegrationArchitectureModel(locale: AppLocale): IntegrationArchitectureModel {
  return {
    copy: SECTION_COPY[locale],
    core: {
      id: "business-core",
      label: CORE_LABEL[locale],
    },
    crossLinks: CROSS_LINKS.map((link) => ({ ...link })),
    locale,
    mobileClusters: MOBILE_CLUSTER_CONFIG.map((cluster) => ({
      id: cluster.id,
      items: cluster.items.map((itemId) => SUBNODE_TRANSLATIONS[locale][itemId]),
      label: MOBILE_CLUSTER_TRANSLATIONS[locale][cluster.id],
    })),
    primaryNodes: BRANCH_CONFIG.map((branch) => ({
      id: branch.id,
      label: BRANCH_TRANSLATIONS[locale][branch.id],
      scene: branch.scene,
      subScene: branch.subScene,
      subnodes: branch.subnodes.map((subnodeId) => ({
        id: subnodeId,
        label: SUBNODE_TRANSLATIONS[locale][subnodeId],
      })),
    })),
  };
}
