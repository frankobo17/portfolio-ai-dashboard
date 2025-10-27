# Portfolio Dashboard with AI Assistant

## Features

- User-friendly portfolio dashboard with live updates
- Admin management dashboard (role-based JWT access)
- AI assistant (mock LLM, easily swappable)
- Real-time updates (WebSocket)
- Secure fund management and audit logs
- Accessible, responsive React/Tailwind UI

## Tech Stack

- **Frontend:** React (TypeScript), Tailwind CSS
- **Backend:** Node.js (TypeScript, Express), JWT, WebSocket
- **Database:** PostgreSQL (or SQLite with config)
- **AI Layer:** Modular LLM adapter (mock by default)
- **Testing:** Jest, Cypress/Playwright outline
- **Dockerized** for easy local development

## Quickstart

```bash
git clone https://github.com/your-org/portfolio-ai-dashboard.git
cd portfolio-ai-dashboard
cp .env.example .env
docker-compose up --build
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:4000](http://localhost:4000)
- Postgres: [localhost:5432](localhost:5432)

## Admin Default Credentials

- Email: **admin@example.com**
- Password: **admin12345**

## Example AI Queries

- User: “What’s my current portfolio value?”
- User: “Show me my last 3 transactions.”
- Admin: “Add $200 to user with email john@example.com”
- User: “Show all deposits over $500 in the last month.”

## AI Adapter & Intent Mapping

See [`backend/src/ai/llmAdapter.ts`](backend/src/ai/llmAdapter.ts) and [`backend/src/ai/intentMapper.ts`](backend/src/ai/intentMapper.ts) for:
- Prompt templates
- Mock LLM responses
- How to swap to a real LLM API

## API Routes

- `/api/auth/login` — Authenticate (JWT, returns user/admin role)
- `/api/user/portfolio` — Get portfolio info (user)
- `/api/user/transactions` — Get user transactions
- `/api/admin/users` — List users (admin)
- `/api/admin/funds` — Add/adjust funds (admin, logs action)
- `/api/admin/logs` — Audit logs (admin, CSV export)
- `/api/ai/query` — AI Assistant endpoint (role-based actions)

## Accessibility

- Fully keyboard navigable, ARIA labels
- Dark/light mode toggle

## Testing

- Backend: `npm run test` (Jest)
- E2E: Cypress/Playwright outline included

## Seed Data

Initial users, portfolios, and audit logs are seeded on first run (see [`backend/prisma/seed.ts`](backend/prisma/seed.ts)).

---