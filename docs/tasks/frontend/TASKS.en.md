# Uniezz — Web tasks

Vite + React. Left sidebar. Talks only to the Go API. Screens: [design](../../design/README.md).

Estimates: **0.5d or 1d**. Sprint = two weeks, about 10d.

---

## Sprint 1 — Shell and sign-in

**Goal:** A guest sees Uniezz, picks a university, and can sign in.

**Not this sprint:** Feed content, chat, Meet.

| ID | Task | d | Depends | Done when |
|----|------|---|---------|-----------|
| FE-1.1 | Colours and type from the design | 1 | — | Brand colours and fonts are in the app. |
| FE-1.2 | Spacing and round corners | 0.5 | FE-1.1 | Buttons and cards use the same radius. |
| FE-1.3 | Left sidebar | 1 | FE-1.1 | Nav items match the design. |
| FE-1.4 | Top bar | 1 | FE-1.3 | Avatar and title show. |
| FE-1.5 | Language files (pl, uk, ru, en) | 1 | — | One string can switch language. |
| FE-1.6 | Sign-in page: pick a university | 1 | BE-1.6 | University list is on screen 01. |
| FE-1.7 | Start USOS or Entra from the button | 1 | FE-1.6 | Button calls `/auth/start`. |
| FE-1.8 | Come back from the university | 1 | BE-1.4, FE-1.7 | User is signed in. Cookie is set. |
| FE-1.9 | Email code page | 1 | BE-1.11, FE-1.6 | User can type 6 digits (screen 02). |
| FE-1.10 | Resend and errors on the code page | 0.5 | FE-1.9 | Wrong code and resend are clear. |
| FE-1.11 | Send guests to sign-in; log out | 1 | BE-1.4 | Closed pages redirect. Log out clears the session. |

**Sprint total: 10d**

---

## Sprint 2 — Feed and profile

**Goal:** A student can read Feed, post, and open their profile.

**Not this sprint:** Chat, Meet, Guide.

| ID | Task | d | Depends | Done when |
|----|------|---|---------|-----------|
| FE-2.1 | Feed list and post card | 1 | BE-2.6, FE-1.4 | Screen 03 shows posts. |
| FE-2.2 | Feed filters | 1 | FE-2.1, BE-2.8 | University, type, date change the list. |
| FE-2.3 | Comments on a post | 1 | FE-2.1, BE-2.7 | User can read and write a comment. |
| FE-2.4 | New post form | 1 | BE-2.5 | User can pick type and text. |
| FE-2.5 | Image on a new post | 1 | BE-2.4, FE-2.4 | Image uploads through the API. |
| FE-2.6 | Profile page from the avatar | 1 | BE-2.1 | Name, faculty, year, interests show. |
| FE-2.7 | Edit profile and privacy | 1 | FE-2.6 | Saves through the API. |
| FE-2.8 | Trust badge on the profile | 0.5 | FE-2.6 | Badge matches verified / directory / domain. |
| FE-2.9 | Saved items from the profile | 1 | FE-2.1 | No extra tab. Open from avatar. |
| FE-2.10 | Report on a post or comment | 1 | BE-2.9 | Report control is on the card. |

**Sprint total: 9.5d**

---

## Sprint 3 — Chat

**Goal:** A student can open Chat, talk one-to-one, and use a group.

**Not this sprint:** Meet match button (wire in Sprint 5).

| ID | Task | d | Depends | Done when |
|----|------|---|---------|-----------|
| FE-3.1 | Chat page and thread list | 1 | BE-3.1, FE-1.4 | Screen 05 lists threads. |
| FE-3.2 | One-to-one conversation | 1 | FE-3.1, BE-3.2 | Messages show in order. |
| FE-3.3 | Send a message | 1 | FE-3.2 | Message appears in the list. |
| FE-3.4 | Group list | 1 | BE-3.3, FE-3.1 | Groups show next to DMs. |
| FE-3.5 | Open a group and send | 1 | FE-3.4, BE-3.4 | Group chat works. |
| FE-3.6 | Live new messages | 1 | BE-3.5, FE-3.2 | No refresh needed. |
| FE-3.7 | Attach a file | 1 | BE-3.7 | File shows in the thread. |
| FE-3.8 | Composer (text + send) | 0.5 | FE-3.3 | Layout matches the design. |
| FE-3.9 | Unread mark in the sidebar | 0.5 | BE-3.9, FE-3.1 | Badge shows if there is unread. |

**Sprint total: 8.5d**

---

## Sprint 4 — Study

**Goal:** A student can browse exams and open a course.

**Not this sprint:** Meet, Guide.

| ID | Task | d | Depends | Done when |
|----|------|---|---------|-----------|
| FE-4.1 | Study list page | 1 | BE-4.2 | Screen 04 lists files. |
| FE-4.2 | Search exams | 1 | FE-4.1, BE-4.3 | Search box filters the list. |
| FE-4.3 | Filters on Study | 1 | BE-4.7 | University and faculty work. |
| FE-4.4 | Course page | 1 | BE-4.4 | Description shows. |
| FE-4.5 | Rate a course | 1 | FE-4.4, BE-4.5 | Stars save. |
| FE-4.6 | Comment on a course | 1 | FE-4.4, BE-4.6 | Comment shows. |
| FE-4.7 | Upload an exam file | 1 | BE-4.1 | Upload uses the API, not S3 keys. |
| FE-4.8 | Report a file or course | 0.5 | BE-4.9 | Report control is on the page. |

**Sprint total: 7.5d**

---

## Sprint 5 — Meet and Guide

**Goal:** A student can swipe, open chat on a match, read Guide, and review a dorm.

**Not this sprint:** Adding places (staff only, no student form).

| ID | Task | d | Depends | Done when |
|----|------|---|---------|-----------|
| FE-5.1 | Meet cards | 1 | BE-5.1 | Screen 06 shows a card. |
| FE-5.2 | Like and pass | 1 | FE-5.1, BE-5.2 | Buttons call the API. |
| FE-5.3 | Meet filters | 1 | FE-5.1, BE-5.3 | Filters change cards. |
| FE-5.4 | Match opens Chat | 1 | BE-5.4, FE-3.2 | User lands in the new thread. |
| FE-5.5 | Guide list (shops, hangouts, dorms, stores) | 1 | BE-5.8 | Screen 07 lists places. Students cannot add one. |
| FE-5.6 | Place page | 1 | FE-5.5 | Details show. |
| FE-5.7 | Dorm review form | 1 | BE-5.9, FE-5.6 | Review saves. |
| FE-5.8 | Guide map | 1 | BE-5.10 | Pins match published places. |
| FE-5.9 | Empty and blocked Meet states | 1 | BE-5.5 | Clear message if photo is not approved. |

**Sprint total: 9d**

---

## Sprint 6 — Moderators and languages

**Goal:** Moderators can use the panel. All screens have pl / uk / ru / en.

**Do not build TOTP until BE-6.1 says so.**

| ID | Task | d | Depends | Done when |
|----|------|---|---------|-----------|
| FE-6.1 | Moderator sign-in page | 1 | BE-6.1, BE-6.2 | Screen 08 matches the auth doc, not only the sketch. |
| FE-6.2 | Report queue list | 1 | BE-6.4 | Moderator sees reports. |
| FE-6.3 | Approve or reject | 1 | FE-6.2, BE-6.5 | Actions call the API. |
| FE-6.4 | Warn, suspend, ban | 1 | BE-6.7 | Controls are on the user. |
| FE-6.5 | Polish copy | 0.5 | FE-1.5 | pl strings cover the app. |
| FE-6.6 | Ukrainian copy | 0.5 | FE-1.5 | uk strings cover the app. |
| FE-6.7 | Russian copy | 0.5 | FE-1.5 | ru strings cover the app. |
| FE-6.8 | English copy check | 0.5 | FE-1.5 | en has no leftover keys. |
| FE-6.9 | Delete account from profile | 1 | BE-2.10 | Flow works end to end. |
| FE-6.10 | Buttons and tags match the kit | 1 | FE-1.1 | Visual pass on main screens. |

**Sprint total: 8.5d**

---

*Document: TASKS web (EN) · Uniezz · v1.1*
