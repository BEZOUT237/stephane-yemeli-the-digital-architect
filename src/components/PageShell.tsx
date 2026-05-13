import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-radial-glow pointer-events-none" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        {children}
      </motion.div>
    </main>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-14"
    >
      {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">{eyebrow}</p>}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
        <span className="gradient-text">{title}</span>
      </h1>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
