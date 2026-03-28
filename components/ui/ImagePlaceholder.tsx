interface ImagePlaceholderProps {
  label: string;
  className?: string;
  circle?: boolean;
}

export function ImagePlaceholder({
  label,
  className = "",
  circle = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-bg-blue text-text-body font-body font-normal text-[13px] flex items-center justify-center text-center p-4 ${
        circle ? "rounded-full" : "rounded-[20px]"
      } ${className}`}
    >
      {label}
    </div>
  );
}
