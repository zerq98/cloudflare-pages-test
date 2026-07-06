import Link from "next/link";
import {
  checklistPreview,
  costFactors,
  decisionMap,
  faqItems,
  hiddenScope,
  priceRanges,
  readinessLevels,
  scenarios,
  scopeCreepSmells,
  site,
  visibleScope,
} from "@/app/_data/content";
import {
  CostFactorCard,
  FaqItem,
  JsonLd,
  MythRealityCard,
  PageShell,
  PriceRangeCard,
  ReadinessScore,
  ScopeCreepSmells,
  ScopeXRay,
  Section,
} from "@/app/_components/ui";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ile kosztuje strona internetowa? Przewodnik po wycenie i zakresie",
  description:
    "Przewodnik wyjaśniający, co wpływa na koszt strony internetowej i jak przygotować zakres przed rozmową z wykonawcą.",
  inLanguage: "pl-PL",
  author: {
    "@type": "Person",
    name: "Mateusz Trybuła",
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
  },
  mainEntityOfPage: site.url,
};

export default function Home() {
  return (
    <PageShell>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.7fr)] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6652]">To nie jest cennik</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#20211f] sm:text-5xl lg:text-6xl">
            Ile może kosztować strona internetowa i dlaczego odpowiedź brzmi: to zależy od zakresu?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#54574f]">
            Dwie strony mogą wyglądać podobnie na pierwszy rzut oka, a mimo to różnić się ceną kilkukrotnie. Różnica zwykle nie siedzi w kolorze przycisku. Siedzi w treści, strukturze, SEO, integracjach, edycji treści, terminie i odpowiedzialności po wdrożeniu.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#czynniki" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#174332] px-5 text-sm font-semibold text-[#ffffff] no-underline hover:bg-[#2f6652]">
              Zobacz, co wpływa na cenę
            </a>
            <Link href="/checklista" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#aebcaf] bg-[#ffffff] px-5 text-sm font-semibold text-[#174332] no-underline hover:border-[#2f6652]">
              Przejdź do checklisty
            </Link>
          </div>
        </div>
        <aside className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-6 shadow-[0_16px_40px_rgba(32,33,31,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9a6b18]">Najkrócej</p>
          <div className="content-flow mt-4 text-sm leading-6 text-[#54574f]">
            <p>
              Wycena bez zakresu jest zgadywaniem. Może być szybka, ale zwykle nie odpowiada na pytanie, co dokładnie powstaje i kto za co odpowiada.
            </p>
            <p>
              Najlepszy brief nie musi być długi. Musi mówić, co strona ma robić, jakie treści są gotowe i gdzie zaczyna się część techniczna.
            </p>
          </div>
        </aside>
      </section>

      <Section
        id="widełki"
        eyebrow="Szybka odpowiedź"
        title="Orientacyjne widełki pomagają złapać skalę, ale nie zastępują rozmowy o zakresie."
        intro="To są zakresy startowe, a nie oferta handlowa. Ich zadaniem jest pomóc Ci ocenić skalę projektu przed rozmową z wykonawcą."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {priceRanges.map((item) => (
            <PriceRangeCard key={item.type} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="rentgen"
        eyebrow="Rentgen zakresu"
        title="Na zewnątrz widać stronę. Pod spodem są decyzje, które robią koszt."
        intro="Sekcje, zdjęcia i przyciski to tylko warstwa widoczna. Wycena robi się konkretna dopiero wtedy, gdy wiadomo, co ma działać pod spodem."
      >
        <ScopeXRay visible={visibleScope} hidden={hiddenScope} />
      </Section>

      <Section
        id="czynniki"
        eyebrow="Co wpływa na cenę"
        title="Prosta strona przestaje być prosta, gdy dochodzi edycja, treść, SEO albo integracje."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {costFactors.map((item) => (
            <CostFactorCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="scenariusze"
        eyebrow="Typowe scenariusze"
        title="Nie każdy projekt potrzebuje tego samego zestawu decyzji."
        intro="Pakiety brzmią wygodnie, ale często ukrywają ważne różnice. Lepiej zacząć od sytuacji, w której jest firma."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {scenarios.map((item) => (
            <MythRealityCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="scope-creep"
        eyebrow="Zapachy scope creep"
        title="Najdroższe w projekcie bywają niedopowiedzenia, nie nowe funkcje."
        intro="Pojedyncze dopiski brzmią niewinnie. Razem potrafią zmienić prostą stronę w projekt, którego nikt już nie wycenił."
      >
        <ScopeCreepSmells items={scopeCreepSmells} />
      </Section>

      <Section
        id="decyzje"
        eyebrow="Mapa decyzji"
        title="Tanio, szybko i dobrze wymaga wyboru, co ograniczamy."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {decisionMap.map((item) => (
            <MythRealityCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="gotowość"
        eyebrow="Checklista gotowości"
        title="Im lepiej opiszesz zakres, tym mniej miejsca zostaje na zgadywanie."
        intro="Nie potrzebujesz dokumentu na trzydzieści stron. Wystarczy kilka decyzji, które wykonawca może przełożyć na zakres pracy."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-lg border border-[#d9e0d8] bg-[#ffffff] p-5">
            <h3 className="text-xl font-semibold text-[#20211f]">Przed rozmową przygotuj:</h3>
            <ul className="mt-5 space-y-3">
              {checklistPreview.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#54574f]">
                  <span aria-hidden="true" className="mt-1 size-4 shrink-0 rounded-full bg-[#2f6652]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/checklista" className="mt-6 inline-flex min-h-11 items-center rounded-md border border-[#aebcaf] px-4 text-sm font-semibold text-[#174332] no-underline hover:border-[#2f6652]">
              Otwórz pełną checklistę
            </Link>
          </div>
          <ReadinessScore levels={readinessLevels} />
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Pytania, które warto zadać przed pytaniem o cenę." narrow>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 lg:px-8">
        <div className="rounded-lg border border-[#c5d1c7] bg-[#174332] p-7 text-white sm:p-9">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">Cena nie boli tak jak brak zakresu.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#e7f3ec]">
            Masz już wstępny zakres? Wyślij kilka zdań: co ma robić strona, ile ma mieć podstron, czy masz teksty i czy potrzebujesz edycji treści po wdrożeniu.
          </p>
          <a href={site.mailto} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#ffffff] px-5 text-sm font-semibold text-[#174332] no-underline hover:bg-[#f4dfaa]">
            Opisz projekt mailowo
          </a>
        </div>
      </section>
    </PageShell>
  );
}

