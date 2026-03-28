"use client";

import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

const CHAR_LIMIT = 180;

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > CHAR_LIMIT;

  return (
    <p className="font-body italic text-text-heading text-[15px] leading-[1.7]">
      &ldquo;
      {isLong && !expanded ? text.slice(0, CHAR_LIMIT).trimEnd() + "..." : text}
      &rdquo;
      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="ml-2 text-accent-primary hover:text-accent-hover text-[13px] font-body font-medium not-italic"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </p>
  );
}

function ReviewCard({ review }: { review: (typeof TESTIMONIALS)[number] }) {
  return (
    <GlassCard light hover={false} className="text-center h-full flex flex-col justify-between !shadow-none">
      <div>
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>
        <ReviewText text={review.text} />
      </div>
      <div className="mt-4">
        <p className="font-body font-medium text-[14px] text-text-heading">
          {review.name}
        </p>
        <p className="font-body font-light text-[12px] text-text-light">
          {review.source}
        </p>
      </div>
    </GlassCard>
  );
}

// Desktop: infinite horizontal ticker
function DesktopTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate reviews for seamless loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!paused) {
        pos += speed;
        // Reset when first set scrolls out
        const halfWidth = ticker.scrollWidth / 2;
        if (pos >= halfWidth) pos = 0;
        ticker.style.transform = `translateX(-${pos}px)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={tickerRef}
        className="flex gap-8 will-change-transform"
        style={{ width: "max-content" }}
      >
        {doubled.map((review, i) => (
          <div key={i} className="w-[380px] flex-shrink-0">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Mobile: single card with arrows + dots
function MobileCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  // Swipe support
  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <div>
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 text-accent-primary hover:text-accent-hover transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 text-accent-primary hover:text-accent-hover transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Card */}
        <div className="px-8">
          <ReviewCard review={TESTIMONIALS[current]} />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to review ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent-primary scale-125"
                : "bg-accent-primary/25 hover:bg-accent-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialCarousel() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopTicker />
      </div>
      <div className="md:hidden">
        <MobileCarousel />
      </div>
    </>
  );
}
