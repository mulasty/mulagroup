"use client";

import { useMemo, useRef } from "react";

import type { AppLocale } from "@mulagroup/content-models";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { Button } from "../Button";
import { Card } from "../Card";
import { HeadingBlock } from "../HeadingBlock";
import { Section } from "../Section";
import {
  getAutomationProcessLayerCode,
  getAutomationProcessLayerTone,
  getAutomationProcessMatrixModel,
  getAutomationProcessStatusTone,
  type AutomationProcessMatrixRow,
} from "./data";

type AutomationProcessMatrixSectionProps = {
  ctaHref: string;
  locale: AppLocale;
  sectionId?: string;
};

function withOpacity(hex: string, alpha: number) {
  const sanitized = hex.replace("#", "");
  const normalized = sanitized.length === 3 ? sanitized.split("").map((char) => char + char).join("") : sanitized;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return ["rgba(", String(red), ", ", String(green), ", ", String(blue), ", ", String(alpha), ")"].join("");
}

function MatrixIcon({ tone, type }: { tone: string; type: "autonomy" | "governance" | "live" | "processes" }) {
  if (type === "live") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path d="M5 12h4l2-5 3 10 2-5h3" stroke={tone} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "governance") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path d="M12 4l6 2v5c0 3.3-2 6.1-6 8-4-1.9-6-4.7-6-8V6l6-2Z" stroke={tone} strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "autonomy") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path d="M6 7h12M6 12h8M6 17h5" stroke={tone} strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="16" cy="12" fill={tone} r="1.5" />
        <circle cx="11" cy="17" fill={tone} r="1.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect height="4.5" rx="1.2" stroke={tone} strokeWidth="1.8" width="14" x="5" y="5" />
      <rect height="4.5" rx="1.2" stroke={tone} strokeWidth="1.8" width="14" x="5" y="14.5" />
    </svg>
  );
}

function MetricCard({
  animateSequence,
  description,
  index,
  label,
  tone,
  value,
  type,
}: {
  animateSequence: boolean;
  description: string;
  index: number;
  label: string;
  tone: string;
  type: "autonomy" | "governance" | "live" | "processes";
  value: string;
}) {
  return (
    <motion.div
      animate={animateSequence ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      className="rounded-[1.45rem] border border-slate-200 bg-white/88 p-5 shadow-[0_28px_70px_-54px_rgba(15,23,42,0.28)] backdrop-blur"
      initial={false}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
          <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        </div>
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl border"
          style={{ borderColor: withOpacity(tone, 0.24), backgroundColor: withOpacity(tone, 0.1) }}
        >
          <MatrixIcon tone={tone} type={type} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}

function AutonomyMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          className="h-1.5 w-7 rounded-full"
          key={["autonomy", String(index)].join("-")}
          style={{ backgroundColor: index < level ? "var(--brand-accent)" : "rgba(148,163,184,0.22)" }}
        />
      ))}
    </div>
  );
}

function ProcessRow({
  animateSequence,
  index,
  locale,
  row,
}: {
  animateSequence: boolean;
  index: number;
  locale: AppLocale;
  row: AutomationProcessMatrixRow;
}) {
  const tone = getAutomationProcessLayerTone(row.layerId);
  const statusTone = getAutomationProcessStatusTone(row.implementationStatus);

  return (
    <motion.div
      animate={animateSequence ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      className="grid grid-cols-[minmax(0,1.3fr)_12rem_11rem_minmax(0,1fr)] gap-4 border-b border-slate-200/80 px-5 py-4 last:border-b-0 hover:bg-slate-950/[0.025]"
      initial={false}
      transition={{ delay: 0.16 + Math.min(index, 12) * 0.025, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-700"
            style={{ borderColor: withOpacity(tone, 0.26), backgroundColor: withOpacity(tone, 0.1) }}
          >
            {getAutomationProcessLayerCode(row.layerId)}
          </span>
          <p className="text-sm font-semibold tracking-tight text-slate-950">{row.functionality}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{row.module}</p>
          <p className="text-sm leading-6 text-slate-600">{row.agent}</p>
          <p className="text-xs leading-5 text-slate-500">{row.integrations}</p>
        </div>
      </div>

      <div className="space-y-3">
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-950/[0.03] px-2.5 py-1 text-[0.68rem] font-medium text-slate-700">
          {row.actionType}
        </span>
        <div className="space-y-1.5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {locale === "pl" ? "Autonomia" : "Autonomy"}
          </p>
          <AutonomyMeter level={row.autonomyLevel} />
          <p className="text-xs text-slate-500">{row.autonomyLevel}/5</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-slate-700">
            {row.businessImpact}
          </span>
          <span
            className="rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold text-slate-700"
            style={{ borderColor: withOpacity(statusTone, 0.24), backgroundColor: withOpacity(statusTone, 0.1) }}
          >
            {row.implementationStatus}
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span>ROI</span>
            <span>{row.roiScore ? [String(row.roiScore), "/10"].join("") : "-"}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200/80">
            <motion.div
              animate={animateSequence ? { width: row.roiScore ? [String(row.roiScore * 10), "%"].join("") : "0%" } : { width: 0 }}
              className="h-full rounded-full"
              initial={false}
              style={{ backgroundColor: tone }}
              transition={{ delay: 0.24 + Math.min(index, 10) * 0.03, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        <p className="text-xs text-slate-500">
          {locale === "pl" ? "Guardrails" : "Guardrails"}: <span className="font-semibold text-slate-700">{row.guardrails}</span>
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {locale === "pl" ? "Przykład decyzji" : "Autonomous rule"}
        </p>
        <p className="text-sm leading-6 text-slate-600">{row.autonomousDecision || (locale === "pl" ? "Brak danych" : "No data")}</p>
      </div>
    </motion.div>
  );
}

function ProcessCard({
  animateSequence,
  index,
  locale,
  row,
}: {
  animateSequence: boolean;
  index: number;
  locale: AppLocale;
  row: AutomationProcessMatrixRow;
}) {
  const tone = getAutomationProcessLayerTone(row.layerId);
  const statusTone = getAutomationProcessStatusTone(row.implementationStatus);

  return (
    <motion.div
      animate={animateSequence ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      className="rounded-[1.2rem] border border-slate-200 bg-white/90 p-4 shadow-[0_22px_60px_-50px_rgba(15,23,42,0.28)]"
      initial={false}
      transition={{ delay: 0.12 + Math.min(index, 10) * 0.03, duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-700"
            style={{ borderColor: withOpacity(tone, 0.26), backgroundColor: withOpacity(tone, 0.1) }}
          >
            {getAutomationProcessLayerCode(row.layerId)}
          </span>
          <span
            className="rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold text-slate-700"
            style={{ borderColor: withOpacity(statusTone, 0.24), backgroundColor: withOpacity(statusTone, 0.1) }}
          >
            {row.implementationStatus}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-base font-semibold tracking-tight text-slate-950">{row.functionality}</p>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{row.module}</p>
          <p className="text-sm leading-6 text-slate-600">{row.agent}</p>
        </div>
        <p className="text-xs leading-5 text-slate-500">{row.integrations}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {locale === "pl" ? "Tryb" : "Mode"}
            </p>
            <p className="text-sm text-slate-700">{row.actionType}</p>
            <AutonomyMeter level={row.autonomyLevel} />
          </div>
          <div className="space-y-1.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-500">ROI</p>
            <div className="h-2 rounded-full bg-slate-200/80">
              <motion.div
                animate={animateSequence ? { width: row.roiScore ? [String(row.roiScore * 10), "%"].join("") : "0%" } : { width: 0 }}
                className="h-full rounded-full"
                initial={false}
                style={{ backgroundColor: tone }}
                transition={{ delay: 0.16 + Math.min(index, 10) * 0.03, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="text-sm text-slate-700">{row.roiScore ? [String(row.roiScore), "/10"].join("") : "-"}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-slate-700">
            {row.businessImpact}
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-950/[0.03] px-2.5 py-1 text-[0.68rem] font-medium text-slate-700">
            {locale === "pl" ? "Guardrails" : "Guardrails"}: {row.guardrails}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{row.autonomousDecision || (locale === "pl" ? "Brak danych" : "No data")}</p>
      </div>
    </motion.div>
  );
}

export function AutomationProcessMatrixSection({
  ctaHref,
  locale,
  sectionId = "automation-process-matrix",
}: AutomationProcessMatrixSectionProps) {
  const model = useMemo(() => getAutomationProcessMatrixModel(locale), [locale]);
  const groupedRows = useMemo(
    () =>
      model.layers.map((layer) => ({
        layer,
        rows: model.rows.filter((row) => row.layerId === layer.id),
      })),
    [model.layers, model.rows],
  );
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.12, margin: "0px 0px -10% 0px", once: true });
  const prefersReducedMotion = useReducedMotion();
  const animateSequence = isInView && !prefersReducedMotion;

  return (
    <Section id={sectionId} tone="light">
      <div className="space-y-12 lg:space-y-16" ref={sectionRef}>
        <HeadingBlock
          description={model.copy.description}
          eyebrow={model.copy.eyebrow}
          title={model.copy.title}
          tone="light"
        />

        <div className="rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.1),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))] p-6 shadow-[0_38px_120px_-72px_rgba(15,23,42,0.24)] sm:p-7 lg:p-8">
          <div className="space-y-6">
            <p className="max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">{model.copy.helper}</p>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <MetricCard animateSequence={animateSequence} description={locale === "pl" ? "Liczba wszystkich procesów rozpisanych w przykładzie." : "Total number of processes listed in the operating example."} index={0} label={locale === "pl" ? "Procesy" : "Processes"} tone="#2563eb" type="processes" value={String(model.metrics.totalProcesses)} />
              <MetricCard animateSequence={animateSequence} description={locale === "pl" ? "Procesy już działające produkcyjnie lub gotowe do uruchomienia." : "Processes already live or ready for operational use."} index={1} label={locale === "pl" ? "Live" : "Live"} tone="#22c55e" type="live" value={String(model.metrics.liveProcesses)} />
              <MetricCard animateSequence={animateSequence} description={locale === "pl" ? "Średni poziom autonomii w całej macierzy." : "Average autonomy level across the full matrix."} index={2} label={locale === "pl" ? "Autonomia" : "Autonomy"} tone="#8b5cf6" type="autonomy" value={model.metrics.averageAutonomy} />
              <MetricCard animateSequence={animateSequence} description={locale === "pl" ? "Procesy z aktywnymi guardrailami lub progami decyzyjnymi." : "Processes with active guardrails or bounded decision thresholds."} index={3} label={locale === "pl" ? "Guardrails" : "Guardrails"} tone="#f59e0b" type="governance" value={String(model.metrics.governedProcesses)} />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {model.layers.map((layer, index) => (
                <motion.div
                  animate={animateSequence ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/86 px-3 py-2 text-sm font-medium text-slate-700"
                  initial={false}
                  key={layer.id}
                  transition={{ delay: 0.12 + index * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="inline-flex items-center justify-center rounded-full px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]"
                    style={{ backgroundColor: withOpacity(layer.tone, 0.12), color: layer.tone }}
                  >
                    {layer.shortCode}
                  </span>
                  <span>{layer.title}</span>
                  <span className="text-slate-400">{layer.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="hidden lg:block overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/92 shadow-[0_36px_120px_-70px_rgba(15,23,42,0.2)]">
            <div className="overflow-x-auto">
              <div className="min-w-[78rem]">
                <div className="grid grid-cols-[minmax(0,1.3fr)_12rem_11rem_minmax(0,1fr)] gap-4 border-b border-slate-200/80 bg-slate-950/[0.035] px-5 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <div>{locale === "pl" ? "Proces" : "Process"}</div>
                  <div>{locale === "pl" ? "Tryb i autonomia" : "Mode and autonomy"}</div>
                  <div>{locale === "pl" ? "Wpływ biznesowy" : "Business impact"}</div>
                  <div>{locale === "pl" ? "Przykład decyzji autonomicznej" : "Autonomous decision example"}</div>
                </div>

                {groupedRows.map(({ layer, rows }) => (
                  <div key={layer.id}>
                    <div
                      className="flex items-center gap-3 border-b border-slate-200/80 bg-slate-950/[0.02] px-5 py-3"
                      style={{ boxShadow: `inset 4px 0 0 ${layer.tone}` }}
                    >
                      <span
                        className="inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]"
                        style={{ backgroundColor: withOpacity(layer.tone, 0.12), color: layer.tone }}
                      >
                        {layer.shortCode}
                      </span>
                      <p className="text-sm font-semibold tracking-tight text-slate-900">{layer.title}</p>
                      <span className="text-xs font-medium text-slate-500">{layer.count}</span>
                    </div>
                    {rows.map((row, index) => (
                      <ProcessRow
                        animateSequence={animateSequence}
                        index={index}
                        key={[layer.id, row.module, row.functionality].join("-")}
                        locale={locale}
                        row={row}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:hidden">
            {groupedRows.map(({ layer, rows }) => (
              <div className="space-y-3" key={layer.id}>
                <div
                  className="flex items-center gap-3 rounded-[1.2rem] border border-slate-200 bg-white/90 px-4 py-3 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.22)]"
                  style={{ boxShadow: `inset 4px 0 0 ${layer.tone}` }}
                >
                  <span
                    className="inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]"
                    style={{ backgroundColor: withOpacity(layer.tone, 0.12), color: layer.tone }}
                  >
                    {layer.shortCode}
                  </span>
                  <p className="text-sm font-semibold tracking-tight text-slate-900">{layer.title}</p>
                  <span className="text-xs font-medium text-slate-500">{layer.count}</span>
                </div>
                <div className="space-y-3">
                  {rows.map((row, index) => (
                    <ProcessCard
                      animateSequence={animateSequence}
                      index={index}
                      key={[layer.id, row.module, row.functionality].join("-")}
                      locale={locale}
                      row={row}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto max-w-4xl text-center text-sm leading-7 text-slate-600 sm:text-base">{model.copy.supportLine}</p>

        <Card className="flex flex-col items-start justify-between gap-6 border-slate-200/80 bg-white/88 lg:flex-row lg:items-center" variant="light">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]/82">{model.copy.eyebrow}</p>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{model.copy.ctaTitle}</h3>
          </div>
          <Button
            className="w-full shadow-[0_24px_60px_-28px_rgba(37,99,235,0.36)] sm:w-auto"
            data-cta="portal-automation-process-matrix"
            href={ctaHref}
          >
            {model.copy.ctaLabel}
          </Button>
        </Card>
      </div>
    </Section>
  );
}
