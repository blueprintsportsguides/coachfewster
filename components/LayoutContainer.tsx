import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
}

/**
 * Global layout container component
 * Provides consistent max-width and padding across all pages
 * Mobile-first responsive design
 */
export default function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  );
}

