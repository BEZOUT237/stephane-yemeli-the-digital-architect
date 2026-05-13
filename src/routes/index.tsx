import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ParallaxTilt } from "@/components/ParallaxTilt";
import { useI18n } from "@/i18n/I18nProvider";
import { socials, EMAIL } from "@/components/socials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stéphane Yemeli — Founder of YEMELINK · AI & SaaS Builder" },
      { name: "description", content: "Computer Engineering student in Türkiye, founder of YEMELINK. Building AI, SaaS, and the future." },
      { property: "og:title", content: "Stéphane Yemeli — Founder of YEMELINK" },
      { property: "og:description", content: "I build systems. I tell stories. I create the future." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();

  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" aria-hidden />
        <ParticleBackground />
        <div className="absolute -top-32 -left-20 size-[420px] rounded-full bg-primary/20 blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-40 -right-20 size-[420px] rounded-full bg-accent/20 blur-3xl animate-blob" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              {t.home.greeting}
            </span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              {t.home.iAm} <br />
              <span className="gradient-text">{t.home.name}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-semibold text-foreground/90">
              {t.common.tagline}
            </p>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-xl">
              {t.home.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                {t.common.explore} <ArrowRight className="size-4" />
              </Link>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-semibold text-foreground hover:bg-secondary transition"
              >
                <Mail className="size-4" /> {t.common.getInTouch}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: t.home.location },
                { icon: Sparkles, text: t.home.role },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <span key={c.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground">
                    <Icon className="size-3.5 text-primary" />{c.text}
                  </span>
                );
              })}
            </div>

            <div className="mt-7 flex gap-2">
              {socials.slice(0, 6).map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="size-10 grid place-items-center rounded-lg glass text-muted-foreground hover:text-foreground hover:shadow-glow transition"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 lg:order-2 relative"
          >
            <ParallaxTilt className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] gradient-primary opacity-40 blur-2xl" aria-hidden />
              <div className="relative rounded-[2rem] overflow-hidden glass shadow-elegant lg:shadow-glow border border-border">
                <img
                  src={heroPortrait}
                  alt="Stéphane Yemeli, founder of YEMELINK"
                  className="w-full h-auto object-cover aspect-[3/4]"
                  loading="eager"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden sm:flex absolute -left-6 top-10 glass rounded-2xl px-4 py-3 shadow-elegant items-center gap-2 animate-float"
              >
                <span className="size-2 rounded-full bg-primary shadow-glow" />
                <span className="text-xs font-semibold">{t.home.badge1}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="hidden sm:flex absolute -right-6 bottom-12 glass rounded-2xl px-4 py-3 shadow-elegant items-center gap-2 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="size-2 rounded-full bg-accent shadow-glow" />
                <span className="text-xs font-semibold">{t.home.badge2}</span>
              </motion.div>
            </ParallaxTilt>
          </motion.div>
        </div>

        <div className="relative pb-10 flex justify-center">
          <div className="text-xs text-muted-foreground animate-bounce">↓ scroll</div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { to: "/about", title: t.home.quickAbout, desc: t.home.quickAboutDesc },
            { to: "/projects", title: t.home.quickProjects, desc: t.home.quickProjectsDesc },
            { to: "/vision", title: t.home.quickVision, desc: t.home.quickVisionDesc },
          ].map((c, i) => (
            <motion.div
              key={c.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={c.to}
                className="group block glass rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold gradient-text">{c.title}</h3>
                  <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
