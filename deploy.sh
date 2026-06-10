#!/bin/bash
# Manual deploy script — run this ON the EC2 instance
# Usage: bash deploy.sh

set -e

REPO_DIR="/var/www/portfolio-repo"
SERVE_DIR="/var/www/portfolio"

echo "[1/4] Pulling latest code..."
cd "$REPO_DIR"
git pull origin main

echo "[2/4] Installing dependencies..."
npm ci

echo "[3/4] Building..."
npm run build

echo "[4/4] Copying dist to nginx serve dir..."
sudo rsync -a --delete dist/ "$SERVE_DIR/"

echo "Done. Reloading nginx..."
sudo systemctl reload nginx
echo "Deployed successfully."
