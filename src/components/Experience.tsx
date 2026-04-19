import { Reveal } from "./Reveal";

type Role = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

const roles: Role[] = [
  {
    company: "Caplight Technologies",
    role: "Senior Product Engineer",
    location: "San Francisco, CA · Remote",
    period: "Mar 2024 to Present",
    bullets: [
      "Owned features from definition through production; used AI tooling to iterate faster without lowering the quality bar.",
      "Ran activation and conversion work grounded in Heap: ship, read the data, adjust.",
      "Shipped LLM-backed search and content generation, wired into the product with sensible guardrails.",
    ],
    tags: ["React", "TypeScript", "Heap", "LLMs"],
  },
  {
    company: "Toptal",
    role: "Senior Full-Stack Engineer",
    location: "San Francisco, CA · Remote",
    period: "Sep 2022 to Mar 2024",
    bullets: [
      "Built a Web3 NFT marketplace on Polygon; focused on flows that stay understandable around on-chain steps.",
      "Frontend architecture on Next.js with Contentstack, structured for performance and long-term change.",
    ],
    tags: ["Next.js", "Web3", "Contentstack"],
  },
  {
    company: "Gold Media Tech",
    role: "Senior Full-Stack Developer",
    location: "New York, NY · Remote",
    period: "Sep 2021 to Mar 2024",
    bullets: [
      "Shipped web and mobile features for a community product (feeds, engagement) on React, React Native, Node.js, and GraphQL.",
      "Owned data pipelines and scrapers so fresh content landed in the app reliably.",
    ],
    tags: ["React Native", "GraphQL", "Node.js"],
  },
  {
    company: "LIT Onlearning",
    role: "Tech Lead · Senior Full-Stack Developer",
    location: "Remote",
    period: "Nov 2020 to Sep 2021",
    bullets: [
      "Led web development and mentored engineers on execution and standards.",
      "Aligned engineering with delivery dates, tradeoffs, and product direction.",
    ],
    tags: ["React", "Node.js", "Leadership"],
  },
  {
    company: "Cyral",
    role: "Full-Stack Web Developer",
    location: "Redwood City, CA · Remote",
    period: "Sep 2019 to Sep 2020",
    bullets: [
      "Built Node.js services and SSO / SAML integrations in a cloud security platform.",
      "Worked on the customer console alongside identity and observability integrations.",
    ],
    tags: ["Node.js", "SSO", "SAML"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border py-16 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="experience-heading"
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Selected experience
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Recent roles where I owned delivery. Full timeline:{" "}
            <a
              href="https://www.linkedin.com/in/luanmotta/"
              className="text-text underline decoration-border underline-offset-4 hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </Reveal>
        <ol className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {roles.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <article className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-text sm:text-lg">{job.company}</h3>
                    <p className="text-sm text-accent">{job.role}</p>
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-muted">{job.period}</p>
                </div>
                <p className="mt-1 text-xs text-muted sm:text-sm">{job.location}</p>
                <ul className="mt-5 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-muted marker:text-accent sm:pl-5">
                  {job.bullets.map((b, i) => (
                    <li key={`${job.company}-${i}`}>{b}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key technologies">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
