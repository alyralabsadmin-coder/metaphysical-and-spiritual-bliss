"use client";

import { useState } from "react";
import { FacebookIcon, InstagramIcon } from "./ui/SocialIcons";
import { CONTACT, SOCIAL } from "@/lib/constants";

interface FooterProps {
  preContent?: React.ReactNode;
}

export function Footer({ preContent }: FooterProps) {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden">
      {/* Single seamless gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1e2a4a 0%, #1e2a4a 20%, #1a1f3a 50%, #151a2e 75%, #0f1220 100%)",
        }}
      />

      {/* Mesh nebula blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 500px 300px at 15% 20%, rgba(168,200,232,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 85% 50%, rgba(140,100,200,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 350px 250px at 50% 80%, rgba(100,140,220,0.06) 0%, transparent 70%)
          `,
        }}
      />

      {/* Star particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 12% 15%, rgba(255,255,255,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.25) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 58% 10%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 40%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 88% 75%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 22% 85%, rgba(255,255,255,0.25) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 65% 90%, rgba(255,255,255,0.2) 0%, transparent 100%)
          `,
        }}
      />

      <div className="relative z-10">
        {/* Page-specific content rendered inside the footer gradient */}
        {preContent}

        {/* Newsletter */}
        <div className="py-10 md:py-16">
          <div className="max-w-[720px] mx-auto px-4 md:px-10 text-center">
            <h2 className="font-heading italic font-medium tracking-[0.03em] leading-[1.2] text-white" style={{ fontSize: "clamp(22px, 4vw, 28px)" }}>
              Stay in the Light
            </h2>
            <p className="mt-3 font-body font-normal text-[15px] text-white/60">
              Receive updates on events, new arrivals, and spiritual insights.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/8 backdrop-blur-[16px] border border-white/15 text-white placeholder:text-white/30 font-body text-[14px] md:text-[15px] px-5 py-3 md:py-3.5 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-accent-hover min-h-[44px]"
              />
              <button
                type="button"
                className="bg-accent-primary text-white font-body font-medium text-[13px] tracking-[0.06em] uppercase px-6 md:px-8 py-3 md:py-3.5 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-accent-hover transition-all duration-300 shadow-[0_2px_16px_rgba(168,200,232,0.3)] hover:shadow-[0_4px_24px_rgba(168,200,232,0.4)] min-h-[44px]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="mx-auto w-[40%] max-w-[400px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Info columns */}
        <div className="py-12 md:py-14">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white/60">
              {/* Hours */}
              <div>
                <h3 className="font-heading italic font-medium text-lg text-white/85 tracking-[0.02em]">
                  Hours
                </h3>
                <p className="mt-2 font-body text-[15px]">{CONTACT.hours}</p>
                <p className="font-body text-[15px]">{CONTACT.time}</p>
              </div>

              {/* Visit Us */}
              <div>
                <h3 className="font-heading italic font-medium text-lg text-white/85 tracking-[0.02em]">
                  Visit Us
                </h3>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-body text-[15px] hover:text-accent-primary transition-colors"
                >
                  <p>{CONTACT.address}</p>
                  <p>{CONTACT.city}</p>
                </a>
              </div>

              {/* Get in Touch */}
              <div>
                <h3 className="font-heading italic font-medium text-lg text-white/85 tracking-[0.02em]">
                  Get in Touch
                </h3>
                <a
                  href={CONTACT.phoneTel}
                  className="mt-2 inline-block font-body text-[15px] hover:text-accent-primary transition-colors"
                >
                  {CONTACT.phone}
                </a>
                <p className="font-body text-sm text-white/35">Call or text anytime</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-2 mt-8">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-accent-primary hover:drop-shadow-[0_0_8px_rgba(168,200,232,0.4)] transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-accent-primary hover:drop-shadow-[0_0_8px_rgba(168,200,232,0.4)] transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 py-5">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-2">
            <span className="font-heading italic font-normal text-[15px] text-white/30">
              Metaphysical & Spiritual Bliss
            </span>
            <span className="font-body font-light text-[13px] text-white/20">
              &copy; {year} All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
