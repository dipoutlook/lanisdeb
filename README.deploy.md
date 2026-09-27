# Production deployment guide

This project is configured for a self-hosted Ubuntu VPS using Docker Compose, Nginx, and Postgres.

## 1. Prerequisites

- Ubuntu VPS with Docker and Docker Compose installed
- Domain name pointing to the server
- SSH access for deployment
- A GitHub repo with repository secrets for the deployment workflow

## 2. Configure secrets

Copy [.env.production.example](.env.production.example) to a real `.env.production` file on the VPS and fill in production values.

Example:

```bash
cp .env.production.example .env.production
```

## 3. Deploy with Docker Compose

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## 4. Verify services

```bash
docker compose -f docker-compose.prod.yml ps
curl http://localhost/health
```

## 5. Reverse proxy / TLS

Use Nginx or a load balancer in front of the frontend container. If you want HTTPS, configure a TLS termination layer and point your domain to the VPS.

## 6. CI/CD

The GitHub Actions workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) deploys on pushes to `main` using SSH secrets:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_PRIVATE_KEY`

## 7. Notes

- Keep all production secrets out of version control.
- Do not commit real `.env.production` values.
- The backend and AI provider keys must remain server-side only.
