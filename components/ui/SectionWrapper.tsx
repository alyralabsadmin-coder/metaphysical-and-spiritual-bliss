import { ReactNode } from "react";
import { GradientDivider } from "./GradientDivider";

interface SectionWrapperProps {
  children: ReactNode;
  bg?: "white" | "blue" | "cosmic";
  narrow?: boolean;
  className?: string;
  divider?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  bg = "white",
  narrow = false,
  className = "",
  divider = false,
  id,
}: SectionWrapperProps) {
  const isCosmic = bg === "cosmic";

  const bgClass = {
    white: "bg-bg-white",
    blue: "bg-bg-blue",
    cosmic: "cosmic-bg",
  }[bg];

  return (
    <section
      id={id}
      className={`w-full ${bgClass} py-16 md:py-16 lg:py-24 ${className}`}
    >
      <div
        className={`mx-auto px-6 md:px-10 lg:px-16 xl:px-20 ${
          narrow ? "max-w-[720px]" : "max-w-[1200px]"
        } ${isCosmic ? "text-white/90" : ""}`}
      >
        {children}
      </div>
      {divider && <GradientDivider className="mt-16 lg:mt-24" />}
    </section>
  );
}
