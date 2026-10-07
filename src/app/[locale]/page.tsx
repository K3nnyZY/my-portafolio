import { notFound } from "next/navigation";
import { locales } from "@/config/site";
import { getPortfolioContent, isLocale } from "@/features/portfolio/content";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getPortfolioContent(locale);
  return (
    <>
      <HeroSection content={content} />
      <AboutSection content={content} />
      <ExperienceSection content={content} />
      <ProjectSection content={{ projects: content.projects }} />
      <AchievementsSection content={content} />
      <ContactSection
        content={{ contact: content.contact, locale: content.locale }}
      />
    </>
  );
}
