import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, PenLine, Megaphone, Sparkles, ArrowRight } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { useI18n } from "@/i18n/I18nProvider";
import aboutThinking from "@/assets/about-thinking.png";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stéphane Yemeli" },
      { name: "description", content: "From Cameroon to Türkiye — the story of Stéphane Yemeli, founder of YEMELINK." },
      { property: "og:title", content: "About — Stéphane Yemeli" },
      { property: "og:description", content: "The story behind YEMELINK and the engineer-founder building it." },
    ],
  }),
  component: AboutPage,
});

const ICONS = [Globe, Smartphone, Palette, PenLine, Megaphone, Sparkles];

function AboutPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <SectionTitle eyebrow="About" title={t.about.title} />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="-mt-4 mb-12 sm:mb-16 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
      >
        <span className="gradient-text">{t.common.tagline}</span>
      </motion.p>

      {/* Story + first image */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-base sm:text-lg leading-relaxed text-muted-foreground"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-3xl gradient-primary opacity-30 blur-2xl" aria-hidden />
          <div className="relative rounded-3xl overflow-hidden glass shadow-elegant lg:shadow-glow">
            <img src={aboutThinking} alt="Stéphane thinking" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
          </div>
        </motion.div>
      </div>


      {/* Offers */}
      <div className="mt-20 sm:mt-28">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          <span className="gradient-text">{t.about.offersTitle}</span>
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.offers.map((o, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 shadow-elegant hover:shadow-glow transition"
              >
                <div className="size-11 grid place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{o.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition">
            {t.common.learnMore} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
