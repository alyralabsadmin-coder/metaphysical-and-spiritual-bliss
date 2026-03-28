"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeUp } from "@/components/ui/FadeUp";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Footer } from "@/components/Footer";
import { FEATURE_CARDS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        title="Metaphysical & Spiritual Bliss"
        subtitle="Gifts for the mind, body, and soul"
        tall
        imageSrc="/hero-home-wide.png"
        imagePosition="center top"
        cta={
          <CTAButton href="/contact" variant="ghost">
            Book a Reading
          </CTAButton>
        }
      />

      {/* Follow Your Bliss + Testimonials — white */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeUp>
            <img
              src="/follow-your-bliss.jpg"
              alt="Spiritual sky with sun rays through clouds"
              className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] mx-auto rounded-full object-cover"
            />
          </FadeUp>
          <FadeUp delay={80}>
            <SectionHeading className="mb-6">Follow Your Bliss</SectionHeading>
            <p className="text-text-body leading-[1.8]">
              Sometimes in the face of adversity we need to take a risk, trust our
              intuition, and let faith be our guiding light. Fulfill your dreams and
              allow the Universe and your passion to lead the way on your soul&apos;s
              journey.
            </p>
            <p className="mt-4 text-text-body leading-[1.8]">
              Metaphysical & Spiritual Bliss was created to guide you on your
              soul&apos;s journey!
            </p>
          </FadeUp>
        </div>

        {/* Testimonials */}
        <FadeUp className="mt-16 lg:mt-20">
          <SectionHeading className="text-center mb-10">
            What Our Visitors Are Saying
          </SectionHeading>
        </FadeUp>
        <FadeUp delay={80}>
          <TestimonialCarousel />
        </FadeUp>
      </SectionWrapper>

      {/* Feature Cards — light blue accent section */}
      <SectionWrapper bg="white">
        <FadeUp>
          <SectionHeading className="text-center mb-12">
            Explore Your Path
          </SectionHeading>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={i * 80}>
              <GlassCard light className="text-center">
                {card.imageSrc ? (
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-[120px] h-[120px] rounded-full object-cover mx-auto mb-5"
                  />
                ) : (
                  <ImagePlaceholder
                    label={card.imageLabel}
                    circle
                    className="w-[120px] h-[120px] mx-auto mb-5"
                  />
                )}
                <h3 className="font-heading font-medium text-[24px] tracking-[0.02em] text-text-heading">
                  {card.title}
                </h3>
                <p className="mt-3 text-text-body text-[15px] leading-[1.8]">
                  {card.description}
                </p>
                <div className="mt-6">
                  <CTAButton href={card.href} variant="secondary" small>
                    {card.cta}
                  </CTAButton>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
