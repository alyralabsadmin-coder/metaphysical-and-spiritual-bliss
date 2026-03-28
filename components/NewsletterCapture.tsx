"use client";

import { useState } from "react";

interface NewsletterCaptureProps {
  /** When true, renders as an inline block (e.g. inside footer). When false, renders as a full-width cosmic section. */
  inline?: boolean;
}

export function NewsletterCapture({ inline = false }: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");

  const inner = (
    <div className={`${inline ? "" : "max-w-[720px] mx-auto px-6 md:px-10"} text-center`}>
      <h2
        className={`font-heading italic font-medium text-[28px] tracking-[0.03em] leading-[1.2] ${
          inline ? "text-text-heading" : "text-white"
        }`}
      >
        Stay in the Light
      </h2>
      <p
        className={`mt-3 font-body font-normal text-[15px] ${
          inline ? "text-text-body" : "text-white/70"
        }`}
      >
        Receive updates on events, new arrivals, and spiritual insights.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 backdrop-blur-[16px] border font-body text-[15px] px-6 py-3.5 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-accent-hover ${
            inline
              ? "bg-white/45 border-white/60 text-text-heading placeholder:text-text-light"
              : "bg-white/10 border-white/20 text-white placeholder:text-white/40"
          }`}
        />
        <button
          type="button"
          className="bg-accent-primary text-white font-body font-medium text-sm tracking-[0.06em] uppercase px-8 py-3.5 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-accent-hover transition-all duration-300 shadow-[0_2px_16px_rgba(168,200,232,0.3)] hover:shadow-[0_4px_24px_rgba(168,200,232,0.4)]"
        >
          Subscribe
        </button>
      </div>
    </div>
  );

  if (inline) return inner;

  return (
    <section className="w-full cosmic-bg py-14 md:py-16">
      <div className="relative z-1">{inner}</div>
    </section>
  );
}
