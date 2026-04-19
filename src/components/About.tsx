import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 id="about-heading" className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed sm:text-lg">
            <p className="text-text">
              Product engineer with 8+ years shipping web and mobile software. I work
              end-to-end: clarifying the problem, shaping the approach, building the system, and
              measuring what changes after release.
            </p>
            <p className="text-muted">
              Stack-wise I lean on TypeScript, React, and Node.js; organization-wise I lean on clear
              tradeoffs, tight feedback loops, and tools like Heap when the question is what to ship
              next. AI-assisted development is part of how I move quickly.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
