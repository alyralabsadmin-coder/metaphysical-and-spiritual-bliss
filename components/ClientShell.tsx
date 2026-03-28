"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";

const BackgroundOrbs = dynamic(
  () => import("@/components/BackgroundOrbs").then((m) => ({ default: m.BackgroundOrbs })),
  { ssr: false }
);

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundOrbs />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
