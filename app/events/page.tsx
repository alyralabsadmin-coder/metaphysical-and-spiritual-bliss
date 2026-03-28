"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeUp } from "@/components/ui/FadeUp";
import { Footer } from "@/components/Footer";
import { CLASS_CARDS } from "@/lib/constants";

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        title="Events"
        imageSrc="/hero-events.jpg"
      />

      {/* Everything in one white section */}
      <SectionWrapper bg="white">
        {/* Energy Session — at the top */}
        <FadeUp className="mb-16 lg:mb-20 max-w-[720px] mx-auto">
          <GlassCard className="text-center">
            <span className="inline-block font-body text-sm font-medium text-gold tracking-[0.04em] uppercase mb-2">
              By Appointment Only
            </span>
            <h3 className="font-heading italic font-medium text-[28px] tracking-[0.02em] text-text-heading">
              Energy Session
            </h3>
            <p className="mt-4 text-text-body leading-[1.8]">
              Energy work impacts the body on many different levels ranging from
              emotional, physical and spiritual. Call or text 908 471 9698 for
              additional information and to schedule an appointment.
            </p>
            <div className="mt-6">
              <CTAButton href="/contact" variant="primary">
                Schedule a Session
              </CTAButton>
            </div>
          </GlassCard>
        </FadeUp>

        <FadeUp>
          <SectionHeading className="text-center mb-12">
            We Offer the Following Classes and/or Events
          </SectionHeading>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLASS_CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={i * 80}>
              <GlassCard className="text-center">
                <ImagePlaceholder
                  label={card.imageLabel}
                  circle
                  className="w-[120px] h-[120px] mx-auto mb-4"
                />
                <h3 className="font-heading font-medium text-[22px] tracking-[0.02em] text-text-heading">
                  {card.title}
                </h3>
                <div className="mt-4">
                  <CTAButton href="/contact" variant="secondary" small>
                    Learn More
                  </CTAButton>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Facebook Events */}
        <FadeUp className="text-center mt-16 lg:mt-20">
          <SectionHeading className="mb-6 text-center">
            Click Here for the Facebook Events Page
          </SectionHeading>
          <CTAButton
            href="https://www.facebook.com/cmatsen11/"
            variant="primary"
            external
          >
            View Facebook Events
          </CTAButton>
        </FadeUp>
      </SectionWrapper>

      <Footer />
    </>
  );
}
