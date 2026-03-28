import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  small?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  small = false,
}: CTAButtonProps) {
  const base = `inline-block font-body font-medium tracking-[0.06em] uppercase rounded-full transition-all duration-300 text-center ${
    small ? "px-6 py-2.5 text-[13px]" : "px-9 py-3.5 text-sm"
  }`;

  const variants = {
    primary:
      "bg-accent-primary text-white shadow-[0_2px_16px_rgba(168,200,232,0.3)] hover:bg-accent-hover hover:shadow-[0_4px_24px_rgba(168,200,232,0.4),0_0_40px_rgba(168,200,232,0.15)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-accent-primary border-[1.5px] border-accent-primary hover:bg-accent-primary/8 hover:border-accent-hover",
    ghost:
      "bg-white/10 text-white border border-white/30 backdrop-blur-[8px] hover:bg-white/20",
  };

  const props = {
    className: `${base} ${variants[variant]} ${className}`,
    ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  if (external) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
