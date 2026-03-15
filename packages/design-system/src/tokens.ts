export const colorTokens = {
  accentPrimary: "#2563EB",
  accentSecondary: "#22C55E",
  backgroundDark: "#0F172A",
  backgroundLight: "#F8FAFC",
  borderDark: "rgba(255,255,255,0.08)",
  borderLight: "#E2E8F0",
  panelDark: "#111827",
  panelSecondary: "#1F2937",
  textDarkPrimary: "#111827",
  textDarkSecondary: "#334155",
  textLightMuted: "#94A3B8",
  textLightPrimary: "#E5E7EB",
  textLightSecondary: "#CBD5E1"
} as const;

export const spacingScale = [8, 16, 24, 32, 48, 64, 96, 128] as const;

export const radiusTokens = {
  button: "1rem",
  card: "1.5rem",
  input: "1rem",
  shell: "1.75rem"
} as const;

export const breakpointTokens = {
  desktop: 1280,
  mobile: 0,
  tablet: 768
} as const;

export const shadowTokens = {
  card: "0 24px 70px -36px rgba(15, 23, 42, 0.72)",
  soft: "0 28px 80px -42px rgba(15, 23, 42, 0.45)"
} as const;
