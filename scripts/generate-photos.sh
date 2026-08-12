#!/bin/bash
set -e
cd "$(dirname "$0")/.."

gen() {
  local out="$1"
  local prompt="$2"
  local w="${3:-1344}"
  local h="${4:-768}"
  echo "→ $out"
  node scripts/nim-generate.mjs --prompt "$prompt" --out "$out" --width "$w" --height "$h" --steps 30
}

STYLE="Photorealistic editorial business photography, shot on a professional DSLR camera with an 85mm lens, shallow depth of field, natural window light mixed with a vivid Miami-blue accent light (hex 54C3EA) visible in the background or reflections, rich saturated true-to-life colors, candid genuine expressions, modern light-filled office or coworking space, high-end corporate lifestyle photography, sharp focus, no text, no logos, no watermarks."

# ---------- HERO SLIDESHOW (5) ----------
gen "public/assets/hero/photo-1-celebration.jpg" \
"$STYLE A diverse team of four young professionals in a bright modern office high-fiving and laughing in celebration around a laptop showing a marketing dashboard with rising graphs, genuine joy, dynamic candid moment, Miami-blue accent wall panel in the background." 1344 768

gen "public/assets/hero/photo-2-meeting.jpg" \
"$STYLE Two professionals in an animated, engaged conversation in a glass-walled meeting room, one gesturing while explaining a strategy on a tablet, warm natural light, a Miami-blue neon accent light glowing softly on the glass wall behind them." 1344 768

gen "public/assets/hero/photo-3-presentation.jpg" \
"$STYLE A confident presenter pointing at a large screen showing an upward growth chart to three engaged colleagues in a modern boardroom, warm daylight, Miami-blue glow from the screen lighting up the room, expressive body language." 1344 768

gen "public/assets/hero/photo-4-handshake.jpg" \
"$STYLE Close-up of two business people shaking hands over a desk after a successful deal, blurred bright modern office in the background with a Miami-blue accent wall, warm confident smiles slightly visible, natural light." 1344 768

gen "public/assets/hero/photo-5-huddle.jpg" \
"$STYLE A small team of professionals huddled closely around a laptop on a standing desk, pointing excitedly at a live campaign analytics dashboard on the screen, genuine laughter, bright office with a large Miami-blue accent light fixture overhead." 1344 768

# ---------- MODULE BANNERS (6) ----------
gen "public/assets/modules/brand-dna-engine.jpg" \
"$STYLE Close-up of hands arranging brand mood-board swatches and a color palette featuring Miami-blue and coral tones on a wooden desk, alongside an open laptop showing a logo design, focused creative work, warm daylight." 1344 768

gen "public/assets/modules/web-architecture.jpg" \
"$STYLE Close-up of a developer's hands typing on a mechanical keyboard, dual monitors in soft focus behind showing a clean modern website interface with Miami-blue UI elements, warm office lighting, focused expression barely visible." 1344 768

gen "public/assets/modules/social-pr-authority.jpg" \
"$STYLE A content creator filming a short video with a smartphone on a small tripod and ring light in a bright modern studio corner, Miami-blue accent light glowing on the wall behind, candid energetic moment, vivid colors." 1344 768

gen "public/assets/modules/funnel-engine.jpg" \
"$STYLE Two marketing professionals pointing at a sales funnel diagram drawn on a glass whiteboard, engaged discussion, bright office, Miami-blue marker lines on the board, natural daylight, dynamic candid pose." 1344 768

gen "public/assets/modules/workspace-integration.jpg" \
"$STYLE A small team gathered around a table during a collaborative onboarding session, laptops open showing a shared workspace interface with Miami-blue accents, one person explaining while others take notes, warm natural light." 1344 768

gen "public/assets/modules/engine-evolution-membership.jpg" \
"$STYLE A professional on a video call at a desk, laptop screen showing a friendly video call interface with a Miami-blue accent, relaxed confident posture, bright modern home-office background, natural light through a window." 1344 768

# ---------- PAGE VISUALS ----------
gen "public/assets/pages/about-founder.jpg" \
"$STYLE A entrepreneur working focused on a laptop at a rooftop cafe table overlooking a sunlit city skyline, coffee cup beside the laptop, relaxed digital-nomad lifestyle, warm golden daylight with a subtle Miami-blue reflection on the laptop screen." 1344 768

gen "public/assets/pages/contact-blueprint.jpg" \
"$STYLE A warm, relaxed video consultation moment: a professional smiling at a laptop screen during a video call in a bright modern office corner, Miami-blue accent lighting softly glowing beside the desk, inviting natural atmosphere." 1344 768

gen "public/assets/pages/leistungen-banner.jpg" \
"$STYLE A diverse team of five professionals gathered around a large table reviewing a printed roadmap and laptops showing colorful module diagrams with Miami-blue highlights, engaged collaborative discussion, bright modern office, natural light." 1344 768

gen "public/assets/pages/agents-network.jpg" \
"$STYLE Photorealistic aerial night photograph of a dense city skyline with illuminated skyscrapers, long exposure light trails, a dominant vivid Miami-blue glow reflecting off glass towers, dramatic and premium mood, high dynamic range, no text." 1344 768

# ---------- AGENT PORTRAITS (8, portrait orientation) ----------
gen "public/assets/agents/resi.jpg" \
"$STYLE Environmental portrait of a confident sharp-featured woman in her 30s with an athletic build, short dark hair, wearing a tailored blazer, arms crossed with a determined confident expression, standing in a modern office, Miami-blue accent light in the background." 896 1152

gen "public/assets/agents/kate.jpg" \
"$STYLE Environmental portrait of a warm friendly woman in her late 20s with wavy light-brown hair, smart-casual blazer, holding a coffee cup and smiling genuinely at the camera, bright modern office with a Miami-blue accent wall behind her." 896 1152

gen "public/assets/agents/aria.jpg" \
"$STYLE Environmental portrait of a stylish creative woman in her 30s with curly dark hair and statement glasses, standing thoughtfully beside a mood board with color swatches, soft smile, bright studio with Miami-blue accent lighting." 896 1152

gen "public/assets/agents/devon.jpg" \
"$STYLE Environmental portrait of a focused man in his 30s with short beard, smart-casual sweater over shirt, leaning against a desk with dual monitors showing code softly blurred behind him, calm confident expression, Miami-blue monitor glow." 896 1152

gen "public/assets/agents/leo.jpg" \
"$STYLE Environmental portrait of a creative young man in his late 20s with stylish short hair, casual designer outfit, holding a stylus and tablet showing a colorful UI design, warm genuine smile, bright studio with Miami-blue accent light." 896 1152

gen "public/assets/agents/sienna.jpg" \
"$STYLE Environmental portrait of a thoughtful woman in her 30s with long straight hair, cozy cardigan, sitting at a wooden desk with a notebook and pen, warm contemplative expression looking slightly off camera, soft daylight with Miami-blue accent." 896 1152

gen "public/assets/agents/marcus.jpg" \
"$STYLE Environmental portrait of a polished confident man in his 40s with short greying hair, sharp shirt, holding a smartphone, standing in a bright modern media studio with a Miami-blue accent light, professional composed expression." 896 1152

gen "public/assets/agents/nia.jpg" \
"$STYLE Environmental portrait of an analytical focused woman in her late 20s with braided hair, smart-casual blouse, standing beside a large screen showing colorful audience data charts, confident calm expression, Miami-blue chart highlights." 896 1152

echo "All photorealistic assets generated."
