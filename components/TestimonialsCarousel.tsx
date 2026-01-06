"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoScrollInterval?: number; // in milliseconds
}

export default function TestimonialsCarousel({
  testimonials,
  autoScrollInterval = 5000, // 5 seconds default
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoScrollInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative">
      {/* Testimonial Card */}
      <div className="mb-8">
        <Card className="min-h-[200px] md:min-h-[250px] flex flex-col">
          <div className="mb-6 flex-grow">
            <svg
              className="w-8 h-8 text-primary mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl leading-relaxed text-charcoal-light italic mb-4">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-base font-semibold text-charcoal">
              — {testimonials[currentIndex].author}
            </p>
          </div>
        </Card>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full text-charcoal hover:text-primary hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full text-charcoal hover:text-primary hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

