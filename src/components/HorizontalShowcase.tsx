import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ShowcaseItem {
  number: string;
  title: string;
  tagline: string;
  summary: string;
  price: string;
  image: string;
  href: string;
}

interface Props {
  items: ShowcaseItem[];
  eyebrow?: string;
  title?: string;
}

export default function HorizontalShowcase({
  items,
  eyebrow = "Der Aufbau",
  title = "Sechs Module. Ein autarkes System.",
}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2vw", `-${items.length * 34 - 34}vw`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["4%", "100%"]);

  return (
    <section ref={targetRef} className="relative bg-cloud" style={{ height: `${items.length * 92}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-rock mb-8 shrink-0">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-slate md:text-4xl">
            {title}
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-[6vw]">
          {items.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group relative h-[58vh] w-[80vw] shrink-0 overflow-hidden rounded-[2rem] bg-slate shadow-card-lg sm:w-[48vw] lg:w-[30vw]"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="font-mono text-xs text-white/50">{item.number}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-miami">{item.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">{item.summary}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                  <span className="font-display text-base font-bold text-white">{item.price}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-miami group-hover:text-slate">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="container-rock mt-8 shrink-0">
          <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-slate/10">
            <motion.div style={{ width: progressWidth }} className="h-full rounded-full bg-miami" />
          </div>
        </div>
      </div>
    </section>
  );
}
