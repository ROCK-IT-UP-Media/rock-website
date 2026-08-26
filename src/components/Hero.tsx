import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { ...springTransition, delay },
});

const headlineWords = ["Ihre", "KI-Marketingabteilung."];
const wordContainer = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const wordItem = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...springTransition, stiffness: 140 },
  },
};

const slides = [
  { src: "/assets/hero/photo-1-celebration.jpg", alt: "Team feiert einen Marketing-Erfolg" },
  { src: "/assets/hero/photo-2-meeting.jpg", alt: "Strategiegespräch im Meetingraum" },
  { src: "/assets/hero/photo-3-presentation.jpg", alt: "Präsentation der Wachstumszahlen" },
  { src: "/assets/hero/photo-4-handshake.jpg", alt: "Handschlag nach erfolgreichem Abschluss" },
  { src: "/assets/hero/photo-5-huddle.jpg", alt: "Team analysiert eine Live-Kampagne" },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[index].src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.img
              src={slides[index].src}
              alt={slides[index].alt}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: reduceMotion ? 1 : 1.09 }}
              transition={{ duration: SLIDE_DURATION / 1000 + 1.2, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/55 to-slate/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate/70 via-transparent to-transparent" />
      </div>

      <div className="container-rock relative z-10">
        <div className="flex max-w-3xl flex-col">
          <motion.div
            {...fadeUp(0)}
            className="mb-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-miami px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate shadow-glow-miami"
          >
            <Sparkles size={13} strokeWidth={2.5} />
            1 Senior Strategist &middot; 162 AI-Agents
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={wordContainer}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            <span className="block overflow-hidden">
              {headlineWords.map((word) => (
                <motion.span key={word} variants={wordItem} className="mr-3 inline-block">
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={wordItem} className="inline-block text-miami">
                Schlüsselfertig.
              </motion.span>{" "}
              <motion.span variants={wordItem} className="inline-block text-coral">
                Autark.
              </motion.span>{" "}
              <motion.span variants={wordItem} className="inline-block">
                Marktdominant.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.18)} className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-white/85 md:text-xl">
            Schluss mit trägen Großagenturen. Wir installieren die Marketinginfrastruktur der
            Zukunft direkt in Ihrem Unternehmen — jahrzehntelange Marketing-Expertise, gesteuert
            auf Knopfdruck.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a href="/kontakt" data-magnetic className="btn-primary group bg-miami text-slate hover:bg-coral hover:text-white">
              NYC AI-Department Blueprint buchen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/leistungen" className="btn-secondary border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-miami hover:bg-white/10">
              Module entdecken
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.38)}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-white/60"
          >
            <span>EU-vServer</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>DSGVO-konform</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>Human-in-the-Loop</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>100&nbsp;% Digital</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Bild ${i + 1} von ${slides.length}`}
            onClick={() => setIndex(i)}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === index ? "28px" : "8px",
              backgroundColor: i === index ? "#54c3ea" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
