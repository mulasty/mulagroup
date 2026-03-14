
# Mula Group — Lead Scoring Model

## Cel dokumentu
Ten dokument definiuje **model scoringu leadów** dla ekosystemu Mula Group.

Ma służyć jako baza dla:
- kwalifikacji leadów,
- priorytetyzacji kontaktów,
- routingu do właściwych filarów,
- pracy sprzedażowej i operacyjnej,
- integracji z CRM,
- automatyzacji i agentów AI,
- wykrywania potencjału wielofilarowego i długoterminowej wartości klienta.

Dokument porządkuje:
- cele scoringu,
- kryteria oceny leadów,
- model punktowy,
- klasy leadów,
- reguły routingu,
- scoring potencjału cross-sellu,
- scoring gotowości zakupowej,
- scoring wartości strategicznej,
- zasady pracy z leadami po wyniku oceny.

---

# 1. Główne założenie modelu

## 1.1 Po co Mula Group potrzebuje scoringu leadów
Scoring leadów ma:
- oddzielać leady szybkie od strategicznych,
- pomagać decydować, które leady wymagają natychmiastowej reakcji,
- ułatwiać wybór najlepszego entry offer,
- wykrywać leady wielofilarowe,
- wspierać zespół i AI w podejmowaniu decyzji,
- zwiększać skuteczność sprzedaży i cross-sellu.

---

## 1.2 Czym scoring nie ma być
Scoring nie ma być:
- sztywnym systemem oderwanym od zdrowego rozsądku,
- oceną tylko po budżecie,
- prostą liczbą bez interpretacji,
- zamiennikiem rozmowy discovery.

Scoring ma być:
- narzędziem priorytetyzacji,
- wsparciem decyzji,
- systemem sygnałów,
- warstwą logiki wspierającą sprzedaż i operating system.

---

# 2. Główne wymiary scoringu

Każdy lead powinien być oceniany w 5 głównych wymiarach:

1. **Fit** — dopasowanie do Mula Group
2. **Urgency** — pilność i momentum
3. **Readiness** — gotowość do działania
4. **Value Potential** — potencjał wartości
5. **Ecosystem Potential** — potencjał wielofilarowy

Każdy z tych wymiarów może być oceniany osobno, a potem łączony w jeden wynik.

---

# 3. Scoring dimension 1 — Fit

## 3.1 Co mierzy Fit
Fit mierzy, na ile lead pasuje do modelu Mula Group:
- typ problemu,
- typ klienta,
- zgodność z filarami,
- realność potrzeby,
- sens współpracy.

---

## 3.2 Skala Fit (0–5)
### 0
Brak dopasowania.  
Lead nie pasuje do filarów lub oczekuje czegoś spoza modelu.

### 1
Słabe dopasowanie.  
Potrzeba jest marginalnie związana z ofertą.

### 2
Umiarkowane dopasowanie.  
Możliwy projekt, ale ograniczony lub nieoptymalny.

### 3
Dobre dopasowanie.  
Lead dobrze wpisuje się w co najmniej jeden filar.

### 4
Bardzo dobre dopasowanie.  
Problem dobrze pasuje do filaru i ma sens rozwojowy.

### 5
Idealne dopasowanie.  
Lead odpowiada modelowi Mula Group i ma potencjał strategiczny lub ekosystemowy.

---

## 3.3 Sygnały wysokiego Fit
- klient ma złożony problem, który wymaga struktury,
- potrzeba jest zgodna z jednym lub więcej filarami,
- klient szuka partnera, nie tylko szybkiego wykonawcy,
- projekt ma sens biznesowy i jest realny.

---

# 4. Scoring dimension 2 — Urgency

## 4.1 Co mierzy Urgency
Urgency mierzy:
- pilność problemu,
- momentum decyzyjne,
- czy klient działa teraz,
- czy temat jest aktualny i „żywy”.

---

## 4.2 Skala Urgency (0–5)
### 0
Brak pilności.  
Pomysł bardzo luźny lub bez terminu.

### 1
Bardzo niska pilność.  
Klient tylko eksploruje.

### 2
Niska pilność.  
Temat może wrócić, ale nie teraz.

### 3
Średnia pilność.  
Klient chce działać w przewidywalnym czasie.

### 4
Wysoka pilność.  
Temat jest aktywny i wymaga decyzji wkrótce.

### 5
Bardzo wysoka pilność.  
Klient chce ruszyć natychmiast lub ma konkretny deadline.

---

## 4.3 Sygnały wysokiej Urgency
- jasny termin,
- aktywny projekt,
- budżet lub zasoby już gotowe,
- silna motywacja do szybkiego działania.

---

# 5. Scoring dimension 3 — Readiness

## 5.1 Co mierzy Readiness
Readiness mierzy:
- dojrzałość klienta do działania,
- poziom sprecyzowania potrzeby,
- gotowość organizacyjną,
- gotowość do wejścia w proces discovery / offer / delivery.

---

## 5.2 Skala Readiness (0–5)
### 0
Brak gotowości.  
Luźna idea bez realnego gruntu.

### 1
Bardzo niska gotowość.  
Dużo ogólności, brak zasobów, brak decyzji.

### 2
Niska gotowość.  
Wstępne zainteresowanie, ale niewiele konkretów.

### 3
Średnia gotowość.  
Klient ma już część danych, potrzeb lub zasobów.

### 4
Wysoka gotowość.  
Klient wie czego chce lub jest gotów przejść do discovery.

### 5
Bardzo wysoka gotowość.  
Klient jest gotów do szybkiej decyzji, wdrożenia lub rozpoczęcia procesu.

---

## 5.3 Sygnały wysokiej Readiness
- klient potrafi opisać problem,
- ma zasoby lub osoby decyzyjne,
- rozumie potrzebę inwestycji,
- jest gotowy na rozmowę o zakresie i kolejnym kroku.

---

# 6. Scoring dimension 4 — Value Potential

## 6.1 Co mierzy Value Potential
Value Potential mierzy:
- potencjalną wartość projektu,
- potencjał rozszerzenia,
- długoterminową wartość klienta,
- możliwość budowy większej współpracy.

---

## 6.2 Skala Value Potential (0–5)
### 0
Bardzo niski potencjał wartości.

### 1
Niski potencjał wartości.  
Mały, jednorazowy, mało perspektywiczny zakres.

### 2
Ograniczony potencjał.  
Możliwa mała usługa bez większej perspektywy.

### 3
Dobry potencjał.  
Sensowny projekt lub klient z możliwością rozwoju.

### 4
Wysoki potencjał.  
Projekt znaczący lub klient z dużym potencjałem wzrostu.

### 5
Bardzo wysoki potencjał.  
Lead strategiczny, wieloetapowy lub o dużej wartości lifetime.

---

## 6.3 Sygnały wysokiego Value Potential
- klient ma większy projekt lub rosnący biznes,
- problem obejmuje kilka obszarów,
- istnieje możliwość retainera lub etapowania,
- klient ma potencjał na wiele filarów.

---

# 7. Scoring dimension 5 — Ecosystem Potential

## 7.1 Co mierzy Ecosystem Potential
Ecosystem Potential mierzy:
- czy lead ma potencjał wielofilarowy,
- czy można naturalnie połączyć 2+ filary,
- czy Mula Group może pokazać pełną przewagę systemową.

---

## 7.2 Skala Ecosystem Potential (0–5)
### 0
Brak potencjału wielofilarowego.

### 1
Bardzo niski potencjał.

### 2
Ograniczony potencjał — może pojawić się drugi filar.

### 3
Dobry potencjał — widać sens 2 filarów.

### 4
Wysoki potencjał — 2–3 filary logicznie się łączą.

### 5
Bardzo wysoki potencjał — pełny lead ekosystemowy.

---

## 7.3 Sygnały wysokiego Ecosystem Potential
- klient ma złożony problem,
- potrzebuje strategii + wdrożenia,
- projekt obejmuje sprzedaż, digital, AI, operacje lub koncept,
- istnieje potencjał długofalowej współpracy.

---

# 8. Overall scoring model

## 8.1 Standard formula
Każdy lead otrzymuje ocenę 0–5 w każdym z 5 wymiarów.

### Maksymalny wynik
25 punktów

### Formula
`Total Score = Fit + Urgency + Readiness + Value Potential + Ecosystem Potential`

---

## 8.2 Score classes
### 0–7
**Low priority lead**

### 8–12
**Moderate lead**

### 13–17
**Good lead**

### 18–21
**High-value lead**

### 22–25
**Strategic ecosystem lead**

---

# 9. Lead classes and actions

## 9.1 Low priority lead (0–7)
Charakterystyka:
- niska gotowość,
- niski fit,
- niski potencjał.

Działanie:
- lekki follow-up,
- edukacja,
- ewentualne odłożenie do nurture.

---

## 9.2 Moderate lead (8–12)
Charakterystyka:
- częściowe dopasowanie,
- ograniczony projekt,
- możliwa szybka usługa.

Działanie:
- kwalifikacja,
- prosty entry offer,
- decyzja czy warto wchodzić głębiej.

---

## 9.3 Good lead (13–17)
Charakterystyka:
- dobre dopasowanie,
- sensowna gotowość,
- realna możliwość projektu.

Działanie:
- discovery,
- dopracowanie oferty,
- obserwacja cross-sellu.

---

## 9.4 High-value lead (18–21)
Charakterystyka:
- wysoki potencjał wartości,
- dobra gotowość,
- mocny fit,
- możliwy model wielofilarowy.

Działanie:
- szybki kontakt,
- strategy/discovery priority,
- projektowanie ścieżki rozszerzenia.

---

## 9.5 Strategic ecosystem lead (22–25)
Charakterystyka:
- bardzo mocny fit,
- wysoka gotowość,
- wysoka wartość,
- duży potencjał ekosystemowy.

Działanie:
- najwyższy priorytet,
- szybkie przypisanie ownera,
- discovery strategiczne,
- wielofilarowa architektura oferty.

---

# 10. Secondary scoring layers

## 10.1 Budget confidence score (0–3)
To nie jest główny wymiar, ale warto go zapisywać pomocniczo.

### 0
Brak sygnału budżetu lub bardzo niski realizm.

### 1
Niejasny budżet, ale możliwy mały scope.

### 2
Średnia pewność budżetu / zasobów.

### 3
Wysoka pewność budżetu lub gotowości inwestycyjnej.

---

## 10.2 Decision power score (0–3)
### 0
Brak wpływu na decyzję.

### 1
Pośredni kontakt lub niejasna decyzyjność.

### 2
Silny wpływ na decyzję.

### 3
Osoba decyzyjna / owner / inwestor.

---

## 10.3 Relationship potential score (0–3)
### 0
Jednorazowy kontakt.

### 1
Mały potencjał relacyjny.

### 2
Możliwa dłuższa współpraca.

### 3
Bardzo wysoki potencjał partnerstwa / retainera / kolejnych etapów.

---

# 11. Lead scoring by type

## 11.1 Tactical lead
Typowy profil:
- jedno konkretne zapytanie,
- jeden filar,
- mniejszy zakres.

Typowe scoringi:
- Fit: 3–4
- Urgency: 3–5
- Readiness: 3–5
- Value: 1–3
- Ecosystem: 0–2

---

## 11.2 Strategic lead
Typowy profil:
- złożony problem,
- klient potrzebuje uporządkowania,
- mocny sens dla Strategy.

Typowe scoringi:
- Fit: 4–5
- Urgency: 2–4
- Readiness: 2–4
- Value: 3–5
- Ecosystem: 3–5

---

## 11.3 Venture / project lead
Typowy profil:
- nowy projekt,
- inwestycja,
- koncept premium,
- przestrzeń / venture.

Typowe scoringi:
- Fit: 4–5
- Urgency: 2–4
- Readiness: 2–4
- Value: 4–5
- Ecosystem: 4–5

---

## 11.4 Operational / technical lead
Typowy profil:
- techniczny problem,
- proces, maszyny, operacje.

Typowe scoringi:
- Fit: 3–5
- Urgency: 3–5
- Readiness: 3–5
- Value: 2–4
- Ecosystem: 1–4

---

# 12. Practical scoring questions

## 12.1 Fit questions
- Czy to realnie pasuje do filarów Mula Group?
- Czy możemy wnieść prawdziwą wartość?
- Czy problem jest wart strukturalnego podejścia?

## 12.2 Urgency questions
- Czy klient chce działać teraz?
- Czy istnieje deadline lub okno decyzyjne?
- Czy temat jest aktywny?

## 12.3 Readiness questions
- Czy klient ma wystarczająco konkretną sytuację?
- Czy ma zasoby lub wpływ na decyzję?
- Czy jest gotów przejść do discovery / oferty?

## 12.4 Value questions
- Czy projekt ma sensowną wartość?
- Czy może się rozwinąć?
- Czy warto inwestować czas i uwagę?

## 12.5 Ecosystem questions
- Czy widać sens połączenia kilku filarów?
- Czy to może być relacja długoterminowa?
- Czy to projekt, w którym Mula Group pokaże pełną przewagę?

---

# 13. CRM implementation model

## 13.1 Suggested fields
- `fit_score`
- `urgency_score`
- `readiness_score`
- `value_score`
- `ecosystem_score`
- `total_score`
- `budget_confidence_score`
- `decision_power_score`
- `relationship_potential_score`
- `lead_class`
- `priority_level`
- `recommended_entry_offer`
- `primary_pillar`
- `secondary_pillars`

---

## 13.2 Priority level logic
### P1
Total score 22–25  
lub 18+ z wysoką gotowością i decyzyjnością.

### P2
Total score 18–21

### P3
Total score 13–17

### P4
Total score 8–12

### P5
Total score 0–7

---

# 14. Routing rules based on score

## 14.1 Low score + high urgency
Możliwy szybki mały projekt lub odrzucenie, jeśli fit niski.

## 14.2 High fit + low readiness
Kandydat do nurture / edukacji / strategy-first path.

## 14.3 High value + high ecosystem
Priorytet dla Strategy lub ownera projektu wielofilarowego.

## 14.4 High urgency + high readiness + medium value
Dobry kandydat na szybki entry offer.

## 14.5 High ecosystem + medium urgency
Dobry kandydat na discovery strategiczne.

---

# 15. AI-assisted scoring

## 15.1 AI może pomagać w:
- analizie treści formularza,
- klasyfikacji lead type,
- wstępnym scoringu 5 wymiarów,
- wykrywaniu sygnałów budżetu i decyzyjności,
- sugerowaniu primary pillar,
- sugerowaniu entry offer.

---

## 15.2 AI output format
Przykład:
```json
{
  "lead_type": "strategic",
  "primary_pillar": "strategy",
  "secondary_pillars": ["digital", "commerce"],
  "scores": {
    "fit": 5,
    "urgency": 3,
    "readiness": 3,
    "value_potential": 4,
    "ecosystem_potential": 5
  },
  "total_score": 20,
  "lead_class": "high-value lead",
  "recommended_entry_offer": "Strategy Session"
}
```

---

# 16. Manual override rules

## 16.1 Zasada
Scoring wspiera decyzję, ale nie zastępuje zdrowego osądu.

---

## 16.2 Kiedy override jest uzasadniony
- lead strategicznie ważny mimo niepełnych danych,
- relacja partnerska,
- wyjątkowa okazja rynkowa,
- klient bardzo perspektywiczny, ale jeszcze niegotowy,
- projekt wzorcowy dla marki lub case study.

---

# 17. Follow-up rules by lead class

## Strategic ecosystem lead
- kontakt szybko,
- discovery priority,
- owner assignment,
- plan wielofilarowy.

## High-value lead
- szybki follow-up,
- discovery / session,
- oferta w logicznych etapach.

## Good lead
- standardowy follow-up,
- kwalifikacja i entry offer.

## Moderate lead
- sprawdzenie potencjału,
- możliwy mały produkt wejściowy,
- ewentualny nurture.

## Low priority lead
- delikatny follow-up,
- zapis do przyszłego kontaktu,
- ewentualne odłożenie.

---

# 18. Final principles

1. Scoring ma porządkować decyzje, nie komplikować ich.
2. Najważniejszy jest fit + value + ecosystem potential.
3. Wysoki urgency bez fitu nie oznacza dobrego klienta.
4. Niska gotowość nie przekreśla leadu strategicznego.
5. Projekty wielofilarowe powinny mieć wyższy priorytet.
6. Entry offer powinien wynikać ze scoringu i typu leadu.
7. CRM, AI i zespół powinni pracować na tym samym modelu.
8. Scoring powinien wspierać długofalową wartość, nie tylko szybkie zamknięcia.

---

# 19. Następne rekomendowane pliki

Possible next documents:
- `mulagroup_offer_templates.md`
- `mulagroup_internal_brief_templates.md`
- `mulagroup_analytics_event_map.md`
- `mulagroup_client_journey_map.md`
- `mulagroup_discovery_framework.md`

