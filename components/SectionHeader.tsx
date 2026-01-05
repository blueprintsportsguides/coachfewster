import React from "react";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  className?: string;
}

/**
 * Section header component
 * Title + short intro text
 * Centered layout with consistent spacing
 */
export default function SectionHeader({
  title,
  intro,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`}>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

