
# Mula Group — Dashboard Spec

## Cel dokumentu
Ten dokument definiuje **specyfikację dashboardów** dla ekosystemu Mula Group.

Ma służyć jako baza dla:
- budowy paneli zarządczych i operacyjnych,
- raportowania wyników Mula Group,
- monitorowania leadów, sprzedaży i projektów,
- kontroli skuteczności filarów,
- integracji analityki, CRM i automatyzacji,
- pracy zespołu i agentów AI,
- podejmowania decyzji opartych na danych.

Dokument porządkuje:
- rodzaje dashboardów,
- cele każdego dashboardu,
- KPI i metryki,
- układ sekcji,
- źródła danych,
- logikę widoków per filar,
- alerty i workflow,
- rekomendacje wdrożeniowe.

---

# 1. Główne założenie dashboardów

## 1.1 Rola dashboardów w Mula Group
Dashboardy mają:
- zamieniać dane w decyzje,
- pokazywać stan ekosystemu w czasie rzeczywistym lub bliskim rzeczywistemu,
- wspierać zarządzanie leadami, pipeline’em, projektami i wzrostem,
- dawać szybki obraz tego, co działa, co jest ryzykowne i gdzie jest największa szansa.

---

## 1.2 Czym dashboard nie ma być
Dashboard nie ma być:
- ścianą przypadkowych wykresów,
- zbiorem vanity metrics,
- panelem bez hierarchii i priorytetów,
- systemem oderwanym od realnych decyzji operacyjnych.

Dashboard ma być:
- czytelny,
- hierarchiczny,
- action-oriented,
- spójny z operating systemem, CRM i analytics,
- gotowy do pracy operacyjnej, nie tylko prezentacyjnej.

---

# 2. Dashboard architecture overview

## 2.1 Zalecany system dashboardów
Rekomendowany zestaw:

1. Executive Dashboard
2. Sales Dashboard
3. Marketing & Website Dashboard
4. Delivery / Project Dashboard
5. Pillar Performance Dashboard
6. CRM / Lead Quality Dashboard
7. Expansion & Retention Dashboard
8. AI / Automation Operations Dashboard

---

## 2.2 Główna zasada
Jeden dashboard = jeden główny typ decyzji.

Nie mieszać wszystkiego w jednym widoku.  
Lepiej mieć kilka spójnych dashboardów niż jeden przeładowany.

---

# 3. Executive Dashboard

## 3.1 Cel
Dać szybki obraz całego ekosystemu dla właściciela / zarządu.

---

## 3.2 Główne pytania
- Ile leadów weszło?
- Ile projektów zostało wygranych?
- Które filary generują najwięcej wartości?
- Jak wygląda pipeline?
- Jakie są największe ryzyka?
- Gdzie są największe szanse wzrostu?

---

## 3.3 Główne KPI
- total leads
- qualified leads
- discovery booked
- proposals sent
- proposals accepted
- active projects
- total pipeline value
- won value
- lost value
- average project value
- conversion rate lead → project
- top performing pillars
- top lead sources

---

## 3.4 Suggested layout
### Row 1 — Snapshot cards
- New leads
- Qualified leads
- Active projects
- Pipeline value
- Won this period
- Avg project value

### Row 2 — Funnel overview
- Leads → Qualified → Discovery → Proposal → Won

### Row 3 — Pillar performance
- Value by pillar
- Projects by pillar
- Lead volume by pillar

### Row 4 — Alerts / risks
- Stalled leads
- Delayed projects
- Low-converting pillar
- Missing follow-ups

---

# 4. Sales Dashboard

## 4.1 Cel
Monitorować skuteczność sprzedaży i ruch leadów przez proces handlowy.

---

## 4.2 Główne pytania
- Które leady są gorące?
- Jakie etapy pipeline’u blokują konwersję?
- Które entry offers działają najlepiej?
- Które filary zamieniają leady na projekty?
- Gdzie potrzebny jest follow-up?

---

## 4.3 Główne KPI
- leads by source
- leads by class
- lead score distribution
- discovery conversion rate
- proposal conversion rate
- response time to lead
- time from lead to proposal
- time from proposal to decision
- proposal win rate
- cross-sell rate
- top entry offers

---

## 4.4 Suggested widgets
- Pipeline by stage
- Lead list with priority flags
- Lead score heatmap
- Lead sources table
- Conversion by pillar
- Stale proposals list
- Follow-up due list

---

# 5. Marketing & Website Dashboard

## 5.1 Cel
Pokazać, jak strony i content generują ruch, zainteresowanie i leady.

---

## 5.2 Główne pytania
- Które strony przyciągają uwagę?
- Które CTA działają najlepiej?
- Które filary mają najlepszy ruch?
- Które treści budują konwersję?
- Gdzie użytkownicy odpadają?

---

## 5.3 Główne KPI
- sessions
- users
- traffic by source
- landing pages
- bounce / engagement metrics
- CTA click-through rate
- form start rate
- form completion rate
- case study opens
- resource downloads
- pillar page transitions
- top converting pages

---

## 5.4 Suggested widgets
- Traffic by source
- Top landing pages
- Top CTA performance
- Form conversion funnel
- Case study performance
- Pillar navigation transitions
- Heatmap of most clicked sections

---

# 6. Delivery / Project Dashboard

## 6.1 Cel
Monitorować aktywne projekty i stan delivery.

---

## 6.2 Główne pytania
- Które projekty są aktywne?
- Co jest opóźnione?
- Które etapy wymagają uwagi?
- Które filary są przeciążone?
- Gdzie są ryzyka scope / quality?

---

## 6.3 Główne KPI
- active projects
- projects by stage
- on-time delivery rate
- delayed projects
- average project duration
- overdue tasks
- blocked deliverables
- review pending count
- completion by pillar
- delivery satisfaction proxy (if available)

---

## 6.4 Suggested widgets
- Active project board
- Project stage distribution
- Deadline risk table
- Blocked items list
- Delivery load by pillar
- Next 7 days deadlines
- Quality checkpoint status

---

# 7. Pillar Performance Dashboard

## 7.1 Cel
Porównywać skuteczność filarów.

---

## 7.2 Główne pytania
- Który filar generuje najwięcej leadów?
- Który filar konwertuje najlepiej?
- Który filar ma najwyższą wartość projektów?
- Który filar najlepiej cross-selluje do innych?
- Który filar wymaga wzmocnienia?

---

## 7.3 Główne KPI per pillar
- visits
- leads
- qualified leads
- proposals
- won projects
- win rate
- avg project value
- delivery count
- cross-pillar transitions in
- cross-pillar transitions out
- expansion contribution

---

## 7.4 Suggested visualizations
- Pillar comparison table
- Win rate by pillar
- Avg project value by pillar
- Lead source by pillar
- Cross-pillar matrix

---

# 8. CRM / Lead Quality Dashboard

## 8.1 Cel
Ocenić jakość leadów i jakość kwalifikacji.

---

## 8.2 Główne pytania
- Czy napływające leady są dobre jakościowo?
- Które źródła generują najlepsze leady?
- Czy scoring działa sensownie?
- Czy routing jest trafny?
- Czy strategiczne leady są odpowiednio obsłużone?

---

## 8.3 Główne KPI
- lead score distribution
- lead classes
- fit average
- urgency average
- readiness average
- value potential average
- ecosystem potential average
- qualified lead ratio
- disqualified lead ratio
- lead source quality
- owner response time
- routing accuracy (manual review / proxy)

---

## 8.4 Suggested widgets
- Lead class pie / bar
- Score distribution histogram
- Best source by lead quality
- Response SLA table
- Unqualified but potentially strategic leads
- Lead owner workload

---

# 9. Expansion & Retention Dashboard

## 9.1 Cel
Monitorować wzrost wartości relacji z klientami.

---

## 9.2 Główne pytania
- Ilu klientów wróciło?
- Jak działa cross-sell?
- Które filary najlepiej rozszerzają współpracę?
- Ile projektów przeszło do kolejnego etapu?
- Gdzie są okazje expansion?

---

## 9.3 Główne KPI
- repeat clients
- expansion rate
- cross-sell rate
- avg number of pillars per client
- retained clients
- expansion opportunity count
- retainer clients
- time to second project
- lifetime value proxy

---

## 9.4 Suggested widgets
- Repeat client trend
- Cross-sell by pillar
- Clients with expansion potential
- Multi-pillar client list
- Retainer pipeline
- Next best action table

---

# 10. AI / Automation Operations Dashboard

## 10.1 Cel
Monitorować działanie AI i automatyzacji.

---

## 10.2 Główne pytania
- Ile leadów zostało sklasyfikowanych przez AI?
- Czy automatyzacje działają poprawnie?
- Gdzie są błędy webhooków lub brak routingu?
- Ile follow-upów wygenerowano?
- Jakie są oszczędności czasu?

---

## 10.3 Główne KPI
- AI-classified leads
- auto-generated summaries
- failed automations
- webhook success rate
- AI routing recommendations used
- AI proposal draft count
- avg automation processing time
- manual override rate

---

## 10.4 Suggested widgets
- Automation health status
- Failed workflow list
- AI recommendation adoption rate
- Lead triage volume
- Manual override ratio
- Follow-up automation count

---

# 11. Recommended dashboard sections

## 11.1 Universal dashboard section template
Każdy dashboard może mieć wspólny rytm:

1. Snapshot KPIs
2. Trend section
3. Segmentation / breakdown
4. Alerts / risks
5. Action list

---

## 11.2 Why this matters
To sprawia, że wszystkie dashboardy są:
- spójne,
- łatwiejsze w użyciu,
- szybsze do czytania,
- logiczne dla zespołu i właściciela.

---

# 12. Alert system

## 12.1 Alerts worth tracking
- lead without owner
- lead without follow-up
- high score lead not contacted
- proposal sent but stale
- project overdue
- delivery blocked
- funnel drop spike
- low-performing CTA
- broken form / webhook
- AI automation failure

---

## 12.2 Alert severity levels
### Info
Do obserwacji

### Warning
Wymaga reakcji w najbliższym czasie

### Critical
Wymaga natychmiastowej reakcji

---

# 13. Suggested data sources

## 13.1 Core data sources
- CRM
- website analytics
- form submissions
- CMS
- project management system
- AI / automation logs
- manual ops fields

---

## 13.2 Suggested data connections
- website → analytics tool
- forms → CRM
- CRM → dashboard layer
- project system → delivery dashboard
- automation logs → ops dashboard
- CMS → content performance dashboard

---

# 14. Time filters and views

## 14.1 Recommended filters
- today
- last 7 days
- last 30 days
- this quarter
- custom range

---

## 14.2 Recommended segment filters
- by pillar
- by lead source
- by lead class
- by owner
- by project type
- by inquiry type
- by new vs returning client

---

# 15. Dashboard UX principles

## 15.1 UX should be
- calm
- readable
- hierarchical
- high-contrast
- decision-oriented
- fast to scan

---

## 15.2 Avoid
- too many tiny charts
- cluttered widgets
- decorative visuals without value
- mixing operational detail with executive summaries in one crowded screen

---

## 15.3 Preferred visual language
- premium corporate-tech
- restrained color use
- clear KPI cards
- strong tables and trend charts
- status badges
- priority highlighting

---

# 16. Recommended chart types

## Best chart types by use case
- KPI cards → snapshot metrics
- bar chart → comparison by pillar / source
- line chart → trend over time
- funnel chart → pipeline / conversion
- table with flags → actions / priorities
- heatmap → scoring distribution or cross-pillar links
- stacked bar → stage composition
- status list → alerts and blocked items

---

# 17. Suggested dashboard data model

## Executive dashboard model example
```json
{
  "new_leads": 24,
  "qualified_leads": 12,
  "active_projects": 9,
  "pipeline_value": "180000 PLN",
  "won_value": "45000 PLN",
  "avg_project_value": "12000 PLN",
  "top_pillars": [
    {"pillar": "digital", "value": 6},
    {"pillar": "strategy", "value": 4}
  ]
}
```

---

## Sales dashboard model example
```json
{
  "leads_by_stage": {
    "new": 18,
    "qualified": 11,
    "discovery": 7,
    "proposal": 4,
    "won": 2
  },
  "top_sources": [
    {"source": "homepage", "count": 8},
    {"source": "digital_site", "count": 5}
  ],
  "avg_lead_score": 16.8
}
```

---

# 18. Suggested implementation order

## Phase 1
- Executive Dashboard
- Sales Dashboard
- Marketing & Website Dashboard

## Phase 2
- Delivery / Project Dashboard
- CRM / Lead Quality Dashboard
- Pillar Performance Dashboard

## Phase 3
- Expansion & Retention Dashboard
- AI / Automation Operations Dashboard
- predictive / AI-assisted recommendations

---

# 19. AI-assisted dashboard layer

## 19.1 AI can help with
- summarizing dashboard changes,
- surfacing anomalies,
- identifying strongest opportunities,
- suggesting next actions,
- creating weekly summaries,
- explaining metric changes in plain language.

---

## 19.2 Example AI summary output
This week, the strongest performance came from the Digital pillar, with a higher-than-average CTA conversion and two high-value qualified leads.  
The main risk area is stale proposals in Strategy and one delayed multi-pillar project in delivery.

---

# 20. Final principles

1. Dashboardy mają wspierać decyzje, nie tylko raportowanie.
2. Każdy dashboard powinien odpowiadać na konkretny typ pytań.
3. KPI muszą być powiązane z operating systemem i sales framework.
4. Alerts i action lists są tak samo ważne jak wykresy.
5. Dane muszą pomagać rozwijać ekosystem, nie tylko go opisywać.
6. Dashboard powinien być tak samo dobrze zaprojektowany jak strona marki.
7. Prosty i użyteczny dashboard jest lepszy niż efektowny, ale niepraktyczny panel.

---

# 21. Następne rekomendowane pliki

Possible next documents:
- `mulagroup_retainer_model.md`
- `mulagroup_ai_triage_prompt_library.md`
- `mulagroup_nurture_sequences.md`
- `mulagroup_reporting_framework.md`
- `mulagroup_weekly_review_framework.md`

