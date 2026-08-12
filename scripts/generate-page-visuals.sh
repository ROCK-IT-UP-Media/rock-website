#!/bin/bash
set -e
cd "$(dirname "$0")/.."

gen() {
  local out="$1"
  local prompt="$2"
  local w="${3:-1344}"
  local h="${4:-768}"
  echo "→ $out"
  node scripts/nim-generate.mjs --prompt "$prompt" --out "$out" --width "$w" --height "$h" --steps 28
}
# FLUX.1-dev on this NIM endpoint only accepts width/height in:
# 768, 832, 896, 960, 1024, 1088, 1152, 1216, 1280, 1344

gen "public/assets/modules/brand-dna-engine.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. An elegant DNA-helix-like double strand made of glowing light-blue glass ribbons (hex 54C3EA, 00F0FF) spirals gracefully through the frame, catching warm coral-orange glass highlights (hex FF5A36) at a few intersection points. Minimal, premium, Apple-keynote aesthetic, soft shadows on white floor, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/modules/web-architecture.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. A precise architectural grid of glowing electric-cyan glass beams (hex 00F0FF, 54C3EA) forms a sleek geometric structure like a blueprint come to life, sharp clean lines, subtle reflections on a white floor, minimal Apple-keynote product aesthetic, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/modules/social-pr-authority.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. Concentric rings of glowing coral-orange and light-blue light (hex FF5A36, 54C3EA) radiate outward from a central point like gentle broadcast waves, elegant glass material, soft shadows on white floor, premium Apple-keynote aesthetic, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/modules/funnel-engine.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. A graceful glowing funnel made of light-blue glass ribbons (hex 54C3EA) spirals down and converges into a single warm coral-orange point of light (hex FF5A36) at the bottom, elegant motion, soft shadows on white floor, premium Apple-keynote aesthetic, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/modules/workspace-integration.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. Several thin translucent glass panels glowing softly in light blue (hex 54C3EA) float and overlap in layered depth like app windows, soft frosted glass material, gentle reflections on white floor, premium Apple-keynote aesthetic, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/modules/engine-evolution-membership.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. An elegant infinite loop / mobius ring made of glowing light-blue and cyan glass (hex 54C3EA, 00F0FF) continuously refreshes itself, smooth glass material, soft shadows on white floor, premium Apple-keynote aesthetic, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/pages/about-founder.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. An abstract glowing globe made of fine light-blue glass line trails (hex 54C3EA, 00F0FF) with a few warm coral-orange location-pin points of light scattered across it, representing global remote travel, elegant minimal Apple-keynote aesthetic, soft shadows on white floor, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/pages/contact-blueprint.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. A soft glowing portal made of concentric light-blue glass rings (hex 54C3EA, 00F0FF) opens gently in the center of the frame, inviting and calm, one warm coral accent light (hex FF5A36) glowing at its core, premium Apple-keynote aesthetic, soft shadows on white floor, no text, no logos, no people, wide cinematic composition" 1344 768

gen "public/assets/pages/leistungen-banner.jpg" \
"Bright high-key studio 3D render, pure white background, soft daylight. Six sleek translucent glass blocks of varying heights glow softly in light-blue and cyan (hex 54C3EA, 00F0FF) with one warm coral-orange block among them (hex FF5A36), arranged like a modular bento grid floating just above a white floor, premium Apple-keynote product aesthetic, soft shadows, no text, no logos, no people, ultra-wide cinematic composition" 1344 768

gen "public/assets/pages/agents-network.jpg" \
"Elegant dark navy background (hex 0F172A). A vast three-dimensional network of small glowing light-blue and cyan nodes (hex 54C3EA, 00F0FF) connected by fine light trails spreads across the frame like a starfield constellation, with a few warm coral-orange glowing nodes (hex FF5A36) scattered among them, soft depth of field, premium tech aesthetic, no text, no logos, no people, ultra-wide cinematic composition" 1344 768

echo "All page visuals generated."
