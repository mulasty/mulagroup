"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@mulagroup/utils";

import { BrandLogo, type BrandLogoProps } from "./BrandLogo";

type InteractiveBrandLogoProps = BrandLogoProps & {
  baseScale?: number;
  containerClassName?: string;
};

const RESTING_GLOW_OPACITY = "0.45";

const formatMotionValue = (value: number) => value.toFixed(2);

export function InteractiveBrandLogo({
  alt,
  baseScale = 1,
  className,
  containerClassName,
  size,
  variant,
}: InteractiveBrandLogoProps) {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const applyTransform = (transform: string, glowTransform: string, glowOpacity: string) => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      if (logoRef.current) {
        logoRef.current.style.transform = transform;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = glowTransform;
        glowRef.current.style.opacity = glowOpacity;
      }
    });
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    const offsetX = (relativeX - 0.5) * 2;
    const offsetY = (relativeY - 0.5) * 2;
    const translateX = offsetX * 18;
    const translateY = offsetY * 18;
    const rotateY = offsetX * 10;
    const rotateX = offsetY * -8;
    const glowTranslateX = offsetX * 26;
    const glowTranslateY = offsetY * 22;

    applyTransform(
      `translate3d(${formatMotionValue(translateX)}px, ${formatMotionValue(translateY)}px, 0) rotateX(${formatMotionValue(rotateX)}deg) rotateY(${formatMotionValue(rotateY)}deg) scale(${formatMotionValue(baseScale)})`,
      `translate3d(${formatMotionValue(glowTranslateX)}px, ${formatMotionValue(glowTranslateY)}px, 0) scale(1.06)`,
      "0.8",
    );
  };

  const handlePointerLeave = () => {
    if (reducedMotion) {
      return;
    }

    applyTransform(
      `translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(${formatMotionValue(baseScale)})`,
      "translate3d(0, 0, 0) scale(1)",
      RESTING_GLOW_OPACITY,
    );
  };

  const logoProps: BrandLogoProps = {};

  if (alt) {
    logoProps.alt = alt;
  }

  if (className) {
    logoProps.className = className;
  }

  if (size) {
    logoProps.size = size;
  }

  if (variant) {
    logoProps.variant = variant;
  }

  return (
    <div
      className={cn("relative flex items-center justify-center", containerClassName)}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{ perspective: "1200px" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.3),_transparent_68%)] blur-3xl transition-opacity duration-300 ease-out sm:h-56 sm:w-56 lg:h-72 lg:w-72"
        ref={glowRef}
        style={{
          opacity: reducedMotion ? 0.35 : Number(RESTING_GLOW_OPACITY),
          transform: "translate3d(0, 0, 0) scale(1)",
        }}
      />
      <div
        className="transform-gpu transition-transform duration-300 ease-out will-change-transform"
        ref={logoRef}
        style={{ transform: `translate3d(0, 0, 0) scale(${formatMotionValue(baseScale)})` }}
      >
        <BrandLogo {...logoProps} />
      </div>
    </div>
  );
}
