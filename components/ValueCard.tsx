import React from "react";
import Card from "./Card";
import Image from "next/image";

interface ValueCardProps {
  title: string;
  description: string;
  iconPath: string;
  iconAlt: string;
}

/**
 * Value card component for coaching values section
 * Displays a value with SVG icon and description
 */
export default function ValueCard({
  title,
  description,
  iconPath,
  iconAlt,
}: ValueCardProps) {
  return (
    <Card className="h-full text-center">
      <div className="mb-4 flex justify-center">
        <div className="w-24 h-24 md:w-28 md:h-28 relative flex items-center justify-center">
          <Image
            src={iconPath}
            alt={iconAlt}
            width={112}
            height={112}
            className="w-full h-full object-contain"
            style={{
              filter: "brightness(0) saturate(100%) invert(15%) sepia(90%) saturate(3000%) hue-rotate(330deg) brightness(0.6) contrast(1.2)",
            }}
          />
        </div>
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-small text-charcoal-light leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

