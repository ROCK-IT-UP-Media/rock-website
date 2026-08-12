export interface Agent {
  name: string;
  role: string;
  trait: string;
  bio: string;
  color: "miami" | "coral" | "cyan" | "slate";
}

export const leadershipAgents: Agent[] = [
  {
    name: "Resi",
    role: "Chief Operating Officer",
    trait: "Die knallharte Tirolerin in NYC",
    bio: "Setzt jedes Projekt gnadenlos strukturiert um und sichert jede Frist — ohne Ausreden.",
    color: "miami",
  },
  {
    name: "Kate",
    role: "Executive Assistant & NYC Charm Engine",
    trait: "Der perfekte Überblick",
    bio: "Behält Termine, Kundenkontakte und Prompt-Architekturen jederzeit im Griff.",
    color: "cyan",
  },
  {
    name: "Aria",
    role: "Chief Brand Strategist",
    trait: "Die Positionierungs-Expertin",
    bio: "Analysiert Marktpositionierung, Target Personas und Ihre Brand DNA bis ins Detail.",
    color: "coral",
  },
  {
    name: "Devon",
    role: "Senior Fullstack Architect",
    trait: "Der Systembauer",
    bio: "Programmiert Ihre Infrastruktur auf React, Astro, Strapi und vServer-Basis.",
    color: "slate",
  },
  {
    name: "Sienna",
    role: "Conversion Copywriter",
    trait: "Die Wortakrobatin",
    bio: "Formuliert verhaltenspsychologische Headlines und Funnel-Texte, die konvertieren.",
    color: "miami",
  },
  {
    name: "Marcus",
    role: "PR & Media Producer",
    trait: "Der Kommunikationsprofi",
    bio: "Entwirft Pressemitteilungen, Medien-Statements und Video-Scripts unter Druck.",
    color: "cyan",
  },
  {
    name: "Nia",
    role: "Audience Profiler",
    trait: "Die Zielgruppen-Analystin",
    bio: "Erstellt präzise B2B-Käufer-Profile und Zielgruppen-Embeddings.",
    color: "coral",
  },
];

export const totalAgentCount = 162;
export const microSpecialistCount = totalAgentCount - leadershipAgents.length;
