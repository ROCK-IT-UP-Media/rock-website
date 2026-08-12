import { motion } from "framer-motion";
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

export default function Hero() {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div {...fadeUp(0)} className="badge mb-8 border-miami/25 bg-white/70 text-miami-dark backdrop-blur-sm">
          <Sparkles size={13} strokeWidth={2.5} />
          1 Senior Strategist &middot; 162 AI-Agents
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate drop-shadow-[0_2px_20px_rgba(255,255,255,0.9)] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Ihre KI-Marketingabteilung.
          <br />
          <span className="text-miami-dark">Schlüsselfertig.</span>{" "}
          <span className="text-coral">Autark.</span> <span>Marktdominant.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.18)}
          className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-slate-soft drop-shadow-[0_2px_16px_rgba(255,255,255,0.9)] md:text-xl"
        >
          Schluss mit trägen Großagenturen. Wir installieren die Marketinginfrastruktur der
          Zukunft direkt in Ihrem Unternehmen — jahrzehntelange Marketing-Expertise, gesteuert
          auf Knopfdruck.
        </motion.p>

        <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="/kontakt" className="btn-primary group">
            NYC AI-Department Blueprint buchen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="/leistungen" className="btn-secondary bg-white/80 backdrop-blur-sm">
            Module entdecken
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.38)}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-slate-soft/80 drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)]"
        >
          <span>EU-vServer</span>
          <span className="h-1 w-1 rounded-full bg-slate/20" />
          <span>DSGVO-konform</span>
          <span className="h-1 w-1 rounded-full bg-slate/20" />
          <span>Human-in-the-Loop</span>
          <span className="h-1 w-1 rounded-full bg-slate/20" />
          <span>100&nbsp;% Digital</span>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-16 flex flex-col items-center gap-2 text-slate-soft/60"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scrollen</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-8 w-5 items-start justify-center rounded-full border border-slate/25 p-1"
          >
            <span className="h-1.5 w-1 rounded-full bg-slate/40" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
