"use client";

import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import type { PortfolioContent } from "@/types/portfolio";

export default function ContactSection({
  content,
}: {
  content: Pick<PortfolioContent, "contact" | "locale">;
}) {
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const { contact } = content;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
  }

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="contact-panel">
          <span className="contact-star" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title">
            {contact.title}
            <br />
            <span>{contact.accent}</span>
          </h2>
          <p className="contact-description">{contact.description}</p>
          <div className="contact-buttons">
            <Button href={`mailto:${site.email}`}>
              <FiMail aria-hidden="true" />
              {contact.email}
              <FiArrowUpRight aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              href={site.resume[content.locale]}
              download={`Kenny-Zhu-CV-${content.locale.toUpperCase()}.pdf`}
            >
              <FiDownload aria-hidden="true" />
              {contact.resume}
              <span className="resume-language">{contact.resumeNote}</span>
            </Button>
          </div>
          <div className="email-copy">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={
                copyState === "success" ? contact.copied : contact.copy
              }
            >
              {copyState === "success" ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyState === "success"
              ? contact.copied
              : copyState === "error"
                ? contact.copyFailed
                : "\u00a0"}
          </p>
          <div className="social-row">
            <span>{contact.links}</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
