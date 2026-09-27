# WEBSITE & AI ADMIN DASHBOARD (Admin)

## 1. WEBSITE & ADMIN DASHBOARD ANALYSIS

### Current State
- React + TypeScript + Vite frontend
- Context-based state (Cart, Auth, Branding)
- Inbuilt Admin Dashboard (products, categories, orders, summary)
- Mock backend via PHP + JSON files

### Gaps & Recommendations
**Core Commerce**
- Inventory management (stock, thresholds, backorders)
- Order lifecycle state machine
- Customer segmentation & flags

**Admin & Ops**
- Role-based admin permissions
- Approval queue (refunds, risky actions)
- Audit & activity logs

**WooCommerce Sync**
- External ID mapping (wc_product_id, wc_order_id)
- One-way + two-way sync design
- Status mapping (Woo → Internal)

---

## 2. DATABASE STACK PROPOSAL

### Recommended Stack
- PostgreSQL
- Node.js (Express/Fastify)
- Prisma ORM

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

### AI Integration Principle
- AI never touches DB directly
- AI writes recommendations only
- Admin approvals gate mutations

---

## 3. DEVELOPMENT TASK LIST (AI-SAFE)

### Phase A – Database
1. Design Prisma schema
2. Generate migrations
3. Seed sample data

### Phase B – Backend APIs
4. Product & order read APIs
5. Admin mutation APIs
6. Admin auth & roles

### Phase C – Replace Mock APIs
7. Remove PHP/JSON mocks
8. Wire frontend to backend
9. Validate all pages

### Phase D – Admin Expansion
10. Inventory UI
11. Approval queue UI
12. Audit log UI
13. Role enforcement

### Phase E – WooCommerce Sync
14. Store Woo credentials
15. Product sync
16. Order sync

### Phase F – AI Readiness
17. Context builder service
18. Approval-based AI recommendations
19. Admin-visible AI suggestions

### Phase G – Hardening
20. Validation
21. Rate limiting
22. Error logging
23. Environment configs
