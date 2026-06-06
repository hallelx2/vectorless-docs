import Link from 'next/link';
import { ArrowRight, GitBranch, Quote, Route, ShieldCheck, Workflow } from 'lucide-react';

export const metadata = {
  title: 'Vectorless — Document retrieval for the reasoning era',
};

const features = [
  {
    icon: GitBranch,
    title: 'Tree, not chunks',
    body: 'Vectorless parses a document into a hierarchical tree that preserves its real structure — sections, sub-sections, tables. No fixed-size chunking, no lost context.',
  },
  {
    icon: Route,
    title: 'treewalk navigation',
    body: 'An LLM agent walks the tree node by node, reasoning about where the answer lives. Retrieval becomes a navigation problem, not a nearest-neighbor lottery.',
  },
  {
    icon: ShieldCheck,
    title: 'Citations by construction',
    body: 'Every answer traces back to the exact nodes it came from. Path-correct citations are a property of the engine, not a bolt-on afterthought.',
  },
  {
    icon: Workflow,
    title: 'No vector DB to run',
    body: 'No embeddings to compute, no index to maintain, no similarity threshold to tune. Point Vectorless at a document and ask.',
  },
];

export default function HomePage() {
  return (
    <main className="relative flex-1">
      {/* ---- Hero ---- */}
      <section className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-20 text-center sm:pt-28">
        {/* Very faint brand grid — hero only, fades to clean canvas. */}
        <div className="vl-hero-grid" aria-hidden />

        <span className="vl-mono-eyebrow inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5">
          <span className="size-1.5 rounded-full bg-[var(--vl-blue)]" />
          Reasoning-based retrieval
        </span>

        <h1 className="mt-8 text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
          Document retrieval for the{' '}
          <span className="vl-serif vl-grad-text font-normal">reasoning era</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-fd-muted-foreground sm:text-lg">
          No chunking. No embeddings. No vector DB. Vectorless parses a document
          into a tree, an LLM agent navigates it, and returns answers with
          citations you can trust.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
          >
            Get started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/docs/concepts/treewalk"
            className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent"
          >
            How treewalk works
          </Link>
        </div>

        {/* quickstart — dark inset terminal (the one place dark is allowed) */}
        <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-xl border border-black/10 bg-[var(--vl-ink)] text-left shadow-xl shadow-black/10">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-[var(--vl-pink)]/80" />
            <span className="size-2.5 rounded-full bg-[var(--vl-blue-2)]/80" />
            <span className="size-2.5 rounded-full bg-white/30" />
            <span className="ml-2 font-mono text-xs uppercase tracking-[0.16em] text-white/40">
              quickstart
            </span>
          </div>
          <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-white/90">
            <code>
              <span className="text-white/40"># install the SDK</span>
              {'\n'}npm i @vectorless/sdk{'\n\n'}
              <span className="text-white/40"># ask a document a question</span>
              {'\n'}vl.<span className="text-[var(--vl-blue-2)]">ask</span>(doc,{' '}
              <span className="text-[var(--vl-pink)]">&quot;what changed in Q3?&quot;</span>)
            </code>
          </pre>
        </div>
      </section>

      {/* ---- Features ---- */}
      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-fd-border bg-fd-border sm:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-fd-background p-7 transition-colors hover:bg-fd-muted"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-fd-border bg-fd-card">
                <Icon className="size-5 text-[var(--vl-blue)]" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-fd-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* pull quote */}
        <figure className="mx-auto mt-16 max-w-2xl text-center">
          <Quote className="mx-auto size-6 text-fd-muted-foreground/50" />
          <blockquote className="mt-4 text-2xl font-light leading-snug tracking-tight text-fd-foreground sm:text-3xl">
            Retrieval stopped being a search problem. It became a reasoning
            problem.
          </blockquote>
          <figcaption className="vl-mono-eyebrow mt-5">
            The Vectorless thesis
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
