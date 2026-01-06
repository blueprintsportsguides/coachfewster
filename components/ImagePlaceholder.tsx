import React from "react";

interface ImagePlaceholderProps {
  label: string;
  width?: string;
  height?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "wide";
  className?: string;
}

/**
 * Image placeholder component using frames/shaped blocks
 * All image areas must use placeholders - clearly labeled
 * Supports different aspect ratios for various use cases
 */
export default function ImagePlaceholder({
  label,
  width = "100%",
  height,
  aspectRatio = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  // Aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-square",
    landscape: "aspect-video", // 16:9
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  const aspectClass = aspectRatioClasses[aspectRatio];
  const style: React.CSSProperties = {
    width,
    ...(height && { height }),
  };

  return (
    <div
      className={`image-placeholder ${aspectClass} ${className}`}
      style={style}
      aria-label={`Image placeholder: ${label}`}
      role="img"
    >
      <span className="text-xs md:text-sm text-center px-4">
        {label}
      </span>
    </div>
  );
}


