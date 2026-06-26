"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  rounded?: "md" | "lg" | "xl" | "full";
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  rounded = "xl",
  onClick,
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold text-center transition-all duration-250 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "text-sm py-2.5 px-6",
    md: "text-base py-3.5 px-8",
    lg: "text-lg py-4 px-10",
  };

  const roundedClasses = {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0",
    white:
      "bg-white hover:bg-white/90 text-charcoal shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-charcoal hover:bg-charcoal-light text-white shadow-md hover:-translate-y-0.5 active:translate-y-0",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${roundedClasses[rounded]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {children}
    </button>
  );
}
