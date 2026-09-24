# Uniezz — Zadania testów

Te same sprinty. Klienci tylko do Go API.

Szacunki: **0.5d albo 1d**. Sprint = dwa tygodnie, około 10d.

**Przed startem musi przejść:** logowanie UMCS i logowanie **jednej** uczelni Entra.

---

## Sprint 1 — Stanowisko i logowanie

| ID      | Zadanie                             | d   | Zależy  | Gotowe, gdy                                |
| ------- | ----------------------------------- | --- | ------- | ------------------------------------------ |
| QA-1.1  | Stanowisko testów API               | 1   | BE-1.1  | Jeden test Go leci.                        |
| QA-1.2  | Stanowisko testów webu              | 1   | FE-1.1  | Jeden test przeglądarki otwiera aplikację. |
| QA-1.3  | Stanowisko testów telefonu          | 1   | MO-1.1  | Jeden flow startuje.                       |
| QA-1.4  | Health i kontrakt auth              | 1   | BE-1.6  | `/health` i `/auth/*` sprawdzone.          |
| QA-1.5  | Szczęśliwy USOS (fałszywa uczelnia) | 1   | BE-1.8  | Logowanie ok.                              |
| QA-1.6  | Zły podpis USOS pada                | 0.5 | BE-1.8  | Zły HMAC odrzucony.                        |
| QA-1.7  | Obcy tenant Entra odrzucony         | 1   | BE-1.9  | Nieznany tid nie wchodzi.                  |
| QA-1.8  | Pracownik Entra odrzucony           | 0.5 | BE-1.10 | Brak sesji studenta.                       |
| QA-1.9  | Reguły kodu z maila                 | 1   | BE-1.12 | Limity i spalony kod sprawdzone.           |
| QA-1.10 | Smoke logowania na webie            | 1   | FE-1.7  | Uczelnia → USOS albo Entra albo kod.       |
| QA-1.11 | Smoke logowania na telefonie        | 1   | MO-1.7  | To samo na urządzeniu.                     |

**Suma: 10.5d**

---

## Sprint 2 — Profil, pliki, feed

| ID      | Zadanie                          | d   | Zależy         | Gotowe, gdy                    |
| ------- | -------------------------------- | --- | -------------- | ------------------------------ |
| QA-2.1  | Zapis profilu                    | 1   | BE-2.1         | Tekst zostaje.                 |
| QA-2.2  | Odznaka zaufania                 | 0.5 | BE-1.13        | Poprawna.                      |
| QA-2.3  | Gość nie wrzuca                  | 1   | BE-2.4         | Bez sesji upload pada.         |
| QA-2.4  | Stary link umiera                | 1   | BE-2.4         | Wygasły nie zapisuje.          |
| QA-2.5  | Filtry feedu                     | 1   | BE-2.8         | Uczelnia, typ, data.           |
| QA-2.6  | Komentarze                       | 1   | BE-2.7         | Tworzenie i lista.             |
| QA-2.7  | Zgłoszenie daje wiersz w kolejce | 1   | BE-2.9         | Wiersz jest.                   |
| QA-2.8  | Usunięcie konta                  | 1   | BE-2.10        | Profil i sesja znikają.        |
| QA-2.9  | Web: feed i profil               | 1   | FE-2.1, MO-2.1 | Główna ścieżka w przeglądarce. |
| QA-2.10 | Telefon: feed i profil           | 1   | MO-2.1         | Główna ścieżka na telefonie.   |

**Suma: 9.5d**

---

## Sprint 3 — Czat

| ID     | Zadanie                        | d   | Zależy | Gotowe, gdy                        |
| ------ | ------------------------------ | --- | ------ | ---------------------------------- |
| QA-3.1 | Wysłać i dostać DM             | 1   | BE-3.2 | Dwie osoby widzą tę samą historię. |
| QA-3.2 | Obcy nie czyta DM              | 1   | BE-3.2 | Trzeci dostaje błąd.               |
| QA-3.3 | Tylko członkowie grupy         | 1   | BE-3.4 | Nie-członek nie czyta.             |
| QA-3.4 | Żywa wiadomość bez odświeżania | 1   | BE-3.5 | Drugi klient się odświeża.         |
| QA-3.5 | Typ i rozmiar pliku            | 1   | BE-3.8 | Złe pliki padają.                  |
| QA-3.6 | Flaga nieprzeczytanego         | 1   | BE-3.9 | Włącza się na nowe.                |
| QA-3.7 | Czat na webie                  | 1   | FE-3.2 | Wysyłka w przeglądarce.            |
| QA-3.8 | Czat na telefonie              | 1   | MO-3.2 | Wysyłka na telefonie.              |
| QA-3.9 | Po zerwaniu znów               | 1   | BE-3.6 | Wiadomości idą dalej.              |

**Suma: 9d**

---

## Sprint 4 — Nauka

| ID     | Zadanie              | d   | Zależy | Gotowe, gdy                             |
| ------ | -------------------- | --- | ------ | --------------------------------------- |
| QA-4.1 | Wgrać i lista        | 1   | BE-4.1 | Plik na liście.                         |
| QA-4.2 | Szukanie             | 1   | BE-4.3 | Trafienia się zgadzają.                 |
| QA-4.3 | Jedna ocena na osobę | 1   | BE-4.5 | Druga ocena aktualizuje, nie duplikuje. |
| QA-4.4 | Komentarze kursu     | 1   | BE-4.6 | Komentarz widać.                        |
| QA-4.5 | Filtry               | 1   | BE-4.7 | Uczelnia i wydział.                     |
| QA-4.6 | Zgłoszenie pliku     | 1   | BE-4.9 | Ta sama kolejka co feed.                |
| QA-4.7 | Web Study            | 1   | FE-4.1 | Lista i kurs się otwierają.             |
| QA-4.8 | Telefon Study        | 1   | MO-4.1 | Lista i kurs się otwierają.             |

**Suma: 8d**

---

## Sprint 5 — Meet i przewodnik

| ID      | Zadanie                         | d   | Zależy         | Gotowe, gdy                    |
| ------- | ------------------------------- | --- | -------------- | ------------------------------ |
| QA-5.1  | Like i pass                     | 1   | BE-5.2         | Pass nigdy nie daje matcha.    |
| QA-5.2  | Filtry                          | 1   | BE-5.3         | Stos się zmienia.              |
| QA-5.3  | Dwa like = jeden czat           | 1   | BE-5.4         | Jeden wątek, nie dwa.          |
| QA-5.4  | Meet bez zdjęcia zamknięty      | 1   | BE-5.5         | API nie daje kart.             |
| QA-5.5  | Student nie tworzy miejsca      | 1   | BE-5.8         | Zapis odrzucony.               |
| QA-5.6  | Zespół może opublikować miejsce | 1   | BE-5.7         | Miejsce na liście studentów.   |
| QA-5.7  | Opinia o akademiku              | 1   | BE-5.9         | Zapisane.                      |
| QA-5.8  | Piny = miejsca                  | 1   | BE-5.10        | Ukryte miejsce bez pina.       |
| QA-5.9  | Web Meet i przewodnik           | 1   | FE-5.1, FE-5.5 | Główna ścieżka w przeglądarce. |
| QA-5.10 | Telefon Meet i przewodnik       | 1   | MO-5.1, MO-5.5 | Główna ścieżka na telefonie.   |

**Suma: 10d**

---

## Sprint 6 — Moderatorzy i start

| ID      | Zadanie                                         | d   | Zależy         | Gotowe, gdy                            |
| ------- | ----------------------------------------------- | --- | -------------- | -------------------------------------- |
| QA-6.1  | Testy tego logowania, które naprawdę wybraliśmy | 1   | BE-6.1, BE-6.2 | Brak testów TOTP, jeśli dok je usunął. |
| QA-6.2  | Zatwierdzić i odrzucić                          | 1   | BE-6.5         | Pozycja znika z kolejki.               |
| QA-6.3  | Ban trzyma przy następnym logowaniu             | 1   | BE-6.8         | Zbanowany nie wchodzi.                 |
| QA-6.4  | PESEL nigdy w bazie i nigdy w logach            | 1   | BE-1.8         | Fałszywe dane personal odrzucone.      |
| QA-6.5  | Zmiana języka na webie                          | 0.5 | FE-6.5         | pl/uk/ru/en.                           |
| QA-6.6  | Zmiana języka na telefonie                      | 0.5 | MO-6.4         | pl/uk/ru/en.                           |
| QA-6.7  | Ponów sprinty 1–2                               | 1   | —              | Logowanie i feed nadal ok.             |
| QA-6.8  | Ponów sprinty 3–4                               | 1   | —              | Czat i nauka nadal ok.                 |
| QA-6.9  | Ponów sprint 5                                  | 1   | —              | Meet i przewodnik nadal ok.            |
| QA-6.10 | Student nie otwiera stron moderatora            | 1   | BE-6.2, FE-6.1 | Web i API odmawiają.                   |

**Suma: 9d**

---

_Dokument: TASKS testing (PL) · Uniezz · v1.1_
