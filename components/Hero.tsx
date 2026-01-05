import React from "react";
import Button from "./Button";
import Image from "next/image";

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA: {
    text: string;
    href?: string;
  };
  secondaryCTA: {
    text: string;
    href?: string;
  };
}

/**
 * Hero section component
 * Left-aligned headline and copy, right-aligned large image placeholder
 * Primary and secondary CTA buttons
 * Mobile-first responsive layout
 */
export default function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="section-container" style={{ background: 'linear-gradient(to bottom, #FEE2E2, #FDD5D5)' }}>
      <div className="section-container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <h1 className="mb-6">{headline}</h1>
          <p className="mb-8 text-lg md:text-xl text-charcoal-light">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href={primaryCTA.href}>
              {primaryCTA.text}
            </Button>
            <Button variant="secondary" href={secondaryCTA.href}>
              {secondaryCTA.text}
            </Button>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full aspect-square rounded-image overflow-hidden">
            <Image
              src="/hero-image.jpeg"
              alt="Football coaching hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

