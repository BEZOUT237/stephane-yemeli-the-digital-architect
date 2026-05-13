import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { socials, yemelinkLinks } from "@/components/socials";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="size-8 rounded-lg gradient-primary shadow-glow flex items-center justify-center text-primary-foreground font-black text-sm">SY</span>
            <span className="gradient-text">Stéphane Yemeli</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t.footer.tagline}</p>
          <p className="mt-2 text-xs gradient-text font-semibold">{t.common.motto}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">{t.footer.navigate}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">{t.nav.home}</Link></li>
            <li><Link to="/about" className="hover:text-foreground">{t.nav.about}</Link></li>
            <li><Link to="/skills" className="hover:text-foreground">{t.nav.skills}</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">{t.nav.projects}</Link></li>
            <li><Link to="/vision" className="hover:text-foreground">{t.nav.vision}</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">{t.footer.yemelink}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {yemelinkLinks.slice(0, 6).map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{l.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">{t.footer.connect}</h3>
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="size-9 grid place-items-center rounded-lg glass text-muted-foreground hover:text-foreground hover:shadow-glow transition"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Stéphane Yemeli · YEMELINK. {t.footer.rights}</p>
          <p className="gradient-text font-semibold">{t.common.motto}</p>
        </div>
      </div>
    </footer>
  );
}
