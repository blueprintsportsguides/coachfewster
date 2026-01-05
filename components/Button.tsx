import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-white";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

/**
 * Button component with primary and secondary variants
 * Supports both link and button functionality
 * Mobile-first with touch-friendly sizing
 */
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = 
    variant === "primary" ? "btn-primary" : 
    variant === "secondary-white" ? "btn-secondary-white" : 
    "btn-secondary";
  const combinedClasses = `${baseClasses} ${variantClasses} transform transition-all duration-200 hover:scale-105 active:scale-95 ${className}`.trim();

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}

