"use client";

import { ReactNode, useEffect, useState } from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  cta?: ReactNode;
  tall?: boolean;
  imageLabel?: string;
  imageSrc?: string;
  /** CSS object-position value, e.g. "center 70%" — controls crop focal point */
  imagePosition?: string;
}

export function HeroBanner({
  title,
  subtitle,
  cta,
  tall = false,
  imageLabel = "Hero image, 1920×800",
  imageSrc,
  imagePosition = "center center",
}: HeroBannerProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`relative w-full overflow-hidden ${
        tall ? "h-[35vh] md:h-[55vh]" : "h-[20vh] md:h-[35vh]"
      }`}
    >
      {/* Background */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
      ) : (
        <div className="absolute inset-0 bg-bg-blue flex items-center justify-center">
          <span className="text-text-body font-body text-[13px]">{imageLabel}</span>
        </div>
      )}

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(90,107,122,0.4) 0%, rgba(90,107,122,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1
          className="font-heading italic font-medium text-white tracking-[0.04em] leading-[1.15] text-[32px] md:text-[42px] lg:text-[64px]"
          style={{
            WebkitTextStroke: "0.5px rgba(0,0,0,0.4)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 200ms",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-4 font-body font-normal text-white text-lg md:text-xl tracking-wide"
            style={{
              WebkitTextStroke: "0.3px rgba(0,0,0,0.3)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 400ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 400ms",
            }}
          >
            {subtitle}
          </p>
        )}

        {cta && (
          <div
            className="mt-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 600ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 600ms",
            }}
          >
            {cta}
          </div>
        )}
      </div>
    </section>
  );
}
