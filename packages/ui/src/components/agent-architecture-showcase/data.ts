import type { AppLocale } from "@mulagroup/content-models";

export type AgentNodeKind =
  | "agent"
  | "entry"
  | "human"
  | "memory"
  | "rag"
  | "router"
  | "tool";

export type AgentPortSide = "bottom" | "left" | "right" | "top";

export type AgentNode = {
  h: number;
  icon: string;
  id: string;
  kind: AgentNodeKind;
  label: Record<AppLocale, string>;
  tone: string;
  w: number;
  x: number;
  y: number;
};

export type AgentEdge = {
  dashed?: boolean;
  from: {
    id: string;
    side: AgentPortSide;
  };
  id: string;
  pulseCount?: 0 | 1 | 2;
  pulseTone?: string;
  to: {
    id: string;
    side: AgentPortSide;
  };
  tone?: string;
  via?: { x: number; y: number }[];
};

export type AgentArchitecture = {
  bestFor: Record<AppLocale, string>;
  description: Record<AppLocale, string>;
  headline: Record<AppLocale, string>;
  id: string;
  nodes: AgentNode[];
  edges: AgentEdge[];
  outcomes: Record<AppLocale, string[]>;
  tags: Record<AppLocale, string[]>;
};

export type AgentShowcaseCopy = {
  description: string;
  eyebrow: string;
  helper: string;
  title: string;
};

export type AgentArchitectureShowcaseModel = {
  architectures: AgentArchitecture[];
  copy: AgentShowcaseCopy;
  featuredId: string;
  locale: AppLocale;
};

const COPY = {
  en: {
    description:
      "Mula Group designs agent systems that combine orchestrators, specialist agents, shared tools, human approvals, memory and RAG into controlled operating models for real companies.",
    eyebrow: "Enterprise agent systems",
    helper:
      "Based on extracted patterns from real automation boards: single-agent execution, routing layers, human-in-the-loop, sequential MCP flows, agent hierarchies and looped RAG systems.",
    title: "How Mula Group Builds Agents for Real Business Operations",
  },
  pl: {
    description:
      "Mula Group projektuje systemy agentowe, ktore lacza orchestratory, agentow specjalistycznych, wspolne narzedzia, approvale, memory i RAG w kontrolowane modele operacyjne dla realnych firm.",
    eyebrow: "Systemy agentowe dla firm",
    helper:
      "Sekcja oparta na wzorcach wyciagnietych z realnych boardow automatyzacji: single-agent, router, human-in-the-loop, sekwencyjne MCP, hierarchie agentow i petle z RAG.",
    title: "Jak Mula Group Buduje Agentow dla Realnych Operacji Biznesowych",
  },
} as const;

function node(
  id: string,
  kind: AgentNodeKind,
  icon: string,
  tone: string,
  x: number,
  y: number,
  w: number,
  h: number,
  en: string,
  pl: string,
): AgentNode {
  return {
    h,
    icon,
    id,
    kind,
    label: { en, pl },
    tone,
    w,
    x,
    y,
  };
}

function architecture(
  id: string,
  headlineEn: string,
  headlinePl: string,
  descriptionEn: string,
  descriptionPl: string,
  bestForEn: string,
  bestForPl: string,
  tagsEn: string[],
  tagsPl: string[],
  outcomesEn: string[],
  outcomesPl: string[],
  nodes: AgentNode[],
  edges: AgentEdge[],
): AgentArchitecture {
  return {
    bestFor: { en: bestForEn, pl: bestForPl },
    description: { en: descriptionEn, pl: descriptionPl },
    edges,
    headline: { en: headlineEn, pl: headlinePl },
    id,
    nodes,
    outcomes: { en: outcomesEn, pl: outcomesPl },
    tags: { en: tagsEn, pl: tagsPl },
  };
}

const ARCHITECTURES: AgentArchitecture[] = [
  architecture(
    "single-agent-tools",
    "Single Agent + Shared Tools",
    "Single Agent + Wspolne Narzedzia",
    "A compact execution layer where one primary agent handles intake, context, tool use and follow-through.",
    "Zwarta warstwa wykonawcza, w ktorej jeden glowny agent obsluguje intake, kontekst, narzedzia i dowiezienie pracy.",
    "Internal copilots, lightweight sales ops, support triage",
    "Copiloty wewnetrzne, lekkie sales ops, triage supportu",
    ["Simple", "Fast to launch", "Tool-first"],
    ["Prosty", "Szybki start", "Tool-first"],
    ["One accountable agent", "Shared tool mesh", "Fast deployment path"],
    ["Jeden odpowiedzialny agent", "Wspolna siatka narzedzi", "Szybka sciezka wdrozenia"],
    [
      node("sa-entry", "entry", "WEB", "#22c55e", 36, 96, 104, 46, "Webhook", "Webhook"),
      node("sa-agent", "agent", "AI", "#111827", 204, 82, 128, 58, "Primary Agent", "Agent glowny"),
      node("sa-memory", "memory", "MEM", "#64748b", 216, 180, 104, 40, "Session Memory", "Session memory"),
      node("sa-model", "tool", "LLM", "#3b82f6", 382, 46, 98, 40, "OpenAI", "OpenAI"),
      node("sa-sheets", "tool", "SHT", "#22c55e", 382, 108, 98, 40, "Sheets", "Sheets"),
      node("sa-gmail", "tool", "EML", "#ea580c", 382, 170, 98, 40, "Gmail", "Gmail"),
      node("sa-crm", "tool", "CRM", "#8b5cf6", 382, 232, 98, 40, "CRM", "CRM"),
      node("sa-result", "tool", "OUT", "#0f766e", 548, 96, 104, 46, "Response", "Odpowiedz"),
    ],
    [
      { from: { id: "sa-entry", side: "right" }, id: "sa-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "sa-agent", side: "left" } },
      { dashed: true, from: { id: "sa-agent", side: "bottom" }, id: "sa-e2", pulseCount: 1, pulseTone: "#64748b", to: { id: "sa-memory", side: "top" }, tone: "#94a3b8" },
      { from: { id: "sa-agent", side: "right" }, id: "sa-e3", pulseCount: 1, pulseTone: "#3b82f6", to: { id: "sa-model", side: "left" } },
      { from: { id: "sa-agent", side: "right" }, id: "sa-e4", pulseCount: 1, pulseTone: "#22c55e", to: { id: "sa-sheets", side: "left" }, via: [{ x: 356, y: 130 }] },
      { from: { id: "sa-agent", side: "right" }, id: "sa-e5", pulseCount: 1, pulseTone: "#ea580c", to: { id: "sa-gmail", side: "left" }, via: [{ x: 356, y: 192 }] },
      { from: { id: "sa-agent", side: "right" }, id: "sa-e6", pulseCount: 1, pulseTone: "#8b5cf6", to: { id: "sa-crm", side: "left" }, via: [{ x: 356, y: 254 }] },
      { from: { id: "sa-agent", side: "right" }, id: "sa-e7", pulseCount: 2, pulseTone: "#0f766e", to: { id: "sa-result", side: "left" }, via: [{ x: 510, y: 118 }] },
    ],
  ),
  architecture(
    "single-agent-router",
    "Single Agent + Router",
    "Single Agent + Router",
    "A single front agent classifies intent and routes into execution lanes without spinning up a full hierarchy.",
    "Jeden agent frontowy klasyfikuje intent i routuje do odpowiednich sciezek wykonania bez budowy pelnej hierarchii.",
    "Multi-request intake, role routing, mixed support and sales ops",
    "Multi-intake, routing rol, mieszane support i sales ops",
    ["Intent routing", "Lightweight orchestration", "Fast branching"],
    ["Routing intentow", "Lekka orchestracja", "Szybkie branchowanie"],
    ["Central intake", "Clear branch logic", "Simple escalation pattern"],
    ["Centralny intake", "Czytelna logika branchy", "Prosty wzorzec eskalacji"],
    [
      node("sr-entry", "entry", "IN", "#22c55e", 34, 104, 96, 42, "Inbound Request", "Inbound request"),
      node("sr-agent", "agent", "AI", "#111827", 186, 92, 122, 56, "Intake Agent", "Agent intake"),
      node("sr-router", "router", "RT", "#3b82f6", 356, 102, 92, 40, "Router", "Router"),
      node("sr-sales", "tool", "SAL", "#8b5cf6", 516, 42, 106, 42, "Sales Lane", "Sciezka sales"),
      node("sr-support", "tool", "SUP", "#f59e0b", 516, 102, 106, 42, "Support Lane", "Sciezka support"),
      node("sr-ops", "tool", "OPS", "#14b8a6", 516, 162, 106, 42, "Ops Lane", "Sciezka ops"),
      node("sr-memory", "memory", "MEM", "#64748b", 186, 184, 116, 40, "Conversation Memory", "Conversation memory"),
    ],
    [
      { from: { id: "sr-entry", side: "right" }, id: "sr-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "sr-agent", side: "left" } },
      { dashed: true, from: { id: "sr-agent", side: "bottom" }, id: "sr-e2", pulseCount: 1, pulseTone: "#64748b", to: { id: "sr-memory", side: "top" }, tone: "#94a3b8" },
      { from: { id: "sr-agent", side: "right" }, id: "sr-e3", pulseCount: 2, pulseTone: "#3b82f6", to: { id: "sr-router", side: "left" } },
      { from: { id: "sr-router", side: "right" }, id: "sr-e4", pulseCount: 1, pulseTone: "#8b5cf6", to: { id: "sr-sales", side: "left" } },
      { from: { id: "sr-router", side: "right" }, id: "sr-e5", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "sr-support", side: "left" } },
      { from: { id: "sr-router", side: "right" }, id: "sr-e6", pulseCount: 1, pulseTone: "#14b8a6", to: { id: "sr-ops", side: "left" } },
    ],
  ),
  architecture(
    "human-loop",
    "Agent + Human in the Loop",
    "Agent + Human in the Loop",
    "An agent prepares work, asks for approval, then resumes execution with a traceable governance step.",
    "Agent przygotowuje prace, prosi o approval i wznawia wykonanie z czytelnym krokiem governance.",
    "Outbound workflows, finance actions, approvals, high-risk ops",
    "Outbound workflow, finanse, approvale, high-risk ops",
    ["Approval layer", "Governed execution", "Traceable"],
    ["Warstwa approval", "Governed execution", "Traceable"],
    ["Safe autonomy", "Manual checkpoint", "Clear audit path"],
    ["Bezpieczna autonomia", "Manual checkpoint", "Czytelny audit trail"],
    [
      node("hl-entry", "entry", "IN", "#22c55e", 32, 98, 100, 44, "Request", "Zgloszenie"),
      node("hl-agent", "agent", "AI", "#111827", 184, 88, 118, 56, "Execution Agent", "Agent wykonawczy"),
      node("hl-human", "human", "APP", "#f59e0b", 352, 90, 120, 52, "Slack Approval", "Slack approval"),
      node("hl-tool", "tool", "CRM", "#8b5cf6", 520, 52, 96, 42, "CRM Update", "Update CRM"),
      node("hl-notion", "tool", "DOC", "#22c55e", 520, 116, 96, 42, "Notion", "Notion"),
      node("hl-respond", "tool", "OUT", "#0f766e", 664, 98, 96, 44, "Respond", "Odpowiedz"),
    ],
    [
      { from: { id: "hl-entry", side: "right" }, id: "hl-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "hl-agent", side: "left" } },
      { from: { id: "hl-agent", side: "right" }, id: "hl-e2", pulseCount: 1, pulseTone: "#111827", to: { id: "hl-human", side: "left" } },
      { from: { id: "hl-human", side: "right" }, id: "hl-e3", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "hl-tool", side: "left" }, via: [{ x: 492, y: 74 }] },
      { from: { id: "hl-human", side: "right" }, id: "hl-e4", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "hl-notion", side: "left" }, via: [{ x: 492, y: 138 }] },
      { from: { id: "hl-human", side: "right" }, id: "hl-e5", pulseCount: 2, pulseTone: "#0f766e", to: { id: "hl-respond", side: "left" } },
    ],
  ),
  architecture(
    "sequential-mcp",
    "Sequential Agent + MCP Tools",
    "Sekwencyjny Agent + MCP",
    "An intake agent and execution agent run in sequence, with MCP and tool access separated into clean responsibility layers.",
    "Agent intake i agent wykonawczy dzialaja sekwencyjnie, a MCP i narzedzia sa oddzielone w czystych warstwach odpowiedzialnosci.",
    "Process automation, research pipelines, guided resolution",
    "Automatyzacja procesow, research pipeline, guided resolution",
    ["Sequential", "MCP-ready", "Clear handoff"],
    ["Sekwencyjny", "MCP-ready", "Czytelny handoff"],
    ["Separated stages", "Expandable tool mesh", "Good ops clarity"],
    ["Oddzielone etapy", "Rozszerzalna siatka narzedzi", "Dobra czytelnosc ops"],
    [
      node("sm-entry", "entry", "WEB", "#22c55e", 30, 102, 104, 44, "Webhook", "Webhook"),
      node("sm-intake", "agent", "AI", "#111827", 184, 90, 116, 56, "Intake Agent", "Agent intake"),
      node("sm-mcp", "tool", "MCP", "#3b82f6", 356, 40, 94, 42, "MCP Server", "MCP Server"),
      node("sm-tools", "tool", "TLS", "#22c55e", 356, 108, 94, 42, "Tools", "Narzedzia"),
      node("sm-exec", "agent", "AI", "#111827", 516, 90, 120, 56, "Execution Agent", "Agent wykonawczy"),
      node("sm-output", "tool", "OUT", "#0f766e", 690, 102, 96, 44, "Outcome", "Wynik"),
    ],
    [
      { from: { id: "sm-entry", side: "right" }, id: "sm-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "sm-intake", side: "left" } },
      { from: { id: "sm-intake", side: "right" }, id: "sm-e2", pulseCount: 1, pulseTone: "#3b82f6", to: { id: "sm-mcp", side: "left" }, via: [{ x: 332, y: 62 }] },
      { from: { id: "sm-intake", side: "right" }, id: "sm-e3", pulseCount: 1, pulseTone: "#22c55e", to: { id: "sm-tools", side: "left" }, via: [{ x: 332, y: 128 }] },
      { from: { id: "sm-intake", side: "right" }, id: "sm-e4", pulseCount: 2, pulseTone: "#111827", to: { id: "sm-exec", side: "left" } },
      { from: { id: "sm-exec", side: "right" }, id: "sm-e5", pulseCount: 2, pulseTone: "#0f766e", to: { id: "sm-output", side: "left" } },
    ],
  ),
  architecture(
    "hierarchy-shared-tools",
    "Agent Hierarchy + Shared Tools",
    "Hierarchia Agentow + Wspolne Narzedzia",
    "A lead orchestrator routes work to specialist agents that share one tool mesh and one execution contract.",
    "Lead orchestrator routuje prace do agentow specjalistycznych, ktorzy dziela jedna warstwe narzedzi i jeden execution contract.",
    "Cross-functional ops, sales + support + ops environments",
    "Srodowiska cross-functional: sales + support + ops",
    ["Hierarchy", "Specialists", "Shared tools"],
    ["Hierarchia", "Specjalisci", "Wspolne narzedzia"],
    ["Domain separation", "Tool reuse", "Better control at scale"],
    ["Separacja domen", "Reuse narzedzi", "Lepsza kontrola przy skali"],
    [
      node("hs-entry", "entry", "IN", "#22c55e", 36, 118, 96, 42, "Request", "Request"),
      node("hs-orchestrator", "agent", "AI", "#111827", 192, 110, 130, 58, "Lead Orchestrator", "Lead orchestrator"),
      node("hs-router", "router", "RT", "#3b82f6", 374, 118, 92, 42, "Switch", "Switch"),
      node("hs-sales", "agent", "AI", "#8b5cf6", 542, 34, 112, 50, "Sales Agent", "Agent sales"),
      node("hs-support", "agent", "AI", "#f59e0b", 542, 116, 112, 50, "Support Agent", "Agent support"),
      node("hs-ops", "agent", "AI", "#14b8a6", 542, 198, 112, 50, "Ops Agent", "Agent ops"),
      node("hs-toolbus", "tool", "TLS", "#22c55e", 730, 116, 112, 46, "Shared Tool Bus", "Shared tool bus"),
    ],
    [
      { from: { id: "hs-entry", side: "right" }, id: "hs-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "hs-orchestrator", side: "left" } },
      { from: { id: "hs-orchestrator", side: "right" }, id: "hs-e2", pulseCount: 2, pulseTone: "#111827", to: { id: "hs-router", side: "left" } },
      { from: { id: "hs-router", side: "right" }, id: "hs-e3", pulseCount: 1, pulseTone: "#8b5cf6", to: { id: "hs-sales", side: "left" }, via: [{ x: 500, y: 60 }] },
      { from: { id: "hs-router", side: "right" }, id: "hs-e4", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "hs-support", side: "left" } },
      { from: { id: "hs-router", side: "right" }, id: "hs-e5", pulseCount: 1, pulseTone: "#14b8a6", to: { id: "hs-ops", side: "left" }, via: [{ x: 500, y: 224 }] },
      { from: { id: "hs-sales", side: "right" }, id: "hs-e6", pulseCount: 1, pulseTone: "#8b5cf6", to: { id: "hs-toolbus", side: "left" }, via: [{ x: 688, y: 58 }] },
      { from: { id: "hs-support", side: "right" }, id: "hs-e7", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "hs-toolbus", side: "left" } },
      { from: { id: "hs-ops", side: "right" }, id: "hs-e8", pulseCount: 1, pulseTone: "#14b8a6", to: { id: "hs-toolbus", side: "left" }, via: [{ x: 688, y: 224 }] },
    ],
  ),
  architecture(
    "hierarchy-loop-rag",
    "Agent Hierarchy + Loop + Shared RAG",
    "Hierarchia Agentow + Petla + Shared RAG",
    "A controller agent can call specialists, merge their outputs and loop again while using shared memory and vector context.",
    "Agent kontroler moze wywolywac specjalistow, merge'owac ich output i wracac do kolejnej iteracji, korzystajac ze wspolnego memory i vector context.",
    "Large internal systems, multi-team knowledge, complex decision support",
    "Duze systemy wewnetrzne, wiedza wielozespolowa, zlozone decision support",
    ["Looped", "RAG-backed", "Multi-agent"],
    ["Petla", "RAG-backed", "Multi-agent"],
    ["Reusable context", "Iteration control", "Better knowledge grounding"],
    ["Wspolny kontekst", "Kontrola iteracji", "Lepsze osadzenie wiedzy"],
    [
      node("lr-entry", "entry", "IN", "#22c55e", 26, 126, 96, 42, "Request", "Request"),
      node("lr-controller", "agent", "AI", "#111827", 176, 118, 128, 58, "Controller Agent", "Agent kontrolny"),
      node("lr-switch", "router", "RT", "#3b82f6", 348, 126, 86, 42, "Switch", "Switch"),
      node("lr-a", "agent", "AI", "#8b5cf6", 496, 52, 106, 48, "Agent A", "Agent A"),
      node("lr-b", "agent", "AI", "#f59e0b", 496, 126, 106, 48, "Agent B", "Agent B"),
      node("lr-c", "agent", "AI", "#14b8a6", 496, 200, 106, 48, "Agent C", "Agent C"),
      node("lr-merge", "router", "MRG", "#06b6d4", 658, 126, 92, 42, "Merge", "Merge"),
      node("lr-rag", "rag", "RAG", "#10b981", 830, 92, 110, 44, "Shared RAG", "Shared RAG"),
      node("lr-memory", "memory", "MEM", "#64748b", 830, 158, 110, 40, "Shared Memory", "Shared memory"),
    ],
    [
      { from: { id: "lr-entry", side: "right" }, id: "lr-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "lr-controller", side: "left" } },
      { from: { id: "lr-controller", side: "right" }, id: "lr-e2", pulseCount: 2, pulseTone: "#111827", to: { id: "lr-switch", side: "left" } },
      { from: { id: "lr-switch", side: "right" }, id: "lr-e3", pulseCount: 1, pulseTone: "#8b5cf6", to: { id: "lr-a", side: "left" }, via: [{ x: 462, y: 76 }] },
      { from: { id: "lr-switch", side: "right" }, id: "lr-e4", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "lr-b", side: "left" } },
      { from: { id: "lr-switch", side: "right" }, id: "lr-e5", pulseCount: 1, pulseTone: "#14b8a6", to: { id: "lr-c", side: "left" }, via: [{ x: 462, y: 224 }] },
      { from: { id: "lr-a", side: "right" }, id: "lr-e6", pulseCount: 1, pulseTone: "#8b5cf6", to: { id: "lr-merge", side: "left" }, via: [{ x: 624, y: 76 }] },
      { from: { id: "lr-b", side: "right" }, id: "lr-e7", pulseCount: 1, pulseTone: "#f59e0b", to: { id: "lr-merge", side: "left" } },
      { from: { id: "lr-c", side: "right" }, id: "lr-e8", pulseCount: 1, pulseTone: "#14b8a6", to: { id: "lr-merge", side: "left" }, via: [{ x: 624, y: 224 }] },
      { from: { id: "lr-merge", side: "right" }, id: "lr-e9", pulseCount: 2, pulseTone: "#06b6d4", to: { id: "lr-controller", side: "top" }, via: [{ x: 716, y: 72 }, { x: 240, y: 72 }] },
      { dashed: true, from: { id: "lr-controller", side: "right" }, id: "lr-e10", pulseCount: 1, pulseTone: "#10b981", to: { id: "lr-rag", side: "left" }, via: [{ x: 790, y: 120 }], tone: "#94a3b8" },
      { dashed: true, from: { id: "lr-controller", side: "right" }, id: "lr-e11", pulseCount: 1, pulseTone: "#64748b", to: { id: "lr-memory", side: "left" }, via: [{ x: 790, y: 176 }], tone: "#94a3b8" },
    ],
  ),
  architecture(
    "dynamic-subagent",
    "Single Agent + Dynamic Subagents",
    "Single Agent + Dynamiczne Subagenty",
    "A primary agent stays in control, but can call another agent as a tool when a deeper specialized step is needed.",
    "Glowny agent pozostaje sterownikiem, ale moze wywolac innego agenta jako narzedzie, gdy potrzebny jest glebszy krok specjalistyczny.",
    "Escalation flows, research-heavy ops, hybrid agent teams",
    "Escalation flow, research-heavy ops, hybrydowe zespoly agentowe",
    ["Dynamic handoff", "Agent-as-tool", "Controlled escalation"],
    ["Dynamiczny handoff", "Agent jako tool", "Kontrolowana eskalacja"],
    ["Keeps one owner", "Calls depth only when needed", "Good for modular growth"],
    ["Jeden owner procesu", "Glebia tylko gdy potrzebna", "Dobry wzrost modularny"],
    [
      node("ds-entry", "entry", "IN", "#22c55e", 34, 108, 96, 42, "Request", "Request"),
      node("ds-main", "agent", "AI", "#111827", 186, 98, 118, 56, "Primary Agent", "Agent glowny"),
      node("ds-sub", "agent", "AI", "#8b5cf6", 394, 98, 120, 56, "Subagent Tool", "Subagent tool"),
      node("ds-search", "tool", "SRCH", "#3b82f6", 572, 52, 96, 42, "Brave Search", "Brave Search"),
      node("ds-memory", "memory", "MEM", "#64748b", 572, 116, 96, 40, "Memory", "Memory"),
      node("ds-output", "tool", "OUT", "#0f766e", 720, 108, 92, 42, "Deliver", "Deliver"),
    ],
    [
      { from: { id: "ds-entry", side: "right" }, id: "ds-e1", pulseCount: 1, pulseTone: "#22c55e", to: { id: "ds-main", side: "left" } },
      { from: { id: "ds-main", side: "right" }, id: "ds-e2", pulseCount: 2, pulseTone: "#8b5cf6", to: { id: "ds-sub", side: "left" } },
      { from: { id: "ds-sub", side: "right" }, id: "ds-e3", pulseCount: 1, pulseTone: "#3b82f6", to: { id: "ds-search", side: "left" }, via: [{ x: 544, y: 72 }] },
      { dashed: true, from: { id: "ds-sub", side: "right" }, id: "ds-e4", pulseCount: 1, pulseTone: "#64748b", to: { id: "ds-memory", side: "left" }, via: [{ x: 544, y: 136 }], tone: "#94a3b8" },
      { from: { id: "ds-sub", side: "right" }, id: "ds-e5", pulseCount: 1, pulseTone: "#0f766e", to: { id: "ds-output", side: "left" }, via: [{ x: 688, y: 130 }] },
    ],
  ),
];

export function getAgentArchitectureShowcaseModel(locale: AppLocale): AgentArchitectureShowcaseModel {
  return {
    architectures: ARCHITECTURES,
    copy: COPY[locale],
    featuredId: "hierarchy-loop-rag",
    locale,
  };
}
