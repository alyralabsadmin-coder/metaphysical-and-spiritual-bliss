"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeUp } from "@/components/ui/FadeUp";
import { Footer } from "@/components/Footer";
import { PRODUCT_CARDS } from "@/lib/constants";

export default function StoreSpotlightPage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        title="Store Spotlight"
        imageSrc="/hero-store.jpg"
        imagePosition="center 70%"
      />

      {/* Product Grid */}
      <SectionWrapper bg="white">
        <FadeUp>
          <SectionHeading className="text-center mb-12">
            Our Collection
          </SectionHeading>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {PRODUCT_CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={(i % 6) * 80}>
              <GlassCard className="text-center">
                {card.imageSrc ? (
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    loading="lazy"
                    className="w-[90px] h-[90px] rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <ImagePlaceholder
                    label={card.imageLabel}
                    circle
                    className="w-[90px] h-[90px] mx-auto mb-4"
                  />
                )}
                <h3 className="font-heading font-medium text-[22px] tracking-[0.02em] text-text-heading">
                  {card.title}
                </h3>
                <p className="mt-3 text-text-body text-[15px] leading-[1.8]">
                  {card.description}
                </p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
