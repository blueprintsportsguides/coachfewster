import React from "react";
import Link from "next/link";

/**
 * Footer component with contact info and location reference
 * Minimal and modern design
 */
export default function Footer() {
  return (
    <footer className="bg-section border-t border-gray-100 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-charcoal mb-2">
              Coach Fewster
            </h3>
            <p className="text-small text-charcoal-light">
              Professional football coaching focused on confidence, skill, and enjoyment.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-charcoal mb-3">
              Get in Touch
            </h4>
            <div className="space-y-2 text-small text-charcoal-light">
              <p>
                <a
                  href="mailto:dan@coreteamwear.co.uk"
                  className="hover:text-primary transition-colors duration-200"
                >
                  dan@coreteamwear.co.uk
                </a>
              </p>
              <p>
                <a
                  href="tel:07714242713"
                  className="hover:text-primary transition-colors duration-200"
                >
                  07714 242713
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-base font-semibold text-charcoal mb-3">
              Location
            </h4>
            <p className="text-small text-charcoal-light">
              Egham and surrounding areas
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-charcoal-light text-center">
            © {new Date().getFullYear()} Coach Fewster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

