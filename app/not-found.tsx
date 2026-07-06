import Link from "next/link";
import { PageShell } from "@/app/_components/ui";

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a6b18]">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#20211f] sm:text-5xl">Ta strona nie ma zakresu.</h1>
        <p className="mt-5 text-lg leading-8 text-[#54574f]">
          Link prowadzi do miejsca, którego nie ma w tym statycznym przewodniku. Możesz wrócić do głównego poradnika albo przejść od razu do checklisty.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#174332] px-5 text-sm font-semibold text-white no-underline hover:bg-[#2f6652]">
            Wróć do poradnika
          </Link>
          <Link href="/checklista" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#aebcaf] px-5 text-sm font-semibold text-[#174332] no-underline hover:border-[#2f6652]">
            Otwórz checklistę
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

