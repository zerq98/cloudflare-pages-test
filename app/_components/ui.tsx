import Link from "next/link";
import { navigation, site } from "@/app/_data/content";

export function Header() {
  return (
    <header className="border-b border-[#d9e0d8]/80 bg-[#f4f7f4]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-tight text-[#174332] no-underline">
          {site.name}
        </Link>
        <nav aria-label="Główna nawigacja" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#3f423d]">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-sm underline-offset-4 hover:text-[#174332]">
              {item.label}
            </Link>
          ))}
          <a className="rounded-sm font-medium text-[#174332] underline-offset-4" href={site.mailto}>
            Kontakt mailowy
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9e0d8] bg-[#e8efe9]">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-sm text-[#54574f] sm:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-semibold text-[#20211f]">{site.name}</p>
          <p className="mt-2 max-w-2xl">
            Statyczny przewodnik po zakresie projektu. Treść nie jest ofertą handlową ani kalkulatorem ceny.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:justify-end">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="underline-offset-4 hover:text-[#174332]">
              {item.label}
            </Link>
          ))}
          <a href={site.mailto} className="font-medium text-[#174332] underline-offset-4">
            Opisz projekt mailowo
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  narrow = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  narrow?: boolean;
}) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
      <div className={narrow ? "max-w-3xl" : "max-w-4xl"}>
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6652]">{eyebrow}</p> : null}
        <h2 id={headingId} className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#20211f] sm:text-4xl">
          {title}
        </h2>
        {intro ? <p className="mt-4 max-w-3xl text-lg leading-8 text-[#54574f]">{intro}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function PriceRangeCard({ type, range, note }: { type: string; range: string; note: string }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5 shadow-[0_1px_0_rgba(32,33,31,0.04)]">
      <h3 className="text-lg font-semibold text-[#20211f]">{type}</h3>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-[#174332]">{range}</p>
      <p className="mt-4 text-sm leading-6 text-[#54574f]">{note}</p>
    </article>
  );
}

export function CostFactorCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
      <h3 className="text-base font-semibold text-[#20211f]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#54574f]">{description}</p>
    </article>
  );
}

export function MythRealityCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
      <h3 className="text-lg font-semibold text-[#20211f]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#54574f]">{body}</p>
    </article>
  );
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
      <summary className="flex list-none items-start justify-between gap-4 text-left font-semibold text-[#20211f] marker:hidden">
        <span>{question}</span>
        <span aria-hidden="true" className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-[#c4cec3] text-sm text-[#2f6652] group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-[#54574f]">{answer}</p>
    </details>
  );
}

export function ChecklistBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5" aria-labelledby={slugify(title)}>
      <h2 id={slugify(title)} className="text-xl font-semibold tracking-tight text-[#20211f]">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[#54574f]">
            <span aria-hidden="true" className="mt-1.5 size-3 shrink-0 rounded-sm border border-[#2f6652] bg-[#dfeee7]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ReadinessScore({ levels }: { levels: { level: string; title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {levels.map((item) => (
        <article key={item.level} className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9a6b18]">Gotowość: {item.level}</p>
          <h3 className="mt-3 text-lg font-semibold text-[#20211f]">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#54574f]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function ScopeXRay({ visible, hidden }: { visible: string[]; hidden: string[] }) {
  return (
    <div className="grid overflow-hidden rounded-lg border border-[#c5d1c7] bg-[#ffffff] md:grid-cols-2">
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f6652]">To widać</p>
        <ul className="mt-5 space-y-3">
          {visible.map((item) => (
            <li key={item} className="rounded-md border border-[#d9e0d8] bg-white px-4 py-3 text-sm text-[#3f423d]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="xray-grid border-t border-[#d9e0d8] bg-[#edf4ee] p-6 md:border-l md:border-t-0">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9a6b18]">Pod spodem</p>
        <ul className="mt-5 space-y-3">
          {hidden.map((item) => (
            <li key={item} className="rounded-md border border-[#dfc36f] bg-[#fff7df] px-4 py-3 text-sm text-[#3f423d]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ScopeCreepSmells({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-lg border border-[#dfc36f] bg-[#fff7df] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a6b18]">Ryzyko zakresu</p>
          <h3 className="mt-3 text-lg font-semibold text-[#20211f]">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#54574f]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

