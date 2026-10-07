import { FiAward, FiCpu, FiArrowUpRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import type { PortfolioContent } from "@/types/portfolio";

export default function AchievementsSection({
  content,
}: {
  content: PortfolioContent;
}) {
  const { achievements } = content;
  return (
    <section
      id="achievements"
      className="section achievements-section"
      aria-labelledby="achievements-title"
    >
      <Container>
        <SectionTitle
          id="achievements-title"
          eyebrow={achievements.eyebrow}
          title={achievements.title}
        />
        <div className="achievements-grid">
          {achievements.items.map((item, index) => (
            <Card className="achievement-card" key={item.title}>
              <div className="achievement-top">
                <span className="achievement-icon">
                  {index === 0 ? <FiAward /> : <FiCpu />}
                </span>
                <FiArrowUpRight aria-hidden="true" />
              </div>
              <p className="eyebrow">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
