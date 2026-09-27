<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1dWBFmMy4yKTqCFCzRl0n5dJ92fp8B6hX

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set `VITE_API_URL` in [.env.local](.env.local) (example: `http://localhost:4000`)
3. Run the app:
   `npm run dev`

## Backend (Node + PostgreSQL)

The backend lives in `server/` and provides persistent data for admin actions, orders, and branding.

1. Create a database and set `DATABASE_URL` in `server/.env` (use `server/.env.example` as a template).
2. Set `ADMIN_PASSWORD` and `ADMIN_JWT_SECRET` in `server/.env`.
3. Install backend dependencies:
   `cd server && npm install`
4. Generate Prisma client and run migrations:
   `npx prisma migrate dev`
5. Seed default data:
   `npm run seed`
6. Start the API server:
   `npm run dev`
