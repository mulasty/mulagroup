
# Mula Group — Analytics Event Map

## Cel dokumentu
Ten dokument definiuje **mapę zdarzeń analitycznych** dla ekosystemu Mula Group.

Ma służyć jako baza dla:
- wdrożenia analityki na `mulagroup.eu` i subdomenach,
- mierzenia zachowań użytkowników,
- śledzenia ścieżek wejścia, konwersji i jakości ruchu,
- oceny skuteczności CTA, formularzy i sekcji,
- integracji z CRM, automatyzacjami i AI,
- budowy dashboardów i raportów operacyjnych.

Dokument porządkuje:
- cele analityki,
- model eventów,
- nazewnictwo zdarzeń,
- eventy globalne i filarowe,
- eventy formularzy,
- eventy leadowe i sprzedażowe,
- atrybuty eventów,
- zasady wdrożenia i raportowania.

---

# 1. Główne założenie analityki

## 1.1 Po co Mula Group potrzebuje event map
Event map ma pomóc odpowiedzieć na pytania:
- skąd wchodzą użytkownicy,
- które filary przyciągają uwagę,
- które CTA działają najlepiej,
- gdzie użytkownicy odpadają,
- które formularze konwertują,
- które typy leadów są najbardziej wartościowe,
- jak wygląda droga użytkownika przez ekosystem.

---

## 1.2 Czym analityka nie ma być
Analityka nie ma być:
- zbiorem przypadkowych eventów,
- śledzeniem wszystkiego bez celu,
- wdrożeniem bez logicznej struktury,
- osobnym światem od CRM i sprzedaży.

Analityka ma być:
- uporządkowana,
- spójna,
- nastawiona na decyzje,
- zrozumiała dla biznesu,
- połączona z operacjami i sprzedażą.

---

# 2. Główne cele analityczne

## 2.1 Cele top-level
1. Mierzyć skuteczność strony głównej i subdomen.
2. Mierzyć zainteresowanie filarami.
3. Mierzyć skuteczność CTA i formularzy.
4. Mierzyć jakość ruchu i leadów.
5. Mierzyć przejścia między filarami.
6. Mierzyć wpływ contentu, case studies i ofert na konwersję.

---

## 2.2 Warstwy analityki
### Layer 1 — Behavioral analytics
Co użytkownik robi na stronie.

### Layer 2 — Conversion analytics
Czy użytkownik wykonuje pożądane akcje.

### Layer 3 — Lead analytics
Jakie leady generuje dana ścieżka.

### Layer 4 — Ecosystem analytics
Jak użytkownik przechodzi między filarami i które filary najlepiej współpracują.

---

# 3. Naming convention for events

## 3.1 Główna zasada
Nazwy eventów powinny być:
- krótkie,
- czytelne,
- spójne,
- snake_case,
- oparte na akcji.

---

## 3.2 Recommended format
`[area]_[action]`

### Przykłady
- `page_view`
- `cta_click`
- `pillar_card_click`
- `form_start`
- `form_submit`
- `faq_expand`
- `proposal_download`
- `case_study_open`

---

## 3.3 Extended naming examples
- `homepage_cta_click`
- `strategy_form_submit`
- `projects_case_study_open`
- `ecosystem_map_interaction`
- `contact_form_success`

---

# 4. Global event attributes

Każdy ważny event powinien, jeśli to możliwe, zawierać wspólne atrybuty.

## 4.1 Required common properties
- `page_name`
- `page_type`
- `site_section`
- `pillar_context`
- `event_source`
- `timestamp`

---

## 4.2 Recommended additional properties
- `cta_label`
- `cta_position`
- `form_name`
- `form_type`
- `lead_type`
- `inquiry_type`
- `scroll_depth`
- `case_study_slug`
- `article_slug`
- `target_url`
- `referrer_type`
- `utm_source`
- `utm_medium`
- `utm_campaign`

---

# 5. Global core events

## 5.1 Page view
### Event name
`page_view`

### Trigger
Każde załadowanie strony.

### Properties
- page_name
- page_type
- pillar_context
- referrer_type
- utm_source / medium / campaign

---

## 5.2 Session start
### Event name
`session_start`

### Trigger
Początek sesji użytkownika.

### Properties
- landing_page
- referrer_type
- device_type
- utm data

---

## 5.3 Scroll milestone
### Event name
`scroll_depth_reached`

### Trigger
Osiągnięcie progu:
- 25%
- 50%
- 75%
- 90%

### Properties
- page_name
- scroll_depth

---

## 5.4 Outbound link click
### Event name
`outbound_link_click`

### Trigger
Klik w link wychodzący.

### Properties
- target_url
- page_name
- pillar_context
- link_label

---

# 6. CTA events

## 6.1 Generic CTA click
### Event name
`cta_click`

### Trigger
Kliknięcie każdego kluczowego CTA.

### Properties
- cta_label
- cta_position
- page_name
- pillar_context
- target_url

---

## 6.2 Hero CTA click
### Event name
`hero_cta_click`

### Trigger
Klik na CTA w hero.

### Properties
- cta_label
- page_name
- pillar_context

---

## 6.3 Section CTA click
### Event name
`section_cta_click`

### Trigger
Klik na CTA w sekcji innej niż hero.

### Properties
- section_name
- cta_label
- page_name
- pillar_context

---

# 7. Homepage-specific events

## 7.1 Ecosystem section viewed
### Event name
`ecosystem_section_view`

### Trigger
Użytkownik dotarł do sekcji filarów.

### Properties
- page_name
- page_type

---

## 7.2 Pillar card click
### Event name
`pillar_card_click`

### Trigger
Kliknięcie kafla filaru.

### Properties
- pillar_name
- source_page
- card_position

---

## 7.3 Ecosystem map interaction
### Event name
`ecosystem_map_interaction`

### Trigger
Klik, hover lub expand na mapie ekosystemu.

### Properties
- node_name
- interaction_type
- source_page

---

## 7.4 Partnership CTA click
### Event name
`partnership_cta_click`

### Trigger
Klik CTA związane z partnerstwem.

### Properties
- cta_label
- page_name

---

# 8. Pillar page events

## 8.1 Services section view
### Event name
`services_section_view`

### Trigger
Dotarcie do sekcji usług.

### Properties
- pillar_context
- page_name

---

## 8.2 Service card click
### Event name
`service_card_click`

### Trigger
Klik usługi lub rozwinięcie.

### Properties
- service_name
- pillar_context
- card_position

---

## 8.3 Offer format click
### Event name
`offer_format_click`

### Trigger
Klik formatu oferty / engagement model.

### Properties
- offer_format_name
- pillar_context

---

## 8.4 Process section view
### Event name
`process_section_view`

### Trigger
Dotarcie do sekcji procesu.

### Properties
- pillar_context
- page_name

---

## 8.5 FAQ expand
### Event name
`faq_expand`

### Trigger
Rozwinięcie pytania FAQ.

### Properties
- faq_question
- pillar_context
- page_name

---

# 9. Form analytics events

## 9.1 Form view
### Event name
`form_view`

### Trigger
Formularz pojawia się w viewport.

### Properties
- form_name
- pillar_context
- page_name

---

## 9.2 Form start
### Event name
`form_start`

### Trigger
Pierwsza interakcja z formularzem.

### Properties
- form_name
- page_name
- pillar_context

---

## 9.3 Form field interaction
### Event name
`form_field_interaction`

### Trigger
Opcjonalnie: interakcja z ważnym polem.

### Properties
- form_name
- field_name
- pillar_context

---

## 9.4 Form validation error
### Event name
`form_validation_error`

### Trigger
Błąd walidacji.

### Properties
- form_name
- field_name
- error_type
- pillar_context

---

## 9.5 Form submit
### Event name
`form_submit`

### Trigger
Klik submit.

### Properties
- form_name
- pillar_context
- inquiry_type
- page_name

---

## 9.6 Form success
### Event name
`form_success`

### Trigger
Prawidłowe wysłanie formularza.

### Properties
- form_name
- pillar_context
- inquiry_type
- lead_source_page

---

## 9.7 Form failure
### Event name
`form_failure`

### Trigger
Błąd wysyłki.

### Properties
- form_name
- pillar_context
- error_type

---

# 10. Lead and sales-related events

## 10.1 Consultation request
### Event name
`consultation_request`

### Trigger
Wysłanie formularza typu consultation / discovery.

### Properties
- pillar_context
- inquiry_type
- lead_type if known

---

## 10.2 Proposal request
### Event name
`proposal_request`

### Trigger
Użytkownik prosi o ofertę / kolejny krok handlowy.

### Properties
- pillar_context
- offer_type
- inquiry_type

---

## 10.3 Lead qualified
### Event name
`lead_qualified`

### Trigger
Po stronie CRM / backend / automation.

### Properties
- lead_id
- primary_pillar
- lead_class
- lead_score
- lead_type

---

## 10.4 Discovery booked
### Event name
`discovery_booked`

### Trigger
Umówienie discovery session.

### Properties
- pillar_context
- meeting_type
- lead_class

---

## 10.5 Proposal sent
### Event name
`proposal_sent`

### Trigger
Po wysłaniu oferty.

### Properties
- proposal_type
- primary_pillar
- secondary_pillars
- lead_id

---

## 10.6 Proposal accepted
### Event name
`proposal_accepted`

### Trigger
Akceptacja oferty.

### Properties
- lead_id
- project_type
- primary_pillar
- multi_pillar (boolean)

---

# 11. Content engagement events

## 11.1 Case study open
### Event name
`case_study_open`

### Trigger
Otwarcie case study.

### Properties
- case_study_slug
- pillars_involved
- source_page

---

## 11.2 Article open
### Event name
`article_open`

### Trigger
Otwarcie artykułu / insightu.

### Properties
- article_slug
- pillar_context
- source_page

---

## 11.3 Download resource
### Event name
`resource_download`

### Trigger
Pobranie PDF / MD / deck / resource.

### Properties
- resource_name
- resource_type
- page_name
- pillar_context

---

# 12. Cross-pillar journey events

## 12.1 Pillar-to-pillar navigation
### Event name
`pillar_transition`

### Trigger
Przejście z jednej subdomeny / filaru do drugiego.

### Properties
- from_pillar
- to_pillar
- source_page
- target_page

---

## 12.2 Ecosystem expansion signal
### Event name
`ecosystem_expansion_signal`

### Trigger
Zdarzenie wykryte po stronie CRM / AI, gdy lead lub klient wykazuje sygnał drugiego filaru.

### Properties
- lead_id
- primary_pillar
- suggested_secondary_pillar
- signal_type

---

# 13. Conversion event hierarchy

## 13.1 Primary conversions
Najważniejsze konwersje:
- `form_success`
- `consultation_request`
- `discovery_booked`
- `proposal_request`
- `proposal_accepted`

---

## 13.2 Secondary conversions
Wspierające konwersje:
- `cta_click`
- `pillar_card_click`
- `service_card_click`
- `case_study_open`
- `resource_download`

---

## 13.3 Micro-conversions
Drobne sygnały intencji:
- `scroll_depth_reached`
- `faq_expand`
- `process_section_view`
- `form_start`

---

# 14. Suggested event map by page type

## 14.1 Homepage
Track:
- page_view
- hero_cta_click
- ecosystem_section_view
- pillar_card_click
- ecosystem_map_interaction
- partnership_cta_click
- form_view / form_start / form_success

---

## 14.2 Pillar homepage
Track:
- page_view
- hero_cta_click
- services_section_view
- service_card_click
- process_section_view
- faq_expand
- form_start / form_success

---

## 14.3 Case study page
Track:
- page_view
- case_study_open
- scroll_depth_reached
- cta_click
- pillar_transition

---

## 14.4 Contact / consultation page
Track:
- page_view
- form_view
- form_start
- form_validation_error
- form_success

---

# 15. Recommended data layer model

## 15.1 Standard payload shape
```json
{
  "event": "cta_click",
  "page_name": "homepage",
  "page_type": "homepage",
  "pillar_context": "main",
  "cta_label": "Explore the ecosystem",
  "cta_position": "hero_primary",
  "target_url": "/ecosystem"
}
```

---

## 15.2 Additional lead payload example
```json
{
  "event": "form_success",
  "form_name": "strategy_consultation_form",
  "pillar_context": "strategy",
  "inquiry_type": "business-development",
  "lead_source_page": "strategy_homepage"
}
```

---

# 16. Analytics implementation rules

## 16.1 General rules
1. Eventy muszą mieć spójną nazwę.
2. Nie śledzić wszystkiego bez decyzji biznesowej.
3. Najważniejsze CTA i formularze muszą być trackowane zawsze.
4. Eventy sprzedażowe powinny być połączone z CRM.
5. Dane mają wspierać decyzje, nie tylko raporty.

---

## 16.2 Technical rules
- używać wspólnego analytics wrappera,
- centralizować event helpery,
- dodać `data-*` markers dla ważnych elementów,
- nie duplikować eventów przy rerenderach,
- respektować consent / privacy model.

---

# 17. Dashboard recommendations

## 17.1 Executive dashboard
Powinien pokazywać:
- sessions
- lead conversions
- top-performing pillars
- top CTA
- best lead sources
- proposal requests
- accepted proposals

---

## 17.2 Marketing dashboard
Powinien pokazywać:
- traffic by source
- pillar visits
- CTA CTR
- form conversion rate
- content engagement
- case study performance

---

## 17.3 Sales / ops dashboard
Powinien pokazywać:
- qualified leads
- discovery booked
- lead classes
- conversion by source page
- cross-pillar transitions
- expansion signals

---

# 18. Privacy and compliance

## 18.1 Principles
- track only what has business value,
- avoid unnecessary personal data in analytics tools,
- keep CRM data separate from broad analytics where needed,
- ensure consent where applicable.

---

# 19. Final principles

1. Event map ma wspierać biznes, UX i sprzedaż.
2. Najważniejsze są wydarzenia związane z intencją i konwersją.
3. CTA, formularze i przejścia między filarami to kluczowe punkty pomiaru.
4. Dobra analityka pokazuje nie tylko co kliknięto, ale gdzie powstaje realna wartość.
5. Eventy muszą być spójne w całym ekosystemie.
6. Analytics powinno być zintegrowane z CRM, operating systemem i lead scoringiem.

---

# 20. Następne rekomendowane pliki

Possible next documents:
- `mulagroup_retainer_model.md`
- `mulagroup_ai_triage_prompt_library.md`
- `mulagroup_dashboard_spec.md`
- `mulagroup_nurture_sequences.md`
- `mulagroup_reporting_framework.md`

