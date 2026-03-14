
# Mula Group — Design System Spec

## Cel dokumentu
Ten dokument definiuje **specyfikację design systemu** dla ekosystemu Mula Group.

Ma służyć jako baza dla:
- strony głównej `mulagroup.eu`,
- wszystkich subdomen filarów,
- pracy projektowej w Figma,
- wdrożeń front-endowych,
- promptów dla Codexa,
- zachowania spójności marki, UI i UX.

Dokument opisuje:
- kierunek wizualny,
- zasady UX,
- system layoutu,
- typografię,
- kolory,
- spacing,
- grid,
- komponenty,
- motion,
- zasady responsywności,
- stany interakcji,
- wytyczne dostępności.

---

# 1. Design direction

## 1.1 Główny kierunek
**Premium corporate-tech holding**

To połączenie:
- nowoczesnej grupy biznesowej,
- dojrzałej marki strategicznej,
- firmy technologicznej klasy premium,
- uporządkowanego systemu operacyjnego.

---

## 1.2 Strona ma wyglądać jak
- nowoczesna grupa biznesowa,
- ekosystem kompetencji,
- marka high-trust,
- firma zdolna do realizacji dużych projektów,
- uporządkowana platforma wzrostu.

---

## 1.3 Strona nie ma wyglądać jak
- agresywna agencja marketingowa,
- startup bez struktury,
- landing page pełen marketingowego hałasu,
- przypadkowy zbiór komponentów,
- eksperymentalny interfejs kosztem czytelności.

---

# 2. Zasady UX

## 2.1 Klarowność ponad efekt
Najważniejsze jest zrozumienie struktury i wartości.

## 2.2 Jedna sekcja = jedna główna myśl
Każda sekcja powinna odpowiadać na jedno pytanie użytkownika.

## 2.3 Premium simplicity
Design ma być elegancki, spokojny, nowoczesny i bardzo czytelny.

## 2.4 Hierarchia informacji
Użytkownik musi szybko zrozumieć:
- kim jest Mula Group,
- jakie są filary,
- jak działa system,
- jak można nawiązać kontakt.

## 2.5 Subtelna nowoczesność
Technologiczny charakter marki powinien być widoczny, ale nie może dominować nad treścią.

---

# 3. Visual principles

## 3.1 Charakter wizualny
- spokojny,
- premium,
- ciemny / corporate,
- precyzyjny,
- przestrzenny,
- nowoczesny,
- modularny.

## 3.2 Wrażenie końcowe
Interfejs ma dawać poczucie:
- zaufania,
- porządku,
- inteligencji,
- dojrzałości,
- wysokiej jakości.

## 3.3 Ogólna estetyka
- ciemne tła jako baza premium,
- jasne sekcje jako oddech i kontrast,
- oszczędne akcenty kolorystyczne,
- duży porządek w layoutach,
- brak wizualnego chaosu.

---

# 4. Color system

## 4.1 Primary palette

### Primary Background
`#0F172A`

### Surface / Dark Panels
`#111827`

### Surface Secondary
`#1F2937`

### Light Background
`#F8FAFC`

### White / High Contrast
`#FFFFFF`

---

## 4.2 Accent palette

### Primary Accent
`#2563EB`

### Accent Hover
`#1D4ED8`

### Secondary Accent
`#22C55E`

### Optional Soft Accent
`#38BDF8`

---

## 4.3 Text colors

### Text on dark
Primary: `#E5E7EB`  
Secondary: `#CBD5E1`  
Muted: `#94A3B8`

### Text on light
Primary: `#111827`  
Secondary: `#334155`  
Muted: `#64748B`

---

## 4.4 Border colors

### Borders on dark
`rgba(255,255,255,0.08)`

### Borders on light
`#E2E8F0`

---

## 4.5 Usage rules
1. Tła główne powinny opierać się na ciemnych granatach i szarościach.
2. Akcent nie może być nadużywany.
3. Zielony akcent stosować oszczędnie, głównie jako sygnał wzrostu lub sukcesu.
4. Niebieski pozostaje głównym kolorem akcentowym systemu.
5. Każda sekcja powinna mieć wyraźny kontrast tekstu do tła.

---

# 5. Typography system

## 5.1 Primary font
**Inter**

Alternatywy:
- Satoshi
- Neue Montreal

---

## 5.2 Tone typografii
- precyzyjna,
- nowoczesna,
- biznesowa,
- bez przesadnej dekoracyjności,
- bardzo czytelna.

---

## 5.3 Type scale

### Hero H1
56–72 px

### H2 / Section Title
40–48 px

### H3 / Subsection
28–32 px

### H4 / Card Title
20–24 px

### Body Large
18–20 px

### Body Standard
16–18 px

### Small / Labels
12–14 px

---

## 5.4 Font weights
- 400 Regular
- 500 Medium
- 600 Semibold
- 700 Bold

---

## 5.5 Typographic rules
1. Hero ma mieć dużą siłę wizualną, ale nie może być zbyt agresywny.
2. Nagłówki sekcji powinny być krótkie i czytelne.
3. Body copy ma być komfortowe do czytania.
4. Etykiety i małe teksty muszą zachować wysoki kontrast.
5. Należy unikać bardzo długich akapitów.

---

# 6. Layout system

## 6.1 Max width
Standard container:
`1320px – 1440px`

---

## 6.2 Content width rules
### Narrow content
700–820 px

### Standard content blocks
960–1120 px

### Full-width visual blocks
do pełnej szerokości viewportu z kontrolowanym content containerem

---

## 6.3 Section spacing
### Desktop
120–160 px między głównymi sekcjami

### Tablet
88–112 px

### Mobile
64–88 px

---

## 6.4 Inner spacing
- 8
- 16
- 24
- 32
- 48
- 64
- 96
- 128

To jest oficjalna skala spacingu.

---

# 7. Grid system

## 7.1 Desktop
12-column grid

## 7.2 Tablet
8-column grid

## 7.3 Mobile
4-column grid

---

## 7.4 Margins
### Desktop
64–80 px

### Tablet
32–40 px

### Mobile
20–24 px

---

## 7.5 Grid rules
1. Hero sections mogą używać 2-column layout.
2. Karty filarów powinny układać się w grid 3x2 na desktopie.
3. Wszystkie komponenty mają trzymać wspólną logikę wyrównań.
4. Nie należy stosować przypadkowych szerokości komponentów.

---

# 8. Border radius and depth

## 8.1 Border radius
### Large surfaces / sections
24–28 px

### Cards
20–24 px

### Buttons
14–18 px

### Inputs
14–18 px

---

## 8.2 Depth
Głębia ma być subtelna.

### Zalecenia
- cienkie obramowania,
- delikatny shadow,
- lekki efekt lift on hover,
- unikać ciężkich, miękkich cieni rodem z tanich template’ów.

---

# 9. Surface system

## 9.1 Surface types
### Base dark
główne sekcje premium

### Elevated dark
karty i panele na ciemnym tle

### Light content surface
sekcje przełamujące ciemność i dodające oddechu

### Transparent / glass accent
tylko bardzo subtelnie, np. sticky header

---

## 9.2 Rules
1. Surface nie mogą zlewać się ze sobą.
2. Każdy poziom ma mieć czytelny kontrast.
3. Glass effect ma być bardzo oszczędny.
4. Sekcje naprzemienne powinny budować rytm.

---

# 10. Buttons

## 10.1 Primary button
Zastosowanie:
- główne CTA,
- najważniejsze akcje.

Styl:
- pełne wypełnienie,
- mocny kontrast,
- wyraźny hover.

### Primary button colors
Background: `#2563EB`  
Hover: `#1D4ED8`  
Text: `#FFFFFF`

---

## 10.2 Secondary button
Zastosowanie:
- drugorzędne CTA,
- dodatkowe akcje.

Styl:
- outline lub ghost,
- subtelny border,
- mniejsza dominacja wizualna.

---

## 10.3 Button rules
1. Nie więcej niż 2 CTA w hero.
2. Na jednej sekcji zwykle jeden priorytetowy CTA.
3. Hover ma być płynny i subtelny.
4. Teksty przycisków krótkie, czytelne, konkretne.

---

# 11. Cards

## 11.1 Typy kart
- pillar cards
- capability cards
- initiative cards
- partnership cards
- case study cards

---

## 11.2 Zasady dla kart
1. Równa wysokość w danym gridzie.
2. Dużo powietrza wewnątrz.
3. Mocna typografia.
4. Jeden główny komunikat na kartę.
5. Hover: delikatne podniesienie i wzmocnienie borderu.

---

## 11.3 Pillar cards
Powinny zawierać:
- nazwę filaru,
- jednozdaniowy opis,
- 3 zakresy / bullet-like labels,
- link do filaru.

---

# 12. Navigation

## 12.1 Main navigation
- About
- Ecosystem
- Capabilities
- Partnerships
- Contact

### CTA
Partner with us

---

## 12.2 Navigation style
- wysoka czytelność,
- dużo przestrzeni,
- cienkie separacje,
- bez przeładowania.

---

## 12.3 Sticky header behavior
Na starcie:
- transparent lub prawie transparent

Po scrollu:
- ciemny półprzezroczysty background lub solid dark surface
- lekki blur opcjonalnie
- płynna transformacja

---

# 13. Forms

## 13.1 Form style
- premium simplicity,
- wysoka czytelność,
- wyraźne focus states,
- duże pola,
- niewielka liczba pól.

---

## 13.2 Input rules
- duża wysokość inputów,
- czytelne labelki,
- placeholder jako pomoc, nie jako zastępstwo labela,
- focus ring w kolorze accent.

---

## 13.3 Form states
- default
- hover
- focus
- error
- success
- disabled

Każdy stan musi być jasny i spójny.

---

# 14. Icons and visual language

## 14.1 Icon style
- nowoczesne,
- proste,
- cienka lub średnia linia,
- bez przesadnej ilustracyjności.

## 14.2 Zasada
Ikony mają wspierać czytelność, a nie zastępować strukturę.

---

# 15. Imagery direction

## 15.1 Typ zdjęć / grafik
- architektura,
- biznes premium,
- strategiczne struktury,
- technologie,
- przemysł,
- nowoczesne przestrzenie,
- ekosystemowe wizualizacje.

---

## 15.2 Charakter obrazów
- cinematic, ale spokojny,
- elegancki,
- uporządkowany,
- wysoka jakość,
- bez stockowego chaosu.

---

## 15.3 Czego unikać
- przesadnie generycznych stocków biznesowych,
- zdjęć z nienaturalnym entuzjazmem,
- tanich efektów futurystycznych,
- przypadkowych ilustracji.

---

# 16. Motion system

## 16.1 Cel animacji
Animacje mają:
- budować klasę,
- wspierać orientację,
- poprawiać odczuwanie jakości,
- dawać subtelną dynamikę.

---

## 16.2 Motion principles
- smooth
- restrained
- elegant
- purposeful

---

## 16.3 Zalecane efekty
- fade-up on scroll,
- soft stagger reveal,
- subtle line draw,
- hover elevation,
- micro parallax w hero,
- gentle opacity transitions.

---

## 16.4 Czego unikać
- nadmiernej liczby animacji,
- gwałtownych ruchów,
- przesadnych zoomów,
- ciężkich cinematic efektów,
- animacji utrudniających czytanie.

---

## 16.5 Timing
### Standard transition
180–240 ms

### Section reveal
300–500 ms

### Hover response
150–200 ms

---

# 17. Responsive design rules

## 17.1 Mobile first clarity
Na mobile najważniejsze są:
- prostota,
- krótkie treści,
- czytelna hierarchia,
- łatwe CTA,
- wygodny spacing.

---

## 17.2 Layout adjustments
### Desktop
pełny grid, 2–3 kolumny, duże wizualizacje

### Tablet
większy stacking, mniej równoległych bloków

### Mobile
pojedyncza kolumna, czytelne CTA, uproszczona nawigacja

---

## 17.3 Responsive priorities
1. Hero musi pozostać czytelne.
2. Karty filarów muszą dobrze stackować się pionowo.
3. Formularze mają być maksymalnie wygodne.
4. Menu mobile musi być proste i szybkie.
5. Rytm sekcji nie może zniknąć na mniejszych ekranach.

---

# 18. Accessibility guidelines

## 18.1 Kontrast
Wszystkie teksty muszą spełniać wysoki poziom czytelności.

## 18.2 Focus states
Każdy element interaktywny musi mieć wyraźny focus state.

## 18.3 Keyboard navigation
Navigation, buttons, forms i linki muszą działać logicznie z klawiatury.

## 18.4 Semantic structure
Nagłówki i sekcje mają zachować poprawną hierarchię semantyczną.

## 18.5 Motion reduction
Przewidzieć możliwość ograniczenia ruchu dla użytkowników preferujących reduced motion.

---

# 19. Component inventory

## Global components
- Header
- Footer
- Section wrapper
- Container
- Buttons
- Form fields
- Tag / label
- Card

## Homepage components
- Hero
- Intro block
- Pillar grid
- Operating model timeline
- Capability section
- Initiative cards
- Partnership cards
- Ecosystem map
- Final CTA

## Pillar page components
- Hero
- Services grid
- Benefits block
- Process section
- Trust section
- CTA block

---

# 20. Section design rules

## 20.1 Hero
- max 2 CTA
- duży headline
- czytelny subheadline
- mocna hierarchia
- wizualna reprezentacja systemu / ekosystemu

---

## 20.2 Intro sections
- krótkie,
- konkretne,
- z dużą ilością whitespace.

---

## 20.3 Grid sections
- równe karty,
- spójne paddingi,
- dobry rytm między elementami.

---

## 20.4 CTA sections
- silny, prosty komunikat,
- brak nadmiaru elementów,
- jeden główny kierunek działania.

---

# 21. Figma handoff rules

## Dla projektanta
1. Budować system komponentowo.
2. Zachować spójną siatkę.
3. Używać tokenów spacingu, kolorów i typografii.
4. Nie improwizować nowych stylów bez potrzeby.
5. Projektować od razu z myślą o responsywności.

## Dla developera
1. Implementować tokeny jako design variables.
2. Budować reusable components.
3. Nie odstępować od spacing scale.
4. Zachować spójne stany UI.
5. Dbać o accessibility i performance.

---

# 22. Design system tokens — skrót

## Colors
- bg-primary: #0F172A
- surface-primary: #111827
- surface-secondary: #1F2937
- bg-light: #F8FAFC
- accent-primary: #2563EB
- accent-primary-hover: #1D4ED8
- accent-secondary: #22C55E
- text-dark-primary: #111827
- text-light-primary: #E5E7EB
- text-light-secondary: #CBD5E1
- border-dark: rgba(255,255,255,0.08)
- border-light: #E2E8F0

## Typography
- font-primary: Inter
- h1: 56–72
- h2: 40–48
- h3: 28–32
- h4: 20–24
- body-lg: 18–20
- body: 16–18
- small: 12–14

## Spacing
- 8
- 16
- 24
- 32
- 48
- 64
- 96
- 128

## Radius
- radius-lg: 24–28
- radius-md: 20–24
- radius-sm: 14–18

---

# 23. Najważniejsze zasady końcowe

1. Design system ma wspierać markę high-trust.
2. Strony muszą wyglądać jak część jednego ekosystemu.
3. UI ma być modularne, spokojne i biznesowe.
4. UX ma prowadzić użytkownika przez strukturę marki.
5. Estetyka premium nie może szkodzić czytelności.
6. Motion ma być subtelny i elegancki.
7. Wszystkie filary mają korzystać z jednego wspólnego języka wizualnego.
8. System ma być gotowy do rozwoju i skalowania.

---

# 24. Następne rekomendowane pliki

Możliwe kolejne dokumenty:
- `strategy_site_blueprint.md`
- `digital_site_blueprint.md`
- `mulagroup_sales_framework.md`
- `mulagroup_case_study_framework.md`
- `mulagroup_codex_build_spec.md`

