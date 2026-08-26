import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

const headlineWords = ["Ihre", "eigene", "KI-Marketingabteilung."];
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

export default function Hero() {
  return (
    <div className="flex h-full items-center px-6">
      <div className="container-rock">
        <div className="flex max-w-3xl flex-col">
          <motion.div
            {...fadeUp(0)}
            className="mb-8 inline-flex w-fit items-center gap-1.5 rounded-full bg-miami px-4 py-2 font-display text-xs font-bold text-slate shadow-glow-miami"
          >
            <Sparkles size={13} strokeWidth={2.5} />
            1 Senior-Stratege &middot; 162 AI-Agents
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
                Geführt von einem Menschen.
              </motion.span>{" "}
              <motion.span variants={wordItem} className="inline-block text-coral">
                Verstärkt von 162.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.18)} className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-white/85 md:text-xl">
            Ein krisenerprobter Senior-Stratege führt die Regie. 162 spezialisierte AI-Agents
            setzen jede Idee in Minuten statt Wochen um. Keine Warteschleifen, keine
            Agentur-Politik — nur Ergebnisse, direkt in Ihrem Unternehmen.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a href="/kontakt" data-magnetic className="btn-primary group">
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

          <motion.div
            {...fadeUp(0.5)}
            className="mt-16 flex items-center gap-3 text-white/50"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scrollen</span>
            <div className="soundwave" style={{ height: "16px" }} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
