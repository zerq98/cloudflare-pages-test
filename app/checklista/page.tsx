import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistBlock, JsonLd, PageShell, Section } from "@/app/_components/ui";
import { checklistSections, site } from "@/app/_data/content";

export const metadata: Metadata = {
  title: "Checklista przed wyceną strony internetowej",
  description:
    "Lista pytań i materiałów, które warto przygotować przed rozmową o stronie internetowej, landing page'u lub sklepie.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Poradnik", item: site.url },
    { "@type": "ListItem", position: 2, name: "Checklista", item: `${site.url}/checklista` },
  ],
};

export default function ChecklistPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-18">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6652]">Checklista</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#20211f] sm:text-5xl">
            Co przygotować przed rozmową o wycenie strony?
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#54574f]">
            Ta lista pomaga zebrać zakres bez udawania, że wszystko musi być gotowe od razu. Jeśli przy którymś punkcie nie znasz odpowiedzi, zapisz to wprost. To też jest informacja dla wykonawcy.
          </p>
        </div>
      </section>

      <section aria-label="Punkty checklisty" className="mx-auto grid max-w-6xl gap-4 px-5 lg:px-8">
        {checklistSections.map((section) => (
          <ChecklistBlock key={section.title} {...section} />
        ))}
      </section>

      <Section title="Blok do skopiowania do maila" intro="Nie dodajemy kopiowania do schowka w tej wersji. Poniższy tekst można zaznaczyć i wkleić do wiadomości." narrow>
        <div className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
          <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-[#3f423d]">
{`Cześć,

chcę przygotować wycenę strony. Wstępny zakres:

1. Cel strony:
2. Odbiorca:
3. Planowane podstrony:
4. Status tekstów:
5. Materiały graficzne:
6. Czy potrzebny jest CMS:
7. Integracje:
8. SEO / migracja / analityka:
9. Hosting i domena:
10. Termin i osoba decyzyjna:

Największe niewiadome na ten moment:
`}
          </pre>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={site.mailto} className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#174332] px-5 text-sm font-semibold text-white no-underline hover:bg-[#2f6652]">
            Opisz projekt mailowo
          </a>
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#aebcaf] px-5 text-sm font-semibold text-[#174332] no-underline hover:border-[#2f6652]">
            Wróć do poradnika
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}

