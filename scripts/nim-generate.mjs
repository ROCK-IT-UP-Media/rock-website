#!/usr/bin/env node
// One-off helper: generate an image via the NVIDIA NIM FLUX.1-dev endpoint.
// Usage: node scripts/nim-generate.mjs --prompt "..." --out public/assets/x.jpg --width 1344 --height 768
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

function loadEnvKey() {
  const raw = readFileSync(new URL("../.env", import.meta.url), "utf-8");
  const match = raw.match(/^NVIDIA_API_KEY=(.+)$/m);
  if (!match) throw new Error("NVIDIA_API_KEY not found in .env");
  return match[1].trim().replace(/^["']|["']$/g, "");
}

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i += 2) {
    out[args[i].replace(/^--/, "")] = args[i + 1];
  }
  return out;
}

const { prompt, out, width = "1344", height = "768", steps = "30", seed } = parseArgs();
if (!prompt || !out) {
  console.error("Missing --prompt or --out");
  process.exit(1);
}

const apiKey = loadEnvKey();

const body = {
  prompt,
  width: Number(width),
  height: Number(height),
  steps: Number(steps),
  ...(seed ? { seed: Number(seed) } : {}),
};

const res = await fetch("https://ai.api.nvidia.com/v1/genai/black-forest-labs/flux.1-dev", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

if (!res.ok) {
  const text = await res.text();
  console.error(`NIM request failed: ${res.status}\n${text}`);
  process.exit(1);
}

const data = await res.json();
const artifact = data.artifacts?.[0];
if (!artifact?.base64) {
  console.error("No image returned", JSON.stringify(data).slice(0, 500));
  process.exit(1);
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, Buffer.from(artifact.base64, "base64"));
console.log(`✓ ${out} (seed ${artifact.seed}, ${artifact.finishReason})`);
