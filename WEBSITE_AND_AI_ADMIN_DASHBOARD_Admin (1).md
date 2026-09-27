                                    # WEBSITE & AI ADMIN DASHBOARD (Admin)

                                    ## SYSTEM OVERVIEW (END‑TO‑END)

                                    This project is a **production‑grade AI‑augmented e‑commerce platform**, not a chatbot or demo.

                                    ### Core Principles
                                    - Frontend is complete and must not be reworked.
                                    - Backend is authoritative source of truth.
                                    - **AI Agent reasons and recommends only**.
                                    - **n8n is the orchestration and execution engine**.
                                    - **WhatsApp Business API is the primary customer channel**.
                                    - Admin dashboard is **inbuilt** and the final authority.
                                    - All risky actions are approval‑gated.

                                    ---

                                    ## ARCHITECTURE LAYERS

                                    ### 1. Frontend
                                    - React + TypeScript + Vite
                                    - Customer shop, cart, checkout
                                    - Embedded Admin Dashboard

                                    ### 2. Backend
                                    - Node.js (Express/Fastify)
                                    - PostgreSQL + Prisma
                                    - Store‑scoped APIs
                                    - WooCommerce‑compatible schema

                                    ### 3. Orchestration (n8n)
                                    - Event intake (WhatsApp, admin)
                                    - Context assembly
                                    - AI invocation
                                    - Action dispatch
                                    - Approval gates
                                    - Failure handling & logging

                                    ### 4. AI Agent
                                    - Intent classification
                                    - Confidence scoring
                                    - Risk assessment
                                    - Action recommendation (never execution)

                                    ### 5. WhatsApp Business API
                                    - Inbound messages via webhook
                                    - Outbound messages via n8n only
                                    - Templates, buttons, session handling

                                    ---

                                    ## 1️⃣ WEBSITE & ADMIN DASHBOARD ANALYSIS

                                    ### Current Capabilities
                                    - Product browsing & checkout
                                    - Cart & order success flow
                                    - Admin: products, categories, orders
                                    - Mock backend via PHP + JSON

                                    ### Required Enhancements
                                    **Commerce**
                                    - Inventory tracking
                                    - Order state machine
                                    - Customer segmentation

                                    **Admin**
                                    - Role‑based access
                                    - Approval queue
                                    - Audit logs
                                    - AI recommendation visibility

                                    **WooCommerce Sync**
                                    - External IDs (wc_product_id, wc_order_id)
                                    - Product & order sync (Woo → App primary)

                                    ---

                                    ## 2️⃣ DATABASE STACK PROPOSAL

                                    ### Stack
                                    - PostgreSQL
                                    - Prisma ORM
                                    - Node.js backend

                                    ### Core Entities
                                    - Store
                                    - Product
                                    - Inventory
                                    - Order
                                    - OrderItem
                                    - Customer
                                    - AdminUser
                                    - Approval
                                    - AuditLog

                                    ### AI Data Rule
                                    - AI never touches DB
                                    - AI outputs stored as Approval records

                                    ---

                                    ## 3️⃣ DEVELOPMENT TASK LIST (AI‑EXECUTABLE)

                                    ### PHASE A — Database
                                    1. Prisma schema design
                                    2. Relations, indexes
                                    3. Migrations & seed

                                    ⛔ Approval required

                                    ### PHASE B — Backend APIs
                                    4. Read APIs (products, orders)
                                    5. Admin mutation APIs
                                    6. Auth & roles

                                    ⛔ Approval required

                                    ### PHASE C — Replace Mock APIs
                                    7. Remove PHP/JSON
                                    8. Wire frontend
                                    9. Validate flows

                                    ### PHASE D — Admin Expansion
                                    10. Inventory UI
                                    11. Approval queue
                                    12. Audit logs
                                    13. Role enforcement

                                    ⛔ Approval required

                                    ### PHASE E — WooCommerce Sync
                                    14. Store credentials
                                    15. Product sync
                                    16. Order sync

                                    ⛔ Approval required

                                    ### PHASE F — AI Integration (Read‑Only)
                                    17. AI context builder
                                    18. Recommendation storage
                                    19. Admin‑visible AI insights

                                    ❌ No automation

                                    ### PHASE G — Automation Readiness
                                    20. n8n workflows
                                    21. WhatsApp integration
                                    22. Failure handling
                                    23. Environment configs

                                    ---

                                    ## ORCHESTRATION CONTRACT (n8n)

                                    ### Core Workflows
                                    - WhatsApp Ingress
                                    - Context Assembly
                                    - AI Decision
                                    - Action Dispatch
                                    - Admin Approval
                                    - WhatsApp Response
                                    - Monitoring

                                    ### Failure Semantics
                                    - Timeouts
                                    - Limited retries
                                    - Rollbacks
                                    - Human escalation

                                    ---

                                    ## AI AGENT CONTRACT

                                    - Closed intent set
                                    - Confidence threshold
                                    - Risk levels
                                    - Strict JSON schema
                                    - Stop on uncertainty

                                    ---

                                    ## MULTI‑STORE MODEL

                                    - Contextual multi‑tenancy
                                    - Mandatory store_id
                                    - Per‑store policies
                                    - Admin store selector

                                    ---

                                    ## LAUNCH & OPERATIONS

                                    ### Soft Launch
                                    - Read‑only AI
                                    - Approval‑gated actions

                                    ### Expansion
                                    - Low‑risk automation
                                    - Trust scoring

                                    ### Incident Response
                                    - Kill‑switch via n8n
                                    - Human takeover

                                    ---

                                    This document is **authoritative**.
                                                                                                                                                                                                                                                    