import Link from "next/link";
import { Reveal } from "./Reveal";

const links = [
  {
    label: "Email",
    href: "mailto:luanmtrs@gmail.com",
    display: "luanmtrs@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luanmotta/",
    display: "linkedin.com/in/luanmotta",
  },
  {
    label: "GitHub",
    href: "https://github.com/luanmotta",
    display: "github.com/luanmotta",
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="contact-heading"
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Contact
          </h2>
          <p className="mt-5 max-w-2xl text-xl font-semibold tracking-tight text-text sm:mt-6 sm:text-3xl">
            If the fit is right, let&apos;s talk.
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
            Senior product engineering and full-stack roles, or consulting with a clear scope and a
            single owner for delivery.
          </p>
          <ul className="mt-8 space-y-5 sm:mt-10">
            {links.map(({ label, href, display }) => (
              <li key={label}>
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  {label}
                </span>
                <div className="mt-1.5">
                  <Link
                    href={href}
                    className="inline-flex min-h-11 items-center text-base text-text underline decoration-border underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {display}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
