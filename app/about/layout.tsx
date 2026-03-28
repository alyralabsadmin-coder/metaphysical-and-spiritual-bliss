import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Metaphysical & Spiritual Bliss — a serene metaphysical shop nestled in the heart of Clinton, New Jersey with gifts for the mind, body, and soul.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
