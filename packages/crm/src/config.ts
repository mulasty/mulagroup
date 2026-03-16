import type { LeadOpsConfig } from "./types";

function resolveLeadEnvironment(): LeadOpsConfig["environment"] {
  const explicitEnvironment = process.env.LEAD_ENVIRONMENT;
  const vercelEnvironment = process.env.VERCEL_ENV;
  const nodeEnvironment = process.env.NODE_ENV;

  if (explicitEnvironment === "production" || explicitEnvironment === "preview" || explicitEnvironment === "development") {
    return explicitEnvironment;
  }

  if (vercelEnvironment === "production" || vercelEnvironment === "preview" || vercelEnvironment === "development") {
    return vercelEnvironment;
  }

  if (nodeEnvironment === "production") {
    return "production";
  }

  return "development";
}

export function getLeadOpsConfig(): LeadOpsConfig {
  return {
    ...(process.env.CRM_WEBHOOK_URL ? { crmWebhookUrl: process.env.CRM_WEBHOOK_URL } : {}),
    ...(process.env.LEAD_DEFAULT_OWNER ? { defaultOwner: process.env.LEAD_DEFAULT_OWNER } : {}),
    environment: resolveLeadEnvironment(),
    ...(process.env.FORM_WEBHOOK_URL ? { formWebhookUrl: process.env.FORM_WEBHOOK_URL } : {}),
    ...(process.env.LEAD_NOTIFICATION_WEBHOOK_URL
      ? { notificationWebhookUrl: process.env.LEAD_NOTIFICATION_WEBHOOK_URL }
      : {}),
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { siteUrl: process.env.NEXT_PUBLIC_SITE_URL } : {}),
  };
}
