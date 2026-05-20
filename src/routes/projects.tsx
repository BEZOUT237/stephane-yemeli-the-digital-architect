import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { useI18n } from "@/i18n/I18nProvider";
import { yemelinkLinks } from "@/components/socials";
import projectsMerch from "@/assets/projects-merch.jpeg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Stéphane Yemeli" },
      { name: "description", content: "Selected projects and the YEMELINK ecosystem — platforms, products and content." },
      { property: "og:title", content: "Projects — Stéphane Yemeli" },
      { property: "og:description", content: "Real products. Real users. Real lessons." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <SectionTitle eyebrow="Projects" title={t.projects.title} subtitle={t.projects.subtitle} />

      <div className="grid gap-5 sm:grid-cols-2">
        {t.projects.items.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "9999px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group glass rounded-2xl p-6 shadow-elegant hover:shadow-glow hover:-translate-y-1 transition"
          >
            <div className="flex items-start justify-between">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{p.tag}</span>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </motion.a>
        ))}
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "9999px" }}
        transition={{ duration: 0.6 }}
        className="relative mt-16 sm:mt-24 mx-auto max-w-2xl"
      >
        <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-25 blur-2xl" aria-hidden />
        <div className="relative rounded-3xl overflow-hidden glass shadow-elegant lg:shadow-glow">
          <img src={projectsMerch} alt="YEMELINK merch" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">YEMELINK — dream it, build it, live it.</p>
      </motion.div>

      {/* Featured ecosystem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "9999px" }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-24 relative"
      >
        <div className="relative glass rounded-3xl p-8 sm:p-10 shadow-elegant lg:shadow-glow overflow-hidden">
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
          <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="size-4" /> Featured
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black">
            <span className="gradient-text">{t.projects.featuredTitle}</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">{t.projects.featuredDesc}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {yemelinkLinks.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-xl p-4 hover:shadow-glow hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{l.name}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{l.description}</p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </PageShell>
  );
}
