import { FiArrowUpRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import type { PortfolioContent } from "@/types/portfolio";

export default function ExperienceSection({
  content,
}: {
  content: PortfolioContent;
}) {
  const { experience } = content;
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <Container>
        <div className="experience-grid">
          <SectionTitle
            id="experience-title"
            eyebrow={experience.eyebrow}
            title={experience.title}
            description={experience.description}
          />
          <div className="experience-list">
            {experience.items.map((item, index) => (
              <article className="experience-item" key={item.company}>
                <span className="timeline-dot" />
                <div className="experience-meta">
                  <span>{item.dates}</span>
                  <span>{item.location}</span>
                </div>
                <div className="experience-title-row">
                  <h3>{item.company}</h3>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
                <p className="experience-role">{item.role}</p>
                <p className="experience-summary">{item.description}</p>
                <ul>
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={point}
                      className={
                        index === 1 && pointIndex === 2 ? "impact-point" : ""
                      }
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
