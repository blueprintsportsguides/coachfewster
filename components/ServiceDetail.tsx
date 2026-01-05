import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Image from "next/image";

interface ServiceDetailProps {
  title: string;
  price: string;
  imageLabel: string;
  description: string;
  includes: string[];
  idealFor: string;
  imagePosition?: "left" | "right";
  comingSoon?: boolean;
  imagePath?: string;
}

/**
 * Service detail component with split layout
 * Image placeholder on one side, detailed text on the other
 * Alternates image position for visual variety
 */
export default function ServiceDetail({
  title,
  price,
  imageLabel,
  description,
  includes,
  idealFor,
  imagePosition = "right",
  comingSoon = false,
  imagePath,
}: ServiceDetailProps) {
  const imageSide = (
    <div className="w-full">
      {imagePath ? (
        <div className="relative w-full aspect-video rounded-image overflow-hidden">
          <Image
            src={imagePath}
            alt={imageLabel}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <ImagePlaceholder
          label={imageLabel}
          aspectRatio="landscape"
          className="w-full"
        />
      )}
    </div>
  );

  const textSide = (
    <div className="w-full">
      <div className="flex items-start justify-between mb-4">
        <h3 className="mb-0">{title}</h3>
        {comingSoon ? (
          <span className="ml-4 px-3 py-1 bg-gray-100 text-charcoal-light text-sm font-semibold rounded-full whitespace-nowrap">
            Coming Soon
          </span>
        ) : (
          <div className="ml-4 text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">
            {price}
          </div>
        )}
      </div>
      
      <p className="text-lg md:text-xl leading-relaxed mb-6 text-charcoal-light">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">What's Included</h4>
        <ul className="space-y-2 text-charcoal-light">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-3">Ideal For</h4>
        <p className="text-charcoal-light leading-relaxed">{idealFor}</p>
      </div>
    </div>
  );

  return (
    <section className="py-section">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
        imagePosition === "left" ? "" : ""
      }`}>
        {imagePosition === "left" ? (
          <>
            <div className="order-1 md:order-1">{imageSide}</div>
            <div className="order-2 md:order-2">{textSide}</div>
          </>
        ) : (
          <>
            <div className="order-1 md:order-2">{imageSide}</div>
            <div className="order-2 md:order-1">{textSide}</div>
          </>
        )}
      </div>
    </section>
  );
}

