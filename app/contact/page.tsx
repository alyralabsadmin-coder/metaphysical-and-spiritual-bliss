"use client";

import { Phone, MapPin, Share2 } from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/ui/FadeUp";
import { Footer } from "@/components/Footer";
import { CONTACT, SOCIAL } from "@/lib/constants";

const contactCards = [
  {
    icon: Phone,
    label: "Telephone",
    content: CONTACT.phone,
    href: CONTACT.phoneTel,
    external: false,
  },
  {
    icon: MapPin,
    label: "Address",
    content: `${CONTACT.address}\n${CONTACT.city}`,
    href: CONTACT.mapsUrl,
    external: true,
  },
  {
    icon: Share2,
    label: "Social Media",
    content: null,
    links: [
      { label: "Facebook", href: SOCIAL.facebook },
      { label: "Instagram", href: SOCIAL.instagram },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        title="Contact"
        imageSrc="/hero-contact.png"
      />

      {/* Contact Cards */}
      <SectionWrapper bg="white" divider={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, i) => (
            <FadeUp key={card.label} delay={i * 80}>
              <GlassCard light className="text-center">
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-accent-primary/15 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="font-heading font-medium text-lg tracking-[0.02em] text-text-heading mb-3">
                  {card.label}
                </h3>
                {card.content && (
                  <a
                    href={card.href}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-text-body hover:text-accent-primary transition-colors whitespace-pre-line text-[15px]"
                  >
                    {card.content}
                  </a>
                )}
                {card.links && (
                  <div className="flex flex-col gap-1">
                    {card.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary hover:text-accent-hover transition-colors text-[15px]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </GlassCard>
            </FadeUp>
          ))}
        </div>

        {/* Google Map */}
        <FadeUp className="mt-12">
          <div className="rounded-[20px] overflow-hidden max-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.7!2d-74.9097!3d40.6368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3f1e4c8e!2s8+1%2F2+E+Main+St%2C+Clinton%2C+NJ+08809!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Metaphysical & Spiritual Bliss location"
              className="w-full"
            />
          </div>
        </FadeUp>
      </SectionWrapper>

      <Footer />
    </>
  );
}
