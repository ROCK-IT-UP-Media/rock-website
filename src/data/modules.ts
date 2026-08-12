export interface ModuleProduct {
  name: string;
  price: string;
}

export interface Module {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  products: ModuleProduct[];
  price: string;
  priceSuffix: string;
  savings?: string;
  color: "miami" | "coral" | "cyan" | "slate";
  icon: string;
}

export const modules: Module[] = [
  {
    slug: "brand-dna-engine",
    number: "01",
    title: "Brand DNA Engine",
    shortTitle: "Brand DNA",
    tagline: "Das KI-Readiness Fundament",
    summary:
      "Wir codieren Ihre Unternehmensidentität, Tonalität und Ihr Expertenwissen in maschinenlesbare Context-Files — die Basis für jeden weiteren KI-Agenten.",
    description:
      "Bevor auch nur ein einziger AI-Agent für Sie arbeitet, muss er Sie verstehen. Die Brand DNA Engine übersetzt Ihre Unternehmensidentität, Ihre USPs und Ihr Expertenwissen in strukturierte, maschinenlesbare Context-Files und System-Prompts. Das Ergebnis: Jeder unserer 162 AI-Agents spricht exakt Ihre Sprache — konsistent, präzise und ohne den austauschbaren KI-Einheitsbrei, den man von 08/15-Tools kennt.",
    products: [
      { name: "A.1 Brand DNA Context File", price: "6.500 €" },
      { name: "A.2 Wording-Matrix & Voice Coding", price: "4.800 €" },
      { name: "A.3 System-Prompting Architecture", price: "5.200 €" },
    ],
    price: "14.500 €",
    priceSuffix: "Einmalig",
    savings: "Einzelpreis: 16.500 €",
    color: "miami",
    icon: "fingerprint",
  },
  {
    slug: "web-architecture",
    number: "02",
    title: "High-Performance Web Architecture",
    shortTitle: "Web Architecture",
    tagline: "Die technologische Bühne",
    summary:
      "Eine extrem schnelle Web-Plattform auf React/Astro-Basis mit Strapi Headless CMS, DSGVO-konformer vServer-Sicherheit und E-Commerce-Anbindung.",
    description:
      "Ihre Bühne muss so schnell sein wie Ihr Anspruch. Wir bauen eine schlüsselfertige, extrem performante Web-Plattform auf React/Astro-Basis — gekoppelt mit Strapi Headless CMS für vollständige inhaltliche Autonomie, DSGVO-konformer vServer-Sicherheit auf EU-Infrastruktur, integrierter Blog Engine und Anbindung an Ihren E-Commerce- und Social-Commerce-Stack.",
    products: [
      { name: "B.1 High-Performance Web Platform", price: "14.800 €" },
      { name: "B.3 Blog Engine Setup", price: "6.800 €" },
      { name: "B.4 E-Commerce & Social Commerce Sync", price: "8.500 €" },
    ],
    price: "22.500 €",
    priceSuffix: "Einmalig",
    savings: "Ersparnis: 7.600 € gegenüber Einzelbuchung (30.100 €)",
    color: "cyan",
    icon: "layout-template",
  },
  {
    slug: "social-pr-authority",
    number: "03",
    title: "Organic Social, PR & Brand Authority",
    shortTitle: "Social & PR",
    tagline: "Reichweite mit System",
    summary:
      "KI-Corporate-Influencer-Setup, Voice Cloning, ein 4-Kanal Social Engine und eine vollständige PR- & Krisenkommunikations-Infrastruktur.",
    description:
      "Sichtbarkeit ist kein Zufall, sondern Infrastruktur. Wir bauen Ihren KI-Corporate-Influencer inklusive Voice Cloning auf, betreiben ein Multi-Platform Social Engine über vier Kanäle mit 30 strategischen Schlüssel-Postings und errichten ein belastbares PR-System mit Journalisten-Verteiler — ergänzt durch ein Krisenkommunikations-Handbuch für den Ernstfall.",
    products: [
      { name: "C.1 AI Corporate Influencer", price: "8.500 €" },
      { name: "C.2 Multi-Platform Social Engine", price: "9.800 €" },
      { name: "C.3.1 PR-Strategie & System", price: "7.500 €" },
      { name: "C.3.2 Krisenkommunikations-Handbuch", price: "8.500 €" },
    ],
    price: "24.500 €",
    priceSuffix: "Einmalig",
    savings: "Ersparnis: 9.800 € gegenüber Einzelbuchung (34.300 €)",
    color: "coral",
    icon: "radio-tower",
  },
  {
    slug: "funnel-engine",
    number: "04",
    title: "High-Conversion Funnel Engine",
    shortTitle: "Funnel Engine",
    tagline: "Vom Besucher zum Kunden",
    summary:
      "B2B-Landingpages, interaktive Lead Magnets, automatisierte Nurturing-Sequenzen und eine strukturierte Outbound-Strategie.",
    description:
      "Traffic ohne Conversion ist verschenktes Potenzial. Die Funnel Engine liefert hochkonvertierende B2B-Landingpages, interaktive Lead Magnets wie ROI-Rechner und Readiness-Checks, automatisierte Nurturing-Sequenzen über E-Mail und WhatsApp sowie ein sauber definiertes Outbound-Protokoll für aktives Pipeline-Building.",
    products: [
      { name: "D.1 High-Conversion Landingpages", price: "6.200 €" },
      { name: "D.2 Automated Nurturing Engine", price: "5.500 €" },
      { name: "D.3 Outbound Protocol", price: "3.800 €" },
    ],
    price: "12.500 €",
    priceSuffix: "Einmalig",
    savings: "Ersparnis: 3.000 € gegenüber Einzelbuchung (15.500 €)",
    color: "miami",
    icon: "filter",
  },
  {
    slug: "workspace-integration",
    number: "05",
    title: "AI Cowork & Workspace Integration",
    shortTitle: "Workspace Integration",
    tagline: "Button-Click Marketing",
    summary:
      "Einrichtung Ihrer Claude Projects / Hermes Workspaces plus Live-Masterclass-Onboarding für Ihr gesamtes Team.",
    description:
      "Ein System ist nur so gut wie seine Bedienbarkeit. Wir richten Ihre dedizierten Claude Projects / Hermes Workspaces ein und schulen Ihr Team in einer Live-Masterclass im Prinzip des 'Button-Click Marketing' — damit jeder Mitarbeiter die 162 AI-Agents souverän auf Knopfdruck steuern kann, ganz ohne technisches Vorwissen.",
    products: [
      { name: "E.1 Workspace Setup", price: "4.500 €" },
      { name: "E.2 Team Onboarding Masterclass", price: "3.500 €" },
    ],
    price: "6.500 €",
    priceSuffix: "Standalone",
    savings: "Inkludiert bei Buchung der Module 1–4 oder im Full Setup",
    color: "cyan",
    icon: "layers",
  },
  {
    slug: "engine-evolution-membership",
    number: "06",
    title: "AI Engine Evolution Membership",
    shortTitle: "Evolution Membership",
    tagline: "Laufende Betreuung & Weiterentwicklung",
    summary:
      "Autonomes Agent-Refactoring, neueste LLM-Modelle, vServer-Wartung, SEO-Checks und ein monatlicher Strategic Sparring Call mit dem CEO.",
    description:
      "KI-Systeme veralten schneller als klassische Software. Die Evolution Membership hält Ihr Setup permanent auf dem neuesten Stand: autonomes Agent-Refactoring, Einpflege neuester LLM-Modelle, vServer-Wartung und Backup-Validierung, laufende SEO-Checks — und ein monatlicher Strategic Sparring Call direkt mit dem CEO, damit Strategie und Technik synchron bleiben.",
    products: [{ name: "Laufende Betreuung, monatlich kündbar", price: "3.500 € / Monat" }],
    price: "3.500 €",
    priceSuffix: "pro Monat",
    savings: "Monatlich kündbar",
    color: "slate",
    icon: "refresh-cw",
  },
];

export const flagship = {
  title: "NYC AI-Department Blueprint",
  subtitle: "Full AI Department Setup",
  description:
    "Das schlüsselfertige Gesamtpaket aus den Modulen 1 bis 5. Verwandelt Ihr Unternehmen innerhalb von 30 bis 45 Tagen in ein autarkes technologisches Powerhouse — inklusive Onboarding & Team-Coaching.",
  price: "68.000 €",
  priceSuffix: "Einmalig",
  savings: "32.500 € Ersparnis gegenüber Einzelbuchung (100.500 €)",
};

export const retainers = [
  {
    slug: "blog-retainer",
    title: "Blog- & Content-Publishing Retainer",
    summary: "4 tiefgründige B2B-Fachartikel pro Monat, SEO-optimiert, direkt im CMS.",
    description:
      "Vier tiefgründige B2B-Fachartikel pro Monat — einer pro Woche — recherchiert, geschrieben, SEO-optimiert und direkt in Ihr CMS eingepflegt. Inklusive Bild-Kuratierung und finaler Qualitätsfreigabe durch den CEO, bevor etwas live geht.",
    price: "2.400 €",
    priceSuffix: "pro Monat",
    icon: "file-text",
  },
  {
    slug: "social-media-ai-video-retainer",
    title: "Full-Service Social Media & AI-Video Retainer",
    summary: "Monatliche KI-Videos mit Avatar/Voice Cloning, Carousels und Kanalbetreuung.",
    description:
      "Monatliche Produktion hochwertiger KI-Videos mit Avatar- und Voice-Cloning, dazugehörige Begleittexte, Carousels sowie vollständige Kanalbetreuung und Veröffentlichung auf vier Kanälen — für konstante, professionelle Präsenz ohne eigenen Produktionsaufwand.",
    price: "4.800 €",
    priceSuffix: "pro Monat",
    icon: "video",
  },
  {
    slug: "social-media-management-retainer",
    title: "Standard Social Media Management Retainer",
    summary: "Postings, Grafiken sowie Aufbereitung & Veröffentlichung Ihrer Rohvideos.",
    description:
      "Die schlanke Variante für Unternehmen, die eigenes Rohmaterial liefern: Erstellung von Postings und Grafiken sowie professionelle Aufbereitung und Veröffentlichung Ihrer Kunden-Rohvideos — ohne KI-Video-Generierung, dafür kosteneffizient und konsistent.",
    price: "3.200 €",
    priceSuffix: "pro Monat",
    icon: "share-2",
  },
  {
    slug: "pr-medien-retainer",
    title: "PR- & Medien-Retainer",
    summary: "Bis zu 2 Pressemitteilungen pro Monat, Verteilerpflege & Journalisten-Betreuung.",
    description:
      "Kontinuierliche Medienpräsenz durch bis zu zwei professionell aufgesetzte Pressemitteilungen pro Monat, laufende Pflege Ihres Presseverteilers und aktive Betreuung relevanter Journalisten-Kontakte.",
    price: "2.800 €",
    priceSuffix: "pro Monat",
    icon: "newspaper",
  },
  {
    slug: "emergency-krisenmandat",
    title: "CEO Emergency Execution Package",
    summary: "14 Tage 100 % CEO-Fokus im akuten Krisenfall — alle 162 AI-Agents rund um die Uhr.",
    description:
      "Wenn ein Shitstorm oder eine akute Krise Ihr Unternehmen trifft, zählt jede Stunde. Für 14 Tage übernimmt der CEO persönlich die vollständige Medienkommunikation — inklusive aller Statements, Interview-Training und dem Einsatz sämtlicher 162 AI-Agents rund um die Uhr. Verlängerung möglich zu 15.000 €/Woche (anhaltende Krise) bzw. 5.000 €/Woche (Monitoring-Phase).",
    price: "25.000 €",
    priceSuffix: "Initial-Mandat, 2 Wochen",
    icon: "siren",
  },
];

export const membership = modules.find((m) => m.slug === "engine-evolution-membership")!;
