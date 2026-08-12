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
    <section className="relative overflow-hidden bg-white pb-24 pt-20 md:pt-28">
      <motion.div
        className="glow-orb -left-32 top-10 h-[28rem] w-[28rem] bg-miami/25 animate-float-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="glow-orb -right-24 top-40 h-80 w-80 bg-coral/15 animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.div
        className="glow-orb bottom-0 left-1/3 h-72 w-72 bg-cyan/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      <div className="container-rock relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div {...fadeUp(0)} className="badge mb-8 border-miami/25 bg-miami/8 text-miami-dark">
            <Sparkles size={13} strokeWidth={2.5} />
            1 Senior Strategist &middot; 162 AI-Agents
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Ihre KI-Marketingabteilung.
            <br />
            <span className="text-miami-dark">Schlüsselfertig.</span>{" "}
            <span className="text-coral">Autark.</span>{" "}
            <span>Marktdominant.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.18)} className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-slate-soft md:text-xl">
            Schluss mit trägen Großagenturen. Wir installieren die Marketinginfrastruktur der
            Zukunft direkt in Ihrem Unternehmen — jahrzehntelange Marketing-Expertise, gesteuert
            auf Knopfdruck.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a href="/kontakt" className="btn-primary group">
              NYC AI-Department Blueprint buchen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/leistungen" className="btn-secondary">
              Module entdecken
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.38)}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-slate-soft/70"
          >
            <span>EU-vServer</span>
            <span className="h-1 w-1 rounded-full bg-slate/20" />
            <span>DSGVO-konform</span>
            <span className="h-1 w-1 rounded-full bg-slate/20" />
            <span>Human-in-the-Loop</span>
            <span className="h-1 w-1 rounded-full bg-slate/20" />
            <span>100&nbsp;% Digital</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
