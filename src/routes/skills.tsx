import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Palette } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { useI18n } from "@/i18n/I18nProvider";
import skillsServices from "@/assets/skills-services.png";
import skillsWorking from "@/assets/skills-working.png";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Stack — Stéphane Yemeli" },
      { name: "description", content: "Frontend, Backend, AI/ML and Creative — the toolkit Stéphane uses to ship ideas into reality." },
      { property: "og:title", content: "Skills & Stack — Stéphane Yemeli" },
      { property: "og:description", content: "The toolkit I use to ship ideas into reality." },
    ],
  }),
  component: SkillsPage,
});

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  "AI / ML": Brain,
  "IA / ML": Brain,
  Creative: Palette,
  Créatif: Palette,
  Yaratıcı: Palette,
};

// Proficiency map (base 100). Backend and Creative reduced by 15%.
const BASE: Record<string, number> = {
  Frontend: 92,
  Backend: 85,
  "AI / ML": 78,
  "IA / ML": 78,
  Creative: 88,
  Créatif: 88,
  Yaratıcı: 88,
};

function levelFor(cat: string): number {
  const base = BASE[cat] ?? 80;
  if (cat === "Backend" || cat === "Creative" || cat === "Créatif" || cat === "Yaratıcı") {
    return Math.round(base * 0.85);
  }
  return base;
}

function SkillsPage() {
  const { t } = useI18n();
  const entries = Object.entries(t.skills.categories) as [string, readonly string[]][];

  return (
    <PageShell>
      <SectionTitle eyebrow="Skills" title={t.skills.title} subtitle={t.skills.subtitle} />

      <div className="grid gap-6 sm:grid-cols-2">
        {entries.map(([cat, items], i) => {
          const Icon = CATEGORY_ICONS[cat] ?? Code2;
          const level = levelFor(cat);
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 shadow-elegant hover:shadow-glow transition"
            >
              <div className="flex items-center gap-3">
                <div className="size-11 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="size-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{cat}</h2>
                <span className="ml-auto text-sm font-semibold text-muted-foreground">{level}%</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                  className="h-full gradient-primary"
                />
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground">{s}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Two images */}
      <div className="mt-16 sm:mt-24 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl gradient-primary opacity-25 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl overflow-hidden glass shadow-elegant lg:shadow-glow">
            <img src={skillsServices} alt="YEMELINK services" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl gradient-primary opacity-25 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl overflow-hidden glass shadow-elegant lg:shadow-glow">
            <img src={skillsWorking} alt="Stéphane at work" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
