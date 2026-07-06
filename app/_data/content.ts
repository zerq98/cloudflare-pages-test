export const site = {
  name: "Przewodnik wyceny stron",
  url: "https://example.com",
  email: "trybulamateusz21@gmail.com",
  mailto: "mailto:trybulamateusz21@gmail.com",
};

export const navigation = [
  { href: "/", label: "Poradnik" },
  { href: "/checklista", label: "Checklista" },
  { href: "/slownik", label: "Słownik" },
];

export const priceRanges = [
  {
    type: "Landing page",
    range: "1 500-5 000 zł netto",
    note: "Jedna strona pod konkretną usługę, kampanię albo ofertę. Cena rośnie, gdy dochodzi copy, analityka, warianty sekcji i mocniejsze SEO.",
  },
  {
    type: "Mała strona firmowa",
    range: "3 000-8 000 zł netto",
    note: "Kilka podstron, podstawowa struktura, kontakt, oferta, wdrożenie techniczne i podstawowe SEO.",
  },
  {
    type: "Strona z CMS",
    range: "5 000-12 000 zł netto",
    note: "Projekt, w którym klient może sam edytować część treści. Dochodzi konfiguracja panelu i zabezpieczenie procesu edycji.",
  },
  {
    type: "Sklep internetowy",
    range: "8 000-25 000+ zł netto",
    note: "Koszt zależy od płatności, dostaw, produktów, regulaminów, stanów magazynowych i integracji.",
  },
  {
    type: "Aplikacja webowa",
    range: "wycena indywidualna",
    note: "Tutaj zwykle potrzebny jest etap analizy: role użytkowników, dane, bezpieczeństwo, procesy i utrzymanie.",
  },
];

export const costFactors = [
  {
    title: "Liczba i typ podstron",
    description: "Strona główna, oferta, kontakt i kilka prostych sekcji to inny zakres niż osobne podstrony usług, lokalizacji, case studies i blog.",
  },
  {
    title: "Treści",
    description: "Gotowe, sensowne teksty skracają pracę. Brak tekstów oznacza dodatkowe decyzje, research i poprawki.",
  },
  {
    title: "Projekt graficzny",
    description: "Szablon, lekko dopasowany layout i indywidualny projekt UX/UI mają zupełnie inny koszt.",
  },
  {
    title: "CMS",
    description: "Panel edycji jest przydatny, ale nie zawsze potrzebny. Dodaje konfigurację, testy i odpowiedzialność za bezpieczeństwo.",
  },
  {
    title: "SEO i struktura treści",
    description: "Widoczność nie bierze się z dopisania kilku słów kluczowych. Liczy się struktura, intencja użytkownika i techniczne podstawy.",
  },
  {
    title: "Integracje",
    description: "Płatności, CRM, newsletter, mapy, rezerwacje i zewnętrzne API potrafią szybko zmienić prostą stronę w projekt aplikacyjny.",
  },
  {
    title: "Termin",
    description: "Krótki deadline oznacza mniej eksperymentów, mniej wariantów i większą potrzebę sprawnych decyzji po stronie klienta.",
  },
  {
    title: "Utrzymanie po wdrożeniu",
    description: "Domena, hosting, aktualizacje, monitoring i drobne poprawki też są częścią kosztu posiadania strony.",
  },
];

export const visibleScope = [
  "sekcje i układ strony",
  "zdjęcia, ikony, przyciski",
  "menu, stopka i kontakt",
  "kolory oraz typografia",
];

export const hiddenScope = [
  "struktura informacji i ścieżka użytkownika",
  "wersje mobile i stany pośrednie",
  "podstawy SEO, meta opisy i nagłówki",
  "dostępność, szybkość i poprawne linki",
  "przekierowania, hosting, analityka i utrzymanie",
];

export const scenarios = [
  {
    title: "Mam firmę lokalną i potrzebuję wiarygodności w Google",
    body: "Najczęściej ważne są usługi, lokalizacja, opinie, kontakt i prosta ścieżka do telefonu. Blog może poczekać. Podstawy SEO nie powinny.",
  },
  {
    title: "Mam usługę B2B i potrzebuję strony pod zapytania",
    body: "Tu klient często czyta dłużej. Chce zobaczyć proces, ryzyka, przykłady i warunki współpracy, zanim napisze maila.",
  },
  {
    title: "Mam gotową stronę, ale wygląda jak z innej epoki",
    body: "Wycena zależy od tego, czy poprawiamy tylko front, czy porządkujemy też treść, SEO, przekierowania i techniczne długi.",
  },
  {
    title: "Chcę sklep, ale nie wiem, czy potrzebuję pełnego ecommerce",
    body: "Czasem wystarczy katalog, landing z zapytaniem albo prosty start z kilkoma produktami. Pełny sklep ma sens, gdy proces sprzedaży jest jasny.",
  },
];

export const scopeCreepSmells = [
  {
    title: "To będzie tylko mała poprawka",
    body: "Mała poprawka bywa szybka. Problem zaczyna się wtedy, gdy zmienia układ, tekst, wersję mobile i kilka zależnych sekcji.",
  },
  {
    title: "Jeszcze jedna podstrona",
    body: "Jedna podstrona to zwykle osobna struktura, nagłówki, meta opis, grafiki, linkowanie i akceptacja treści.",
  },
  {
    title: "Dodamy prosty panel edycji",
    body: "Panel jest produktem w produkcie. Trzeba ustalić pola, uprawnienia, walidację, instrukcję i odpowiedzialność za zmiany.",
  },
  {
    title: "Teksty dogramy później",
    body: "Bez tekstów trudno zaprojektować sensowną stronę. Makieta z lorem ipsum rzadko przeżywa zderzenie z prawdziwą ofertą.",
  },
  {
    title: "Deadline jest za tydzień",
    body: "Krótki termin nie jest zły, jeśli zakres jest mały. Jest ryzykowny, gdy decyzje nadal są otwarte.",
  },
];

export const decisionMap = [
  {
    title: "Budżet jest niski",
    body: "Zmniejszamy zakres. Jedna dobra podstrona usługi często zrobi więcej niż pięć niedokończonych zakładek.",
  },
  {
    title: "Termin jest krótki",
    body: "Ograniczamy liczbę decyzji i customowych elementów. Wybieramy prostszy układ, mniej wariantów i krótszą ścieżkę akceptacji.",
  },
  {
    title: "Strona ma sprzedawać",
    body: "Inwestujemy w treść, strukturę i mierzenie efektów. Sam ładny layout nie powie, które argumenty pomagają w zapytaniach.",
  },
];

export const readinessLevels = [
  {
    level: "Niski",
    title: "Masz pomysł, ale zakres jeszcze pływa",
    body: "Na tym etapie warto spisać cel strony, typ klienta i listę podstron. Wycena będzie raczej rozmową o kierunku niż konkretną ofertą.",
  },
  {
    level: "Średni",
    title: "Wiesz, co ma powstać, ale brakuje materiałów",
    body: "Da się rozmawiać o budżecie. Trzeba tylko uczciwie doliczyć teksty, zdjęcia, decyzje o CMS-ie i poprawki po pierwszym szkicu.",
  },
  {
    level: "Wysoki",
    title: "Masz cel, treści i decyzje techniczne",
    body: "To najlepszy moment na wycenę. Wykonawca może ocenić zakres, ryzyka i sensowny harmonogram bez zgadywania.",
  },
];

export const checklistPreview = [
  "cel strony i najważniejsze działanie użytkownika",
  "lista podstron lub sekcji",
  "status tekstów, zdjęć, logo i materiałów marki",
  "decyzja, czy treści mają być edytowane po wdrożeniu",
  "integracje, SEO, analityka i wymagania prawne",
  "realistyczny termin oraz osoba akceptująca zmiany",
];

export const checklistSections = [
  {
    title: "Co chcesz osiągnąć stroną?",
    items: [
      "Opisz jedną główną rzecz, którą użytkownik ma zrobić: zadzwonić, wysłać mail, przeczytać ofertę, kupić produkt albo pobrać materiał.",
      "Dopisz, kto jest odbiorcą. Lokalny klient szukający usługi ma inne pytania niż osoba porównująca dostawców B2B.",
    ],
  },
  {
    title: "Jakie podstrony są potrzebne?",
    items: [
      "Wypisz minimum: strona główna, oferta, o firmie, kontakt, polityka prywatności.",
      "Zaznacz podstrony opcjonalne: usługi osobno, realizacje, blog, FAQ, cennik, lokalizacje.",
    ],
  },
  {
    title: "Czy masz teksty?",
    items: [
      "Określ, czy teksty są gotowe, robocze, czy trzeba je napisać od zera.",
      "Jeśli masz stare treści, wskaż, co zostaje, co wymaga poprawy i co jest nieaktualne.",
    ],
  },
  {
    title: "Czy masz logo, zdjęcia, kolory, fonty?",
    items: [
      "Zbierz logo w dobrej jakości, zdjęcia, brandbook albo choćby linki do materiałów, które pokazują styl firmy.",
      "Jeśli nie masz zdjęć, dopisz, czy mają powstać, czy strona ma działać bez nich.",
    ],
  },
  {
    title: "Czy potrzebujesz CMS?",
    items: [
      "Wypisz, co ma być edytowalne: teksty, wpisy, realizacje, produkty, zespół, ceny.",
      "Jeśli aktualizujesz stronę raz na pół roku, CMS może być zbędnym kosztem.",
    ],
  },
  {
    title: "Czy są integracje?",
    items: [
      "Wymień płatności, newsletter, CRM, mapy, rezerwacje, chat, zewnętrzne API i narzędzia analityczne.",
      "Dopisz, czy masz już konta i dostępy do tych usług.",
    ],
  },
  {
    title: "Czy potrzebujesz SEO?",
    items: [
      "Określ, czy chodzi o techniczne podstawy, strukturę usług, lokalne SEO, blog czy migrację z obecnej strony.",
      "Przy migracji przygotuj listę ważnych starych adresów URL.",
    ],
  },
  {
    title: "Czy są wymagania prawne lub branżowe?",
    items: [
      "Wypisz regulaminy, polityki, zgody, wymogi branżowe, dostępność, informacje medyczne lub finansowe, jeśli dotyczą projektu.",
      "Ustal, kto dostarcza treści prawne. Wykonawca strony zwykle nie zastępuje prawnika.",
    ],
  },
  {
    title: "Kto odpowiada za hosting i domenę?",
    items: [
      "Sprawdź, gdzie jest domena i kto ma dostęp do panelu DNS.",
      "Dopisz, czy wykonawca ma tylko wdrożyć stronę, czy też pomóc z hostingiem i konfiguracją.",
    ],
  },
  {
    title: "Jaki jest realistyczny termin?",
    items: [
      "Podaj datę, ale dopisz też powód: kampania, targi, start firmy, koniec starej umowy.",
      "Ustal, kto po Twojej stronie akceptuje treści i makiety. Brak decydenta potrafi wydłużyć projekt bardziej niż kod.",
    ],
  },
];

export const faqItems = [
  {
    question: "Czy da się zrobić stronę taniej?",
    answer: "Tak, jeśli zmniejszymy zakres. Można zacząć od jednej dopracowanej strony, bez CMS-u i bez rozbudowanych integracji. Taniej nie powinno znaczyć: bez ustaleń i bez odpowiedzialności za efekt.",
  },
  {
    question: "Czy CMS jest zawsze potrzebny?",
    answer: "Nie. Jeżeli zmieniasz treść raz na kilka miesięcy, panel edycji może kosztować więcej niż okazjonalna poprawka. CMS ma sens, gdy regularnie dodajesz oferty, wpisy, realizacje albo produkty.",
  },
  {
    question: "Czy landing page zawsze jest prosty?",
    answer: "Nie. Landing z jedną usługą może być prosty technicznie, ale trudny treściowo. Jeśli ma obsługiwać kampanię, testy, analitykę i kilka wariantów komunikatu, zakres rośnie.",
  },
  {
    question: "Co najbardziej podbija koszt strony?",
    answer: "Najczęściej: brak treści, osobne podstrony usług, integracje, CMS, krótki termin i zmiany zakresu w trakcie pracy. Sam kolor przycisku rzadko jest problemem.",
  },
  {
    question: "Czy mogę dostarczyć własne teksty?",
    answer: "Tak. To często skraca projekt. Warto jednak założyć czas na redakcję, bo tekst napisany do ulotki albo starej strony nie zawsze działa w nowej strukturze.",
  },
  {
    question: "Ile trwa stworzenie małej strony firmowej?",
    answer: "Przy gotowych materiałach zwykle kilka tygodni. Gdy trzeba ustalić ofertę, napisać teksty, dobrać zdjęcia i poprawiać strukturę, czas rośnie szybciej niż sama liczba podstron.",
  },
  {
    question: "Czy SEO jest częścią wykonania strony?",
    answer: "Podstawy powinny być częścią dobrej realizacji: nagłówki, meta opisy, struktura, szybkość i indeksowanie. Strategia treści, research i długofalowy rozwój to już osobny zakres.",
  },
  {
    question: "Kiedy warto zrobić projekt etapami?",
    answer: "Gdy budżet, treści albo decyzje nie są gotowe. Lepiej wypuścić mniejszą, sensowną wersję niż miesiącami projektować wszystko naraz bez jasnego priorytetu.",
  },
];

export const glossary = [
  {
    term: "Landing page",
    definition: "Jedna strona pod konkretną usługę, kampanię albo ofertę. Ma prowadzić do jednego głównego działania, na przykład maila lub telefonu.",
  },
  {
    term: "One page",
    definition: "Strona, na której większość treści mieści się pod jednym adresem. Dobra dla prostych ofert, słabsza, gdy każda usługa potrzebuje osobnego kontekstu SEO.",
  },
  {
    term: "Strona firmowa",
    definition: "Zestaw podstron prezentujących firmę, ofertę, kontakt i podstawowe informacje potrzebne przed zapytaniem.",
  },
  {
    term: "CMS",
    definition: "Panel do edycji treści. Przydatny, gdy często zmieniasz stronę. Zbędny, jeśli treść jest stabilna i poprawki są sporadyczne.",
  },
  {
    term: "Hosting",
    definition: "Miejsce, z którego strona jest serwowana użytkownikom. Dla statycznych stron może być bardzo prosty, ale nadal wymaga poprawnej konfiguracji.",
  },
  {
    term: "Domena",
    definition: "Adres strony, na przykład example.com. Sama domena nie jest stroną. Trzeba ją połączyć z hostingiem przez DNS.",
  },
  {
    term: "SEO",
    definition: "Praca nad tym, żeby strona była zrozumiała dla wyszukiwarki i odpowiadała na realne intencje użytkowników. To więcej niż słowa kluczowe.",
  },
  {
    term: "GEO / widoczność w AI",
    definition: "Porządkowanie treści tak, żeby była jasna także dla systemów odpowiadających na pytania użytkowników. To nie magia. Najpierw musi istnieć dobra, konkretna treść.",
  },
  {
    term: "RWD",
    definition: "Dopasowanie strony do różnych ekranów. Nie chodzi tylko o zmniejszenie układu, ale o wygodne czytanie i klikanie na telefonie.",
  },
  {
    term: "Analityka",
    definition: "Pomiar tego, co użytkownicy robią na stronie. W pierwszej wersji tej strony nie dodajemy trackerów, żeby nie komplikować prywatności i cookie bannera.",
  },
  {
    term: "Integracje",
    definition: "Połączenia z innymi narzędziami: CRM, płatnościami, newsletterem, mapami, rezerwacjami albo API. Każde połączenie ma swoje błędy i testy.",
  },
  {
    term: "Utrzymanie",
    definition: "Prace po wdrożeniu: aktualizacje, poprawki, monitoring, opieka nad domeną, hostingiem i drobnymi zmianami.",
  },
  {
    term: "MVP",
    definition: "Najmniejsza wersja projektu, która ma sens biznesowy. Nie jest niedoróbką. To świadome ograniczenie zakresu.",
  },
  {
    term: "Scope creep",
    definition: "Pełzające rozszerzanie zakresu: trochę więcej treści, jeszcze jedna podstrona, drobna integracja. Pojedynczo brzmi niewinnie, razem zmienia projekt.",
  },
];
