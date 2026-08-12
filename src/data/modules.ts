export interface ModuleFeature {
  title: string;
  detail: string;
}

export interface ModuleRoles {
  customer: string;
  strategist: string;
  agents: string;
  freelancer?: string;
}

export interface PersonaFit {
  name: string;
  role: string;
  quote: string;
}

export interface Module {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  whatItIs: string;
  features: ModuleFeature[];
  benefits: string[];
  roles: ModuleRoles;
  personaFit: PersonaFit;
  price: string;
  priceSuffix: string;
  savings?: string;
  color: "miami" | "coral" | "cyan" | "slate";
  icon: string;
}

const thomas: PersonaFit = {
  name: "Thomas, 52",
  role: "Geschäftsführender Gesellschafter, Spezial-Maschinenbau (90 Mitarbeiter)",
  quote:
    "Ich gebe monatlich fünfstellig an eine Agentur aus und bekomme veraltete Broschüren statt qualifizierter B2B-Leads. Ich brauche eine Marketingabteilung im eigenen Haus — ohne Personalaufbau, aber mit Ergebnissen.",
};

const elena: PersonaFit = {
  name: "Dr. Elena, 37",
  role: "Co-Founderin & CEO, B2B DeepTech (40 Mitarbeiter, Series-A)",
  quote:
    "Unser Produkt ist exzellent, aber das Marketing kommt nicht hinterher. Eine 5-köpfige Inhouse-Abteilung würde 350.000 € im Jahr an Fixkosten bedeuten — das will ich mir sparen, ohne auf Tempo zu verzichten.",
};

const markus: PersonaFit = {
  name: "Markus, 45",
  role: "Head of Marketing, B2B-IT-Services (120 Mitarbeiter, 3-köpfiges Team)",
  quote:
    "Mein Team versinkt im Tagesgeschäft — Messen, Broschüren, manuelle Postings. Für strategischen Funnel-Aufbau bleibt keine Zeit, und der CEO fordert messbaren KI-Einsatz.",
};

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
    whatItIs:
      "Ohne tiefen Kontext liefert Künstliche Intelligenz nur Mittelmaß — generische Floskeln, die jedes zweite Unternehmen auch verwenden könnte. Die Brand DNA Engine ist die vollständige Digitalisierung und Codierung Ihrer Unternehmensidentität, Ihrer Kernbotschaften, Ihrer Alleinstellungsmerkmale und Ihres impliziten Expertenwissens in maschinenlesbare Context-Files. Wir beginnen mit einem 90-minütigen Deep-Dive-Interview, in dem unser Senior-Stratege genau das Wissen aus Ihnen herauskitzelt, das Sie selbst oft gar nicht als „besonders“ wahrnehmen, weil es für Sie selbstverständlich ist. Danach übersetzen unsere Agents dieses Wissen in ein zentrales Brand-DNA-Dokument, das ab sofort jede KI-Ausgabe in Ihrem Unternehmen steuert.",
    features: [
      {
        title: "Brand DNA Context File",
        detail:
          "Deep-Dive-Interview mit dem Senior-Strategen zur Extraktion des impliziten Expertenwissens, Zielgruppen-Affinitäts-Analyse (B2B-Personas), Wettbewerbs-Matrix & Positionierungs-Codierung im zentralen Brand_DNA_Context-Dokument.",
      },
      {
        title: "Wording-Matrix & Voice-Profile Coding",
        detail:
          "Linguistische Erfassung Ihrer exakten Tonalität — Satzlänge, Emotion, Vokabular, Fachbegriffe — inklusive Do's-and-Don'ts-Sprachmatrix und System-Prompt-Regelwerk gegen austauschbare „KI-Müllwörter“.",
      },
      {
        title: "System-Prompting & Custom Agent-Instructions",
        detail:
          "Bis zu 10 maßgeschneiderte System-Prompts für Ihr Tagesgeschäft — Angebote, Social-Media-Drafts, E-Mail-Deeskalation — plus vordefinierte Agenten-Rollen in Ihrem Workspace und ein Quick-Start-Guide.",
      },
    ],
    benefits: [
      "Nie wieder generischer, austauschbarer KI-Output — Ihre Systeme verstehen Ihre B2B-Nische vom ersten Tag an.",
      "Jeder generierte Text klingt exakt so, als hätten Sie oder Ihr Führungsteam ihn persönlich geschrieben — 100 % Konsistenz über alle Kanäle.",
      "Mitarbeiter sparen täglich ein bis zwei Stunden, weil sie keine Prompts mehr erfinden, sondern fertige Befehle nutzen.",
    ],
    roles: {
      customer: "Liefert Input im 90-minütigen Kickoff-Interview und stellt bestehende Unterlagen bereit.",
      strategist: "Leitet die Befragung, filtert Kernbotschaften heraus und prüft die strategische Schärfe.",
      agents: "Nia (Audience Profiler) und Aria (Brand Strategist) analysieren den Markt und synthetisieren das Context-File.",
      freelancer: "Bei extremen Nischenbranchen erfolgt eine Gegenprüfung durch externe Fachexperten aus unserem globalen Netzwerk.",
    },
    personaFit: thomas,
    price: "14.500 €",
    priceSuffix: "Einmalig",
    savings: "Einzelpreis-Summe: 16.500 € — Ersparnis im Paket: 2.000 €",
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
    whatItIs:
      "Keine Baukasten-Website von der Stange. Wir entwickeln eine zukunftssichere, extrem schnelle und modulare Web-Infrastruktur, die Design, Content-Verwaltung und Hosting aus einer Hand liefert. Basis ist ein moderner Tech-Stack aus React, Astro, Strapi Headless CMS und eigenen vServer-Architekturen mit voller GitHub-Versionierung. Weltweit erprobte UI/UX- und Konversionsmuster werden individuell auf Ihre Marke zugeschnitten — das Ergebnis sind Ladezeiten unter 0,8 Sekunden, saubere SEO-Struktur und eine Plattform, die mit Ihrem Unternehmen mitwächst, statt in zwei Jahren wieder abgelöst zu werden.",
    features: [
      {
        title: "High-Performance Web Platform",
        detail:
          "UI/UX-Design im Light-Look (Miami Blue, Pure White, Midnight Slate, Concert Coral), Frontend-Entwicklung mit Sub-Second-Ladezeiten für bis zu 8 Hauptseiten, Anbindung eines Headless CMS zur einfachen Inhaltsverwaltung und barrierefreie, konversionsoptimierte Grundstruktur.",
      },
      {
        title: "Blog Engine & Automated Content System",
        detail:
          "SEO-optimierte technische Integration der Blog-Sektion, Content-Formeln und Prompts für markenkonforme Fachartikel sowie ein Setup für die automatisierte Veröffentlichung von bis zu vier Artikeln pro Monat.",
      },
      {
        title: "E-Commerce & Social Commerce Sync",
        detail:
          "Setup und Customizing eines High-Conversion Shopify-Stores inklusive Checkout-Optimierung, nahtlose Einbindung in Ihre Hauptwebsite sowie Synchronisation der Produktkataloge mit Instagram Shop und TikTok Shop.",
      },
    ],
    benefits: [
      "Design, CMS und Hosting aus einer Hand — keine Schnittstellen-Chaos zwischen drei verschiedenen Dienstleistern.",
      "Unhackbare, extrem schnelle Web-Performance auf deutschen/EU-Servern mit automatisierten Backups und voller DSGVO-Konformität.",
      "Kontinuierlicher Vertrauensaufbau und organische SEO-Dominanz ohne manuellen Schreibaufwand.",
    ],
    roles: {
      customer: "Stellt Medien und Zugänge bereit und nimmt Design- sowie Funktionsmeilensteine ab.",
      strategist: "Überwacht Markenführung, UX und Conversion-Psychologie über den gesamten Build hinweg.",
      agents: "Devon (Fullstack Architect) und Leo (UI/UX Design Specialist) programmieren und gestalten die Plattform.",
      freelancer: "Ein Senior Frontend Developer aus unserem Netzwerk übernimmt Spezial-Animationen und DevOps.",
    },
    personaFit: thomas,
    price: "22.500 €",
    priceSuffix: "Einmalig",
    savings: "Einzelpreis-Summe: 30.100 € — Ersparnis im Paket: 7.600 €",
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
    whatItIs:
      "Hier geht es nicht um oberflächliche Viralität oder belanglose Follower-Zahlen, sondern um die gezielte Erreichung kaufkräftiger B2B-Entscheider. Das Modul kombiniert einen KI-Corporate-Influencer inklusive Stimm-Kloning — Ihre Führungskraft muss für Video-Content nicht mehr selbst vor die Kamera — mit einem psychologisch fundierten Social-Media-System über vier Kanäle und einem professionellen PR-Apparat. Ergänzt wird das Ganze durch ein Krisenkommunikations-Handbuch, entwickelt aus jahrelanger Erfahrung in der Führung strategischer Kommunikation unter Extrembedingungen — damit Sie nicht erst im Ernstfall über Sprachregelungen nachdenken.",
    features: [
      {
        title: "AI Corporate Influencer & Voice-Cloning Engine",
        detail:
          "High-End-KI-Avatar-Erstellung basierend auf einer echten Person oder Kunstfigur, professionelles Voice Cloning sowie drei vorgefertigte Video-Templates für Social Media, Newsletter oder Erklärvideos.",
      },
      {
        title: "Multi-Platform Social Engine & 30-Day Launch Kit",
        detail:
          "Maßgeschneiderte Hooks, Script-Strukturen und Video-Framings für Facebook, Instagram, TikTok und LinkedIn, plus 30 schlüsselfertige Content-Units (Texte, Design-Vorlagen, Carousel-PDFs, Video-Scripts) und SOPs fürs Engagement-Management.",
      },
      {
        title: "PR-Strategie & operationales PR-System",
        detail:
          "PR-Strategiekonzept, Kern-Narrative und Zielmedien-Matrix, fertige Prompts und Leitfäden, Integration spezialisierter PR-Agents in Ihren Workspace sowie Pressemitteilungs-Templates.",
      },
      {
        title: "Krisenkommunikations-Infrastruktur & Notfall-Handbuch",
        detail:
          "Maßgeschneidertes Crisis Playbook mit Deeskalations-Matrizen für Shitstorms, Produktsicherheits-Fälle oder Datenlecks, vorgefertigte Statement-Formeln, Interview-Leitfäden und ein Notfall-Agent für blitzschnelle Textierung unter Druck.",
      },
    ],
    benefits: [
      "Ihre Führungskraft spart wöchentlich Stunden, weil keine Kamera-Termine oder Studio-Aufnahmen mehr nötig sind.",
      "Erprobte Formeln statt Herumprobieren — Ihr Unternehmen erhält fertigen Content für einen ganzen Monat plus ein System für jeden weiteren.",
      "Absolute Handlungssicherheit im Ernstfall: Ihr Team verliert keine wertvolle Zeit, sondern greift sofort auf vordefinierte Protokolle zurück.",
    ],
    roles: {
      customer: "Erteilt kurze wöchentliche Freigaben und nutzt den bereitgestellten Leitfaden im Tagesgeschäft.",
      strategist: "Entwickelt PR-Konzepte und das Krisenhandbuch persönlich und pflegt Kontakte zu Leitmedien.",
      agents: "Sienna, Kate und Marcus texten 30 Postings, entwickeln Formeln, Avatare und PR-Entwürfe.",
      freelancer: "Postproduktion und PR-Journalisten aus unserem Netzwerk unterstützen bei Spezialanforderungen.",
    },
    personaFit: elena,
    price: "24.500 €",
    priceSuffix: "Einmalig",
    savings: "Einzelpreis-Summe: 34.300 € — Ersparnis im Paket: 9.800 €",
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
    whatItIs:
      "Modul 4 baut auf Ihrer Web-Architektur und Ihrer Social-Präsenz auf und schließt die Lücke zwischen Aufmerksamkeit und Abschluss. Statt Besucher auf einer generischen Startseite verpuffen zu lassen, entwickeln wir verkaufspsychologisch durchdachte Landingpages mit interaktiven Tools, die echten Mehrwert liefern und gleichzeitig qualifizieren. Automatisierte Nurturing-Sequenzen wärmen Anfragen auf, bevor Ihr Vertrieb überhaupt den Hörer in die Hand nimmt — und ein strukturiertes Outbound-Protokoll sorgt dafür, dass Sie nicht nur auf eingehenden Traffic warten, sondern aktiv Pipeline aufbauen.",
    features: [
      {
        title: "High-Conversion Landingpages & Interactive Lead Magnets",
        detail:
          "Verkaufspsychologisches Textkonzept und Layout, Programmierung eines interaktiven Lead-Magneten wie ROI-Rechner oder KI-Readiness-Check mit Sofort-Auswertung sowie Anbindung an Ihr CRM (HubSpot, Salesforce, ActiveCampaign etc.).",
      },
      {
        title: "Automated Nurturing Engine",
        detail:
          "7 bis 12 Nurturing-E-Mails im exakten Markenton, WhatsApp-Business-Automatisierung und eine durchdachte Lead-Scoring-Logik zur Priorisierung heißer Anfragen.",
      },
      {
        title: "Outbound Protocol System & Traffic Drive Strategy",
        detail:
          "Leitfaden und System für zielgerichtetes B2B-Outbound-Marketing sowie die Ausrichtung bezahlter Kampagnen (LinkedIn Ads, Google Search) auf Ihre neuen Funnel-Strukturen.",
      },
    ],
    benefits: [
      "Jeder Website-Besucher wird zur qualifizierten Anfrage weiterentwickelt, statt spurlos zu verschwinden.",
      "Ihr Vertrieb spricht nur noch mit vorqualifizierten, aufgewärmten Leads — nicht mit kalten Kontakten.",
      "Skalierbare Traffic-Anbindung, die exakt auf Ihre neuen Conversion-Strukturen ausgerichtet ist.",
    ],
    roles: {
      customer: "Führt die eigentlichen B2B-Sales-Gespräche mit den generierten, vorqualifizierten Leads.",
      strategist: "Baut die Verkaufslogik, das Lead-Scoring und die strategische Funnel-Architektur.",
      agents: "Devon und Sienna codieren die Funnels und texten die Nurturing-Mails im exakten Markenton.",
      freelancer: "CRM-Automatisierungsspezialisten (Make/n8n) unterstützen bei komplexen Systemanbindungen.",
    },
    personaFit: markus,
    price: "12.500 €",
    priceSuffix: "Einmalig",
    savings: "Einzelpreis-Summe: 15.500 € — Ersparnis im Paket: 3.000 €",
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
    whatItIs:
      "Die beste Infrastruktur nützt nichts, wenn Ihr Team sie nicht bedienen kann oder will. Deshalb richten wir Ihre geschützte KI-Arbeitsumgebung schlüsselfertig direkt im Unternehmen ein — mit hinterlegten Context-Files und Prompts aus den vorherigen Modulen. Statt unstrukturierter Prompt-Listen erhält Ihr Team eine voreingestellte Umgebung, in der hochkarätiger Content, Landingpages oder Pressemitteilungen im exakten Markenton mit wenigen Klicks entstehen. Ein dreistündiges Live-Gruppencoaching mit dem Senior-Strategen sorgt dafür, dass niemand vor verschlossenen Türen steht.",
    features: [
      {
        title: "Custom Workspace Setup",
        detail:
          "Schlüsselfertige Einrichtung der geschützten KI-Arbeitsumgebung (Claude Projects / Hermes Workspaces) inklusive aller hinterlegten Context-Files und Prompt-Bibliotheken aus Ihren gebuchten Modulen.",
      },
      {
        title: "Team Onboarding & Button-Click-Masterclass",
        detail:
          "Dreistündiges Live-Gruppencoaching mit dem Senior-Strategen zur fehlerfreien Bedienung der KI-Marketinginfrastruktur, inklusive Video-SOPs für das spätere Nachschlagen im Tagesgeschäft.",
      },
    ],
    benefits: [
      "Ihr Team ist ab Tag eins produktiv — ohne Prompt-Engineering-Vorkenntnisse oder monatelange Einarbeitung.",
      "Kein Wildwuchs an Einzel-Tools: eine zentrale, geschützte Arbeitsumgebung für die gesamte Marketingabteilung.",
      "Bei Buchung der Module 1 bis 4 oder des Full Setups ist dieses Modul automatisch inkludiert.",
    ],
    roles: {
      customer: "Nimmt am Schulungs-Workshop mit dem gesamten Team teil.",
      strategist: "Hält die Masterclass persönlich und führt Ihr Team durch die neue Arbeitsweise.",
      agents: "Resi und Kate richten die Workspaces und Prompt-Bibliotheken strukturiert ein.",
    },
    personaFit: markus,
    price: "6.500 €",
    priceSuffix: "Standalone",
    savings: "Bei Buchung der Module 1–4 oder im Full Setup automatisch inkludiert",
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
    whatItIs:
      "Kein klassischer, behäbiger Agentur-Retainer, sondern ein dynamisches System-Upgrade. Die KI-Welt entwickelt sich wöchentlich weiter — sobald wir in unserer eigenen Agentur neue Prompt-Techniken oder Agent-Workflows optimieren und stabilisieren, spielen wir diese direkt als Update in Ihren Workspace ein. Neueste LLM-Versionen werden laufend angebunden, Ihre vServer-Infrastruktur technisch gewartet, und einmal im Monat sprechen Sie persönlich mit dem Gründer über Ausrichtung, Performance und nächste Schritte.",
    features: [
      {
        title: "Autonomes Agent-Refactoring",
        detail:
          "Neue Prompt-Techniken und Agent-Workflows, die wir intern entwickeln und stabilisieren, spielen wir laufend als geprüfte Updates in Ihren Workspace ein.",
      },
      {
        title: "Modell-Integration",
        detail: "Anbindung neuester LLM-Versionen (Claude, OpenAI, Llama etc.) an Ihre bestehenden Systeme, sobald diese verfügbar und praxistauglich sind.",
      },
      {
        title: "Monthly Strategy Alignment",
        detail: "Monatlicher Strategie-Call mit dem Gründer zur Schärfung der Ausrichtung, Performance-Kontrolle und VIP-Support bei dringenden Anliegen.",
      },
    ],
    benefits: [
      "Ihr System bleibt technologisch immer auf dem neuesten Stand, ohne dass Sie selbst den Markt beobachten müssen.",
      "Direkter monatlicher Draht zum Gründer statt Ticket-System oder Junior-Betreuung.",
      "30 Tage Kündigungsfrist — keine Bindung, die nicht durch fortlaufenden Mehrwert gerechtfertigt ist.",
    ],
    roles: {
      customer: "Nimmt am monatlichen Strategy-Call teil und meldet neue Anforderungen.",
      strategist: "Führt den Sparring-Call persönlich und priorisiert die Weiterentwicklung Ihres Systems.",
      agents: "Das gesamte Agent-Team testet, stabilisiert und rollt Updates strukturiert in Ihren Workspace aus.",
    },
    personaFit: elena,
    price: "3.500 €",
    priceSuffix: "pro Monat",
    savings: "30 Tage Kündigungsfrist, monatlich kündbar",
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

export interface Retainer {
  slug: string;
  title: string;
  summary: string;
  description: string;
  whatItIs: string;
  features: ModuleFeature[];
  benefits: string[];
  roles: ModuleRoles;
  price: string;
  priceSuffix: string;
  icon: string;
}

export const retainers: Retainer[] = [
  {
    slug: "blog-retainer",
    title: "Blog- & Content-Publishing Retainer",
    summary: "4 tiefgründige B2B-Fachartikel pro Monat, SEO-optimiert, direkt im CMS.",
    description:
      "Vier tiefgründige B2B-Fachartikel pro Monat — einer pro Woche — recherchiert, geschrieben, SEO-optimiert und direkt in Ihr CMS eingepflegt. Inklusive Bild-Kuratierung und finaler Qualitätsfreigabe durch den Senior-Strategen, bevor etwas live geht.",
    whatItIs:
      "Die laufende, monatliche Dienstleistung, bei der wir als Agentur die komplette Themenrecherche, Redaktionsplanung, Ausarbeitung und direkte Veröffentlichung von Fachartikeln auf Ihrem Blog übernehmen — im exakten Ton Ihrer Brand DNA. Sie geben einmal im Monat kurz Feedback zu den Themen, den Rest erledigen wir.",
    features: [
      {
        title: "4 Fachartikel pro Monat",
        detail: "Ein tiefgründiger B2B-Artikel pro Woche, individuell konzipiert und geschrieben im exakten Markenton.",
      },
      {
        title: "SEO & Visual-Kuratierung",
        detail: "Kontinuierliche SEO-Keyword-Recherche sowie sorgfältige Bild- und Visual-Auswahl für jeden Artikel.",
      },
      {
        title: "CMS-Einpflege & Freigabe",
        detail: "Formatierung und Veröffentlichung direkt im Headless CMS Ihrer Website, mit finaler Qualitätsfreigabe durch den Senior-Strategen.",
      },
    ],
    benefits: [
      "Null eigener Aufwand — Ihr Blog bleibt monatlich hochaktuell.",
      "Kontinuierliches Google-Ranking und wachsende Branchen-Autorität.",
      "Jeder Artikel durchläuft eine menschliche Qualitätskontrolle vor Veröffentlichung.",
    ],
    roles: {
      customer: "Gibt einmal im Monat in fünf Minuten die Themen frei.",
      strategist: "Überprüft die strategische Botschaft und erteilt die finale Qualitätsfreigabe.",
      agents: "Sienna (Copywriter) und Nia (Research) erstellen und optimieren jeden Artikel.",
    },
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
    whatItIs:
      "Die vollständige monatliche Betreuung Ihrer Social-Media-Kanäle inklusive der aktiven Erstellung KI-generierter Videos — auf Basis Ihres AI Corporate Influencers oder als KI-Visuals — sowie der kompletten Redaktionsplanung und Veröffentlichung. Ihr Unternehmen dominiert Video- und Text-Feeds, ohne dass jemand selbst vor die Kamera muss.",
    features: [
      {
        title: "KI-Videogenerierung & Scripting",
        detail: "Monatliche Produktion von KI-Videos basierend auf Ihrem Avatar, Voice Cloning oder KI-Visuals, inklusive Scripting.",
      },
      {
        title: "Content-Erstellung",
        detail: "Alle Begleittexte, Hooks, Grafiken und Carousels für Ihre Kanäle, konsistent im Markenton.",
      },
      {
        title: "Kanalbetreuung & Publishing",
        detail: "Vollständige Verwaltung, Terminierung und Veröffentlichung auf LinkedIn, Instagram, Facebook und TikTok inklusive Community-Management-Support.",
      },
    ],
    benefits: [
      "Modernste KI-Technologie dominiert Ihre Feeds, ohne dass jemand jemals vor der Kamera steht.",
      "Konstante, professionelle Präsenz auf vier Kanälen ohne eigenen Produktionsaufwand.",
      "Strategische Kanalführung und Qualitätsfreigabe durch den Senior-Strategen.",
    ],
    roles: {
      customer: "Erteilt monatliches Feedback zu Themen und Tonalität.",
      strategist: "Übernimmt die strategische Kanalführung und finale Qualitätsfreigabe.",
      agents: "Marcus (Media Producer) und Sienna (Copywriter) generieren Videos, Skripte und Postings.",
    },
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
    whatItIs:
      "Perfekt für Unternehmen, die gerne eigene Videos drehen, aber die redaktionelle Betreuung, Texterstellung, Aufbereitung und Veröffentlichung komplett abgeben möchten. Wir übernehmen die laufende monatliche Betreuung aller Kanäle ohne eigene KI-Video-Generierung — dafür mit voller redaktioneller Sorgfalt.",
    features: [
      {
        title: "Content-Units",
        detail: "Regelmäßige Text- und Bild-Postings, Carousel-PDFs und Thought-Leadership-Beiträge im Markenton.",
      },
      {
        title: "Aufbereitung Ihrer Rohvideos",
        detail: "Einbindung, Feinschliff, Untertitelung und Veröffentlichung von Videos, die Sie selbst aufnehmen.",
      },
      {
        title: "Kanalbetreuung & Publishing",
        detail: "Komplette Bespielung und Terminierung Ihrer Social-Media-Plattformen.",
      },
    ],
    benefits: [
      "Kosteneffiziente Alternative für Unternehmen mit eigenem Rohmaterial.",
      "Volle redaktionelle Betreuung ohne eigenen Zeitaufwand für Texte oder Planung.",
      "Konsistente Veröffentlichung über alle vereinbarten Kanäle hinweg.",
    ],
    roles: {
      customer: "Liefert auf Wunsch eigene Roh-Videos an.",
      strategist: "Überwacht die inhaltliche Ausrichtung der Postings.",
      agents: "Sienna und Marcus texten, gestalten Grafiken und schneiden bzw. posten das Kundenmaterial.",
    },
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
    whatItIs:
      "Die laufende, monatliche Betreuung Ihrer Pressearbeit und Erreichbarkeit für Medienanfragen — Dauersichtbarkeit in Fachmedien und Zeitungen, ohne eine eigene PR-Agentur für mehrere tausend Euro im Monat engagieren zu müssen.",
    features: [
      {
        title: "Bis zu 2 Pressemitteilungen / Monat",
        detail: "Erstellung und Verteilung professioneller Pressemitteilungen im exakten Markenton.",
      },
      {
        title: "Medienverteiler-Pflege",
        detail: "Kontinuierliche Pflege Ihres Presseverteilers und Beantwortung eingehender Journalisten-Anfragen.",
      },
      {
        title: "Monatliches PR-Monitoring",
        detail: "Übersichtlicher monatlicher Bericht zu Ihrer Medienpräsenz und Berichterstattung.",
      },
    ],
    benefits: [
      "Dauersichtbarkeit in Fachmedien ohne die Kosten einer klassischen PR-Agentur.",
      "Professionelle, journalistisch aufbereitete Kommunikation, die Redaktionen ohne Rückfragen aufgreifen.",
      "Ein fester Ansprechpartner statt wechselnder Junior-Betreuung.",
    ],
    roles: {
      customer: "Liefert aktuelle Unternehmensmeldungen und Themenanlässe.",
      strategist: "Pflegt persönlich die Kontakte zu Leitmedien und gibt jede Mitteilung frei.",
      agents: "Kate und Resi bereiten Entwürfe vor und pflegen den Verteiler strukturiert.",
    },
    price: "2.800 €",
    priceSuffix: "pro Monat",
    icon: "newspaper",
  },
  {
    slug: "emergency-krisenmandat",
    title: "CEO Emergency Execution Package",
    summary: "14 Tage 100 % CEO-Fokus im akuten Krisenfall — alle 162 AI-Agents rund um die Uhr.",
    description:
      "Wenn ein Shitstorm oder eine akute Krise Ihr Unternehmen trifft, zählt jede Stunde. Für 14 Tage übernimmt der Senior-Stratege persönlich die vollständige Medienkommunikation — inklusive aller Statements, Interview-Training und dem Einsatz sämtlicher 162 AI-Agents rund um die Uhr.",
    whatItIs:
      "Die ultimative Feuerwehr-Garantie: Tritt in Ihrem Unternehmen ein akuter Krisenfall ein, übernimmt der Senior-Stratege persönlich zusammen mit dem gesamten AI-Agent-Powerhouse das Ruder für einen Intensiv-Zeitraum von 14 Tagen. Diese Expertise stammt aus jahrelanger Verantwortung in High-Stakes-Umfeldern, darunter die Krisenkommunikation für eine der bekanntesten Rettungsorganisationen Österreichs. Verlängerung ist flexibel nach Intensität der Lage möglich: 15.000 € pro Woche, solange die Krise akut bleibt, oder 5.000 € pro Woche in der Nachbearbeitungs- und Monitoring-Phase.",
    features: [
      {
        title: "100 % CEO-Fokus",
        detail: "Der Senior-Stratege lässt augenblicklich alles stehen und liegen und widmet sich 14 Tage lang ausschließlich Ihrem Fall.",
      },
      {
        title: "Vollständige Krisenkommunikation",
        detail: "Wir schreiben alle Stellungnahmen, Pressemitteilungen, Social-Media-Statements und Kunden-Anschreiben.",
      },
      {
        title: "Medientraining & Krisenteam-Leitung",
        detail: "Interview-Vorbereitung Ihrer Führungskräfte, Übernahme aller Presse-Anrufe und strategische Steuerung der Medien.",
      },
    ],
    benefits: [
      "Schutz der Existenz und Reputation Ihres Unternehmens in der kritischsten Phase.",
      "Ein krisenerprobter Top-Stratege übernimmt persönlich das Kommando — keine Junior-Betreuung.",
      "Alle 162 AI-Agents arbeiten rund um die Uhr an der Bewältigung der Krise.",
    ],
    roles: {
      customer: "Übergibt die Kommunikationsführung für die Dauer des Mandats.",
      strategist: "Übernimmt 100 % der Leitung, aller Interviews und der Medienkoordination.",
      agents: "Alle 162 Agents erstellen Statements und Content in Minuten statt Stunden.",
      freelancer: "Unser PR-Netzwerk und Medienkontakte stehen bei Bedarf zusätzlich zur Verfügung.",
    },
    price: "25.000 €",
    priceSuffix: "Initial-Mandat, 2 Wochen",
    icon: "siren",
  },
];

export const membership = modules.find((m) => m.slug === "engine-evolution-membership")!;
