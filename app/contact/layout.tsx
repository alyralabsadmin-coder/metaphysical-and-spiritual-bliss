import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit us at 8½ East Main Street, Clinton, NJ 08809. Open Wednesday–Sunday, 11am–5:30pm. Call or text (908) 471-9698.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
