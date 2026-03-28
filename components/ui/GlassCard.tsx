import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  light = false,
  hover = true,
}: GlassCardProps) {
  const bg = light
    ? "bg-white/45 border-white/60"
    : "bg-white/12 border-white/25";

  return (
    <div
      className={`
        ${bg}
        backdrop-blur-[16px] backdrop-saturate-[1.2]
        border rounded-[20px]
        p-8 md:p-6
        shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.3)]
        ${hover ? "hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)] hover:border-accent-primary/35 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
