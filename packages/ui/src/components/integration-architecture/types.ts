import type { AppLocale } from "@mulagroup/content-models";

export type IntegrationSceneKey =
  | "core"
  | "mainFirst"
  | "mainSecond"
  | "marketing"
  | "sales"
  | "commerceOperations"
  | "logisticsFinanceErp"
  | "aiReporting"
  | "crossLinks"
  | "liveState";

export type IntegrationPoint = {
  x: number;
  y: number;
};

export type IntegrationCoreConfig = {
  id: string;
  label: string;
  secondaryLabel?: string;
};

export type IntegrationSubNodeConfig = {
  id: string;
  label: string;
  secondaryLabel?: string;
};

export type IntegrationMainNodeConfig = {
  id: string;
  label: string;
  scene: "mainFirst" | "mainSecond";
  subScene:
    | "marketing"
    | "sales"
    | "commerceOperations"
    | "logisticsFinanceErp"
    | "aiReporting";
  subnodes: IntegrationSubNodeConfig[];
};

export type IntegrationCrossLinkConfig = {
  from: string;
  id: string;
  to: string;
};

export type IntegrationMobileClusterConfig = {
  id: string;
  items: string[];
  label: string;
};

export type IntegrationArchitectureCopy = {
  ctaLabel: string;
  ctaTitle: string;
  description: string;
  eyebrow: string;
  supportLine: string;
  title: string;
};

export type IntegrationArchitectureModel = {
  copy: IntegrationArchitectureCopy;
  core: IntegrationCoreConfig;
  crossLinks: IntegrationCrossLinkConfig[];
  locale: AppLocale;
  mobileClusters: IntegrationMobileClusterConfig[];
  primaryNodes: IntegrationMainNodeConfig[];
};

export type IntegrationRenderablePath = {
  d: string;
  delay: number;
  id: string;
  variant: "cross" | "main" | "sub";
};
