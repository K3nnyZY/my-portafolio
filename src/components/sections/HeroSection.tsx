import { FiArrowDown, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import EngineeringVisual from "@/components/ui/EngineeringVisual";
import type { PortfolioContent } from "@/types/portfolio";

export default function HeroSection({
  content,
}: {
  content: PortfolioContent;
}) {
  const { hero } = content;
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
            <p className="hero-greeting">{hero.greeting}</p>
            <h1 id="hero-title">
              <span className="hero-title-line">{hero.title}</span>{" "}
              <span className="hero-title-line hero-title-accent">
                {hero.accent}
              </span>
            </h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-buttons">
              <Button href="#projects">
                {hero.projects}
                <FiArrowUpRight aria-hidden="true" />
              </Button>
              <Button href="#contact" variant="secondary">
                {hero.contact}
                <FiArrowUpRight aria-hidden="true" />
              </Button>
            </div>
            <p className="hero-location">
              <FiMapPin aria-hidden="true" />
              {hero.location}
              <span>UTC−5</span>
            </p>
          </div>
          <EngineeringVisual
            content={hero.visual}
            annotation={hero.annotation}
          />
        </div>
        <div className="hero-bottom">
          <a href="#about">
            <FiArrowDown aria-hidden="true" />
            {hero.scroll}
          </a>
          <span>
            {content.locale === "es"
              ? "INGENIERÍA CON PROPÓSITO"
              : "ENGINEERING WITH INTENTION"}
            <span className="tiny-star" aria-hidden="true">
              ✳
            </span>
          </span>
        </div>
        <div className="stats-strip">
          {content.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
