"use client";

import type { SyntheticEvent } from "react";
import { useState } from "react";

import type { InquiryFormConfig } from "@mulagroup/content-models";
import { getSharedUiCopy } from "@mulagroup/utils";

import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";
import { Label } from "./Label";
import { Select } from "./Select";
import { Textarea } from "./Textarea";

type InquiryFormPanelProps = {
  contactEmail?: string;
  formIdPrefix: string;
  hostLabel: string;
  inquiry: InquiryFormConfig;
};

type SubmissionState =
  | { kind: "idle" }
  | { kind: "error"; message: string }
  | { kind: "success"; leadId: string; message: string; nextStep: string };

type ClientSubmissionResponse = {
  leadId: string;
  message: string;
  nextStep: string;
  ok: true;
};

type ErrorSubmissionResponse = {
  issues?: {
    field?: string;
    message: string;
  }[];
  message: string;
  ok: false;
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isClientSubmissionResponse(value: unknown): value is ClientSubmissionResponse {
  return (
    isPlainObject(value) &&
    value.ok === true &&
    typeof value.leadId === "string" &&
    typeof value.message === "string" &&
    typeof value.nextStep === "string"
  );
}

function isErrorSubmissionResponse(value: unknown): value is ErrorSubmissionResponse {
  return (
    isPlainObject(value) &&
    value.ok === false &&
    typeof value.message === "string" &&
    (value.issues === undefined ||
      (Array.isArray(value.issues) &&
        value.issues.every(
          (issue) =>
            isPlainObject(issue) &&
            typeof issue.message === "string" &&
            (issue.field === undefined || typeof issue.field === "string"),
        )))
  );
}

function buildUtmContext() {
  if (typeof window === "undefined") {
    return undefined;
  }

  const params = new URLSearchParams(window.location.search);
  const utm = {
    ...(params.get("utm_source") ? { source: params.get("utm_source") ?? undefined } : {}),
    ...(params.get("utm_medium") ? { medium: params.get("utm_medium") ?? undefined } : {}),
    ...(params.get("utm_campaign") ? { campaign: params.get("utm_campaign") ?? undefined } : {}),
    ...(params.get("utm_content") ? { content: params.get("utm_content") ?? undefined } : {}),
    ...(params.get("utm_term") ? { term: params.get("utm_term") ?? undefined } : {}),
  };

  return Object.keys(utm).length > 0 ? utm : undefined;
}

export function InquiryFormPanel({
  contactEmail = "contact@mulagroup.eu",
  formIdPrefix,
  hostLabel,
  inquiry,
}: InquiryFormPanelProps) {
  const copy = getSharedUiCopy(inquiry.locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ kind: "idle" });

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = inquiry.fields.reduce<Record<string, boolean | string>>((allValues, field) => {
      if (field.type === "checkbox") {
        allValues[field.name] = formData.get(field.name) === "on";
        return allValues;
      }

      const rawValue = formData.get(field.name);
      allValues[field.name] = typeof rawValue === "string" ? rawValue : "";
      return allValues;
    }, {});

    setIsSubmitting(true);
    setSubmissionState({ kind: "idle" });

    try {
      const response = await fetch(inquiry.endpoint, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          context: {
            hostLabel,
            locale: inquiry.locale,
            ...(typeof window !== "undefined" ? { pagePath: window.location.pathname } : {}),
            ...(typeof window !== "undefined" ? { pageUrl: window.location.href } : {}),
            ...(typeof document !== "undefined" && document.referrer.length > 0
              ? { referrer: document.referrer }
              : {}),
            ...(typeof document !== "undefined" && document.title.length > 0
              ? { sourcePageTitle: document.title }
              : {}),
            trackingName: inquiry.trackingName,
            utm: buildUtmContext(),
          },
          formId: inquiry.formId,
          values,
        }),
      });

      const payload: unknown = await response.json();

      if (!response.ok || !isClientSubmissionResponse(payload)) {
        setSubmissionState({
          kind: "error",
          message: isErrorSubmissionResponse(payload)
            ? payload.issues?.[0]?.message ?? payload.message
            : inquiry.errorMessage,
        });
        return;
      }

      form.reset();
      setSubmissionState({
        kind: "success",
        leadId: payload.leadId,
        message: payload.message,
        nextStep: payload.nextStep,
      });
    } catch {
      setSubmissionState({
        kind: "error",
        message: inquiry.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {copy.forms.structuredInquiry}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-white">{inquiry.title}</h3>
          <p className="text-sm leading-7 text-slate-300">{inquiry.description}</p>
        </div>

        <form
          className="space-y-5"
          data-form={inquiry.trackingName}
          onSubmit={(event) => {
            void handleSubmit(event);
          }}
        >
          {inquiry.fields.map((field) => {
            const fieldId = `${formIdPrefix}-${field.name}`;

            if (field.type === "select") {
              return (
                <div key={field.name}>
                  <Label htmlFor={fieldId}>{field.label}</Label>
                  <Select defaultValue="" id={fieldId} name={field.name} required={field.required}>
                    <option value="">{copy.forms.selectPlaceholder}</option>
                    {(field.options ?? []).map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>
              );
            }

            if (field.type === "textarea") {
              return (
                <div key={field.name}>
                  <Label htmlFor={fieldId}>{field.label}</Label>
                  <Textarea
                    id={fieldId}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              );
            }

            if (field.type === "checkbox") {
              return (
                <label
                  className="flex items-start gap-3 rounded-card border border-white/10 bg-white/4 px-4 py-3 text-sm text-slate-200"
                  htmlFor={fieldId}
                  key={field.name}
                >
                  <input
                    className="mt-1 size-4 accent-[color:var(--brand-accent)]"
                    id={fieldId}
                    name={field.name}
                    required={field.required}
                    type="checkbox"
                  />
                  <span>{field.label}</span>
                </label>
              );
            }

            return (
              <div key={field.name}>
                <Label htmlFor={fieldId}>{field.label}</Label>
                <Input
                  id={fieldId}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  type={field.type === "phone" ? "tel" : field.type}
                />
              </div>
            );
          })}

          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? copy.forms.sending : inquiry.submitLabel}
          </Button>
        </form>

        {submissionState.kind === "success" ? (
          <div className="rounded-card border border-emerald-400/20 bg-emerald-400/8 px-4 py-4 text-sm text-emerald-100">
            <p className="font-medium">{submissionState.message}</p>
            <p className="mt-2 text-emerald-50/90">
              {copy.forms.nextStep}: {submissionState.nextStep}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-emerald-100/70">
              {copy.forms.leadId} {submissionState.leadId}
            </p>
          </div>
        ) : null}

        {submissionState.kind === "error" ? (
          <div className="rounded-card border border-rose-400/20 bg-rose-400/8 px-4 py-4 text-sm text-rose-100">
            {submissionState.message}
          </div>
        ) : null}

        <p className="border-t border-white/8 pt-5 text-sm leading-7 text-slate-400">
          {inquiry.note}
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <a className="hover:text-white" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <span>{hostLabel}</span>
        </div>
      </div>
    </Card>
  );
}
