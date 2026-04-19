import { Reveal } from "./Reveal";

const areas = [
  {
    title: "Product engineering",
    body: "Scope from unclear problem to shipped feature: tradeoffs, rollout, and learning from usage, not just tickets closed.",
  },
  {
    title: "Frontend architecture",
    body: "React and Next.js codebases with clear boundaries and performance that does not collapse as the product grows.",
  },
  {
    title: "Full-stack delivery",
    body: "APIs, data access, and UI in one thread of ownership when that is what the milestone requires.",
  },
  {
    title: "AI-powered features",
    body: "LLMs where they earn their place: search, generation, internal speed, always with product constraints and review.",
  },
  {
    title: "Performance & SEO",
    body: "Fast pages, solid semantics, and metadata that help humans and search both understand what you ship.",
  },
  {
    title: "Developer experience",
    body: "Conventions, reviews, and automation so a team stays fast after the first release.",
  },
] as const;

/** Curated: overlaps with role tags are intentional for SEO, not a full resume dump. */
const tech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "React Native",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Headless CMS",
  "LLM integrations",
  "Heap",
] as const;

export function Expertise() {
  return (
    <section
      id="expertise"
      className="border-b border-border py-16 sm:py-24"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="expertise-heading"
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Expertise
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            What I am hired for, plus a short list of tools that usually show up in that work.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {areas.map((a) => (
            <li key={a.title}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <h3 className="text-base font-semibold text-text">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{a.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-12 text-xs font-semibold uppercase tracking-wider text-muted sm:mt-14">
          Technologies
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technology stack">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-surface-elevated px-2.5 py-1.5 text-xs text-text"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
