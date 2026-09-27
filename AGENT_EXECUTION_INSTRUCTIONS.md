# AGENT_EXECUTION_INSTRUCTIONS.md

## MASTER PROMPT (COPY & PASTE FOR THE AGENT)

You are an AI engineering agent working on a **production-grade e-commerce system**.

This is NOT a demo, NOT a prototype, and NOT a chatbot project.

You must follow these instructions exactly. If anything conflicts with these rules, you must STOP and ask for clarification.

---

## SYSTEM CONTEXT (LOCKED)

- Frontend is complete and must not be reworked.
- Backend exists and is functional (Node.js + Fastify + Prisma).
- Admin dashboard is inbuilt and authoritative.
- AI exists only to reason and propose, never to execute.
- Orders, inventory, and payments are deterministic system actions.
- Automation (n8n, WhatsApp) is NOT yet enabled.

---

## ABSOLUTE ARCHITECTURAL RULES (NON-NEGOTIABLE)

### AI BOUNDARY
- AI may generate text, summaries, and proposals ONLY.
- AI must NEVER:
  - write to the database
  - create or mutate orders
  - update inventory
  - confirm payments
  - bypass admin approval
- AI must be stateless at backend level.

### PAYMENT SAFETY
- Order payment state must NEVER be set by frontend input or AI.
- Orders default to PENDING.
- Payment confirmation must come only from payment provider webhook or explicit admin action.

### Orders & Payments

Order Creation Policy — Hybrid Model

The platform operates a hybrid checkout model:

• Orders originating from human checkout may be created instantly via public checkout endpoints.
• Orders originating from AI-assisted flows must be submitted as proposals and require admin approval before creation.

AI systems are strictly prohibited from invoking public checkout endpoints.

All orders must be explicitly tagged with an origin field (HUMAN or AI) at creation time.

Additional policy rules (e.g., price thresholds or product categories) may require admin approval regardless of origin.

This removes ambiguity permanently.

### ADMIN AUTHORITY
- Admins are the final authority.
- All risky actions are approval-gated.
- Admin routes must be JWT-protected and namespaced under /admin/*.

### ACCESS CONTROL
- No public access to sensitive resources.
- Orders must not be publicly enumerable.
- WhatsApp integration exists conceptually but is disabled for now.

---

## EXECUTION ORDER (STRICT)

You must follow phases in order. Do NOT jump ahead.

---

# STEP 1.5 — BACKEND SAFETY HARDENING (MANDATORY)

## 1.5.1 Lock Down Orders Access

FORBIDDEN:
- Public GET /orders
- Public POST /orders (generic list/create)
- AI-assisted calls to /orders/checkout

REQUIRED:

Customer order lookup:
POST /orders/lookup
Payload:
{
  "email": "customer@email.com",
  "orderReference": "ORD-XXXXX"
}

Rules:
- Return only the matching order
- No list access
- No cross-customer access

Human checkout (public):
POST /orders/checkout
Rules:
- origin = HUMAN only
- Reject aiFlow/origin=AI headers or body flags
- Validate totals server-side
- Require payment confirmation for non-POD

Admin order access:
GET    /admin/orders
POST   /admin/orders
PATCH  /admin/orders/:id/status

All admin routes must be under /admin/* and JWT-protected.

---

## 1.5.2 Remove AI → Database Writes (CRITICAL)

FORBIDDEN:
- Any Prisma writes inside chat.ts
- Any ChatSession or ChatMessage persistence

REQUIRED:
- chat.ts must be stateless
- Flow:
  1. Validate user
  2. Build read-only context
  3. Call AI for text
  4. Return response

All context logic must live in aiContext.service.ts.

---

## 1.5.3 Admin Route Namespacing

All admin routes must live under:
- /admin/products
- /admin/categories
- /admin/orders
- /admin/branding

Business logic must remain unchanged.

---

## STEP 1.5 ACCEPTANCE CHECKLIST

ALL must pass before proceeding:
- No public /orders endpoint beyond /orders/checkout (human-only)
- POST /orders/lookup works
- All admin routes under /admin/*
- chat.ts performs zero Prisma writes
- AI is text-only
- Orders default to PENDING
- Backend + frontend still work

---

# STEP 2 — PRISMA MIGRATIONS & SEED

Proceed only after STEP 1.5 is complete.

## 2.1 Environment Setup

Create server/.env from .env.example

Minimum:
PORT=4000
DATABASE_URL=postgresql://user:password@localhost:5432/lanisdeb
ADMIN_JWT_SECRET=strong-secret

AI keys are NOT required yet.

## 2.2 Install Dependencies

From server/:
npm install

## 2.3 Run Migration (Safe Mode)

npx prisma migrate dev --name init_core_schema

- Review SQL
- Do NOT reset DB if prompted
- If reset is required, STOP

## 2.4 Seed Database

npx prisma db seed

Expected:
- Super admin user
- Sample products
- Inventory records
- Sample customer

## 2.5 Start Backend

npm run dev

---

## STEP 2 ACCEPTANCE CHECKLIST

- Backend starts cleanly
- Admin login works
- Products load
- Orders lookup works
- AI chat responds (text-only)
- No unauthorized access paths

---

## DO NOT IMPLEMENT NEXT STEPS YET

Future steps (NOT NOW):
- n8n orchestration
- Website AI chat UI
- WhatsApp integration

Only proceed when explicitly instructed.

---

## FINAL RULE

If unsure at any point:
- STOP
- Explain the uncertainty
- Ask for approval

Silent assumptions are forbidden.
