interface GradientDividerProps {
  short?: boolean;
  className?: string;
}

export function GradientDivider({ short = false, className = "" }: GradientDividerProps) {
  return (
    <div
      className={`mx-auto h-px ${
        short
          ? "w-[30%] max-w-[360px] opacity-30"
          : "w-[60%] max-w-[720px] opacity-50"
      } ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #A8C8E8 25%, #D4C5E8 75%, transparent 100%)",
      }}
    />
  );
}
