import React from "react";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import Image from "next/image";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaText: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  variant?: "primary" | "secondary";
  showImage?: boolean;
  imageLabel?: string;
  imagePath?: string;
  className?: string;
}

/**
 * Call to action banner component
 * Strong visual block with optional image placeholder background
 * Supports both link and button CTAs
 */
export default function CTABanner({
  headline,
  subtext,
  ctaText,
  ctaHref,
  ctaOnClick,
  variant = "primary",
  showImage = false,
  imageLabel = "CTA banner image placeholder",
  imagePath,
  className = "",
}: CTABannerProps) {
  return (
    <section className={`relative overflow-hidden rounded-card ${className}`}>
      <div className="relative z-10 bg-gradient-to-b from-primary to-primary-dark p-8 md:p-12 lg:p-16 text-center rounded-card">
        {showImage && (
          <div className="absolute inset-0 z-0 opacity-20">
            {imagePath ? (
              <Image
                src={imagePath}
                alt={imageLabel}
                fill
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder
                label={imageLabel}
                aspectRatio="wide"
                className="w-full h-full"
              />
            )}
          </div>
        )}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-4 text-white">
            {headline}
          </h2>
          {subtext && (
            <p className="mb-8 text-lg md:text-xl text-white/90">
              {subtext}
            </p>
          )}
          <Button
            variant="secondary-white"
            href={ctaHref}
            onClick={ctaOnClick}
            className="mt-4"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

