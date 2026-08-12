CLAUDE.md - Projekt-Richtlinien & Automation (ROCK IT UP Media) – V5 (CI/CD & Docker Automated)
Tech-Stack & Standards (Immer Neueste Versionen)
Frontend: Astro (Immer neueste Version @latest / Hybrid Rendering für SSG & SSR)
React: @latest – Ausschließlich für interaktive Astro Islands (z. B. Slider, Formulare, 3D-Viewer)
Styling: Tailwind CSS v4 (tailwindcss@latest via @tailwindcss/vite, keine veraltete @astrojs/tailwind Integration)
Animationen: Framer Motion (framer-motion@latest mit Spring-Physics)
Hero-Animation: HTML5 Canvas WebP-Bildsequenz (Dynamic FPS Scroll-Steuerung via FFmpeg & NVIDIA NIM Endpoints)
Design-Standard: UI UX Pro Max (Obsidian-Farbpaletten, scharfe Kontraste, Micro-Interactions)
Hosting & Docker: Hostinger VPS (Nginx Proxy Manager, Docker-Bridge web-net)
CMS: Strapi Headless CMS (PostgreSQL-Datenbank via Hostinger Docker Stack)
GitHub & Repository Standards
GitHub Organisation: Alle Repositories MÜSSEN zwingend unter der Organisation ROCK-IT-UP-Media angelegt werden.
Commit Autor / Developer Handle: 0xb3n3
Developer Mail: christoph@rockitup.media
Default Branch: main
Repository Creation Command (via GitHub CLI):
gh repo create ROCK-IT-UP-Media/{project-name} --public --source=. --remote=origin --push


CI/CD Deployment & Docker Standard
Bei jedem /build-website Durchlauf MÜSSEN zwingend zwei zentrale Infrastruktur-Dateien im Projekt-Stammverzeichnis angelegt werden:
1. .github/workflows/deploy.yml (Automatische Deployment-Pipeline)
Reagiert auf push auf den main-Branch SOWIE auf repository_dispatch-Events von Strapi (für automatische Rebuilds bei Content-Änderungen):
name: Deploy Website to VPS

on:
  push:
    branches:
      - main
  repository_dispatch:
    types: [strapi-update]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v0.1.10
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USERNAME }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            mkdir -p /var/www/html/${{ github.event.repository.name }}
            cd /var/www/html/${{ github.event.repository.name }}
            git pull origin main || git clone https://github.com/ROCK-IT-UP-Media/${{ github.event.repository.name }}.git .
            docker compose up -d --build


2. docker-compose.yml (Docker-Container für web-net)
Stellt sicher, dass die Anwendung im gemeinsamen Docker-Netzwerk web-net läuft und für den Nginx Proxy Manager erreichbar ist:
version: '3.8'

services:
  web:
    container_name: ${{ github.event.repository.name }}
    image: nginx:alpine
    restart: always
    volumes:
      - .:/usr/share/nginx/html:ro
    networks:
      - web-net

networks:
  web-net:
    external: true


Claude Desktop App (Code-Tab) Regeln
Arbeitsbereich-Kontext: Arbeite immer direkt im geöffneten Projektordner. Verwende relative Pfade (./src/).
Visual Diff Validation: Präsentiere alle Code-Änderungen so, dass sie im grafischen Diff-Viewer von Claude Desktop sauber und zeilenweise nachvollziehbar sind.
Live App Preview: Nutze die integrierte Browser-Vorschau von Claude Desktop, um visuelle Anpassungen und CSS-Fehler direkt live zu validieren, bevor du Code speicherst.
Zustimmungs-Modus: Frage den Nutzer im Chat-Bereich um Bestätigung für Datei-Schreibzugriffe oder Terminal-Befehle, falls die App im halb-autonomen Modus läuft.
UI UX Pro Max Design-Richtlinien
Hintergründe: Obsidian-Schwarz (#050508 bis #0A0A0F), keine harten, reinen Schwarzwerte (#000000).
Akzentfarben & Glows: Nutzung von dezenten, glühenden Akzenten (z. B. Kupfer #D27D2D für VULKAN oder Neon-UVC-Blau #00E5FF).
Border & Divider: Ultradünne Linien mit minimaler Opazität (border-white/10 oder border-white/5).
Framer Motion Spring-Einstellungen:
const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1
};


Master-Skill Konfiguration
Befehle: /build-website ODER "website erstellen"
Sobald einer dieser Befehle im Chat eingegeben wird, führt Claude die nachfolgenden Pipeline-Schritte autonom nacheinander aus:
1. Abhängigkeiten & Initialisierung prüfen (Immer neueste Pakete)
Sollte der Ordner leer sein (nur CLAUDE.md und KUNDEN_INPUT.md vorhanden), führt Claude autonom folgende Terminal-Befehle aus:
# Astro & Plugins immer in neuester Version (--force verhindert Abbruch bei existierenden MD-Dateien)
npm create astro@latest . -- --template minimal --install --git --force
npm install @tailwindcss/vite@latest tailwindcss@latest
npm install @astrojs/react@latest react@latest react-dom@latest
npm install framer-motion@latest lucide-react@latest clsx@latest tailwind-merge@latest

# Git-Identität konfigurieren
git config user.name "0xb3n3"
git config user.email "christoph@rockitup.media"


Astro-Konfiguration (astro.config.mjs für Tailwind v4):
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});


Globale CSS-Datei (src/styles/global.css):
@import "tailwindcss";


2. Input-Analyse
Lies die Datei KUNDEN_INPUT.md. Extrahiere die Design-DNA (Branche, Farbideen, Slogans, Wordings, Tonalität) und erstelle ein internes Konzept für die UI UX Pro Max Umsetzung.
3. Hero-Video-Scroll-Pipeline (Canvas-Methode)
Führe autonom die Asset-Entscheidungskaskade im Ordner ./src/assets/hero/ aus:
Asset-Prüfung & NVIDIA NIM Cloud API:
Prüfe auf ./src/assets/hero/hero_scroll.mp4.
Falls nicht vorhanden: Prüfe auf ./src/assets/hero/start.jpg und ./src/assets/hero/ende.jpg.
Falls diese fehlen: Führe vollständige REST-Calls an NVIDIA NIM Endpoints (Authorization: Bearer NVIDIA_API_KEY) für SD3 Turbo/FLUX und CogVideo aus, um start.jpg, ende.jpg und hero_scroll.mp4 zu erzeugen.
Frame-Extraktion:
Führe ./scripts/generate-frames.js aus. Das Skript zerlegt das Video via FFmpeg in komprimierte WebP-Frames (/public/frames/frame_001.webp ...) und ermittelt die exakte Frame-Anzahl.
Canvas-Komponente (Retina-Ready):
Erstelle ./src/components/ScrollCanvas.astro mit stufenlosem requestAnimationFrame Canvas-Rendering, dynamischer Frame-Zählung und Retina-Display Unterstützung (window.devicePixelRatio).
4. Layout-Architektur
Erstelle src/layouts/Layout.astro mit dem globalen Obsidian-Farbthema und lade neueste Google Fonts (z. B. "Geist" oder "Plus Jakarta Sans") statisch.
5. Komponenten Sourcing (21st.dev)
Suche auf 21st.dev nach modernsten, minimalistischen React/Shadcn Komponenten (z. B. Bento Grid, Glowing Cards, Infinite-Scroll Logo Slider) und binde diese als Astro Islands ein.
6. Startseiten-Generierung & Infrastruktur-Dateien
Erstelle src/pages/index.astro inklusive:
Canvas Hero Sektion (Video-Scroll mit überlagertem Brand Slogan).
Problem/Lösungs-Abschnitt (Emotionales Storytelling).
Module / Baukastensystem (Interaktive React-Sektion).
Manufaktur & Werte (Vertrauensaufbau).
Premium Call to Action (CTA) Formular.
Zusätzlich automatisch erstellen:
.github/workflows/deploy.yml (Deployment-Pipeline mit repository_dispatch Trigger)
docker-compose.yml (Netzwerk-Konfiguration für web-net)
7. Asset-Generierung
Nutze den Nano-Banana-Skill im Terminal, um minimalistische SVGs und Icons im Ordner /public/assets zu erzeugen.
8. GitHub Push & Automation
Nach Fertigstellung des Builds führt Claude automatisch die Veröffentlichung unter der Organisation aus:
git add .
git commit -m "feat: initial release by 0xb3n3"
git branch -M main
gh repo create ROCK-IT-UP-Media/{project-folder-name} --public --source=. --remote=origin --push


9. 3-Phasen-Qualitätscheck (Die Agentenschleife)
Phase A: [Brand Guardian] (Prüft Texte & Verkaufspsychologie).
Phase B: [UI Designer] (Optimiere Spacing, Framer-Motion-Springs und Farbdynamik).
Phase C: [Frontend Developer] (Prüft Performance, eliminiert ungenutztes JS und sichert JS-Overhead auf statischen Seiten).
Custom AI Personas (agency-agents)
[Brand Guardian]: Zielgruppen-Fokus, psychologisches Wording, emotionaler Hook.
[UI Designer]: Farb-Harmonie, Framer-Motion-Physik, Mobile-First UX, Canvas-Perfektion.
[Frontend Developer]: Ultra-High-Speed, Lighthouse 100, fehlerfreie React-Islands.
