interface SectionHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={`font-heading italic font-normal text-[30px] md:text-[34px] lg:text-[38px] tracking-[0.03em] leading-[1.2] text-text-heading ${className}`}
    >
      {children}
    </Tag>
  );
}
