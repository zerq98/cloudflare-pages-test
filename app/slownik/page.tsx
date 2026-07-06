import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, PageShell, Section } from "@/app/_components/ui";
import { glossary, site } from "@/app/_data/content";

export const metadata: Metadata = {
  title: "Słownik pojęć przy tworzeniu strony internetowej",
  description:
    "Proste wyjaśnienia pojęć takich jak CMS, hosting, domena, SEO, RWD, integracje i utrzymanie strony.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Poradnik", item: site.url },
    { "@type": "ListItem", position: 2, name: "Słownik", item: `${site.url}/slownik` },
  ],
};

export default function GlossaryPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-18">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6652]">Słownik</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#20211f] sm:text-5xl">
            Pojęcia, które często pojawiają się przy wycenie strony.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#54574f]">
            Krótko i bez żargonu. Te hasła pomagają zrozumieć, za co właściwie płaci się w projekcie strony.
          </p>
        </div>
      </section>

      <Section title="Słownik pojęć" narrow>
        <dl className="grid gap-4">
          {glossary.map((item) => (
            <div key={item.term} className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
              <dt className="text-lg font-semibold text-[#20211f]">{item.term}</dt>
              <dd className="mt-3 text-sm leading-6 text-[#54574f]">{item.definition}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 rounded-lg border border-[#dfc36f] bg-[#fff7df] p-5">
          <h2 className="text-xl font-semibold text-[#20211f]">Brakuje pojęcia?</h2>
          <p className="mt-3 text-sm leading-6 text-[#54574f]">
            Dopisz je w mailu razem z opisem projektu. Jeśli termin wpływa na zakres albo koszt, warto wyjaśnić go przed wyceną.
          </p>
          <a href={site.mailto} className="mt-5 inline-flex min-h-11 items-center rounded-md bg-[#174332] px-4 text-sm font-semibold text-white no-underline hover:bg-[#2f6652]">
            Zapytaj mailowo
          </a>
        </div>
        <Link href="/checklista" className="mt-6 inline-flex text-sm font-semibold text-[#174332] underline-offset-4">
          Przejdź do checklisty przed wyceną
        </Link>
      </Section>
    </PageShell>
  );
}

