import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/components/ThemeProvider";
import type { Lang } from "@/i18n/translations";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/skills", label: t.nav.skills },
    { to: "/projects", label: t.nav.projects },
    { to: "/vision", label: t.nav.vision },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "tr", label: "TR" },
  ];

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="size-8 rounded-lg gradient-primary shadow-glow flex items-center justify-center text-primary-foreground font-black text-sm">SY</span>
            <span className="hidden sm:inline gradient-text">Stéphane Yemeli</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = loc.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${active ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground glass"
                aria-label="Change language"
              >
                <Globe className="size-4" />
                <span>{lang.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-lg glass p-1 shadow-elegant">
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${lang === l.code ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggle}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground glass"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-foreground glass"
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
