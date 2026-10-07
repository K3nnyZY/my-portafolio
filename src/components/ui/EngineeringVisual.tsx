"use client";

import { useState } from "react";
import { FiCode, FiCpu, FiDatabase, FiPause, FiPlay } from "react-icons/fi";
import type { PortfolioContent } from "@/types/portfolio";

type Focus = "data" | "ai" | "software";

export default function EngineeringVisual({
  content,
  annotation,
}: {
  content: PortfolioContent["hero"]["visual"];
  annotation: string;
}) {
  const [active, setActive] = useState<Focus>("data");
  const [showDetails, setShowDetails] = useState(false);
  const [paused, setPaused] = useState(false);
  const nodes = [
    {
      id: "data",
      label: content.data,
      stack: "Python / SQL",
      icon: FiDatabase,
    },
    { id: "ai", label: content.ai, stack: content.aiStack, icon: FiCpu },
    {
      id: "software",
      label: content.software,
      stack: "TypeScript / WebSockets",
      icon: FiCode,
    },
  ] as const;
  const descriptions = {
    data: content.dataDetail,
    ai: content.aiDetail,
    software: content.softwareDetail,
  };
  const focuses = {
    data: content.dataFocus,
    ai: content.aiFocus,
    software: content.softwareFocus,
  };
  const activeFocus = focuses[active];
  const ActiveIcon = nodes.find((node) => node.id === active)!.icon;

  return (
    <div className="engineering-showcase">
      <div
        className="engineering-visual"
        role="group"
        aria-label={content.label}
        data-active={active}
        data-motion={paused ? "paused" : "running"}
      >
        <div className="visual-grid" aria-hidden="true" />
        <div className="visual-topline">
          <span className="status-dot" />
          {content.title}
          <button
            type="button"
            className="visual-motion-toggle"
            aria-label={paused ? content.resumeMotion : content.pauseMotion}
            title={paused ? content.resumeMotion : content.pauseMotion}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <FiPlay aria-hidden="true" />
            ) : (
              <FiPause aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="orbit orbit-outer" aria-hidden="true" />
        <div className="orbit orbit-inner" aria-hidden="true" />
        <svg
          className="visual-connectors"
          viewBox="0 0 460 460"
          fill="none"
          aria-hidden="true"
        >
          <path
            className={active === "data" ? "active-connection" : ""}
            d="M118 147L232 230"
          />
          <path
            className={active === "ai" ? "active-connection" : ""}
            d="M353 168L232 230"
          />
          <path
            className={active === "software" ? "active-connection" : ""}
            d="M293 327L232 230"
          />
          <circle cx="118" cy="147" r="4" />
          <circle cx="353" cy="168" r="4" />
          <circle cx="293" cy="327" r="4" />
        </svg>
        <div className="visual-core" aria-hidden="true">
          <span>
            k<span className="core-dot">.</span>
          </span>
          <div className="core-label">KENNY ZHU</div>
        </div>
        {nodes.map(({ id, label, stack, icon: Icon }) => (
          <button
            type="button"
            key={id}
            className={`visual-node node-${id}`}
            aria-pressed={active === id}
            aria-controls="engineering-focus-details"
            aria-expanded={showDetails && active === id}
            onClick={() => {
              setActive(id);
              setShowDetails(active !== id || !showDetails);
            }}
          >
            <Icon aria-hidden="true" />
            <span>
              <strong>{label}</strong>
              <span>{stack}</span>
            </span>
          </button>
        ))}
        <span className="visual-coordinate coordinate-one" aria-hidden="true">
          01 — DATA
        </span>
        <span className="visual-coordinate coordinate-two" aria-hidden="true">
          02 — AI
        </span>
        <div className="visual-bottomline">
          <p className="visual-detail" role="status">
            {descriptions[active]}
          </p>
          <span className="visual-annotation">↳ {annotation}</span>
          <span className="visual-cross" aria-hidden="true">
            +
          </span>
        </div>
      </div>
      <div
        id="engineering-focus-details"
        className="engineering-focus-details"
        role="region"
        aria-labelledby="engineering-focus-title"
        hidden={!showDetails}
      >
        <h3 id="engineering-focus-title">
          <ActiveIcon aria-hidden="true" />
          {activeFocus.title}
        </h3>
        <div className="engineering-focus-grid">
          {activeFocus.items.map((item) => (
            <div className="engineering-focus-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
