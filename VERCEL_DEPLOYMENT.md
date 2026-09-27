# Vercel deployment guide

This repo is prepared for a Vercel frontend deployment, while the API remains on a managed backend service such as Railway, Render, or another Node host that supports the Fastify app in `server/`.

## Requirements

- A Vercel account
- A managed PostgreSQL database (for example Neon or Supabase)
- A managed Node backend host for the Fastify API

## Configure the frontend

In the Vercel project settings, add:

```env
VITE_API_URL=https://your-managed-api.example.com
```

## Configure the backend

Deploy the Fastify app from the `server/` directory to a managed Node host and set:

```env
PORT=4000
CORS_ORIGIN=https://your-vercel-app.vercel.app
DATABASE_URL=postgresql://...
ADMIN_PASSWORD=...
ADMIN_JWT_SECRET=...
AI_PROVIDER=openai
AI_API_KEY=...
AI_MODEL=gpt-4o-mini
```

## Deploy

1. Import the repo into Vercel.
2. Set the root project as the app root.
3. Use the default Vite build.
4. Add the `VITE_API_URL` variable.
5. Deploy the backend separately to the managed host.

## Notes

- This project is not a pure static site; the API is still required.
- A shared cPanel host is not the best fit for this architecture.
- Cloudflare can be used for DNS/CDN only, but the app still needs a managed runtime for the API and database.
