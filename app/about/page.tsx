"use client";

import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FadeUp } from "@/components/ui/FadeUp";
import { TrustSignals } from "@/components/TrustSignals";
import { SOCIAL } from "@/lib/constants";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        title="About"
        imageSrc="/hero-about.jpg"
      />

      {/* About the Store */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeUp>
            <img
              src="/about-selenite.jpg"
              loading="lazy"
              alt="Raw selenite crystal"
              className="w-[80%] mx-auto aspect-square rounded-[20px] object-cover"
            />
          </FadeUp>
          <FadeUp delay={80}>
            <SectionHeading className="mb-6">
              About Metaphysical & Spiritual Bliss
            </SectionHeading>
            <p className="text-text-body leading-[1.8]">
              Metaphysical & Spiritual Bliss is a serene metaphysical shop nestled
              in the heart of Clinton, New Jersey with a wide variety of gifts for
              the mind, body, and soul — including tumbled stones, tarot cards,
              crystals, incense, candles, and much more!
            </p>
            <p className="mt-4 text-text-body leading-[1.8]">
              The{" "}
              <Link
                href="/store-spotlight"
                className="text-accent-primary hover:text-accent-hover underline underline-offset-2"
              >
                Store Spotlight
              </Link>{" "}
              gives you a glimpse at some of the items that are currently in store.
              We encourage you to pay us a visit in-person for the full experience,
              because there is a spiritual surprise in-store with every purchase
              that you won&apos;t see online! Stop in any time to ask about the
              unique treasures at Metaphysical & Spiritual Bliss.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-body hover:text-accent-primary transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-body hover:text-accent-primary transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <CTAButton href="/store-spotlight" variant="secondary">
                Browse the Collection
              </CTAButton>
            </div>
          </FadeUp>
        </div>

        {/* Trust Signals */}
        <FadeUp className="mt-16 lg:mt-20">
          <TrustSignals />
        </FadeUp>

        {/* Meet Cheryl — same white section, no cutoff */}
        <FadeUp className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:order-1">
              <SectionHeading className="mb-6">
                Meet Cheryl
              </SectionHeading>
              <p className="text-text-body leading-[1.8] italic">
                [Placeholder — Cheryl&apos;s bio will go here. 3-6 sentences about
                her journey, her gifts, and her passion for helping others on their
                spiritual path.]
              </p>
              <div className="mt-6">
                <CTAButton href="/contact" variant="primary">
                  Book a Reading
                </CTAButton>
              </div>
            </div>
            <div className="md:order-2">
              <ImagePlaceholder
                label="Portrait of Cheryl, 880×880"
                className="w-full aspect-square rounded-[20px]"
              />
            </div>
          </div>
        </FadeUp>
      </SectionWrapper>

      <Footer />
    </>
  );
}
