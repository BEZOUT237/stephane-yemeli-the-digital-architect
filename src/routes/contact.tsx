import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { useI18n } from "@/i18n/I18nProvider";
import { socials, yemelinkLinks, EMAIL } from "@/components/socials";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stéphane Yemeli" },
      { name: "description", content: "Open for collaborations, opportunities and bold ideas. Let's build something great together." },
      { property: "og:title", content: "Contact — Stéphane Yemeli" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <SectionTitle eyebrow="Contact" title={t.contact.title} subtitle={t.contact.subtitle} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative glass rounded-3xl p-8 sm:p-12 shadow-elegant lg:shadow-glow overflow-hidden text-center"
      >
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="relative">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> {t.common.motto}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight">
            <span className="gradient-text">Open for collaborations, opportunities and bold ideas.</span>
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition"
          >
            <Mail className="size-4" /> {t.common.sendEmail}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">{EMAIL}</p>

          <div className="mt-8 flex justify-center flex-wrap gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="size-11 grid place-items-center rounded-xl glass text-muted-foreground hover:text-foreground hover:shadow-glow transition"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Featured ecosystem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-20"
      >
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">Featured</p>
          <h2 className="text-3xl sm:text-4xl font-black">
            <span className="gradient-text">{t.contact.ecosystemTitle}</span>
          </h2>
          <p className="mt-2 text-muted-foreground">{t.contact.ecosystemSubtitle}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
      </motion.div>
    </PageShell>
  );
}
