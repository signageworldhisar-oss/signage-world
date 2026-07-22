"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Keep track of current mouse coordinates
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  // Active hover states tracked via refs to avoid stale closures in event handlers
  const hoveredElementRef = useRef<HTMLElement | null>(null);
  const hoverTypeRef = useRef<string | null>(null);
  const isClicked = useRef(false);

  useEffect(() => {
    // Check if device supports hover and is not prefers-reduced-motion
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Detect touch-only screens
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!hasHover || prefersReducedMotion || isTouchDevice) {
      return;
    }

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    // Initialize GSAP positioning defaults
    gsap.set(ringRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(dotRef.current, { xPercent: -50, yPercent: -50 });

    // GSAP quickTo for ultra-smooth 60fps tracking
    const ringXTo = gsap.quickTo(ringRef.current, "x", { duration: 0.3, ease: "power3.out" });
    const ringYTo = gsap.quickTo(ringRef.current, "y", { duration: 0.3, ease: "power3.out" });

    const dotXTo = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power3.out" });
    const dotYTo = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power3.out" });

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    // Track click transitions with spring back
    const onMouseDown = () => {
      isClicked.current = true;
      gsap.to(ringRef.current, {
        scale: 0.75,
        duration: 0.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onMouseUp = () => {
      isClicked.current = false;
      gsap.to(ringRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)", // Smooth spring back animation
        overwrite: "auto",
      });
    };

    // Global Hover event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Check Button / Submit Input / custom elements
      const button = target.closest('button, [role="button"], .btn, input[type="submit"], input[type="button"]') as HTMLElement | null;
      if (button) {
        hoveredElementRef.current = button;
        hoverTypeRef.current = "button";

        const rect = button.getBoundingClientRect();
        gsap.to(ringRef.current, {
          width: rect.width + 12,
          height: rect.height + 12,
          borderRadius: "12px",
          borderWidth: "3px",
          boxShadow: "0 0 10px rgba(255, 107, 0, 0.3)",
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
        return;
      }

      // 2. Check Icon (circular icons or svg elements)
      const icon = target.closest('.social-icon, .icon-container, [data-cursor="icon"]') ||
                   (target.tagName.toLowerCase() === 'svg' ? target : target.closest('svg'));

      if (icon) {
        const interactiveParent = icon.closest('a, button, [role="button"]');
        if (interactiveParent || icon.classList.contains('social-icon') || icon.classList.contains('icon-container')) {
          const iconElement = (interactiveParent || icon) as HTMLElement;
          hoveredElementRef.current = iconElement;
          hoverTypeRef.current = "icon";

          const rect = iconElement.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height) + 16;
          gsap.to(ringRef.current, {
            width: size,
            height: size,
            borderRadius: "50%",
            borderWidth: "2px",
            boxShadow: "0 0 15px rgba(255, 107, 0, 0.5)",
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
          });
          return;
        }
      }

      // 3. Check text links / regular anchors
      const link = target.closest('a') as HTMLElement | null;
      if (link) {
        // If the link wraps an image or logo, fall back to standard circular wrap
        if (link.querySelector('img') || link.querySelector('svg')) {
          hoveredElementRef.current = link;
          hoverTypeRef.current = "icon";
          
          const rect = link.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height) + 16;
          gsap.to(ringRef.current, {
            width: size,
            height: size,
            borderRadius: "50%",
            borderWidth: "2px",
            boxShadow: "0 0 10px rgba(255, 107, 0, 0.3)",
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
          });
          return;
        }

        hoveredElementRef.current = link;
        hoverTypeRef.current = "link";

        const rect = link.getBoundingClientRect();
        gsap.to(ringRef.current, {
          width: rect.width + 16,
          height: rect.height + 8,
          borderRadius: "6px",
          borderWidth: "2px",
          boxShadow: "0 0 0px rgba(255, 107, 0, 0)",
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
        return;
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const currentHovered = hoveredElementRef.current;
      if (currentHovered && !currentHovered.contains(e.relatedTarget as Node)) {
        hoveredElementRef.current = null;
        hoverTypeRef.current = null;

        // Reset to default ring styling
        gsap.to(ringRef.current, {
          width: 30,
          height: 30,
          borderRadius: "50%",
          borderWidth: "2px",
          boxShadow: "0 0 0px rgba(255, 107, 0, 0)",
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    // GSAP Ticker animation loop (GPU-optimized)
    const onTick = () => {
      const activeElement = hoveredElementRef.current;
      const activeType = hoverTypeRef.current;

      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        if (activeType === "link") {
          // Wrap around the link text perfectly (snap to center)
          ringXTo(centerX);
          ringYTo(centerY);
        } else if (activeType === "button" || activeType === "icon") {
          // Magnetic attraction: pull cursor towards element center by 25%
          const pullX = centerX + (mouseX.current - centerX) * 0.25;
          const pullY = centerY + (mouseY.current - centerY) * 0.25;
          ringXTo(pullX);
          ringYTo(pullY);
        }
      } else {
        // Standard cursor tracking
        ringXTo(mouseX.current);
        ringYTo(mouseY.current);
      }

      // White center dot always follows the physical mouse pointer directly
      dotXTo(mouseX.current);
      dotYTo(mouseY.current);
    };

    gsap.ticker.add(onTick);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      gsap.ticker.remove(onTick);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-99999 mix-blend-difference"
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-99998"
        style={{
          width: "30px",
          height: "30px",
          border: "2px solid #FF6B00",
          backgroundColor: "transparent",
        }}
      />
    </>
  );
}
