import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProfilePortrait from "@/components/ui/ProfilePortrait";
import type { PortfolioContent } from "@/types/portfolio";

export default function AboutSection({
  content,
}: {
  content: PortfolioContent;
}) {
  const { about } = content;
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <Container>
        <div className="about-intro">
          <ProfilePortrait
            alt={content.hero.portraitLabel}
            label={content.hero.eyebrow}
            caption={content.hero.annotation}
          />
          <div className="about-story">
            <SectionTitle
              id="about-title"
              eyebrow={about.eyebrow}
              title={about.title}
            />
            <div className="about-prose">
              <p>{about.description}</p>
            </div>
          </div>
        </div>
        <div className="about-details">
          <div className="skills-panel">
            <h3 className="subheading">
              {about.skillsTitle}
              <FiArrowUpRight aria-hidden="true" />
            </h3>
            {about.skills.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="education-panel">
            <h3 className="subheading">
              {about.educationTitle}
              <FiBookOpen aria-hidden="true" />
            </h3>
            {about.education.map((education, index) => (
              <article className="education-item" key={education.school}>
                <div
                  className={`school-monogram school-${index}`}
                  aria-hidden="true"
                >
                  {index === 0 ? "USF" : "UN"}
                </div>
                <div>
                  <p className="education-dates">{education.dates}</p>
                  <h4>{education.school}</h4>
                  <p className="education-degree">{education.degree}</p>
                  <p className="education-location">{education.location}</p>
                  <p className="gpa">
                    GPA <strong>{education.gpa}</strong>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
