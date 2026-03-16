import type { AppLocale, LocaleLink, SiteKey } from "@mulagroup/content-models";

export const SUPPORTED_LOCALES = ["en", "pl"] as const satisfies readonly AppLocale[];
export const DEFAULT_LOCALE: AppLocale = "en";

const SITE_BASE_URLS: Record<SiteKey, string> = {
  portal: "https://mulagroup.eu",
  strategy: "https://strategy.mulagroup.eu",
  digital: "https://digital.mulagroup.eu",
  commerce: "https://commerce.mulagroup.eu",
  industry: "https://industry.mulagroup.eu",
  projects: "https://projects.mulagroup.eu",
  lifestyle: "https://lifestyle.mulagroup.eu",
};

export type SharedUiCopy = {
  footer: {
    ecosystemLinks: string;
    footerQuickLinksAriaLabel: string;
    portalLabel: string;
    quickLinks: string;
    relatedLinks: string;
  };
  forms: {
    leadId: string;
    nextStep: string;
    selectPlaceholder: string;
    sending: string;
    structuredInquiry: string;
  };
  header: {
    close: string;
    closeNavigationMenu: string;
    closeMenuOverlay: string;
    integratedBusinessEcosystem: string;
    language: string;
    menu: string;
    navigation: string;
    openNavigationMenu: string;
    pillarSuffix: string;
  };
  portal: {
    ecosystemRoutingBody: string;
    ecosystemRoutingLabel: string;
    explorePillar: string;
    startingPointsLabel: string;
  };
  shared: {
    bestFit: string;
    bestFor: string;
    typicalSignals: string;
  };
  siteFrame: {
    skipToContent: string;
  };
};

export type SiteChromeCopy = {
  bestForLabel: string;
  connectionsFlowLabel: string;
  connectionsRoutesLabel: string;
  contactSignalsLabel: string;
  heroBadgeLabel?: string;
  heroPanelTitle?: string;
  heroPanelLabel?: string;
  heroSupportingCopy?: string;
  introPrinciplesLabel: string;
  audienceSignalsLabel?: string;
};

const SHARED_UI_COPY: Record<AppLocale, SharedUiCopy> = {
  en: {
    footer: {
      ecosystemLinks: "Ecosystem pillars",
      footerQuickLinksAriaLabel: "Footer quick links",
      portalLabel: "Mula Group ecosystem",
      quickLinks: "Quick links",
      relatedLinks: "Related ecosystem links",
    },
    forms: {
      leadId: "Lead ID",
      nextStep: "Next step",
      selectPlaceholder: "Select the closest fit",
      sending: "Sending inquiry...",
      structuredInquiry: "Structured inquiry",
    },
    header: {
      close: "Close",
      closeNavigationMenu: "Close navigation menu",
      closeMenuOverlay: "Close menu overlay",
      integratedBusinessEcosystem: "Integrated business ecosystem",
      language: "Language",
      menu: "Menu",
      navigation: "Navigation",
      openNavigationMenu: "Open navigation menu",
      pillarSuffix: "pillar",
    },
    portal: {
      ecosystemRoutingBody:
        "When the route is unclear, Strategy becomes the default starting point. From there, the ecosystem can connect the right execution mix without losing structure.",
      ecosystemRoutingLabel: "Routing note",
      explorePillar: "Explore pillar",
      startingPointsLabel: "Typical starting points",
    },
    shared: {
      bestFit: "Best fit",
      bestFor: "Best for",
      typicalSignals: "Typical signals",
    },
    siteFrame: {
      skipToContent: "Skip to content",
    },
  },
  pl: {
    footer: {
      ecosystemLinks: "Filary ekosystemu",
      footerQuickLinksAriaLabel: "Szybkie linki w stopce",
      portalLabel: "Ekosystem Mula Group",
      quickLinks: "Szybkie linki",
      relatedLinks: "Powiązane obszary ekosystemu",
    },
    forms: {
      leadId: "ID zapytania",
      nextStep: "Kolejny krok",
      selectPlaceholder: "Wybierz najbliższe dopasowanie",
      sending: "Wysyłanie zapytania...",
      structuredInquiry: "Ustrukturyzowane zapytanie",
    },
    header: {
      close: "Zamknij",
      closeNavigationMenu: "Zamknij menu nawigacji",
      closeMenuOverlay: "Zamknij nakładkę menu",
      integratedBusinessEcosystem: "Zintegrowany ekosystem biznesowy",
      language: "Język",
      menu: "Menu",
      navigation: "Nawigacja",
      openNavigationMenu: "Otwórz menu nawigacji",
      pillarSuffix: "filar",
    },
    portal: {
      ecosystemRoutingBody:
        "Gdy ścieżka nie jest jeszcze oczywista, naturalnym punktem wejścia staje się Strategy. Stamtąd ekosystem może połączyć właściwy zestaw działań bez utraty struktury.",
      ecosystemRoutingLabel: "Logika wejścia",
      explorePillar: "Poznaj filar",
      startingPointsLabel: "Typowe sytuacje startowe",
    },
    shared: {
      bestFit: "Najlepsze dopasowanie",
      bestFor: "Najlepsze dla",
      typicalSignals: "Typowe sygnały",
    },
    siteFrame: {
      skipToContent: "Przejdź do treści",
    },
  },
};

const SITE_CHROME_COPY: Record<AppLocale, Record<Exclude<SiteKey, "portal">, SiteChromeCopy>> = {
  en: {
    strategy: {
      bestForLabel: "Best for",
      connectionsFlowLabel: "Ecosystem flow",
      connectionsRoutesLabel: "Typical activation routes",
      contactSignalsLabel: "Good moment to start",
      heroBadgeLabel: "Strategy entry point",
      heroPanelTitle: "Architecture for growth, transformation and complex initiatives.",
      introPrinciplesLabel: "What the work is designed to do",
    },
    digital: {
      bestForLabel: "Best for",
      connectionsFlowLabel: "Ecosystem flow",
      connectionsRoutesLabel: "Typical ecosystem routes",
      contactSignalsLabel: "Good moment to start",
      heroPanelLabel: "Digital systems layer",
      introPrinciplesLabel: "What the digital layer is designed to do",
    },
    commerce: {
      bestForLabel: "Best for",
      connectionsFlowLabel: "Ecosystem flow",
      connectionsRoutesLabel: "Typical ecosystem routes",
      contactSignalsLabel: "Good moment to start",
      heroPanelLabel: "Revenue systems layer",
      introPrinciplesLabel: "What commercial structure should create",
    },
    industry: {
      bestForLabel: "Best for",
      connectionsFlowLabel: "Ecosystem flow",
      connectionsRoutesLabel: "Typical ecosystem routes",
      contactSignalsLabel: "Good moment to start",
      heroPanelLabel: "Operational capability layer",
      introPrinciplesLabel: "What stronger technical structure should deliver",
    },
    projects: {
      bestForLabel: "Best fit",
      connectionsFlowLabel: "Ecosystem flow",
      connectionsRoutesLabel: "Typical ecosystem routes",
      contactSignalsLabel: "Typical starting situations",
      heroPanelLabel: "Project development layer",
      heroSupportingCopy:
        "Projects is strongest when concept direction, investment logic and future execution routes are clarified before the initiative becomes expensive, vague or over-designed.",
      introPrinciplesLabel: "What a structured project architecture should do",
    },
    lifestyle: {
      bestForLabel: "Best fit",
      connectionsFlowLabel: "Ecosystem flow",
      connectionsRoutesLabel: "Typical ecosystem routes",
      contactSignalsLabel: "Typical starting situations",
      heroPanelLabel: "Premium experience layer",
      heroSupportingCopy:
        "Lifestyle is strongest when perception, experience and premium direction are designed with enough structure to support growth, partnerships and real execution.",
      introPrinciplesLabel: "What a stronger premium experience layer should do",
    },
  },
  pl: {
    strategy: {
      bestForLabel: "Najlepsze dla",
      connectionsFlowLabel: "Przepływ w ekosystemie",
      connectionsRoutesLabel: "Typowe ścieżki aktywacji",
      contactSignalsLabel: "Dobry moment, by zacząć",
      heroBadgeLabel: "Punkt wejścia strategicznego",
      heroPanelTitle: "Architektura dla wzrostu, transformacji i złożonych inicjatyw.",
      introPrinciplesLabel: "Do czego ma prowadzić ta praca",
    },
    digital: {
      bestForLabel: "Najlepsze dla",
      connectionsFlowLabel: "Przepływ w ekosystemie",
      connectionsRoutesLabel: "Typowe ścieżki w ekosystemie",
      contactSignalsLabel: "Dobry moment, by zacząć",
      heroPanelLabel: "Warstwa systemów cyfrowych",
      introPrinciplesLabel: "Do czego ma służyć warstwa cyfrowa",
    },
    commerce: {
      bestForLabel: "Najlepsze dla",
      connectionsFlowLabel: "Przepływ w ekosystemie",
      connectionsRoutesLabel: "Typowe ścieżki w ekosystemie",
      contactSignalsLabel: "Dobry moment, by zacząć",
      heroPanelLabel: "Warstwa systemów przychodowych",
      introPrinciplesLabel: "Co powinna tworzyć dobra struktura komercyjna",
    },
    industry: {
      bestForLabel: "Najlepsze dla",
      connectionsFlowLabel: "Przepływ w ekosystemie",
      connectionsRoutesLabel: "Typowe ścieżki w ekosystemie",
      contactSignalsLabel: "Dobry moment, by zacząć",
      heroPanelLabel: "Warstwa kompetencji operacyjnych",
      introPrinciplesLabel: "Co powinna zapewnić mocniejsza struktura techniczna",
    },
    projects: {
      bestForLabel: "Najlepsze dopasowanie",
      connectionsFlowLabel: "Przepływ w ekosystemie",
      connectionsRoutesLabel: "Typowe ścieżki w ekosystemie",
      contactSignalsLabel: "Typowe sytuacje startowe",
      heroPanelLabel: "Warstwa rozwoju projektów",
      heroSupportingCopy:
        "Projects jest najmocniejsze wtedy, gdy kierunek koncepcji, logika inwestycyjna i przyszłe ścieżki realizacji zostaną doprecyzowane zanim inicjatywa stanie się kosztowna, nieostra lub przeprojektowana.",
      introPrinciplesLabel: "Co powinna robić dobrze ułożona architektura projektu",
    },
    lifestyle: {
      bestForLabel: "Najlepsze dopasowanie",
      connectionsFlowLabel: "Przepływ w ekosystemie",
      connectionsRoutesLabel: "Typowe ścieżki w ekosystemie",
      contactSignalsLabel: "Typowe sytuacje startowe",
      heroPanelLabel: "Warstwa premium experience",
      heroSupportingCopy:
        "Lifestyle jest najmocniejsze wtedy, gdy percepcja, doświadczenie i premium direction są zaprojektowane z taką strukturą, która realnie wspiera wzrost, partnerstwa i wykonanie.",
      introPrinciplesLabel: "Co powinna dawać mocniejsza warstwa doświadczenia premium",
    },
  },
};

export function isSupportedLocale(value: string): value is AppLocale {
  return SUPPORTED_LOCALES.includes(value as AppLocale);
}

export function resolveLocale(value: string | undefined): AppLocale {
  return value && isSupportedLocale(value) ? value : DEFAULT_LOCALE;
}

export function getSharedUiCopy(locale: AppLocale) {
  return SHARED_UI_COPY[locale];
}

export function getSiteChromeCopy(siteKey: Exclude<SiteKey, "portal">, locale: AppLocale) {
  return SITE_CHROME_COPY[locale][siteKey];
}

export function getSiteBaseUrl(siteKey: SiteKey) {
  return SITE_BASE_URLS[siteKey];
}

export function buildSiteLocaleUrl(siteKey: SiteKey, locale: AppLocale) {
  return `${SITE_BASE_URLS[siteKey]}/${locale}`;
}

function withLocalePrefix(pathname: string, locale: AppLocale) {
  const segments = pathname.split("/").filter(Boolean);
  const normalizedSegments = isSupportedLocale(segments[0] ?? "") ? segments.slice(1) : segments;

  return normalizedSegments.length > 0
    ? `/${locale}/${normalizedSegments.join("/")}`
    : `/${locale}`;
}

export function localizeSiteHref(href: string, locale: AppLocale): string {
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("?")
  ) {
    return href;
  }

  if (/^https?:\/\//.test(href)) {
    const url = new URL(href);
    const matchedSiteKey = (Object.entries(SITE_BASE_URLS).find(
      ([, baseUrl]) => new URL(baseUrl).host === url.host,
    )?.[0] ?? null) as SiteKey | null;

    if (!matchedSiteKey) {
      return href;
    }

    const nextUrl = new URL(buildSiteLocaleUrl(matchedSiteKey, locale));
    nextUrl.pathname = withLocalePrefix(url.pathname, locale);

    nextUrl.hash = url.hash;
    nextUrl.search = url.search;

    return nextUrl.toString();
  }

  if (href.startsWith("/")) {
    const url = new URL(href, SITE_BASE_URLS.portal);
    return `${withLocalePrefix(url.pathname, locale)}${url.search}${url.hash}`;
  }

  return href;
}

export function buildLocaleRedirectPath(
  locale: AppLocale,
  searchParams?: Record<string, string | string[] | undefined>,
) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams ?? {})) {
    if (typeof value === "string") {
      params.set(key, value);
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        params.append(key, item);
      }
    }
  }

  const queryString = params.toString();

  return queryString.length > 0 ? `/${locale}?${queryString}` : `/${locale}`;
}

export function buildLocaleLinks(siteKey: SiteKey, activeLocale: AppLocale): LocaleLink[] {
  return SUPPORTED_LOCALES.map((locale) => ({
    active: locale === activeLocale,
    href: `/${locale}`,
    label: locale.toUpperCase(),
    locale,
  }));
}
