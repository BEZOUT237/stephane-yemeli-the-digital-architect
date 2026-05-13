import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function ScrollToTop() {
  const loc = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [loc.pathname]);
  return null;
}
