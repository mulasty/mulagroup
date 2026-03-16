import { cn } from "@mulagroup/utils";

export type BrandLogoVariant = "black" | "blue" | "gold" | "white";
export type BrandLogoSize = "lg" | "md" | "sm";

const logoSources: Record<BrandLogoVariant, string> = {
  black: "/brand/logos/mula-group-badge-black.png",
  blue: "/brand/logos/mula-group-badge-blue.png",
  gold: "/brand/logos/mula-group-badge-gold.png",
  white: "/brand/logos/mula-group-badge-white.png",
};

const logoSizes: Record<BrandLogoSize, string> = {
  sm: "h-10 w-10 sm:h-11 sm:w-11",
  md: "h-12 w-12 sm:h-14 sm:w-14",
  lg: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]",
};

const logoPixels: Record<BrandLogoSize, number> = {
  sm: 44,
  md: 56,
  lg: 72,
};

export type BrandLogoProps = {
  alt?: string;
  className?: string;
  size?: BrandLogoSize;
  variant?: BrandLogoVariant;
};

export function BrandLogo({
  alt = "Mula Group logo",
  className,
  size = "md",
  variant = "white",
}: BrandLogoProps) {
  const pixelSize = logoPixels[size];

  return (
    // The same local asset path exists in every app/public folder, so a plain img keeps the
    // shared UI package framework-agnostic while still using optimized static files per app.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={cn("object-contain", logoSizes[size], className)}
      decoding="async"
      height={pixelSize}
      src={logoSources[variant]}
      width={pixelSize}
    />
  );
}
