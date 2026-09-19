# Uniezz — Zadania webu

Vite + React. Lewy sidebar. Tylko Go API. Ekrany: [design](../../design/README.md).

Szacunki: **0.5d albo 1d**. Sprint = dwa tygodnie, około 10d.

---

## Sprint 1 — Shell i logowanie

**Cel:** Gość widzi Uniezz, wybiera uczelnię i może wejść.

| ID | Zadanie | d | Zależy | Gotowe, gdy |
|----|---------|---|--------|-------------|
| FE-1.1 | Kolory i czcionka z designu | 1 | — | Brand jest w aplikacji. |
| FE-1.2 | Odstępy i zaokrąglenia | 0.5 | FE-1.1 | Przyciski i karty mają ten sam radius. |
| FE-1.3 | Lewy sidebar | 1 | FE-1.1 | Pozycje jak w designie. |
| FE-1.4 | Górny pasek | 1 | FE-1.3 | Avatar i tytuł są. |
| FE-1.5 | Języki pl, uk, ru, en | 1 | — | Jeden string można przełączyć. |
| FE-1.6 | Strona logowania: wybór uczelni | 1 | BE-1.6 | Lista uczelni na ekranie 01. |
| FE-1.7 | Start USOS albo Entra z przycisku | 1 | FE-1.6 | Przycisk woła `/auth/start`. |
| FE-1.8 | Powrót z uczelni | 1 | BE-1.4, FE-1.7 | Użytkownik jest zalogowany. Cookie ustawione. |
| FE-1.9 | Strona kodu z maila | 1 | BE-1.11, FE-1.6 | Można wpisać 6 cyfr (ekran 02). |
| FE-1.10 | Ponów i błędy na kodzie | 0.5 | FE-1.9 | Zły kod i ponów są jasne. |
| FE-1.11 | Gości na logowanie; wylogowanie | 1 | BE-1.4 | Zamknięte strony przekierowują. Wylogowanie czyści sesję. |

**Suma: 10d**

---

## Sprint 2 — Feed i profil

| ID | Zadanie | d | Zależy | Gotowe, gdy |
|----|---------|---|--------|-------------|
| FE-2.1 | Lista feedu i karta | 1 | BE-2.6, FE-1.4 | Ekran 03 pokazuje posty. |
| FE-2.2 | Filtry feedu | 1 | FE-2.1, BE-2.8 | Uczelnia, typ, data zmieniają listę. |
| FE-2.3 | Komentarze | 1 | FE-2.1, BE-2.7 | Czytanie i pisanie działają. |
| FE-2.4 | Formularz nowego posta | 1 | BE-2.5 | Typ i tekst. |
| FE-2.5 | Obrazek w poście | 1 | BE-2.4, FE-2.4 | Upload przez API. |
| FE-2.6 | Profil z avatara | 1 | BE-2.1 | Imię, wydział, rok, zainteresowania. |
| FE-2.7 | Edycja profilu i prywatności | 1 | FE-2.6 | Zapis przez API. |
| FE-2.8 | Odznaka zaufania | 0.5 | FE-2.6 | Zgadza się z verified / directory / domain. |
| FE-2.9 | Zapisane z profilu | 1 | FE-2.1 | Bez osobnego taba. |
| FE-2.10 | Zgłoszenie posta albo komentarza | 1 | BE-2.9 | Kontrolka na karcie. |

**Suma: 9.5d**

---

## Sprint 3 — Czat

| ID | Zadanie | d | Zależy | Gotowe, gdy |
|----|---------|---|--------|-------------|
| FE-3.1 | Strona czatu i lista wątków | 1 | BE-3.1, FE-1.4 | Ekran 05. |
| FE-3.2 | Rozmowa jeden na jeden | 1 | FE-3.1, BE-3.2 | Wiadomości po kolei. |
| FE-3.3 | Wysłać wiadomość | 1 | FE-3.2 | Pojawia się na liście. |
| FE-3.4 | Lista grup | 1 | BE-3.3, FE-3.1 | Grupy obok DM. |
| FE-3.5 | Otworzyć grupę i pisać | 1 | FE-3.4, BE-3.4 | Działa. |
| FE-3.6 | Żywe wiadomości | 1 | BE-3.5, FE-3.2 | Bez odświeżania. |
| FE-3.7 | Załączyć plik | 1 | BE-3.7 | Plik w wątku. |
| FE-3.8 | Pole wpisywania | 0.5 | FE-3.3 | Jak w designie. |
| FE-3.9 | Nieprzeczytane w sidebarze | 0.5 | BE-3.9, FE-3.1 | Jest odznaka. |

**Suma: 8.5d**

---

## Sprint 4 — Nauka

| ID | Zadanie | d | Zależy | Gotowe, gdy |
|----|---------|---|--------|-------------|
| FE-4.1 | Lista nauki | 1 | BE-4.2 | Ekran 04. |
| FE-4.2 | Szukanie egzaminów | 1 | FE-4.1, BE-4.3 | Szukanie filtruje. |
| FE-4.3 | Filtry | 1 | BE-4.7 | Uczelnia i wydział. |
| FE-4.4 | Strona kursu | 1 | BE-4.4 | Jest opis. |
| FE-4.5 | Ocenić kurs | 1 | FE-4.4, BE-4.5 | Gwiazdki się zapisują. |
| FE-4.6 | Komentarz do kursu | 1 | FE-4.4, BE-4.6 | Komentarz widać. |
| FE-4.7 | Wgrać plik egzaminu | 1 | BE-4.1 | Przez API, bez kluczy S3. |
| FE-4.8 | Zgłoszenie pliku albo kursu | 0.5 | BE-4.9 | Kontrolka na stronie. |

**Suma: 7.5d**

---

## Sprint 5 — Meet i przewodnik

| ID | Zadanie | d | Zależy | Gotowe, gdy |
|----|---------|---|--------|-------------|
| FE-5.1 | Karty Meet | 1 | BE-5.1 | Ekran 06. |
| FE-5.2 | Like i pass | 1 | FE-5.1, BE-5.2 | Przyciski wołają API. |
| FE-5.3 | Filtry Meet | 1 | FE-5.1, BE-5.3 | Karty się zmieniają. |
| FE-5.4 | Match otwiera czat | 1 | BE-5.4, FE-3.2 | Użytkownik w nowym wątku. |
| FE-5.5 | Lista przewodnika | 1 | BE-5.8 | Ekran 07. Student nie dodaje miejsca. |
| FE-5.6 | Strona miejsca | 1 | FE-5.5 | Są szczegóły. |
| FE-5.7 | Opinia o akademiku | 1 | BE-5.9, FE-5.6 | Opinia się zapisuje. |
| FE-5.8 | Mapa przewodnika | 1 | BE-5.10 | Piny = opublikowane miejsca. |
| FE-5.9 | Pusty i zablokowany Meet | 1 | BE-5.5 | Jasny komunikat, gdy zdjęcie nie ok. |

**Suma: 9d**

---

## Sprint 6 — Moderatorzy i języki

**Nie budować TOTP, dopóki BE-6.1 tego nie każe.**

| ID | Zadanie | d | Zależy | Gotowe, gdy |
|----|---------|---|--------|-------------|
| FE-6.1 | Logowanie moderatora | 1 | BE-6.1, BE-6.2 | Ekran 08 jak w auth-doku, nie tylko szkic. |
| FE-6.2 | Kolejka zgłoszeń | 1 | BE-6.4 | Moderator widzi listę. |
| FE-6.3 | Zatwierdzić albo odrzucić | 1 | FE-6.2, BE-6.5 | Akcje idą do API. |
| FE-6.4 | Ostrzec, zawiesić, ban | 1 | BE-6.7 | Kontrolki na użytkowniku. |
| FE-6.5 | Tekst polski | 0.5 | FE-1.5 | pl pokrywa aplikację. |
| FE-6.6 | Tekst ukraiński | 0.5 | FE-1.5 | uk pokrywa. |
| FE-6.7 | Tekst rosyjski | 0.5 | FE-1.5 | ru pokrywa. |
| FE-6.8 | Sprawdzenie angielskiego | 0.5 | FE-1.5 | en bez zbędnych kluczy. |
| FE-6.9 | Usunąć konto z profilu | 1 | BE-2.10 | Flow działa. |
| FE-6.10 | Przyciski i tagi jak w kicie | 1 | FE-1.1 | Główne ekrany się zgadzają. |

**Suma: 8.5d**

---

*Dokument: TASKS web (PL) · Uniezz · v1.1*
