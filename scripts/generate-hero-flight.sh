#!/bin/bash
set -e
cd "$(dirname "$0")/.."

gen() {
  local out="$1"
  local prompt="$2"
  echo "→ $out"
  node scripts/nim-generate.mjs --prompt "$prompt" --out "$out" --width 1344 --height 768 --steps 30
}

STYLE="Photorealistic editorial photography, shot on a DSLR with an 85mm lens, shallow depth of field, warm golden-hour light, rich warm tones (amber, cream, soft coral), candid genuine human moment, no text, no logos, no watermarks, high detail."

gen "src/assets/hero-flight/01-spark.jpg" \
"$STYLE Close-up of a hand sketching a bold idea in a notebook on a wooden desk, warm morning light through a window, a cup of coffee steaming beside it, a small potted plant in soft focus, feeling of a spark of an idea."

gen "src/assets/hero-flight/02-sketch.jpg" \
"$STYLE Overhead view of two people leaning over a table covered in sketches, color swatches and sticky notes, warm studio light, hands pointing and discussing, creative energy, golden warm tones."

gen "src/assets/hero-flight/03-huddle.jpg" \
"$STYLE A small diverse team of three gathered closely around a laptop on a wooden table, warm golden light, engaged excited expressions, one person pointing at the screen, cozy modern studio."

gen "src/assets/hero-flight/04-screen.jpg" \
"$STYLE Close-up over-the-shoulder shot of hands typing on a laptop keyboard showing a clean bright website going live, warm ambient light reflecting off the screen, focused determined mood."

gen "src/assets/hero-flight/05-celebration.jpg" \
"$STYLE A small team of four professionals celebrating with raised arms and genuine laughter in a warm sunlit studio, golden hour light streaming through large windows, joyful triumphant energy, like stepping onto a stage."

echo "All hero-flight frames generated."
