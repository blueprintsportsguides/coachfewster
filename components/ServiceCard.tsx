import React from "react";
import Card from "./Card";
import ImagePlaceholder from "./ImagePlaceholder";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageLabel: string;
  imagePath?: string;
}

/**
 * Service card component
 * Displays service title, description, price, and image placeholder
 */
export default function ServiceCard({
  title,
  description,
  price,
  imageLabel,
  imagePath,
}: ServiceCardProps) {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="mb-4">
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
      <h3 className="mb-3">{title}</h3>
      <p className="text-small text-charcoal-light mb-4 flex-grow">
        {description}
      </p>
      <div className="text-xl md:text-2xl font-bold text-primary">
        {price}
      </div>
    </Card>
  );
}

