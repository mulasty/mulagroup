import type { AppLocale } from "@mulagroup/content-models";

export type WorkflowNodeKind = "card" | "orb";
export type WorkflowPortSide = "bottom" | "left" | "right" | "top";

export type WorkflowNode = {
  h: number;
  iconLabel: string;
  id: string;
  kind: WorkflowNodeKind;
  stage: number;
  subtitle?: Record<AppLocale, string>;
  title: Record<AppLocale, string>;
  tone: string;
  w: number;
  x: number;
  y: number;
};

export type WorkflowConnection = {
  dashed?: boolean;
  from: {
    id: string;
    offsetX?: number;
    offsetY?: number;
    side: WorkflowPortSide;
  };
  id: string;
  pulseCount?: 0 | 1 | 2;
  pulseTone?: string;
  pulse?: boolean;
  stage: number;
  to: {
    id: string;
    offsetX?: number;
    offsetY?: number;
    side: WorkflowPortSide;
  };
  tone?: string;
  via?: { x: number; y: number }[];
};

export type WorkflowMicroNode = {
  h: number;
  id: string;
  parentId: string;
  stage: number;
  title: Record<AppLocale, string>;
  tone: string;
  w: number;
  x: number;
  y: number;
};

export type WorkflowNote = {
  id: string;
  lines: Record<AppLocale, string[]>;
  stage: number;
  w: number;
  x: number;
  y: number;
};

export type WorkflowCopy = {
  ctaPrimary: string;
  ctaSecondary: string;
  description: string;
  eyebrow: string;
  helper: string;
  title: string;
};

export type AutomationProcessWorkflowModel = {
  connections: WorkflowConnection[];
  copy: WorkflowCopy;
  locale: AppLocale;
  microNodes: WorkflowMicroNode[];
  notes: WorkflowNote[];
  nodes: WorkflowNode[];
};

export const WORKFLOW_CANVAS = {
  height: 940,
  width: 1540,
} as const;

export const WORKFLOW_STAGES = {
  bottom: 3.4,
  middle: 2.3,
  notes: 1.4,
  outreach: 1.1,
  pulse: 4.4,
  top: 0.35,
} as const;

const COPY = {
  en: {
    ctaPrimary: "Book a demo",
    ctaSecondary: "See how it works",
    description:
      "This workflow board shows how Mula Group can design a real automation canvas for qualification, outreach, reply triage, issue analysis and sheet-based operational control.",
    eyebrow: "Automation workflow canvas",
    helper: "A real multi-lane automation board. AI, human review and system updates working in one controlled process.",
    title: "A Real Process Automation Workflow, Not a Generic Diagram",
  },
  pl: {
    ctaPrimary: "Umow demo",
    ctaSecondary: "Zobacz jak to dziala",
    description:
      "Ten board pokazuje, jak Mula Group projektuje realny workflow automatyzacji dla kwalifikacji, outreachu, triage odpowiedzi, analizy problemow i operacyjnej kontroli opartej o dane.",
    eyebrow: "Canvas automatyzacji procesu",
    helper:
      "Realny wielowarstwowy workflow automatyzacji. AI, przeglad czlowieka i aktualizacje systemow w jednym kontrolowanym procesie.",
    title: "Realny Workflow Automatyzacji Procesu, Nie Generyczny Diagram",
  },
} as const;

const NODES: WorkflowNode[] = [
  {
    h: 56,
    iconLabel: "TRG",
    id: "trigger-form",
    kind: "card",
    stage: 0,
    subtitle: {
      en: "event",
      pl: "zdarzenie",
    },
    title: {
      en: "On inquiry submission",
      pl: "Po wyslaniu formularza",
    },
    tone: "#22c55e",
    w: 124,
    x: 156,
    y: 82,
  },
  {
    h: 56,
    iconLabel: "AI",
    id: "ai-agent-top",
    kind: "card",
    stage: 0,
    subtitle: {
      en: "qualification",
      pl: "kwalifikacja",
    },
    title: {
      en: "AI Agent",
      pl: "Agent AI",
    },
    tone: "#111827",
    w: 124,
    x: 332,
    y: 82,
  },
  {
    h: 56,
    iconLabel: "LLM",
    id: "openrouter-top",
    kind: "orb",
    stage: 0,
    subtitle: {
      en: "model",
      pl: "model",
    },
    title: {
      en: "Chat Model",
      pl: "Model chat",
    },
    tone: "#94a3b8",
    w: 82,
    x: 300,
    y: 164,
  },
  {
    h: 56,
    iconLabel: "{}",
    id: "parser-top",
    kind: "orb",
    stage: 0,
    subtitle: {
      en: "parser",
      pl: "parser",
    },
    title: {
      en: "Structured Output",
      pl: "Structured output",
    },
    tone: "#94a3b8",
    w: 82,
    x: 398,
    y: 164,
  },
  {
    h: 56,
    iconLabel: "SPL",
    id: "split-out",
    kind: "card",
    stage: 0,
    subtitle: {
      en: "routing",
      pl: "routing",
    },
    title: {
      en: "Split Out",
      pl: "Split out",
    },
    tone: "#8b5cf6",
    w: 112,
    x: 522,
    y: 82,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "edit-fields-top",
    kind: "card",
    stage: 0,
    subtitle: {
      en: "normalize",
      pl: "normalizacja",
    },
    title: {
      en: "Edit Fields",
      pl: "Edycja pol",
    },
    tone: "#6366f1",
    w: 116,
    x: 682,
    y: 82,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "append-sheet",
    kind: "card",
    stage: 0,
    subtitle: {
      en: "test case",
      pl: "test case",
    },
    title: {
      en: "Append Row",
      pl: "Dodaj wiersz",
    },
    tone: "#22c55e",
    w: 120,
    x: 914,
    y: 82,
  },
  {
    h: 56,
    iconLabel: "CLK",
    id: "get-current-time",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "schedule",
      pl: "harmonogram",
    },
    title: {
      en: "Get Current Time",
      pl: "Pobierz czas",
    },
    tone: "#16a34a",
    w: 126,
    x: 152,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "add-send-time",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "manual",
      pl: "manual",
    },
    title: {
      en: "Add Send Time",
      pl: "Dodaj send time",
    },
    tone: "#6366f1",
    w: 124,
    x: 328,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "ML",
    id: "send-email",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "outreach",
      pl: "outreach",
    },
    title: {
      en: "Send Emails",
      pl: "Wyslij maile",
    },
    tone: "#ea580c",
    w: 118,
    x: 500,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "send-output",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "persist",
      pl: "persist",
    },
    title: {
      en: "Add Send Output",
      pl: "Dodaj output",
    },
    tone: "#6366f1",
    w: 124,
    x: 672,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "add-thread-id",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "tracking",
      pl: "tracking",
    },
    title: {
      en: "Add Thread ID",
      pl: "Dodaj thread id",
    },
    tone: "#22c55e",
    w: 122,
    x: 844,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "PAU",
    id: "wait-window",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "delay",
      pl: "opoznienie",
    },
    title: {
      en: "Wait",
      pl: "Wait",
    },
    tone: "#9f1239",
    w: 98,
    x: 1016,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "ML",
    id: "fetch-replies",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "inbox",
      pl: "skrzynka",
    },
    title: {
      en: "Fetch Replies",
      pl: "Pobierz odpowiedzi",
    },
    tone: "#ea580c",
    w: 120,
    x: 1292,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "FLT",
    id: "filter-replies",
    kind: "card",
    stage: 1,
    subtitle: {
      en: "routing",
      pl: "routing",
    },
    title: {
      en: "Filter",
      pl: "Filtr",
    },
    tone: "#3b82f6",
    w: 96,
    x: 1444,
    y: 276,
  },
  {
    h: 56,
    iconLabel: "MRG",
    id: "merge-replies",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "merge",
      pl: "merge",
    },
    title: {
      en: "Merge",
      pl: "Merge",
    },
    tone: "#06b6d4",
    w: 92,
    x: 132,
    y: 488,
  },
  {
    h: 56,
    iconLabel: "IF",
    id: "if-true-replies",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "condition",
      pl: "warunek",
    },
    title: {
      en: "If True Replies",
      pl: "Jesli sa reply",
    },
    tone: "#22c55e",
    w: 118,
    x: 286,
    y: 452,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "update-response-sheet",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "sheet",
      pl: "sheet",
    },
    title: {
      en: "Update Response",
      pl: "Aktualizuj response",
    },
    tone: "#22c55e",
    w: 126,
    x: 576,
    y: 452,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "add-thread-copy",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "thread",
      pl: "thread",
    },
    title: {
      en: "Add Thread Copy",
      pl: "Dodaj kopie thread",
    },
    tone: "#6366f1",
    w: 126,
    x: 742,
    y: 452,
  },
  {
    h: 56,
    iconLabel: "SUM",
    id: "find-summary-email",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "summary",
      pl: "summary",
    },
    title: {
      en: "Find Summary",
      pl: "Znajdz summary",
    },
    tone: "#f59e0b",
    w: 124,
    x: 936,
    y: 452,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "set-thread-summary",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "manual",
      pl: "manual",
    },
    title: {
      en: "Set Thread ID",
      pl: "Ustaw thread id",
    },
    tone: "#6366f1",
    w: 124,
    x: 1110,
    y: 452,
  },
  {
    h: 56,
    iconLabel: "FLT",
    id: "filter-upper",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "test id",
      pl: "test id",
    },
    title: {
      en: "Filter Test ID",
      pl: "Filtr test id",
    },
    tone: "#3b82f6",
    w: 108,
    x: 1288,
    y: 452,
  },
  {
    h: 56,
    iconLabel: "MAIL",
    id: "find-action-email",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "email",
      pl: "email",
    },
    title: {
      en: "Find Action Email",
      pl: "Znajdz action email",
    },
    tone: "#ef4444",
    w: 132,
    x: 344,
    y: 572,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "add-original-thread",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "thread",
      pl: "thread",
    },
    title: {
      en: "Add Original Thread",
      pl: "Dodaj original thread",
    },
    tone: "#6366f1",
    w: 136,
    x: 540,
    y: 572,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "extract-body",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "data",
      pl: "dane",
    },
    title: {
      en: "Extract Body",
      pl: "Wyciagnij body",
    },
    tone: "#22c55e",
    w: 120,
    x: 732,
    y: 572,
  },
  {
    h: 56,
    iconLabel: "SUM",
    id: "find-issue-summary",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "issue",
      pl: "issue",
    },
    title: {
      en: "Find Summary",
      pl: "Znajdz summary",
    },
    tone: "#f59e0b",
    w: 124,
    x: 936,
    y: 572,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "set-thread-issue",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "manual",
      pl: "manual",
    },
    title: {
      en: "Set Thread ID",
      pl: "Ustaw thread id",
    },
    tone: "#6366f1",
    w: 124,
    x: 1110,
    y: 572,
  },
  {
    h: 56,
    iconLabel: "FLT",
    id: "filter-lower",
    kind: "card",
    stage: 2,
    subtitle: {
      en: "test id",
      pl: "test id",
    },
    title: {
      en: "Filter Test ID",
      pl: "Filtr test id",
    },
    tone: "#3b82f6",
    w: 108,
    x: 1288,
    y: 572,
  },
  {
    h: 56,
    iconLabel: "MRG",
    id: "merge-analysis",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "merge",
      pl: "merge",
    },
    title: {
      en: "Merge",
      pl: "Merge",
    },
    tone: "#06b6d4",
    w: 92,
    x: 134,
    y: 760,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "update-row-sheet",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "sheet",
      pl: "sheet",
    },
    title: {
      en: "Update Row",
      pl: "Aktualizuj wiersz",
    },
    tone: "#22c55e",
    w: 120,
    x: 298,
    y: 760,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "get-sheet-rows",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "sheet",
      pl: "sheet",
    },
    title: {
      en: "Get Sheet Rows",
      pl: "Pobierz rows",
    },
    tone: "#22c55e",
    w: 122,
    x: 470,
    y: 760,
  },
  {
    h: 56,
    iconLabel: "AI",
    id: "ai-agent-bottom",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "review",
      pl: "review",
    },
    title: {
      en: "AI Agent",
      pl: "Agent AI",
    },
    tone: "#111827",
    w: 126,
    x: 658,
    y: 760,
  },
  {
    h: 56,
    iconLabel: "LLM",
    id: "openrouter-bottom",
    kind: "orb",
    stage: 3,
    subtitle: {
      en: "chat",
      pl: "chat",
    },
    title: {
      en: "Chat Model",
      pl: "Model chat",
    },
    tone: "#94a3b8",
    w: 82,
    x: 610,
    y: 844,
  },
  {
    h: 56,
    iconLabel: "RAG",
    id: "client-rag",
    kind: "orb",
    stage: 3,
    subtitle: {
      en: "context",
      pl: "context",
    },
    title: {
      en: "Client RAG",
      pl: "Client RAG",
    },
    tone: "#10b981",
    w: 82,
    x: 708,
    y: 864,
  },
  {
    h: 56,
    iconLabel: "{}",
    id: "parser-bottom",
    kind: "orb",
    stage: 3,
    subtitle: {
      en: "parser",
      pl: "parser",
    },
    title: {
      en: "Structured Output",
      pl: "Structured output",
    },
    tone: "#94a3b8",
    w: 82,
    x: 806,
    y: 844,
  },
  {
    h: 56,
    iconLabel: "EMB",
    id: "embeddings",
    kind: "orb",
    stage: 3,
    subtitle: {
      en: "memory",
      pl: "pamiec",
    },
    title: {
      en: "Embeddings",
      pl: "Embeddings",
    },
    tone: "#94a3b8",
    w: 82,
    x: 708,
    y: 946,
  },
  {
    h: 56,
    iconLabel: "{ }",
    id: "code-rules",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "rules",
      pl: "reguly",
    },
    title: {
      en: "Code",
      pl: "Code",
    },
    tone: "#f59e0b",
    w: 104,
    x: 904,
    y: 760,
  },
  {
    h: 56,
    iconLabel: "EDT",
    id: "edit-fields-bottom",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "normalize",
      pl: "normalizacja",
    },
    title: {
      en: "Edit Fields",
      pl: "Edycja pol",
    },
    tone: "#6366f1",
    w: 116,
    x: 1064,
    y: 760,
  },
  {
    h: 56,
    iconLabel: "SHT",
    id: "update-final-row",
    kind: "card",
    stage: 3,
    subtitle: {
      en: "final write",
      pl: "final write",
    },
    title: {
      en: "Update Row",
      pl: "Aktualizuj row",
    },
    tone: "#22c55e",
    w: 122,
    x: 1238,
    y: 760,
  },
];

const CONNECTIONS: WorkflowConnection[] = [
  { from: { id: "trigger-form", side: "right" }, id: "c-1", pulseCount: 1, pulseTone: "#22c55e", stage: 0, to: { id: "ai-agent-top", side: "left" } },
  { from: { id: "ai-agent-top", side: "right" }, id: "c-2", pulseCount: 2, pulseTone: "#3b82f6", stage: 0, to: { id: "split-out", side: "left" } },
  { from: { id: "split-out", side: "right" }, id: "c-3", pulseCount: 1, pulseTone: "#8b5cf6", stage: 0, to: { id: "edit-fields-top", side: "left" } },
  { from: { id: "edit-fields-top", side: "right" }, id: "c-4", pulseCount: 1, pulseTone: "#6366f1", stage: 0, to: { id: "append-sheet", side: "left" } },
  {
    dashed: true,
    from: { id: "ai-agent-top", side: "bottom", offsetX: -18 },
    id: "c-5",
    pulseCount: 1,
    pulseTone: "#6366f1",
    stage: 0,
    to: { id: "openrouter-top", side: "top" },
    tone: "#6366f1",
  },
  {
    dashed: true,
    from: { id: "ai-agent-top", side: "bottom", offsetX: 18 },
    id: "c-6",
    pulseCount: 1,
    pulseTone: "#6366f1",
    stage: 0,
    to: { id: "parser-top", side: "top" },
    tone: "#6366f1",
  },
  { from: { id: "get-current-time", side: "right" }, id: "c-7", pulseCount: 1, pulseTone: "#16a34a", stage: 1, to: { id: "add-send-time", side: "left" } },
  { from: { id: "add-send-time", side: "right" }, id: "c-8", pulseCount: 1, pulseTone: "#6366f1", stage: 1, to: { id: "send-email", side: "left" } },
  { from: { id: "send-email", side: "right" }, id: "c-9", pulseCount: 2, pulseTone: "#ea580c", stage: 1, to: { id: "send-output", side: "left" } },
  { from: { id: "send-output", side: "right" }, id: "c-10", pulseCount: 1, pulseTone: "#6366f1", stage: 1, to: { id: "add-thread-id", side: "left" } },
  { from: { id: "add-thread-id", side: "right" }, id: "c-11", pulseCount: 1, pulseTone: "#22c55e", stage: 1, to: { id: "wait-window", side: "left" } },
  {
    from: { id: "wait-window", side: "right" },
    id: "c-12",
    pulseCount: 2,
    pulseTone: "#3b82f6",
    pulse: true,
    stage: 1,
    to: { id: "fetch-replies", side: "left" },
    via: [{ x: 1188, y: 304 }],
  },
  { from: { id: "fetch-replies", side: "right" }, id: "c-13", pulseCount: 1, pulseTone: "#ea580c", stage: 1, to: { id: "filter-replies", side: "left" } },
  {
    from: { id: "append-sheet", side: "bottom" },
    id: "c-14",
    pulseCount: 1,
    pulseTone: "#22c55e",
    stage: 1,
    to: { id: "add-thread-id", side: "top" },
    via: [{ x: 974, y: 196 }, { x: 974, y: 248 }],
  },
  {
    from: { id: "filter-replies", side: "bottom" },
    id: "c-15",
    pulseCount: 2,
    pulseTone: "#3b82f6",
    stage: 2,
    to: { id: "merge-replies", side: "top" },
    via: [{ x: 1492, y: 352 }, { x: 90, y: 352 }, { x: 90, y: 488 }],
  },
  { from: { id: "merge-replies", side: "right" }, id: "c-16", pulseCount: 1, pulseTone: "#06b6d4", stage: 2, to: { id: "if-true-replies", side: "left" } },
  {
    from: { id: "if-true-replies", side: "right" },
    id: "c-17",
    pulseCount: 1,
    pulseTone: "#22c55e",
    stage: 2,
    to: { id: "update-response-sheet", side: "left" },
    via: [{ x: 452, y: 480 }],
  },
  { from: { id: "update-response-sheet", side: "right" }, id: "c-18", pulseCount: 1, pulseTone: "#22c55e", stage: 2, to: { id: "add-thread-copy", side: "left" } },
  { from: { id: "add-thread-copy", side: "right" }, id: "c-19", pulseCount: 1, pulseTone: "#6366f1", stage: 2, to: { id: "find-summary-email", side: "left" } },
  { from: { id: "find-summary-email", side: "right" }, id: "c-20", pulseCount: 1, pulseTone: "#f59e0b", stage: 2, to: { id: "set-thread-summary", side: "left" } },
  { from: { id: "set-thread-summary", side: "right" }, id: "c-21", pulseCount: 1, pulseTone: "#6366f1", stage: 2, to: { id: "filter-upper", side: "left" } },
  {
    from: { id: "if-true-replies", side: "bottom" },
    id: "c-22",
    pulseCount: 1,
    pulseTone: "#22c55e",
    stage: 2,
    to: { id: "find-action-email", side: "left" },
    via: [{ x: 344, y: 548 }],
  },
  { from: { id: "find-action-email", side: "right" }, id: "c-23", pulseCount: 1, pulseTone: "#ef4444", stage: 2, to: { id: "add-original-thread", side: "left" } },
  { from: { id: "add-original-thread", side: "right" }, id: "c-24", pulseCount: 1, pulseTone: "#6366f1", stage: 2, to: { id: "extract-body", side: "left" } },
  { from: { id: "extract-body", side: "right" }, id: "c-25", pulseCount: 1, pulseTone: "#22c55e", stage: 2, to: { id: "find-issue-summary", side: "left" } },
  { from: { id: "find-issue-summary", side: "right" }, id: "c-26", pulseCount: 1, pulseTone: "#f59e0b", stage: 2, to: { id: "set-thread-issue", side: "left" } },
  { from: { id: "set-thread-issue", side: "right" }, id: "c-27", pulseCount: 1, pulseTone: "#6366f1", stage: 2, to: { id: "filter-lower", side: "left" } },
  {
    from: { id: "filter-upper", side: "bottom" },
    id: "c-28",
    pulseCount: 2,
    pulseTone: "#3b82f6",
    stage: 3,
    to: { id: "merge-analysis", side: "top" },
    via: [{ x: 1338, y: 668 }, { x: 84, y: 668 }, { x: 84, y: 760 }],
  },
  {
    from: { id: "filter-lower", side: "bottom" },
    id: "c-29",
    pulseCount: 2,
    pulseTone: "#3b82f6",
    stage: 3,
    to: { id: "merge-analysis", side: "top" },
    via: [{ x: 1338, y: 668 }, { x: 84, y: 668 }, { x: 84, y: 760 }],
  },
  { from: { id: "merge-analysis", side: "right" }, id: "c-30", pulseCount: 1, pulseTone: "#06b6d4", stage: 3, to: { id: "update-row-sheet", side: "left" } },
  { from: { id: "update-row-sheet", side: "right" }, id: "c-31", pulseCount: 1, pulseTone: "#22c55e", stage: 3, to: { id: "get-sheet-rows", side: "left" } },
  { from: { id: "get-sheet-rows", side: "right" }, id: "c-32", pulseCount: 1, pulseTone: "#22c55e", stage: 3, to: { id: "ai-agent-bottom", side: "left" } },
  { from: { id: "ai-agent-bottom", side: "right" }, id: "c-33", pulseCount: 2, pulseTone: "#111827", stage: 3, to: { id: "code-rules", side: "left" } },
  { from: { id: "code-rules", side: "right" }, id: "c-34", pulseCount: 1, pulseTone: "#f59e0b", stage: 3, to: { id: "edit-fields-bottom", side: "left" } },
  { from: { id: "edit-fields-bottom", side: "right" }, id: "c-35", pulse: true, pulseCount: 2, pulseTone: "#6366f1", stage: 3, to: { id: "update-final-row", side: "left" } },
  {
    dashed: true,
    from: { id: "ai-agent-bottom", side: "bottom", offsetX: -20 },
    id: "c-36",
    pulseCount: 1,
    pulseTone: "#6366f1",
    stage: 3,
    to: { id: "openrouter-bottom", side: "top" },
    tone: "#6366f1",
  },
  {
    dashed: true,
    from: { id: "ai-agent-bottom", side: "bottom", offsetX: 0 },
    id: "c-37",
    pulseCount: 1,
    pulseTone: "#10b981",
    stage: 3,
    to: { id: "client-rag", side: "top" },
    tone: "#6366f1",
  },
  {
    dashed: true,
    from: { id: "ai-agent-bottom", side: "bottom", offsetX: 20 },
    id: "c-38",
    pulseCount: 1,
    pulseTone: "#6366f1",
    stage: 3,
    to: { id: "parser-bottom", side: "top" },
    tone: "#6366f1",
  },
  {
    dashed: true,
    from: { id: "client-rag", side: "bottom" },
    id: "c-39",
    pulseCount: 1,
    pulseTone: "#10b981",
    stage: 3,
    to: { id: "embeddings", side: "top" },
    tone: "#6366f1",
  },
];

const MICRO_NODES: WorkflowMicroNode[] = [
  { h: 26, id: "sub-lead-payload", parentId: "trigger-form", stage: 0, title: { en: "lead payload", pl: "lead payload" }, tone: "#22c55e", w: 92, x: 172, y: 154 },
  { h: 26, id: "sub-fit-score", parentId: "ai-agent-top", stage: 0, title: { en: "fit score", pl: "fit score" }, tone: "#111827", w: 78, x: 316, y: 46 },
  { h: 26, id: "sub-pillar-tag", parentId: "ai-agent-top", stage: 0, title: { en: "pillar tag", pl: "pillar tag" }, tone: "#111827", w: 78, x: 406, y: 46 },
  { h: 26, id: "sub-lane-router", parentId: "split-out", stage: 0, title: { en: "lane router", pl: "lane router" }, tone: "#8b5cf6", w: 84, x: 534, y: 46 },
  { h: 26, id: "sub-sheet-row", parentId: "append-sheet", stage: 0, title: { en: "test row", pl: "test row" }, tone: "#22c55e", w: 74, x: 936, y: 154 },
  { h: 26, id: "sub-sequence-window", parentId: "add-send-time", stage: 1, title: { en: "send window", pl: "send window" }, tone: "#6366f1", w: 92, x: 342, y: 348 },
  { h: 26, id: "sub-template-pack", parentId: "send-email", stage: 1, title: { en: "template pack", pl: "template pack" }, tone: "#ea580c", w: 96, x: 510, y: 348 },
  { h: 26, id: "sub-thread-memory", parentId: "add-thread-id", stage: 1, title: { en: "thread memory", pl: "thread memory" }, tone: "#22c55e", w: 100, x: 850, y: 348 },
  { h: 26, id: "sub-mailbox-pool", parentId: "fetch-replies", stage: 1, title: { en: "mailbox pool", pl: "mailbox pool" }, tone: "#ea580c", w: 94, x: 1306, y: 348 },
  { h: 26, id: "sub-reply-tag", parentId: "update-response-sheet", stage: 2, title: { en: "reply tag", pl: "reply tag" }, tone: "#22c55e", w: 80, x: 594, y: 524 },
  { h: 26, id: "sub-summary-signal", parentId: "find-summary-email", stage: 2, title: { en: "summary signal", pl: "summary signal" }, tone: "#f59e0b", w: 100, x: 946, y: 524 },
  { h: 26, id: "sub-issue-signal", parentId: "find-issue-summary", stage: 2, title: { en: "issue signal", pl: "issue signal" }, tone: "#f59e0b", w: 92, x: 952, y: 644 },
  { h: 26, id: "sub-issue-class", parentId: "ai-agent-bottom", stage: 3, title: { en: "issue class", pl: "issue class" }, tone: "#111827", w: 84, x: 664, y: 718 },
  { h: 26, id: "sub-root-cause", parentId: "code-rules", stage: 3, title: { en: "root cause", pl: "root cause" }, tone: "#f59e0b", w: 84, x: 914, y: 718 },
  { h: 26, id: "sub-ops-status", parentId: "update-final-row", stage: 3, title: { en: "ops status", pl: "ops status" }, tone: "#22c55e", w: 84, x: 1258, y: 828 },
];

const MICRO_CONNECTIONS: WorkflowConnection[] = [
  { dashed: true, from: { id: "trigger-form", side: "bottom" }, id: "mc-1", pulseCount: 1, pulseTone: "#22c55e", stage: 0, to: { id: "sub-lead-payload", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "ai-agent-top", side: "top", offsetX: -20 }, id: "mc-2", pulseCount: 1, pulseTone: "#3b82f6", stage: 0, to: { id: "sub-fit-score", side: "bottom" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "ai-agent-top", side: "top", offsetX: 18 }, id: "mc-3", pulseCount: 1, pulseTone: "#3b82f6", stage: 0, to: { id: "sub-pillar-tag", side: "bottom" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "split-out", side: "top" }, id: "mc-4", pulseCount: 1, pulseTone: "#8b5cf6", stage: 0, to: { id: "sub-lane-router", side: "bottom" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "append-sheet", side: "bottom" }, id: "mc-5", pulseCount: 1, pulseTone: "#22c55e", stage: 0, to: { id: "sub-sheet-row", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "add-send-time", side: "bottom" }, id: "mc-6", pulseCount: 1, pulseTone: "#6366f1", stage: 1, to: { id: "sub-sequence-window", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "send-email", side: "bottom" }, id: "mc-7", pulseCount: 1, pulseTone: "#ea580c", stage: 1, to: { id: "sub-template-pack", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "add-thread-id", side: "bottom" }, id: "mc-8", pulseCount: 1, pulseTone: "#22c55e", stage: 1, to: { id: "sub-thread-memory", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "fetch-replies", side: "bottom" }, id: "mc-9", pulseCount: 1, pulseTone: "#ea580c", stage: 1, to: { id: "sub-mailbox-pool", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "update-response-sheet", side: "bottom" }, id: "mc-10", pulseCount: 1, pulseTone: "#22c55e", stage: 2, to: { id: "sub-reply-tag", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "find-summary-email", side: "bottom" }, id: "mc-11", pulseCount: 1, pulseTone: "#f59e0b", stage: 2, to: { id: "sub-summary-signal", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "find-issue-summary", side: "bottom" }, id: "mc-12", pulseCount: 1, pulseTone: "#f59e0b", stage: 2, to: { id: "sub-issue-signal", side: "top" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "ai-agent-bottom", side: "top" }, id: "mc-13", pulseCount: 1, pulseTone: "#111827", stage: 3, to: { id: "sub-issue-class", side: "bottom" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "code-rules", side: "top" }, id: "mc-14", pulseCount: 1, pulseTone: "#f59e0b", stage: 3, to: { id: "sub-root-cause", side: "bottom" }, tone: "#94a3b8" },
  { dashed: true, from: { id: "update-final-row", side: "bottom" }, id: "mc-15", pulseCount: 1, pulseTone: "#22c55e", stage: 3, to: { id: "sub-ops-status", side: "top" }, tone: "#94a3b8" },
];

const NOTES: WorkflowNote[] = [
  {
    id: "note-send",
    lines: {
      en: ["Send emails", "to seeded", "test accounts"],
      pl: ["Wysylka maili", "do seeded", "test accounts"],
    },
    stage: 1,
    w: 146,
    x: 18,
    y: 208,
  },
  {
    id: "note-replies",
    lines: {
      en: ["Fetch replies", "from multiple", "mail accounts"],
      pl: ["Pobierz reply", "z wielu", "mail accounts"],
    },
    stage: 2,
    w: 156,
    x: 20,
    y: 442,
  },
  {
    id: "note-generate",
    lines: {
      en: ["Generate synthetic", "emails and data", "based on test case"],
      pl: ["Generuj synthetic", "maile i dane", "na bazie test case"],
    },
    stage: 0,
    w: 186,
    x: 1082,
    y: 44,
  },
  {
    id: "note-analyze",
    lines: {
      en: ["Analyse responses", "and document", "issues automatically"],
      pl: ["Analizuj response", "i dokumentuj", "issue automatycznie"],
    },
    stage: 3,
    w: 188,
    x: 1148,
    y: 808,
  },
];

export function getAutomationProcessWorkflowModel(locale: AppLocale): AutomationProcessWorkflowModel {
  return {
    connections: [...CONNECTIONS, ...MICRO_CONNECTIONS],
    copy: COPY[locale],
    locale,
    microNodes: MICRO_NODES,
    notes: NOTES,
    nodes: NODES,
  };
}
