#!/usr/bin/env node
// Extracts the hero scroll video into a compressed JPEG frame sequence for
// the ScrollCanvas component and writes the resulting frame count to
// src/data/hero-frames.json so the component knows how many frames exist.
// (JPEG instead of the WebP called for in CLAUDE.md: the local ffmpeg build
// has no libwebp encoder. Swap -c:v mjpeg for -c:v libwebp below if a build
// with WebP support is available.)
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(import.meta.url), "../..");
const videoPath = path.join(root, "src/assets/hero/hero_scroll.mp4");
const framesDir = path.join(root, "public/frames");
const dataFile = path.join(root, "src/data/hero-frames.json");

if (!existsSync(videoPath)) {
  console.error(`Hero video not found at ${videoPath}`);
  process.exit(1);
}

rmSync(framesDir, { recursive: true, force: true });
mkdirSync(framesDir, { recursive: true });

execFileSync(
  "ffmpeg",
  [
    "-y",
    "-i", videoPath,
    "-vsync", "0",
    "-c:v", "mjpeg",
    "-qscale:v", "4",
    path.join(framesDir, "frame_%03d.jpg"),
  ],
  { stdio: "inherit" }
);

const frameCount = readdirSync(framesDir).filter((f) => f.endsWith(".jpg")).length;

writeFileSync(dataFile, JSON.stringify({ frameCount, pattern: "/frames/frame_%03d.jpg" }, null, 2) + "\n");

console.log(`✓ Extracted ${frameCount} frames to ${framesDir}`);
