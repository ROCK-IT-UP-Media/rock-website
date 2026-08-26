#!/bin/bash
# Builds the scroll-scrubbed hero "flight" video from src/assets/hero-flight/*.jpg
# (5 warm narrative stills), then extracts it to a JPEG frame sequence for the
# ScrollCanvas component. Camera motion itself (zoom/perspective) is applied at
# draw-time in ScrollCanvas.astro, tied to scroll — this script only builds the
# base crossfade-through-scenes footage.
set -e
cd "$(dirname "$0")/.."

SRC_DIR="src/assets/hero-flight"
OUT_VIDEO="$SRC_DIR/hero-flight.mp4"
FRAMES_DIR="public/frames"
DATA_FILE="src/data/hero-frames.json"

T=2.0   # seconds each still is held (incl. its crossfade window)
D=0.7   # crossfade duration between stills
FPS=24

rm -f "$OUT_VIDEO"
rm -rf "$FRAMES_DIR"
mkdir -p "$FRAMES_DIR"

ffmpeg -y \
  -loop 1 -t "$T" -i "$SRC_DIR/01-spark.jpg" \
  -loop 1 -t "$T" -i "$SRC_DIR/02-sketch.jpg" \
  -loop 1 -t "$T" -i "$SRC_DIR/03-huddle.jpg" \
  -loop 1 -t "$T" -i "$SRC_DIR/04-screen.jpg" \
  -loop 1 -t "$T" -i "$SRC_DIR/05-celebration.jpg" \
  -filter_complex "\
[0:v]scale=1280:720,format=yuv420p[v0]; \
[1:v]scale=1280:720,format=yuv420p[v1]; \
[2:v]scale=1280:720,format=yuv420p[v2]; \
[3:v]scale=1280:720,format=yuv420p[v3]; \
[4:v]scale=1280:720,format=yuv420p[v4]; \
[v0][v1]xfade=transition=fade:duration=$D:offset=1.3[a1]; \
[a1][v2]xfade=transition=fade:duration=$D:offset=2.6[a2]; \
[a2][v3]xfade=transition=fade:duration=$D:offset=3.9[a3]; \
[a3][v4]xfade=transition=fade:duration=$D:offset=5.2[v]" \
  -map "[v]" -r "$FPS" -t 7.2 -pix_fmt yuv420p -movflags +faststart "$OUT_VIDEO"

echo "--- probe ---"
ffprobe -v error -show_entries format=duration -show_entries stream=nb_frames,width,height -of default=noprint_wrappers=1 "$OUT_VIDEO"

ffmpeg -y -i "$OUT_VIDEO" -vsync 0 -vf scale=960:540 -c:v mjpeg -qscale:v 8 "$FRAMES_DIR/frame_%03d.jpg"

FRAME_COUNT=$(ls "$FRAMES_DIR" | grep -c '\.jpg$')
cat > "$DATA_FILE" <<EOF
{
  "frameCount": $FRAME_COUNT,
  "pattern": "/frames/frame_%03d.jpg"
}
EOF

echo "✓ Built $FRAME_COUNT frames -> $FRAMES_DIR ($DATA_FILE updated)"
