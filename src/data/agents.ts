export interface Agent {
  name: string;
  role: string;
  trait: string;
  bio: string;
  color: "miami" | "coral" | "cyan" | "slate";
  photo: string;
}

export const leadershipAgents: Agent[] = [
  {
    name: "Resi",
    role: "Chief Operating Officer",
    trait: "Die knallharte Tirolerin in NYC",
    bio: "Setzt jedes Projekt gnadenlos strukturiert um und sichert jede Frist — ohne Ausreden.",
    color: "miami",
    photo: "/assets/agents/resi.jpg",
  },
  {
    name: "Kate",
    role: "Executive Assistant & NYC Charm Engine",
    trait: "Der perfekte Überblick",
    bio: "Behält Termine, Kundenkontakte und Prompt-Architekturen jederzeit im Griff.",
    color: "cyan",
    photo: "/assets/agents/kate.jpg",
  },
  {
    name: "Aria",
    role: "Chief Brand Strategist",
    trait: "Die Positionierungs-Expertin",
    bio: "Analysiert Marktpositionierung, Target Personas und Ihre Brand DNA bis ins Detail.",
    color: "coral",
    photo: "/assets/agents/aria.jpg",
  },
  {
    name: "Devon",
    role: "Senior Fullstack Architect",
    trait: "Der Systembauer",
    bio: "Programmiert Ihre Infrastruktur auf React, Astro, Strapi und vServer-Basis.",
    color: "slate",
    photo: "/assets/agents/devon.jpg",
  },
  {
    name: "Leo",
    role: "UI/UX Design Specialist",
    trait: "Der Gestalter",
    bio: "Entwickelt Konversionsmuster, Layout-Raster und visuelle Design-Systeme zum Verlieben.",
    color: "miami",
    photo: "/assets/agents/leo.jpg",
  },
  {
    name: "Sienna",
    role: "Conversion Copywriter",
    trait: "Die Wortakrobatin",
    bio: "Formuliert verhaltenspsychologische Headlines und Funnel-Texte, die konvertieren.",
    color: "coral",
    photo: "/assets/agents/sienna.jpg",
  },
  {
    name: "Marcus",
    role: "PR & Media Producer",
    trait: "Der Kommunikationsprofi",
    bio: "Entwirft Pressemitteilungen, Medien-Statements und Video-Scripts unter Druck.",
    color: "cyan",
    photo: "/assets/agents/marcus.jpg",
  },
  {
    name: "Nia",
    role: "Audience Profiler",
    trait: "Die Zielgruppen-Analystin",
    bio: "Erstellt präzise B2B-Käufer-Profile und Zielgruppen-Embeddings.",
    color: "slate",
    photo: "/assets/agents/nia.jpg",
  },
];

export const totalAgentCount = 162;
export const microSpecialistCount = totalAgentCount - leadershipAgents.length;

export const ceo = {
  name: "Christoph Benedikt",
  role: "Gründer & Senior Strategist",
  trait: "Der Mensch an der Spitze des Systems",
  bio:
    "Jahrzehntelange Erfahrung im klassischen Marketing, Corporate Design und in der Führung strategischer Kommunikation unter Extrembedingungen — darunter jahrelange Verantwortung in der Krisenkommunikation für eine der bekanntesten Rettungsorganisationen Österreichs. Jahre als digitaler Nomade in den weltweit führenden Marketing- und KI-Tech-Bubbles geprägt. Prüft und verantwortet jede Strategie, jede Kampagne und jede Kernaussage, bevor sie Ihr Unternehmen repräsentiert.",
};
