# Uniezz

Monorepo for the Uniezz student platform.

## Apps

- `apps/frontend` — Next.js (App Router, static export)
- `apps/mobile` — Expo / React Native
- `apps/backend` — API (Go; the current Express stub will be replaced)

## Stack

| Layer    | Choice                                       |
| -------- | -------------------------------------------- |
| API      | Go — own backend                             |
| Media    | AWS S3                                       |
| Auth     | USOS, Entra ID, email OTP — see `docs/auth/` |
| Database | TBD                                          |

## Development

```bash
bun install
bun run dev
```

Frontend runs at http://localhost:7711. Backend runs at http://localhost:3000.

## Scripts

| Command             | Description                |
| ------------------- | -------------------------- |
| `bun run dev`       | Start all apps in dev mode |
| `bun run build`     | Build all apps             |
| `bun run typecheck` | Type-check all apps        |
| `bun run lint`      | Lint all apps              |
