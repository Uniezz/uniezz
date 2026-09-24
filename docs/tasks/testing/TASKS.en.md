# Uniezz — Testing tasks

Tests follow the same sprints. Clients only talk to the Go API.

Estimates: **0.5d or 1d**. Sprint = two weeks, about 10d.

**Launch tests that must pass:** UMCS sign-in and **one** Entra university sign-in.

---

## Sprint 1 — Test setup and sign-in

**Goal:** We can run API, web, and phone tests. Sign-in paths are covered.

| ID      | Task                              | d   | Depends | Done when                                     |
| ------- | --------------------------------- | --- | ------- | --------------------------------------------- |
| QA-1.1  | API test setup                    | 1   | BE-1.1  | One Go test runs in CI or local.              |
| QA-1.2  | Web test setup                    | 1   | FE-1.1  | One browser test opens the app.               |
| QA-1.3  | Phone test setup                  | 1   | MO-1.1  | One flow can start (Maestro, Detox, or Expo). |
| QA-1.4  | Health and auth contract          | 1   | BE-1.6  | `/health` and `/auth/*` shapes are checked.   |
| QA-1.5  | USOS happy path (fake university) | 1   | BE-1.8  | Sign-in succeeds.                             |
| QA-1.6  | USOS bad signature fails          | 0.5 | BE-1.8  | Bad HMAC is rejected.                         |
| QA-1.7  | Unknown Entra tenant is rejected  | 1   | BE-1.9  | Unknown tid cannot sign in.                   |
| QA-1.8  | Entra staff is rejected           | 0.5 | BE-1.10 | Staff does not get a student session.         |
| QA-1.9  | Email code rules                  | 1   | BE-1.12 | Limits and burnt code are tested.             |
| QA-1.10 | Web sign-in smoke                 | 1   | FE-1.7  | University → USOS or Entra or code.           |
| QA-1.11 | Phone sign-in smoke               | 1   | MO-1.7  | Same as web on the device.                    |

**Sprint total: 10.5d**

---

## Sprint 2 — Profile, files, Feed

**Goal:** Profile, uploads, and Feed are safe to ship to testers.

| ID      | Task                       | d   | Depends        | Done when                       |
| ------- | -------------------------- | --- | -------------- | ------------------------------- |
| QA-2.1  | Profile save               | 1   | BE-2.1         | Text fields persist.            |
| QA-2.2  | Trust badge on “who am I”  | 0.5 | BE-1.13        | Badge is correct.               |
| QA-2.3  | Guest cannot upload        | 1   | BE-2.4         | No session → upload fails.      |
| QA-2.4  | Old upload link dies       | 1   | BE-2.4         | Expired link cannot write.      |
| QA-2.5  | Feed filters               | 1   | BE-2.8         | University, type, date work.    |
| QA-2.6  | Comments                   | 1   | BE-2.7         | Create and list work.           |
| QA-2.7  | Report creates a queue row | 1   | BE-2.9         | Row is there.                   |
| QA-2.8  | Delete account             | 1   | BE-2.10        | Profile and session are gone.   |
| QA-2.9  | Web Feed and profile       | 1   | FE-2.1, MO-2.1 | Main path works in the browser. |
| QA-2.10 | Phone Feed and profile     | 1   | MO-2.1         | Main path works on the phone.   |

**Sprint total: 9.5d**

---

## Sprint 3 — Chat

**Goal:** Nobody can read a chat that is not theirs. Live messages work.

| ID     | Task                         | d   | Depends | Done when                        |
| ------ | ---------------------------- | --- | ------- | -------------------------------- |
| QA-3.1 | Send and receive DM          | 1   | BE-3.2  | Two users see the same history.  |
| QA-3.2 | Stranger cannot read a DM    | 1   | BE-3.2  | Third user gets an error.        |
| QA-3.3 | Group members only           | 1   | BE-3.4  | Non-member cannot read.          |
| QA-3.4 | Live message without refresh | 1   | BE-3.5  | Second client updates.           |
| QA-3.5 | File type and size           | 1   | BE-3.8  | Bad files fail.                  |
| QA-3.6 | Unread flag                  | 1   | BE-3.9  | Flag turns on for a new message. |
| QA-3.7 | Web chat path                | 1   | FE-3.2  | Send in the browser.             |
| QA-3.8 | Phone chat path              | 1   | MO-3.2  | Send on the phone.               |
| QA-3.9 | Reconnect after drop         | 1   | BE-3.6  | Messages continue.               |

**Sprint total: 9d**

---

## Sprint 4 — Study

**Goal:** Exams and ratings behave. One rating per person per course.

| ID     | Task                  | d   | Depends | Done when                                  |
| ------ | --------------------- | --- | ------- | ------------------------------------------ |
| QA-4.1 | Upload and list files | 1   | BE-4.1  | File appears in the list.                  |
| QA-4.2 | Search                | 1   | BE-4.3  | Hits match the query.                      |
| QA-4.3 | One rating per user   | 1   | BE-4.5  | Second rating updates, does not duplicate. |
| QA-4.4 | Course comments       | 1   | BE-4.6  | Comment shows.                             |
| QA-4.5 | Filters               | 1   | BE-4.7  | University and faculty work.               |
| QA-4.6 | Report a file         | 1   | BE-4.9  | Same queue as Feed.                        |
| QA-4.7 | Web Study path        | 1   | FE-4.1  | List and course open.                      |
| QA-4.8 | Phone Study path      | 1   | MO-4.1  | List and course open.                      |

**Sprint total: 8d**

---

## Sprint 5 — Meet and Guide

**Goal:** No match without two likes. Students cannot add Guide places. Staff can.

| ID      | Task                          | d   | Depends        | Done when                        |
| ------- | ----------------------------- | --- | -------------- | -------------------------------- |
| QA-5.1  | Like and pass                 | 1   | BE-5.2         | Pass never matches.              |
| QA-5.2  | Filters                       | 1   | BE-5.3         | Filters change the stack.        |
| QA-5.3  | Two likes open one chat       | 1   | BE-5.4         | One thread, not two.             |
| QA-5.4  | Meet blocked without photo    | 1   | BE-5.5         | API refuses the card list.       |
| QA-5.5  | Student cannot create a place | 1   | BE-5.8         | Student write is rejected.       |
| QA-5.6  | Staff can publish a place     | 1   | BE-5.7         | Place shows in the student list. |
| QA-5.7  | Dorm review                   | 1   | BE-5.9         | Review is stored.                |
| QA-5.8  | Map pins match places         | 1   | BE-5.10        | Hidden place has no pin.         |
| QA-5.9  | Web Meet and Guide            | 1   | FE-5.1, FE-5.5 | Main path in the browser.        |
| QA-5.10 | Phone Meet and Guide          | 1   | MO-5.1, MO-5.5 | Main path on the phone.          |

**Sprint total: 10d**

---

## Sprint 6 — Moderators and launch checks

**Goal:** Tests match the real moderator rules. PESEL never leaks. Students cannot open moderator pages.

| ID      | Task                                    | d   | Depends        | Done when                              |
| ------- | --------------------------------------- | --- | -------------- | -------------------------------------- |
| QA-6.1  | Tests for the sign-in we actually chose | 1   | BE-6.1, BE-6.2 | No TOTP tests if the doc dropped TOTP. |
| QA-6.2  | Approve and reject                      | 1   | BE-6.5         | Item leaves the queue.                 |
| QA-6.3  | Ban sticks on next login                | 1   | BE-6.8         | Banned user cannot sign in.            |
| QA-6.4  | PESEL never stored or logged            | 1   | BE-1.8         | Fake USOS personal data is dropped.    |
| QA-6.5  | Language switch web                     | 0.5 | FE-6.5         | pl/uk/ru/en switch.                    |
| QA-6.6  | Language switch phone                   | 0.5 | MO-6.4         | pl/uk/ru/en switch.                    |
| QA-6.7  | Sprint 1–2 recheck                      | 1   | —              | Sign-in and Feed still pass.           |
| QA-6.8  | Sprint 3–4 recheck                      | 1   | —              | Chat and Study still pass.             |
| QA-6.9  | Sprint 5 recheck                        | 1   | —              | Meet and Guide still pass.             |
| QA-6.10 | Student cannot open moderator pages     | 1   | BE-6.2, FE-6.1 | Web and API refuse.                    |

**Sprint total: 9d**

---

_Document: TASKS testing (EN) · Uniezz · v1.1_
