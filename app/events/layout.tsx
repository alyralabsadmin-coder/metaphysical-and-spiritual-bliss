import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Classes",
  description:
    "Explore classes and events including intuition development, past life regression, singing bowl meditation, and energy sessions. Open to everyone.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
