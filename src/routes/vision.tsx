import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Brain, Rocket, Globe } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { useI18n } from "@/i18n/I18nProvider";
import visionStudio from "@/assets/vision-studio.png";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — Stéphane Yemeli" },
      { name: "description", content: "AI engineer. SaaS founder. Global tech. The three pillars driving Stéphane Yemeli's path." },
      { property: "og:title", content: "Vision — Stéphane Yemeli" },
      { property: "og:description", content: "Where I'm going next — AI, SaaS, global tech." },
    ],
  }),
  component: VisionPage,
});

const ICONS = [Brain, Rocket, Globe];

function VisionPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <SectionTitle eyebrow="Vision" title={t.vision.title} subtitle={t.vision.subtitle} />

      <div className="grid gap-5 lg:grid-cols-3">
        {t.vision.pillars.map((p, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: "9999px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 shadow-elegant hover:shadow-glow transition relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/20 blur-2xl" aria-hidden />
              <div className="relative">
                <div className="size-12 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "9999px" }}
        transition={{ duration: 0.6 }}
        className="relative mt-16 sm:mt-24 mx-auto max-w-4xl"
      >
        <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-25 blur-2xl" aria-hidden />
        <div className="relative rounded-3xl overflow-hidden glass shadow-elegant lg:shadow-glow">
          <img src={visionStudio} alt="YEMELINK studio" className="w-full h-auto object-cover aspect-video" loading="lazy" />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground italic">"{t.common.motto}"</p>
      </motion.div>
    </PageShell>
  );
}
