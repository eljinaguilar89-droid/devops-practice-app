# Runbook

## AppDown
**What it means:** The app container is not responding.
**Steps:**
1. Check container status: `docker compose ps`
2. Check logs: `docker compose logs app`
3. Restart: `docker compose restart app`
4. If still down, redeploy: `make deploy` (Step 5)

## HighErrorRate
**What it means:** More than 5% of requests are returning 5xx errors.
**Steps:**
1. Check app logs: `docker compose logs app`
2. Check recent deployments — did something just get pushed?
3. Rollback if needed: `make rollback IMAGE=<last good sha>`

## HighMemoryUsage
**What it means:** Node.js heap is above 80% for 5+ minutes.
**Steps:**
1. Check memory panel in Grafana dashboard
2. Restart app to free memory: `docker compose restart app`
3. Investigate memory leak in code if it keeps recurring