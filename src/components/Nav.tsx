"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

function IconMenu(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass =
    "inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-elevated hover:text-text md:min-h-0";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top,0px)] transition-[background-color,backdrop-filter,border-color] duration-200 ${
        scrolled || menuOpen
          ? "border-border bg-bg/90 backdrop-blur-md supports-backdrop-filter:bg-bg/75"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="min-w-0 shrink py-2 text-sm font-semibold tracking-tight text-text hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Luan Motta
        </Link>

        <ul className="hidden items-center gap-1 md:flex md:gap-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-text hover:bg-surface-elevated md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Site sections"
        className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="border-t border-border bg-bg px-5 py-3 shadow-[0_12px_24px_-12px_rgba(0,0,0,0.5)] sm:px-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${linkClass} w-full font-medium text-text`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
