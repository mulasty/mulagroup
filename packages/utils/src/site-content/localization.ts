import type {
  AppLocale,
  CommerceManifest,
  DigitalManifest,
  IndustryManifest,
  LifestyleManifest,
  PillarKey,
  PortalManifest,
  ProjectsManifest,
  SiteKey,
  StrategyManifest,
} from "@mulagroup/content-models";

import type { FooterContentModel } from "./index";

export type DeepPartial<T> = T extends (infer TValue)[]
  ? DeepPartial<TValue>[]
  : T extends object
    ? {
        [TKey in keyof T]?: DeepPartial<T[TKey]>;
      }
    : T;

type SiteLocalizationMap = {
  portal: DeepPartial<PortalManifest>;
  strategy: DeepPartial<StrategyManifest>;
  digital: DeepPartial<DigitalManifest>;
  commerce: DeepPartial<CommerceManifest>;
  industry: DeepPartial<IndustryManifest>;
  projects: DeepPartial<ProjectsManifest>;
  lifestyle: DeepPartial<LifestyleManifest>;
};

type FooterLocalizationMap = Record<SiteKey, DeepPartial<FooterContentModel>>;

type LocalizedSettings = {
  defaultMetaDescription: string;
  siteTagline: string;
};

const EMPTY_SITE_LOCALIZATIONS: SiteLocalizationMap = {
  portal: {},
  strategy: {},
  digital: {},
  commerce: {},
  industry: {},
  projects: {},
  lifestyle: {},
};

const EMPTY_FOOTER_LOCALIZATIONS: FooterLocalizationMap = {
  portal: {},
  strategy: {},
  digital: {},
  commerce: {},
  industry: {},
  projects: {},
  lifestyle: {},
};

const SETTINGS_LOCALIZATIONS: Record<AppLocale, LocalizedSettings | null> = {
  en: null,
  pl: {
    defaultMetaDescription:
      "Mula Group to zintegrowany ekosystem biznesowy łączący strategię, systemy cyfrowe, commerce, industry, projects i lifestyle w jeden uporządkowany model wzrostu.",
    siteTagline: "Zintegrowany ekosystem biznesowy",
  },
};

const FOOTER_LOCALIZATIONS: Record<AppLocale, FooterLocalizationMap> = {
  en: EMPTY_FOOTER_LOCALIZATIONS,
  pl: {
    portal: {
      bottomTextPrimary: "Strategiczny, cyfrowy i operacyjny ekosystem dla nowoczesnego wzrostu biznesu.",
      bottomTextSecondary:
        "Zaprojektowany po to, by łączyć właściwe kompetencje w jedną uporządkowaną ścieżkę wzrostu.",
    },
    strategy: {
      bottomTextPrimary: "Strategiczna klarowność, architektura biznesowa i uporządkowany wzrost w ramach ekosystemu Mula Group.",
      bottomTextSecondary:
        "Zbudowane po to, by przeprowadzać złożone inicjatywy od diagnozy do aktywacji.",
    },
    digital: {
      bottomTextPrimary: "Systemy cyfrowe, AI i automatyzacja osadzone w realnej logice biznesowej.",
      bottomTextSecondary:
        "Zaprojektowane tak, by wspierać wzrost, konwersję i codzienną sprawność operacyjną.",
    },
    commerce: {
      bottomTextPrimary: "Struktura przychodowa, architektura kanałów i wzrost komercyjny osadzone w jednym modelu.",
      bottomTextSecondary:
        "Stworzone po to, by łączyć sprzedaż, pozycjonowanie i zdolność do dowożenia wartości.",
    },
    industry: {
      bottomTextPrimary: "Kompetencje techniczne, diagnostyka i logika serwisowa dla realnych środowisk operacyjnych.",
      bottomTextSecondary:
        "Zaprojektowane po to, by wzmacniać niezawodność, klarowność procesów i wykonanie.",
    },
    projects: {
      bottomTextPrimary: "Architektura projektu, logika inwestycyjna i rozwój koncepcji dla ambitnych inicjatyw.",
      bottomTextSecondary:
        "Stworzone po to, by łączyć ideę, doświadczenie i wykonanie w jedną ścieżkę rozwoju.",
    },
    lifestyle: {
      bottomTextPrimary: "Doświadczenia premium, inicjatywy brand-led i percepcja wsparta realną strukturą wzrostu.",
      bottomTextSecondary:
        "Zaprojektowane po to, by łączyć jakość doświadczenia z logiką biznesową i wykonaniem.",
    },
  },
};

const SITE_LOCALIZATIONS: Record<AppLocale, SiteLocalizationMap> = {
  en: EMPTY_SITE_LOCALIZATIONS,
  pl: {
    portal: {
      tagline: "Tam, gdzie łączą się strategia, technologia i wykonanie.",
      summary:
        "Mula Group to multidyscyplinarny ekosystem, który łączy strategię, AI, systemy cyfrowe, commerce, industry i rozwój projektów w jeden uporządkowany model nowoczesnego wzrostu.",
      navigation: [
        { href: "#about", label: "O nas" },
        { href: "#ecosystem", label: "Ekosystem" },
        { href: "#capabilities", label: "Kompetencje" },
        { href: "#partnerships", label: "Współpraca" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Porozmawiajmy" },
      hero: {
        eyebrow: "Zintegrowany ekosystem biznesowy",
        title: "Ekosystem biznesowy zaprojektowany dla struktury, wzrostu i wykonania.",
        description:
          "Mula Group łączy strategię, AI, infrastrukturę cyfrową, wzrost komercyjny, kompetencje operacyjne i rozwój venture w jeden spójny system dla ambitnych firm i projektów.",
        highlights: [
          "Wejście prowadzone przez strategię",
          "AI z realnym celem biznesowym",
          "Struktura gotowa na projekty",
        ],
        primaryCta: { href: "#contact", label: "Porozmawiajmy" },
        secondaryCta: { href: "#ecosystem", label: "Poznaj filary" },
      },
      stats: [
        {
          value: "6",
          label: "Zintegrowanych filarów",
          description:
            "Połączony ekosystem obejmujący strategy, digital, commerce, industry, projects i lifestyle.",
        },
        {
          value: "Strategy-led",
          label: "Domyślna logika wejścia",
          description:
            "Złożone sytuacje zaczynają się od diagnozy, architektury i klarownego kolejnego kroku.",
        },
        {
          value: "AI-enabled",
          label: "Systemy stawiające biznes na pierwszym miejscu",
          description:
            "Technologia i automatyzacja służą zwiększaniu klarowności, szybkości i skalowalnego wykonania.",
        },
      ],
      about: {
        lead: {
          eyebrow: "O Mula Group",
          title: "Jeden ekosystem. Wiele kompetencji. Uporządkowany wzrost.",
          description:
            "Mula Group istnieje dla sytuacji, w których jedna specjalizacja to za mało. Łączymy właściwe kompetencje w klarowniejszą drogę od wyzwania lub szansy do uporządkowanego wykonania.",
        },
        cards: [
          {
            title: "To nie firma jednej usługi",
            description:
              "Nie jesteśmy zaprojektowani jako agencja, software house czy marka doradcza działająca w izolacji. Ekosystem istnieje dlatego, że nowoczesny wzrost rzadko zależy od jednej kompetencji.",
          },
          {
            title: "Zbudowane wokół integracji",
            description:
              "Strategy, digital, commerce, industry, projects i lifestyle pozostają odrębnymi obszarami, ale od początku są projektowane jako jeden połączony model.",
          },
          {
            title: "Projektowane pod wykonanie",
            description:
              "Naszą rolą jest przejście od architektury do działania przez połączenie właściwych ludzi, systemów i warstw operacyjnych wokół realnego celu.",
          },
        ],
        principles: [
          "Najpierw uporządkuj szerszy system, dopiero potem wybieraj pierwszy ruch.",
          "Łącz strategię, digital, commerce i operacje wokół jednego celu.",
          "Każde wdrożenie buduj tak, by było gotowe na skalę, automatyzację i wzrost partnerstw.",
        ],
      },
      ecosystemIntro: {
        eyebrow: "Logika ekosystemu",
        title: "Sześć zintegrowanych filarów wzrostu.",
        description:
          "Każdy filar reprezentuje odrębny obszar kompetencji. Razem tworzą połączony system zaprojektowany do wspierania wzrostu, transformacji i wykonania.",
      },
      capabilitiesIntro: {
        eyebrow: "Zintegrowane kompetencje",
        title: "Co Mula Group może połączyć i dowieźć",
        description:
          "Nasza siła nie leży wyłącznie w pojedynczych kompetencjach, ale w zdolności do łączenia ich w pełniejsze systemy biznesowe.",
      },
      capabilityClusters: [
        {
          title: "Architektura strategiczna",
          description:
            "Porządkuj wzrost, transformację i nowe inicjatywy dzięki lepszej diagnozie, architekturze biznesowej i klarowniejszej sekwencji działań.",
          tags: ["Architektura biznesowa", "Ścieżki finansowania", "Klarowność decyzji"],
        },
        {
          title: "Infrastruktura cyfrowa i AI",
          description:
            "Buduj wspólną warstwę cyfrową dla ekosystemów webowych, workflow AI, automatyzacji i wewnętrznych narzędzi operacyjnych.",
          tags: ["Workflow AI", "Ekosystemy webowe", "Automatyzacja"],
        },
        {
          title: "Systemy komercyjne i operacyjne",
          description:
            "Łącz logikę przychodów, gotowość delivery i kompetencje serwisowe tak, by wzrost był osadzony w realnej zdolności wykonawczej.",
          tags: ["Commerce", "Spójność operacyjna", "Architektura kanałów"],
        },
        {
          title: "Rozwój venture i inicjatyw premium",
          description:
            "Porządkuj złożone projekty, koncepty hospitality, inwestycje i inicjatywy experience-led poprzez mocniejszą strukturę stojącą za nimi.",
          tags: ["Projects", "Venture premium", "Warstwa doświadczenia"],
        },
      ],
      operatingModelIntro: {
        eyebrow: "Model operacyjny",
        title: "Od złożoności do wykonania",
        description:
          "Pracujemy w uporządkowany sposób, który prowadzi od zrozumienia i architektury do integracji, delivery i długofalowego wzrostu.",
      },
      operatingModel: [
        {
          step: "01",
          title: "Discover",
          description:
            "Zrozum firmę, wyzwanie i potencjał wzrostu, zanim odizolujesz jeden symptom od szerszego systemu.",
        },
        {
          step: "02",
          title: "Design",
          description:
            "Stwórz ramę strategiczną i operacyjną, która nada kolejnemu ruchowi strukturę i kierunek.",
        },
        {
          step: "03",
          title: "Integrate",
          description:
            "Połącz właściwe filary, systemy i kompetencje zamiast wymuszać oderwaną odpowiedź jednej usługi.",
        },
        {
          step: "04",
          title: "Execute",
          description:
            "Przejdź od architektury do wdrożenia przez odpowiednie warstwy strategiczne, cyfrowe, komercyjne lub projektowe.",
        },
        {
          step: "05",
          title: "Scale",
          description:
            "Utrzymuj system w formie gotowej do rozbudowy, tak aby CRM, analytics, AI routing i content maturity mogły wejść bez chaosu.",
        },
      ],
      partnerships: {
        lead: {
          eyebrow: "Modele współpracy",
          title: "Jak można pracować z Mula Group",
          description:
            "Współpracujemy z przedsiębiorcami, firmami, zespołami projektowymi i partnerami, którzy potrzebują więcej niż izolowanego wykonawcy usług.",
        },
        models: [
          {
            title: "Rozwiązania biznesowe",
            description:
              "Dla firm potrzebujących strategicznej klarowności, transformacji cyfrowej, wdrożeń AI lub połączonych systemów wzrostu obejmujących więcej niż jedną funkcję.",
            tags: ["Transformacja", "Systemy wzrostu", "Wykonanie cross-pillar"],
          },
          {
            title: "Rozwój projektów",
            description:
              "Dla venture, konceptów hospitality i inicjatyw premium, które potrzebują struktury koncepcji, ścieżki wykonania i wsparcia szerszego ekosystemu.",
            tags: ["Strukturyzacja koncepcji", "Gotowość inwestycyjna", "Ścieżki delivery"],
          },
          {
            title: "Partnerstwo i inwestycje",
            description:
              "Dla poważnych partnerów analizujących wspólne inicjatywy, alianse strategiczne lub szanse rozwojowe powiązane z ekosystemem.",
            tags: ["Wspólne inicjatywy", "Alianse strategiczne", "Logika ekspansji"],
          },
        ],
        principles: [
          "Zacznij od jednego wyzwania lub jednej szansy i rozszerzaj zakres tylko tam, gdzie daje to realną wartość.",
          "Kieruj sprawę do jednego filaru albo do kilku, zależnie od tego, czego naprawdę wymaga sytuacja.",
          "Utrzymuj relację w formie uporządkowanej, praktycznej i gotowej na głębsze wykonanie.",
        ],
      },
      finalCta: {
        eyebrow: "Rozpocznij rozmowę",
        title: "Zaprojektujmy właściwą strukturę dla Twojego kolejnego ruchu.",
        description:
          "Niezależnie od tego, czy rozwijasz firmę, planujesz projekt, przygotowujesz inwestycję czy modernizujesz sposób działania, Mula Group pomaga połączyć odpowiednie kompetencje w jedną spójną ścieżkę.",
        signals: [
          "Wzrost biznesu i transformacja",
          "Rozwój projektu i venture",
          "Modernizacja operacyjna i wdrożenie AI",
        ],
        primaryCta: { href: "mailto:contact@mulagroup.eu", label: "Rozpocznij rozmowę" },
        secondaryCta: { href: "#ecosystem", label: "Zobacz ekosystem" },
      },
      partnershipPrompt: {
        title: "Powiedz nam, gdzie złożoność, wzrost lub nowa inicjatywa potrzebują lepszej struktury",
        description:
          "Opisz kontekst biznesu, wyzwania lub szansy. To będzie punkt startowy do bardziej uporządkowanej rozmowy.",
        submitLabel: "Wyślij uporządkowane zapytanie",
        note: "Twoje zapytanie trafi do właściwego kolejnego kroku przy zachowaniu jednej wspólnej logiki intake w całym ekosystemie.",
        errorMessage:
          "Coś przerwało wysyłkę zapytania. Spróbuj ponownie lub skontaktuj się z Mula Group mailowo.",
        successMessage:
          "Dziękujemy. Twoje zapytanie zostało zapisane i skierowane do właściwego kolejnego kroku.",
        fields: [
          { label: "Imię i nazwisko", name: "name" },
          { label: "E-mail", name: "email" },
          { label: "Firma / projekt", name: "company" },
          {
            label: "Główny temat",
            name: "inquiryType",
            options: [
              { label: "Strategy / kierunek biznesowy", value: "strategy" },
              { label: "Digital / AI / automatyzacja", value: "digital" },
              { label: "Commerce / kanały sprzedaży", value: "commerce" },
              { label: "Wsparcie operacyjne / industry", value: "operational-support" },
              { label: "Rozwój projektu / venture", value: "project-development" },
              { label: "Koncept premium / lifestyle", value: "premium-concept" },
              { label: "Partnerstwo / współpraca", value: "partnership" },
              { label: "Ogólne zapytanie o ekosystem", value: "general-inquiry" },
            ],
          },
          { label: "Co powinno wydarzyć się dalej?", name: "message" },
        ],
      },
      seo: {
        title: "Mula Group | Zintegrowany ekosystem biznesowy",
        description:
          "Mula Group łączy strategię, digital, commerce, industry, projects i lifestyle w jeden uporządkowany model wzrostu i wykonania.",
      },
    },
    strategy: {
      tagline: "Architektura biznesowa, klarowność strategiczna i uporządkowana logika wzrostu.",
      summary:
        "Mula Strategy pomaga firmom, venture i złożonym projektom zamienić rozproszoną ambicję w spójną strukturę wzrostu, finansowania, transformacji i wykonania.",
      navigation: [
        { href: "#overview", label: "Przegląd" },
        { href: "#services", label: "Usługi" },
        { href: "#process", label: "Proces" },
        { href: "#fit", label: "Dla kogo" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Umów rozmowę strategiczną" },
      hero: {
        eyebrow: "Doradztwo strategiczne i architektura biznesowa",
        title: "Projektujemy strategiczną strukturę stojącą za ambitnym wzrostem biznesu.",
        description:
          "Mula Strategy pomaga firmom i venture połączyć wzrost, finansowanie, transformację, operacje i wykonanie w jedną klarowną ścieżkę do przodu.",
        primaryCta: { href: "#contact", label: "Umów rozmowę strategiczną" },
        secondaryCta: { href: "#services", label: "Poznaj usługi" },
        highlights: [
          "Growth strategy",
          "Architektura biznesowa",
          "Ścieżki finansowania",
          "Venture design",
          "Integracja wielu domen",
        ],
        insights: [
          {
            title: "Punkt wejścia dla złożoności",
            description:
              "To właściwe miejsce startu, gdy biznes, projekt lub inicjatywa potrzebują struktury zanim wybierzesz kolejny ruch operacyjny.",
          },
          {
            title: "Projektowane pod wykonanie",
            description:
              "Ta praca ma zamieniać się w praktyczną roadmapę, a nie w oderwany dokument doradczy.",
          },
          {
            title: "Połączone z ekosystemem",
            description:
              "Gdy architektura jest już klarowna, Strategy może skierować projekt do Digital, Commerce, Projects, Industry lub Lifestyle.",
          },
        ],
      },
      accentLabel: "Architektura biznesowa",
      intro: {
        lead: {
          eyebrow: "Klarowność strategiczna",
          title: "Więcej niż consulting. Uporządkowana architektura biznesowa.",
          description:
            "Pracujemy w momentach, w których wzrost, transformacja albo rozwój projektu mają zbyt wiele ruchomych elementów, by sama porada wystarczyła.",
        },
        cards: [
          {
            title: "Najpierw kontekst biznesowy",
            description:
              "Zaczynamy od realnego kontekstu operacyjnego, presji komercyjnej i strukturalnych ograniczeń stojących za wyzwaniem.",
          },
          {
            title: "Architektura przed aktywnością",
            description:
              "Zamiast pchać przypadkowe taktyki, definiujemy logikę, priorytety i sekwencję, które czynią wykonanie realnym.",
          },
          {
            title: "Klarowność decyzji, która przenosi się dalej",
            description:
              "Efektem jest czytelniejszy model działania, który można wdrażać wewnętrznie albo rozszerzyć na szerszy ekosystem.",
          },
        ],
        principles: [
          "Najpierw doprecyzuj realny cel, zanim zainwestujesz w narzędzia, kanały albo delivery.",
          "Połącz logikę finansowania, wykonania i wzrostu w jeden spójny kierunek.",
          "Zamieniaj niejednoznaczność w sekwencję decyzji, właścicieli i kolejnych kroków.",
        ],
      },
      servicesIntro: {
        eyebrow: "Usługi strategiczne",
        title: "Co Mula Strategy potrafi uporządkować i zaprojektować",
        description:
          "Skupione wsparcie strategiczne w obszarze wzrostu, venture, logiki finansowania i wielowarstwowych sytuacji biznesowych.",
      },
      services: [
        {
          title: "Growth Strategy",
          description:
            "Kierunek strategiczny dla firm, które potrzebują jaśniejszych priorytetów, lepszej sekwencji wzrostu i mocniejszego alignmentu wokół kolejnego etapu.",
          bestFor: "Rosnące firmy pod presją, by działać szybciej i z większą klarownością.",
          tags: ["Priorytety", "Pozycjonowanie", "Logika wzrostu"],
        },
        {
          title: "Business Architecture",
          description:
            "Projekt spójniejszego modelu biznesowego, struktury operacyjnej i frameworku decyzyjnego dla złożonych organizacji lub inicjatyw.",
          bestFor: "Biznesy, które potrzebują mocniejszego modelu przed skalowaniem aktywności.",
          tags: ["Model operacyjny", "Projekt decyzji", "Struktura"],
        },
        {
          title: "Venture Design",
          description:
            "Architektura dla nowych venture, konceptów i ambitnych idei, które potrzebują komercyjnej i strategicznej spójności przed startem.",
          bestFor: "Founderzy, przedsiębiorcy i partnerzy budujący nową inicjatywę.",
          tags: ["Logika koncepcji", "Ramy venture", "Dopasowanie go-to-market"],
        },
        {
          title: "Funding & Grants Pathways",
          description:
            "Wsparcie dla projektów, które potrzebują lepszej gotowości do finansowania, grantów, logiki środków publicznych lub rozmów z partnerami.",
          bestFor: "Projekty, które muszą wzmocnić logikę finansowania przed kolejnym ruchem.",
          tags: ["Gotowość", "Logika finansowania", "Ścieżki grantowe"],
        },
        {
          title: "Strategic Project Planning",
          description:
            "Uporządkowane planowanie większych inicjatyw obejmujących wielu interesariuszy, etapy, ryzyka i zależności operacyjne.",
          bestFor: "Projekty, które potrzebują czytelniejszej roadmapy, kamieni milowych i logiki odpowiedzialności.",
          tags: ["Roadmapy", "Zależności", "Ścieżka wykonania"],
        },
        {
          title: "Multi-domain Integration",
          description:
            "Projekt strategiczny dla sytuacji, które muszą połączyć kierunek biznesowy z digitalem, commerce, operacjami lub delivery projektu.",
          bestFor: "Wyzwania przekraczające jedną specjalizację i wymagające jednego modelu działania.",
          tags: ["Logika cross-pillar", "Integracja", "Aktywacja"],
        },
      ],
      audiencesIntro: {
        eyebrow: "Dla kogo",
        title: "Kiedy Strategy jest właściwym miejscem startu",
        description:
          "Ten filar jest projektowany dla osób i zespołów stojących przed decyzjami wpływającymi na wiele warstw wzrostu, struktury lub wykonania.",
      },
      audiences: [
        {
          title: "Rosnące firmy",
          description:
            "Biznesy, które potrzebują ostrzejszego modelu wzrostu, klarowniejszych priorytetów i mocniejszej struktury przed dalszą ekspansją.",
          signals: ["Nowy etap wzrostu", "Konfliktujące priorytety", "Potrzeba wyraźniejszego kierunku"],
        },
        {
          title: "Tradycyjne biznesy w zmianie",
          description:
            "Operatorzy wchodzący w transformację cyfrową, automatyzację lub zmianę komercyjną bez utraty kontroli operacyjnej.",
          signals: ["Presja cyfrowa", "Złożoność operacyjna", "Potrzeba logiki transformacji"],
        },
        {
          title: "Nowe venture i idee concept-led",
          description:
            "Founderzy i twórcy projektów, którzy potrzebują architektury, logiki biznesowej i wiarygodnej bazy strategicznej dla kolejnego ruchu.",
          signals: ["Wczesny koncept", "Pytania o model biznesowy", "Potrzeba struktury przed startem"],
        },
        {
          title: "Projekty inwestycyjne i partnerskie",
          description:
            "Inicjatywy wymagające mocniejszego framingu, klarowniejszej ścieżki i lepszego przygotowania do rozmów partnerskich lub finansowych.",
          signals: ["Plan partnerstw", "Gotowość finansowania", "Pozycjonowanie projektu"],
        },
        {
          title: "Wielowarstwowe wyzwania biznesowe",
          description:
            "Sytuacje, w których wzrost, operacje, digital, commerce i execution są zbyt połączone, by rozwiązać je w jednym silosie.",
          signals: ["Zależności cross-domain", "Złożony zestaw decyzji", "Potrzeba zintegrowanych next steps"],
        },
      ],
      processIntro: {
        eyebrow: "Proces strategiczny",
        title: "Od wyzwania do uporządkowanego kierunku",
        description:
          "Spokojny, metodyczny proces, który zamienia złożoność w praktyczną drogę do wykonania i wzrostu.",
      },
      process: [
        { step: "01", title: "Understand", description: "Mapujemy kontekst biznesowy, ambicję, presję komercyjną i strukturalną rzeczywistość stojącą za wyzwaniem." },
        { step: "02", title: "Diagnose", description: "Identyfikujemy wąskie gardła, ukryte zależności, słabe założenia i realne źródła wzrostu lub tarcia." },
        { step: "03", title: "Design", description: "Projektujemy architekturę strategii, venture, projektu lub ścieżki transformacji." },
        { step: "04", title: "Connect", description: "Definiujemy właściwe połączenie kompetencji, systemów i ścieżek w ekosystemie dla kolejnego etapu." },
        { step: "05", title: "Activate", description: "Przygotowujemy projekt do wdrożenia, wykonania wewnętrznego lub rozszerzenia na odpowiednie filary Mula Group." },
      ],
      formatsIntro: {
        eyebrow: "Jak możemy pracować",
        title: "Formaty strategiczne dla różnych poziomów złożoności",
        description:
          "Model współpracy może pozostać lekki i skupiony albo rozwinąć się w głębszy proces architektoniczny, gdy sytuacja tego wymaga.",
      },
      formats: [
        {
          title: "Strategy Session",
          description:
            "Skupiona rozmowa, która pomaga uporządkować sytuację, nazwać wyzwanie i wskazać najrozsądniejszy kolejny kierunek.",
          idealFor: "Wczesna diagnoza, presja decyzyjna albo rozmowa o wysokiej wartości.",
          outcome: "Jaśniejszy obraz problemu i rekomendowany kolejny krok.",
        },
        {
          title: "Business Architecture Sprint",
          description:
            "Krótki, uporządkowany proces projektowania logiki operacyjnej, priorytetów i ram wzrostu firmy albo inicjatywy.",
          idealFor: "Firmy, które potrzebują silniejszej struktury strategicznej bez długiego cyklu konsultingowego.",
          outcome: "Ostrzejszy model wzrostu, ról, priorytetów i sekwencji.",
        },
        {
          title: "Venture Blueprint",
          description:
            "Bardziej rozwinięta architektura dla nowego projektu, venture lub konceptu potrzebującego komercyjnej i strategicznej spójności.",
          idealFor: "Nowe inicjatywy potrzebujące struktury przed startem, partnerstwami albo wykonaniem.",
          outcome: "Udokumentowana ścieżka dla venture, konceptu lub szansy.",
        },
        {
          title: "Funding Readiness",
          description:
            "Przygotowanie logiki, struktury i narracji potrzebnej do finansowania, grantów lub rozmów z partnerami.",
          idealFor: "Projekty, w których gotowość finansowania wpływa na kolejny ruch.",
          outcome: "Jaśniejsza ścieżka finansowania i lepsza gotowość strategiczna.",
        },
        {
          title: "Strategic Ecosystem Design",
          description:
            "Szerszy proces strategiczny łączący Strategy z odpowiednimi częściami ekosystemu Mula Group od samego początku.",
          idealFor: "Złożone briefy, które prawdopodobnie wejdą w Digital, Commerce, Projects lub warstwę operacyjną.",
          outcome: "Architektura multi-pillar gotowa do aktywacji.",
        },
      ],
      differentiatorsIntro: {
        eyebrow: "Dlaczego Mula Strategy jest inne",
        title: "Zbudowane dla integracji, nie tylko rekomendacji",
        description:
          "Wartość wynika z tego, jak strategia łączy się z logiką wykonania, realiami biznesu i szerszym ekosystemem.",
      },
      differentiators: [
        {
          title: "Myślenie cross-domain",
          description:
            "Patrzymy na strategię w relacji do systemów cyfrowych, ścieżek komercyjnych, realiów technicznych i delivery projektu.",
          tags: ["Wiele domen", "Perspektywa systemowa", "Połączone decyzje"],
        },
        {
          title: "Planowanie świadome wykonania",
          description:
            "Rekomendacje powstają wokół tego, co da się realnie uruchomić, zasilić zasobami i wdrożyć po pracy strategicznej.",
          tags: ["Praktyczność", "Operacyjność", "Logika wdrożenia"],
        },
        {
          title: "Routing w ekosystemie",
          description:
            "Gdy architektura jest klarowna, odpowiednie filary Mula Group mogą przejąć delivery zamiast zostawiać plan w izolacji.",
          tags: ["Digital", "Commerce", "Projects"],
        },
        {
          title: "Klarowność pod presją złożoności",
          description:
            "Najmocniejsi jesteśmy tam, gdzie wyzwanie ma zbyt wiele ruchomych części, by generyczny model doradczy miał sens.",
          tags: ["Złożoność", "Struktura", "Kolejne kroki"],
        },
      ],
      crossPillarIntro: {
        eyebrow: "Od architektury do aktywacji",
        title: "Strategy łączy szerszy ekosystem Mula Group",
        description:
          "Gdy właściwa struktura jest już zdefiniowana, projekt może przejść do odpowiedniej warstwy wykonawczej bez utraty spójności.",
      },
      integrations: [
        {
          pillar: "digital",
          href: "https://digital.mulagroup.eu",
          title: "Digital",
          description: "Przekłada strategiczne decyzje na strony, systemy AI, automatyzację i infrastrukturę operacyjną.",
        },
        {
          pillar: "commerce",
          href: "https://commerce.mulagroup.eu",
          title: "Commerce",
          description: "Łączy strategię z logiką przychodów, kanałami sprzedaży, pozycjonowaniem produktu i architekturą sprzedaży.",
        },
        {
          pillar: "projects",
          href: "https://projects.mulagroup.eu",
          title: "Projects",
          description: "Rozwija większe koncepty, venture i inicjatywy inwestycyjne w uporządkowane ścieżki projektowe.",
        },
        {
          pillar: "industry",
          href: "https://industry.mulagroup.eu",
          title: "Industry",
          description: "Kieruje złożone wyzwania operacyjne lub techniczne do realnej głębokości wykonania i kompetencji przemysłowych.",
        },
        {
          pillar: "lifestyle",
          href: "https://lifestyle.mulagroup.eu",
          title: "Lifestyle",
          description: "Rozszerza mocną strategię na koncepty premium, venture experience-led i warstwy wzrostu oparte na marce.",
        },
      ],
      faqsIntro: {
        eyebrow: "Najczęstsze pytania",
        title: "Pytania, które słyszymy zanim zacznie się praca",
        description:
          "To typowe wątpliwości, które pojawiają się przed wyborem Strategy jako punktu wejścia.",
      },
      faqs: [
        {
          question: "Jakie firmy albo projekty pasują do Mula Strategy?",
          answer:
            "Pracujemy z rosnącymi firmami, nowymi venture, zespołami projektowymi i inicjatywami inwestycyjnymi, które potrzebują klarowniejszej struktury przed kolejnym ruchem operacyjnym.",
        },
        {
          question: "Czy to jest tylko dla dużych firm?",
          answer:
            "Nie. O dopasowaniu bardziej decyduje złożoność decyzji albo szansy niż sama skala firmy. Mniejsze venture też korzystają, gdy sytuacja jest strategicznie gęsta.",
        },
        {
          question: "Czy pomagacie w logice grantów i finansowania?",
          answer:
            "Tak. Pomagamy ułożyć projekt, doprecyzować gotowość i zaprojektować bardziej spójną ścieżkę dla grantów, finansowania lub rozmów partnerskich.",
        },
        {
          question: "Co jeśli projekt jest jeszcze na wczesnym etapie?",
          answer:
            "To często najlepszy moment na start. Wczesna architektura strategiczna chroni przed słabą sekwencją działań, nieostrym pozycjonowaniem i kosztownymi poprawkami później.",
        },
        {
          question: "Czy praca strategiczna może przejść dalej do wdrożenia?",
          answer:
            "Tak. Gdy kierunek jest już określony, praca może wejść w Digital, Commerce, Projects, Industry albo Lifestyle, zależnie od tego, czego inicjatywa potrzebuje dalej.",
        },
        {
          question: "Co dzieje się po procesie strategicznym?",
          answer:
            "Zostajesz z klarowniejszą strukturą, bardziej precyzyjnymi kolejnymi krokami i mocniejszą podstawą do wykonania, partnerstw albo wejścia w resztę ekosystemu.",
        },
      ],
      finalCta: {
        eyebrow: "Zacznij od klarowności strategicznej",
        title: "Wyznaczmy właściwy kierunek zanim wykonasz kolejny ruch.",
        description:
          "Jeśli stoisz przed decyzją wzrostową, budujesz nowe venture, szukasz finansowania albo próbujesz połączyć kilka ruchomych warstw w jeden system, Strategy jest właściwym miejscem startu.",
        primaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Strategy%20conversation",
          label: "Umów rozmowę strategiczną",
        },
        secondaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Project%20context",
          label: "Wyślij kontekst projektu",
        },
        signals: [
          "Biznes się rozwija, ale struktura przestaje być jasna.",
          "Nowa inicjatywa potrzebuje logiki przed startem, finansowaniem albo rozmowami partnerskimi.",
          "Kilka kompetencji musi zadziałać razem, ale nie ma jeszcze wspólnego modelu decyzji.",
        ],
      },
      inquiry: {
        title: "Powiedz nam, gdzie dziś znajduje się wyzwanie",
        description:
          "Opisz kontekst biznesu, projektu albo transformacji, który potrzebuje struktury. Wykorzystujemy ten intake, by zrozumieć sytuację przed pierwszą rozmową strategiczną.",
        submitLabel: "Wyślij zapytanie strategiczne",
        note: "Ten uporządkowany intake pomaga skierować zapytanie do właściwego kolejnego kroku przy zachowaniu pełnego kontekstu projektu.",
        errorMessage:
          "Coś przerwało wysyłkę zapytania. Spróbuj ponownie lub skontaktuj się z nami mailowo.",
        successMessage:
          "Dziękujemy. Twoje zapytanie strategiczne zostało zapisane i skierowane do właściwego kolejnego kroku.",
        fields: [
          { name: "name", label: "Imię i nazwisko", placeholder: "Twoje imię i nazwisko" },
          { name: "email", label: "E-mail", placeholder: "nazwa@firma.com" },
          { name: "company", label: "Firma / projekt", placeholder: "Nazwa firmy albo projektu" },
          {
            name: "inquiryType",
            label: "Typ wyzwania",
            options: [
              { value: "business-growth", label: "Wzrost biznesu" },
              { value: "new-venture", label: "Nowe venture" },
              { value: "funding-grants", label: "Finansowanie / granty" },
              { value: "project-structuring", label: "Strukturyzacja projektu" },
              { value: "digital-transformation-direction", label: "Kierunek transformacji cyfrowej" },
              { value: "multi-domain-challenge", label: "Wyzwanie wielodomenowe" },
            ],
          },
          {
            name: "message",
            label: "Co powinno wydarzyć się dalej?",
            placeholder: "Opisz obecną sytuację, blokery albo główny cel wzrostowy.",
          },
        ],
      },
      seo: {
        title: "Mula Strategy | Architektura biznesowa i strategia wzrostu",
        description:
          "Mula Strategy projektuje uporządkowane ścieżki wzrostu, venture, logiki finansowania i złożonych wyzwań biznesowych.",
      },
    },
    digital: {
      tagline: "Systemy wspierane przez AI, infrastruktura cyfrowa i praktyczna automatyzacja biznesu.",
      summary:
        "Mula Digital zamienia rozproszone strony, narzędzia i workflow w połączone systemy wspierające wzrost, konwersję i nowoczesne wykonanie.",
      navigation: [
        { href: "#overview", label: "Przegląd" },
        { href: "#services", label: "Usługi" },
        { href: "#ai-automation", label: "AI i automatyzacja" },
        { href: "#process", label: "Proces" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Umów konsultację digital" },
      hero: {
        eyebrow: "Systemy cyfrowe, AI i automatyzacja biznesu",
        title: "Budujemy systemy cyfrowe, które wspierają wzrost, automatyzację i wykonanie.",
        description:
          "Mula Digital łączy strony, workflow AI, logikę CRM i automatyzację w uporządkowaną warstwę, która pomaga biznesowi działać z większą klarownością i mniejszym tarciem operacyjnym.",
        primaryCta: { href: "#contact", label: "Umów konsultację digital" },
        secondaryCta: { href: "#services", label: "Poznaj usługi" },
        highlights: ["Architektura stron", "Wdrożenia AI", "Workflow automatyzacji", "Integracja CRM", "Cyfrowe systemy wzrostu"],
        insights: [
          {
            title: "Więcej niż web delivery",
            description:
              "Traktujemy strony, AI i logikę procesów jako jeden system cyfrowy, a nie zbiór oderwanych outputów.",
          },
          {
            title: "Wdrożenia stawiające biznes na pierwszym miejscu",
            description:
              "Wybory technologiczne wynikają z celów operacyjnych, realiów zespołu i faktycznej poprawy workflow.",
          },
          {
            title: "Budowane po to, by łączyć",
            description:
              "Digital może wspierać Strategy, Commerce, Projects i inicjatywy operacyjne bez przebudowywania całej logiki od zera.",
          },
        ],
      },
      accentLabel: "Systemy AI",
      finalCta: {
        eyebrow: "Zacznij od klarowności digital",
        title: "Zbudujmy właściwą strukturę cyfrową dla Twojego biznesu.",
        description:
          "Jeśli Twoja firma potrzebuje mocniejszej strony, lepszej logiki workflow, praktycznego wdrożenia AI albo bardziej spójnej warstwy cyfrowej, Mula Digital jest właściwym miejscem startu.",
        primaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Digital%20consultation",
          label: "Umów konsultację digital",
        },
        secondaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Digital%20challenge",
          label: "Wyślij wyzwanie digital",
        },
        signals: [
          "Strona istnieje, ale nie wspiera już zaufania, wzrostu ani kolejnego etapu biznesu.",
          "Zespół chce AI albo automatyzacji, ale właściwe use case’y są jeszcze niejasne.",
          "Narzędzi cyfrowych jest za dużo, a mimo to nie działają jak jeden spójny system.",
        ],
      },
      inquiry: {
        title: "Powiedz nam, co ma wspierać warstwa cyfrowa",
        description:
          "Opisz kontekst biznesowy, presję wzrostu albo problem workflow, który potrzebuje mocniejszej struktury digital. Na tej podstawie układamy pierwszą właściwą rozmowę.",
        submitLabel: "Wyślij zapytanie digital",
        note: "Zapytanie utrzymuje razem kontekst digital, sygnały routingu i najbardziej prawdopodobny kolejny krok.",
        errorMessage:
          "Coś przerwało wysyłkę zapytania. Spróbuj ponownie lub skontaktuj się z nami mailowo.",
        successMessage:
          "Dziękujemy. Twoje zapytanie digital zostało zapisane i skierowane do właściwego kolejnego kroku.",
        fields: [
          { name: "name", label: "Imię i nazwisko", placeholder: "Twoje imię i nazwisko" },
          { name: "email", label: "E-mail", placeholder: "nazwa@firma.com" },
          { name: "company", label: "Firma", placeholder: "Nazwa firmy" },
          {
            name: "inquiryType",
            label: "Typ potrzeby digital",
            options: [
              { value: "website-platform", label: "Strona / platforma" },
              { value: "ai-implementation", label: "Wdrożenie AI" },
              { value: "automation", label: "Automatyzacja" },
              { value: "crm-workflow", label: "CRM / workflow" },
              { value: "digital-transformation", label: "Transformacja cyfrowa" },
              { value: "multi-domain", label: "Wielodomenowe wyzwanie digital" },
            ],
          },
          {
            name: "message",
            label: "Co powinno wydarzyć się dalej?",
            placeholder: "Opisz obecną sytuację, blokery albo główny cel wzrostowy.",
          },
        ],
      },
      seo: {
        title: "Mula Digital | AI, strony i automatyzacja dla wzrostu biznesu",
        description:
          "Mula Digital projektuje połączone strony, workflow AI, integracje CRM i automatyzację dla firm potrzebujących mocniejszej infrastruktury cyfrowej.",
      },
    },
    commerce: {
      tagline: "Systemy przychodowe, architektura kanałów i komercyjnie inteligentny wzrost.",
      summary:
        "Mula Commerce zamienia produkty, oferty i szanse rynkowe w uporządkowane kanały sprzedaży, logikę monetyzacji i skalowalne systemy przychodowe.",
      navigation: [
        { href: "#overview", label: "Przegląd" },
        { href: "#services", label: "Usługi" },
        { href: "#channels", label: "Kanały" },
        { href: "#process", label: "Proces" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Umów konsultację commerce" },
      hero: {
        eyebrow: "Systemy przychodowe i wzrost komercyjny",
        title: "Projektujemy uporządkowane systemy przychodowe, kanały sprzedaży i ścieżki wzrostu.",
        description:
          "Mula Commerce pomaga biznesom zamieniać produkty, oferty i szanse rynkowe w czytelniejszą architekturę kanałów, mocniejsze pozycjonowanie i bardziej skalowalne wyniki komercyjne.",
        primaryCta: { href: "#contact", label: "Umów konsultację commerce" },
        secondaryCta: { href: "#services", label: "Poznaj usługi commerce" },
      },
      finalCta: {
        eyebrow: "Zacznij od klarowności komercyjnej",
        title: "Zbudujmy bardziej uporządkowany system przychodowy.",
        description:
          "Jeśli potrzebujesz mocniejszej architektury kanałów, klarowniejszego pozycjonowania produktu, gotowości marketplace albo bardziej spójnej ścieżki do wzrostu przychodów, Mula Commerce jest właściwym miejscem startu.",
        primaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Commerce%20consultation",
          label: "Umów konsultację commerce",
        },
        secondaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Commercial%20challenge",
          label: "Wyślij wyzwanie komercyjne",
        },
      },
      inquiry: {
        title: "Powiedz nam, gdzie model komercyjny potrzebuje mocniejszej struktury",
        description:
          "Opisz kontekst produktu, kanałów albo wzrostu, który potrzebuje lepszej drogi do przychodu. Na tej podstawie ustawiamy właściwy pierwszy krok komercyjny.",
        submitLabel: "Wyślij zapytanie commerce",
        note: "Uporządkowane zapytanie utrzymuje klarowny kontekst komercyjny jeszcze przed discovery, scopingiem i routingiem.",
        fields: [
          { name: "name", label: "Imię i nazwisko", placeholder: "Twoje imię i nazwisko" },
          { name: "email", label: "E-mail", placeholder: "nazwa@firma.com" },
          { name: "company", label: "Firma", placeholder: "Nazwa firmy" },
          {
            name: "inquiryType",
            label: "Typ potrzeby komercyjnej",
            options: [
              { value: "marketplace-channel", label: "Marketplace / wyzwanie kanałowe" },
              { value: "revenue-structure", label: "Problem struktury przychodów" },
              { value: "product-positioning", label: "Pozycjonowanie produktu" },
              { value: "distribution-export", label: "Dystrybucja / eksport" },
              { value: "digital-commerce", label: "Commerce + warstwa digital" },
              { value: "multi-domain", label: "Wielodomenowe wyzwanie komercyjne" },
            ],
          },
          {
            name: "message",
            label: "Co powinno wydarzyć się dalej?",
            placeholder: "Opisz obecną sytuację, blokery albo główny cel wzrostowy.",
          },
        ],
      },
      seo: {
        title: "Mula Commerce | Systemy przychodowe, kanały i wzrost komercyjny",
        description:
          "Mula Commerce projektuje kanały sprzedaży, logikę marketplace, dystrybucję i systemy przychodowe dla biznesów potrzebujących mocniejszej struktury komercyjnej.",
      },
    },
    industry: {
      tagline: "Kompetencje techniczne, logika serwisowa i siła operacyjna dla realnych środowisk biznesowych.",
      summary:
        "Mula Industry pomaga organizacjom technicznym i opartym na sprzęcie wzmacniać diagnostykę, strukturę serwisową i gotowość operacyjną bez wpadania w tryb czysto reaktywny.",
      navigation: [
        { href: "#overview", label: "Przegląd" },
        { href: "#services", label: "Usługi" },
        { href: "#capabilities", label: "Kompetencje" },
        { href: "#process", label: "Proces" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Umów konsultację techniczną" },
      hero: {
        eyebrow: "Kompetencje przemysłowe i wsparcie techniczne",
        title: "Wzmacniamy kompetencje techniczne, strukturę serwisową i niezawodność operacyjną.",
        description:
          "Mula Industry wspiera maszyny, diagnostykę, logikę serwisową i operacje techniczne w sposób, który zwiększa niezawodność biznesu, pewność wykonania i długofalową odporność.",
        primaryCta: { href: "#contact", label: "Umów konsultację techniczną" },
        secondaryCta: { href: "#services", label: "Poznaj usługi industry" },
      },
      finalCta: {
        eyebrow: "Zacznij od klarowności technicznej",
        title: "Wzmocnijmy Twój model techniczny i operacyjny.",
        description:
          "Jeśli Twoja organizacja potrzebuje mocniejszej diagnostyki, logiki serwisowej, wsparcia maszyn albo bardziej niezawodnego kręgosłupa operacyjnego, Mula Industry jest właściwym miejscem startu.",
        primaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Technical%20consultation",
          label: "Umów konsultację techniczną",
        },
        secondaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Operational%20challenge",
          label: "Wyślij wyzwanie operacyjne",
        },
      },
      inquiry: {
        title: "Powiedz nam, gdzie dziś leży wyzwanie techniczne lub operacyjne",
        description:
          "Opisz kontekst maszyn, serwisu albo operacji, który potrzebuje mocniejszej struktury. Na tej podstawie rozumiemy realny obraz sytuacji przed pierwszym przeglądem.",
        submitLabel: "Wyślij zapytanie industry",
        note: "Uporządkowane zapytanie zachowuje kontekst techniczny, routing i rekomendowany pierwszy przegląd już od startu.",
        fields: [
          { name: "name", label: "Imię i nazwisko", placeholder: "Twoje imię i nazwisko" },
          { name: "email", label: "E-mail", placeholder: "nazwa@firma.com" },
          { name: "company", label: "Firma", placeholder: "Nazwa firmy" },
          {
            name: "inquiryType",
            label: "Typ potrzeby technicznej",
            options: [
              { value: "technical-machinery-issue", label: "Problem techniczny / maszynowy" },
              { value: "service-process", label: "Problem serwisowy / procesowy" },
              { value: "operational-reliability", label: "Niezawodność operacyjna" },
              { value: "technical-sales", label: "Spójność techniczna + sprzedaż" },
              { value: "digital-modernization", label: "Industry + systemy digital" },
              { value: "multi-domain", label: "Wielodomenowe wyzwanie operacyjne" },
            ],
          },
          {
            name: "message",
            label: "Co powinno wydarzyć się dalej?",
            placeholder: "Opisz obecną sytuację, blokery albo główny cel wzrostowy.",
          },
        ],
      },
      seo: {
        title: "Mula Industry | Kompetencje techniczne, diagnostyka i wsparcie operacyjne",
        description:
          "Mula Industry łączy doradztwo techniczne, wsparcie maszyn, diagnostykę i strukturę serwisową w mocniejszy kręgosłup operacyjny dla nowoczesnych firm.",
      },
    },
    projects: {
      tagline: "Architektura projektów, logika inwestycyjna i rozwój konceptów premium.",
      summary:
        "Mula Projects zamienia ambitne idee, przestrzenie i venture w uporządkowane ścieżki projektowe, które łączą klarowność koncepcji, logikę biznesową i execution wsparty ekosystemem.",
      navigation: [
        { href: "#overview", label: "Przegląd" },
        { href: "#services", label: "Usługi" },
        { href: "#project-types", label: "Typy projektów" },
        { href: "#process", label: "Proces" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Porozmawiaj o projekcie" },
      hero: {
        eyebrow: "Koncepcje projektów, przestrzenie i logika rozwoju",
        title: "Projektujemy strukturę stojącą za ambitnymi projektami, przestrzeniami i venture.",
        description:
          "Mula Projects pomaga kształtować koncepty, które potrzebują czegoś więcej niż estetyki. Łączymy ideę, doświadczenie, model biznesowy i logikę rozwoju w klarowniejszą ścieżkę do wykonania.",
        primaryCta: { href: "#contact", label: "Porozmawiaj o projekcie" },
        secondaryCta: { href: "#services", label: "Poznaj usługi projektowe" },
      },
      finalCta: {
        eyebrow: "Zacznij od klarowności projektu",
        title: "Ułóżmy właściwą ścieżkę dla Twojego kolejnego projektu.",
        description:
          "Jeśli tworzysz koncept wellness, przestrzeń premium, venture destination-led albo inicjatywę inwestycyjną, Mula Projects jest właściwym miejscem startu.",
        primaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Project%20discussion",
          label: "Porozmawiaj o projekcie",
        },
        secondaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Project%20context",
          label: "Wyślij kontekst projektu",
        },
      },
      inquiry: {
        title: "Powiedz nam, jaki projekt potrzebuje mocniejszej struktury",
        description:
          "Opisz lokalizację, ideę albo inicjatywę, która potrzebuje klarowniejszej ścieżki rozwoju. Na tej podstawie rozumiemy koncept przed pierwszą rozmową projektową.",
        submitLabel: "Wyślij zapytanie projects",
        note: "Zapytanie zbiera kontekst projektu, prawdopodobne filary wspierające i najbardziej sensowny pierwszy krok strukturyzacji.",
        fields: [
          { name: "name", label: "Imię i nazwisko", placeholder: "Twoje imię i nazwisko" },
          { name: "email", label: "E-mail", placeholder: "nazwa@firma.com" },
          { name: "company", label: "Firma / projekt", placeholder: "Nazwa firmy albo projektu" },
          {
            name: "inquiryType",
            label: "Typ projektu",
            options: [
              { value: "wellness-spa", label: "Koncept wellness / spa" },
              { value: "resort-hospitality", label: "Projekt resort / hospitality" },
              { value: "premium-space", label: "Przestrzeń / doświadczenie premium" },
              { value: "investment-readiness", label: "Gotowość inwestycyjna" },
              { value: "project-structure", label: "Struktura projektu / model biznesowy" },
              { value: "multi-domain", label: "Projekt wielodomenowy" },
            ],
          },
          {
            name: "message",
            label: "Co powinno wydarzyć się dalej?",
            placeholder: "Opisz obecną sytuację, blokery albo główny cel wzrostowy.",
          },
        ],
      },
      seo: {
        title: "Mula Projects | Uporządkowany rozwój projektów, venture i konceptów premium",
        description:
          "Mula Projects porządkuje koncepty wellness, przestrzenie premium, ścieżki inwestycyjne i złożone venture w spójne systemy projektowe gotowe do wzrostu i wykonania.",
      },
    },
    lifestyle: {
      tagline: "Doświadczenia premium, venture brand-led i uporządkowany wzrost przez percepcję.",
      summary:
        "Mula Lifestyle zamienia idee premium, doświadczenia odbiorców i ambicje brand-driven w uporządkowane koncepty, które budują rozpoznawalność, pożądanie i długofalową wartość.",
      navigation: [
        { href: "#overview", label: "Przegląd" },
        { href: "#services", label: "Usługi" },
        { href: "#experience-types", label: "Typy doświadczeń" },
        { href: "#process", label: "Proces" },
        { href: "#contact", label: "Kontakt" },
      ],
      headerCta: { href: "#contact", label: "Porozmawiaj o projekcie premium" },
      hero: {
        eyebrow: "Doświadczenia premium i venture brand-driven",
        title: "Projektujemy doświadczenia premium, venture i koncepty brand-led z realną logiką biznesową.",
        description:
          "Mula Lifestyle pomaga kształtować inicjatywy, w których emocja, jakość, prezentacja i wzrost muszą działać razem. Celem nie jest sama uwaga, ale dopracowany koncept, który działa również w praktyce.",
        primaryCta: { href: "#contact", label: "Porozmawiaj o projekcie premium" },
        secondaryCta: { href: "#services", label: "Poznaj usługi lifestyle" },
      },
      finalCta: {
        eyebrow: "Zacznij od premium clarity",
        title: "Ukształtujmy bardziej dopracowany i uporządkowany koncept premium.",
        description:
          "Jeśli budujesz usługę premium, koncept eventowy, inicjatywę brand-driven albo venture lifestyle, Mula Lifestyle jest właściwym miejscem startu.",
        primaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Premium%20project",
          label: "Porozmawiaj o projekcie premium",
        },
        secondaryCta: {
          href: "mailto:contact@mulagroup.eu?subject=Premium%20concept",
          label: "Wyślij koncept",
        },
      },
      inquiry: {
        title: "Powiedz nam o koncepcie premium, doświadczeniu albo venture, które chcesz ukształtować",
        description:
          "Opisz ideę, odbiorcę albo inicjatywę, która potrzebuje bardziej dopracowanego premium direction. Na tej podstawie rozumiemy koncept przed pierwszą rozmową lifestyle.",
        submitLabel: "Wyślij zapytanie lifestyle",
        note: "Zapytanie utrzymuje razem koncept premium, kontekst odbiorcy i najbardziej prawdopodobny kolejny krok jeszcze przed discovery.",
        fields: [
          { name: "name", label: "Imię i nazwisko", placeholder: "Twoje imię i nazwisko" },
          { name: "email", label: "E-mail", placeholder: "nazwa@firma.com" },
          { name: "company", label: "Firma / projekt", placeholder: "Nazwa firmy albo projektu" },
          {
            name: "inquiryType",
            label: "Typ inicjatywy premium",
            options: [
              { value: "premium-service", label: "Koncept usługi premium" },
              { value: "event-activation", label: "Event / aktywacja" },
              { value: "brand-experience", label: "Brand experience" },
              { value: "lifestyle-venture", label: "Venture lifestyle" },
              { value: "hospitality-experience", label: "Format hospitality / experience" },
              { value: "multi-domain", label: "Wielodomenowy projekt premium" },
            ],
          },
          {
            name: "message",
            label: "Co powinno wydarzyć się dalej?",
            placeholder: "Opisz obecną sytuację, blokery albo główny cel wzrostowy.",
          },
        ],
      },
      seo: {
        title: "Mula Lifestyle | Doświadczenia premium, venture i koncepty brand-led",
        description:
          "Mula Lifestyle projektuje doświadczenia premium, inicjatywy brand-driven i venture lifestyle łączące percepcję, wartość dla odbiorcy i strukturę biznesową.",
      },
    },
  },
};

export function mergeDeep<TValue>(baseValue: TValue, overrideValue?: DeepPartial<TValue>): TValue {
  if (overrideValue === undefined) {
    return baseValue;
  }

  if (Array.isArray(baseValue) && Array.isArray(overrideValue)) {
    const baseItems = baseValue as unknown[];
    const overrideItems = overrideValue as DeepPartial<unknown>[];
    const maxLength = Math.max(baseValue.length, overrideValue.length);

    return Array.from({ length: maxLength }, (_, index) => {
      const baseItem = baseItems[index];
      const overrideItem = overrideItems[index];

      if (overrideItem === undefined) {
        return baseItem;
      }

      return mergeDeep(baseItem, overrideItem as DeepPartial<unknown>);
    }) as TValue;
  }

  if (
    typeof baseValue === "object" &&
    baseValue !== null &&
    typeof overrideValue === "object" &&
    overrideValue !== null &&
    !Array.isArray(baseValue) &&
    !Array.isArray(overrideValue)
  ) {
    const mergedObject: Record<string, unknown> = { ...(baseValue as Record<string, unknown>) };

    for (const [key, value] of Object.entries(overrideValue as Record<string, unknown>)) {
      mergedObject[key] = mergeDeep((baseValue as Record<string, unknown>)[key], value);
    }

    return mergedObject as TValue;
  }

  return overrideValue as TValue;
}

export function getSiteLocalization<TKey extends keyof SiteLocalizationMap>(
  siteKey: TKey,
  locale: AppLocale,
) {
  return SITE_LOCALIZATIONS[locale][siteKey];
}

export function getLocalizedFooterOverride(siteKey: SiteKey, locale: AppLocale) {
  return FOOTER_LOCALIZATIONS[locale][siteKey];
}

export function getLocalizedSettings(locale: AppLocale) {
  return SETTINGS_LOCALIZATIONS[locale];
}

export function shouldLocalizeSite(siteKey: SiteKey, locale: AppLocale) {
  return locale !== "en" && Object.keys(getSiteLocalization(siteKey, locale)).length > 0;
}

export function getPolishSiteLocalizationKeys(): PillarKey[] {
  return ["strategy", "digital", "commerce", "industry", "projects", "lifestyle"];
}
