import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { getPortfolioContent, isLocale } from "@/features/portfolio/content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { themeInitializationScript } from "@/lib/theme";
import "../globals.css";

const chivo = localFont({
  src: "../../assets/fonts/chivo-latin-variable.woff2",
  variable: "--font-display",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const sourceSans = localFont({
  src: "../../assets/fonts/source-sans-3-latin-variable.woff2",
  variable: "--font-body",
  weight: "200 900",
  style: "normal",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { meta } = getPortfolioContent(locale);
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    title: meta.title,
    description: meta.description,
    ...(configuredUrl
      ? {
          metadataBase: new URL(configuredUrl),
          alternates: {
            canonical: `/${locale}`,
            languages: { en: "/en", es: "/es", "x-default": "/en" },
          },
        }
      : {}),
    authors: [{ name: "Kenny Zhu" }],
    icons: { icon: "/icon.svg" },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CO",
      siteName: "Kenny Zhu",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getPortfolioContent(locale);
  return (
    <html
      lang={locale}
      className={`${chivo.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        <Navbar content={{ nav: content.nav, locale: content.locale }} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer content={content} />
      </body>
    </html>
  );
}
