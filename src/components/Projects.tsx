import { Reveal } from "./Reveal";

type Project = {
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  result: string;
  metric?: string;
  tags: string[];
  /** Optional live demo / write-up link; omit until the artifact exists. */
  href?: string;
};

/** Rendered from career/portfolio/case-studies.md — keep the two in sync. */
const projects: Project[] = [
  {
    title: "Natural-language query engine",
    tagline: "Plain English into fast, structured search across 100+ attributes.",
    problem:
      "Non-technical users couldn't express the searches they needed, and the frontend and backend expressed searches through two divergent schemas.",
    approach:
      "Designed a query DSL to unify the stack, a compiler to optimized SQL, a vector layer for similarity search, and an LLM layer that turns a prompt into a structured query and refines it when ambiguous.",
    result:
      "Owned end-to-end from scope to launch. The hard part was state and determinism, not the prompt — isolating filter edits and bounding the vector search cut slow queries 50–75%.",
    metric: "50–75% faster",
    tags: ["DSL", "SQL compiler", "Vector search", "LLM"],
    href: "https://demo.luanmotta.com",
  },
  {
    title: "Organic-growth surface",
    tagline: "Made a data-rich platform discoverable, and instrumented the funnel.",
    problem:
      "A data-rich product was invisible to search, with no measured path from a visitor to a signup.",
    approach:
      "Owned the initiative: programmatic SEO pages generated off a sync pipeline with LLM content, premium-data gating, and a Heap-instrumented conversion funnel.",
    result:
      "A durable organic-acquisition surface with a measurement layer built for a low-volume B2B funnel — optimizing the surface and the signal you can trust.",
    tags: ["Programmatic SEO", "Next.js", "Heap", "Pipelines"],
  },
  {
    title: "AI outreach & email intelligence",
    tagline: "Client-facing LLM features users actually touch.",
    problem:
      "Users needed help drafting context-aware outreach and wanted email activity to surface deal and contact signal without manual entry.",
    approach:
      "Built multi-persona, per-recipient email generation with regeneration over a Gmail integration, and a spike turning email content into structured order and contact suggestions.",
    result:
      "Shipped LLM product surfaces wired into multiple parts of the app — AI in the product, not just in the toolchain.",
    tags: ["LLM", "Gmail API", "Product"],
  },
  {
    title: "Reliability on live data pipelines",
    tagline: "Diagnosing subtle failures in production systems.",
    problem:
      "A public-sync job was timing out on five of every six runs, re-syncing the same records forever, and leaving orphaned duplicates on the public site.",
    approach:
      "Root-caused each from logs and DB state: rewrote a heavy detection query, broke a trigger that fired on the job's own write, and added cleanup for records deletes had orphaned.",
    result:
      "Restored the pipeline to full throughput — systems debugging in the seams between components.",
    metric: "5/6 runs recovered",
    tags: ["Postgres", "Cloud Functions", "Debugging"],
  },
];

export function Projects() {
  return (
    <section
      id="work"
      className="border-b border-border py-16 sm:py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="work-heading"
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            A few things I owned end-to-end — problem, approach, and what shipped.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-text sm:text-lg">{p.title}</h3>
                  {p.metric ? (
                    <span className="shrink-0 rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-xs tabular-nums text-accent">
                      {p.metric}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm text-accent">{p.tagline}</p>
                <dl className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Problem
                    </dt>
                    <dd className="mt-1">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Approach
                    </dt>
                    <dd className="mt-1">{p.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Result
                    </dt>
                    <dd className="mt-1">{p.result}</dd>
                  </div>
                </dl>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {p.href ? (
                  <a
                    href={p.href}
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-text"
                  >
                    View demo &rarr;
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
