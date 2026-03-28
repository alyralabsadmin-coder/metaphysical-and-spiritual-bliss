"use client";

import { ReactNode, useEffect, useState } from "react";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  cta?: ReactNode;
  tall?: boolean;
  imageLabel?: string;
  imageSrc?: string;
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

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-6">
        <h1
          className="font-heading italic font-medium text-white tracking-[0.04em] leading-[1.15]"
          style={{
            fontSize: "clamp(28px, 6vw, 72px)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 200ms",
            willChange: "transform, opacity",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-3 md:mt-4 font-body font-normal text-white tracking-wide"
            style={{
              fontSize: "clamp(15px, 2.5vw, 22px)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1) 400ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 400ms",
              willChange: "transform, opacity",
            }}
          >
            {subtitle}
          </p>
        )}

        {cta && (
          <div
            className="mt-5 md:mt-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 500ms cubic-bezier(0.16,1,0.3,1) 600ms, transform 500ms cubic-bezier(0.16,1,0.3,1) 600ms",
              willChange: "transform, opacity",
            }}
          >
            {cta}
          </div>
        )}
      </div>
    </section>
  );
}
