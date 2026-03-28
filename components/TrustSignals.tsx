"use client";

import { Star, Gift } from "lucide-react";
import { TRUST_SIGNALS } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCountUp } from "@/hooks/useCountUp";

function TrustItem({
  value,
  suffix,
  label,
  isStar,
  isSpecial,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isStar?: boolean;
  isSpecial?: boolean;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 1200, isVisible);

  return (
    <div className="text-center">
      <div className="text-[40px] md:text-[48px] font-heading font-light text-text-heading leading-none">
        {isStar ? (
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-gold text-gold" />
            ))}
          </div>
        ) : isSpecial ? (
          <Gift className="w-10 h-10 mx-auto text-accent-primary" />
        ) : (
          <>
            {count.toLocaleString()}
            {suffix}
          </>
        )}
      </div>
      <p className="mt-2 font-body text-sm text-text-body">{label}</p>
    </div>
  );
}

export function TrustSignals() {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
      {TRUST_SIGNALS.map((item, i) => (
        <TrustItem key={i} {...item} isVisible={isVisible} />
      ))}
    </div>
  );
}
