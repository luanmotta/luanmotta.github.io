import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-border pt-24 pb-16 sm:pt-28 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-14 sm:px-8 sm:pt-2">
        <div className="min-w-0">
          <Reveal>
            <h1
              id="hero-heading"
              className="text-[2rem] font-semibold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              Luan Motta
            </h1>
            <p className="mt-3 text-lg font-medium text-accent sm:text-xl">Senior Product Engineer</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I build scalable, user-focused digital products end-to-end using React, Node.js, and TypeScript.
              I own the work from problem framing through delivery, instrumentation, and iteration
              with remote U.S. and global teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-bg transition-opacity hover:opacity-90 active:opacity-85"
              >
                Contact me
              </Link>
            </div>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted sm:mt-10">
              Remote with U.S. and international teams since 2019.
            </p>
          </Reveal>
        </div>
        <Reveal className="flex justify-center sm:justify-end">
          <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface sm:w-48">
            <Image
              src="/profile_minified.jpg"
              alt="Luan Motta, Senior Product Engineer"
              width={400}
              height={400}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
