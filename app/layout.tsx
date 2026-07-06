import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Przewodnik wyceny stron";
const siteDescription =
  "Sprawdź, co wpływa na koszt strony internetowej, jak przygotować się do wyceny i dlaczego podobne strony mogą różnić się ceną nawet kilkukrotnie.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Ile kosztuje strona internetowa? Przewodnik po wycenie i zakresie",
    template: "%s | Przewodnik wyceny stron",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "pl_PL",
    url: "https://example.com",
    siteName: siteTitle,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
