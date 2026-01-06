import React from "react";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

/**
 * Card component with rounded corners and subtle shadow
 * Optional hover effect for interactive cards
 */
export default function Card({ 
  children, 
  hover = false, 
  className = "" 
}: CardProps) {
  const baseClasses = "card";
  const hoverClass = hover ? "card-hover" : "";
  const combinedClasses = `${baseClasses} ${hoverClass} ${className}`.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}


