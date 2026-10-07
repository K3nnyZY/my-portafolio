"use client";

import { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiGithub,
  FiMessageCircle,
  FiTerminal,
  FiActivity,
} from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { site } from "@/config/site";
import type {
  PortfolioContent,
  Project,
  ProjectCategory,
} from "@/types/portfolio";

function ProjectVisual({
  project,
  labels,
}: {
  project: Project;
  labels: PortfolioContent["projects"]["visuals"];
}) {
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-hidden="true"
    >
      <span className="visual-project-number">
        {project.visual === "chat"
          ? "01"
          : project.visual === "editor"
            ? "02"
            : "03"}{" "}
        /
      </span>
      {project.visual === "chat" && (
        <>
          <div className="chat-window">
            <div className="mock-window-bar">
              <span className="mock-icon">
                <FiMessageCircle />
              </span>
              <strong>AutismInsight</strong>
              <i />
            </div>
            <div className="chat-message user-message">{labels.question}</div>
            <div className="chat-message ai-message">
              <span className="ai-star">✳</span>
              {labels.answer}
            </div>
            <div className="chat-input">
              <span />
              <FiArrowUpRight />
            </div>
          </div>
          <p className="visual-caption">{labels.conversation}</p>
        </>
      )}
      {project.visual === "editor" && (
        <>
          <div className="editor-window">
            <div className="mock-window-bar">
              <FiTerminal />
              <strong>calcium / workspace</strong>
              <div className="collaborators">
                <span>K</span>
                <span>A</span>
                <span>J</span>
              </div>
            </div>
            <div className="editor-content">
              <div className="code-preview">
                <span>
                  <b>01</b>
                  <i>def</i> collaborate():
                </span>
                <span>
                  <b>02</b> ideas = <em>[]</em>
                </span>
                <span>
                  <b>03</b> <i>for</i> mind <i>in</i> team:
                </span>
                <span>
                  <b>04</b> ideas.append(mind)
                </span>
                <span>
                  <b>05</b> <i>return</i> possibilities
                </span>
              </div>
              <div className="whiteboard">
                <div className="board-square" />
                <div className="board-circle" />
                <svg viewBox="0 0 100 70">
                  <path
                    d="M17 49Q50 10 82 25M70 19L83 25L76 37"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span className="board-cursor">↖ Kenny</span>
              </div>
            </div>
            <div className="editor-status">
              <span className="status-dot" />
              {labels.connected}
              <span>Python · JavaScript</span>
            </div>
          </div>
          <p className="visual-caption">{labels.collaborative}</p>
        </>
      )}
      {project.visual === "signal" && (
        <>
          <div className="signal-window">
            <div className="mock-window-bar">
              <FiActivity />
              <strong>{labels.signal}</strong>
              <span className="signal-live">FFT</span>
            </div>
            <div className="signal-chart">
              <svg viewBox="0 0 300 90" preserveAspectRatio="none">
                <path
                  d="M0 44L10 45L15 34L21 56L27 44L39 45L44 28L50 64L56 44L65 46L72 31L78 53L85 45L101 45L108 19L116 76L122 42L130 47L137 25L144 63L151 43L160 45L167 38L175 50L182 43L191 45L198 15L205 78L212 39L220 46L229 30L236 58L243 44L255 45L263 36L270 51L278 43L291 45L300 42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>
            <div className="signal-heatmap">
              {Array.from({ length: 30 }, (_, index) => (
                <i
                  key={index}
                  style={{ opacity: 0.2 + ((index * 7) % 10) / 13 }}
                />
              ))}
            </div>
            <div className="signal-bottom">
              <span>EEG → CNN</span>
              <span>↳ LLM</span>
            </div>
          </div>
          <p className="visual-caption">{labels.research}</p>
        </>
      )}
    </div>
  );
}

export default function ProjectSection({
  content,
}: {
  content: Pick<PortfolioContent, "projects">;
}) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const { projects } = content;
  const filters = [
    { value: "all", label: projects.all },
    { value: "ai", label: projects.ai },
    { value: "software", label: projects.software },
  ] as const;
  const visible = projects.list.filter(
    (project) => filter === "all" || project.category === filter,
  );

  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <Container>
        <div className="projects-heading">
          <SectionTitle
            id="projects-title"
            eyebrow={projects.eyebrow}
            title={projects.title}
            description={projects.description}
          />
          <a
            className="text-link github-link"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" />
            {projects.github}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label={projects.title}
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              aria-pressed={filter === item.value}
              className={filter === item.value ? "active" : ""}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
              <span>
                {item.value === "all"
                  ? projects.list.length
                  : projects.list.filter(
                      (project) => project.category === item.value,
                    ).length}
              </span>
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite" aria-atomic="false">
          {visible.map((project) => (
            <Card className="project-card" key={project.id}>
              <ProjectVisual project={project} labels={projects.visuals} />
              <div className="project-body">
                <p className="project-label">{project.label}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <details className="project-details">
                  <summary>
                    {projects.details}
                    <FiChevronDown aria-hidden="true" />
                  </summary>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
