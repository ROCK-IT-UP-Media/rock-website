import { modules, retainers } from "./modules";

export const mainNav = [
  { label: "Start", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      ...modules.map((m) => ({ label: m.shortTitle, href: `/leistungen/${m.slug}` })),
      ...retainers.map((r) => ({ label: r.title, href: `/leistungen/${r.slug}` })),
    ],
  },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];
