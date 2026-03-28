import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store Spotlight",
  description:
    "Browse our collection of healing crystals, divination tools, handcrafted candles, Himalayan salt lamps, jewelry, and unique spiritual treasures in Clinton, NJ.",
};

export default function StoreSpotlightLayout({ children }: { children: React.ReactNode }) {
  return children;
}
