"use client";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Desktop orbs — hidden on mobile for performance */}
      <div className="hidden md:block">
        <div
          className="absolute rounded-full"
          style={{
            top: "5%",
            left: "-15%",
            width: "55%",
            height: "40%",
            background: "radial-gradient(circle, rgba(168,200,232,0.6) 0%, transparent 55%)",
            filter: "blur(120px)",
            willChange: "transform",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: "35%",
            right: "-10%",
            width: "45%",
            height: "35%",
            background: "radial-gradient(circle, rgba(168,200,232,0.45) 0%, transparent 55%)",
            filter: "blur(120px)",
            willChange: "transform",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: "65%",
            left: "-5%",
            width: "40%",
            height: "30%",
            background: "radial-gradient(circle, rgba(168,200,232,0.4) 0%, transparent 55%)",
            filter: "blur(120px)",
            willChange: "transform",
          }}
        />
      </div>
      {/* Mobile — single subtle orb for perf */}
      <div className="md:hidden">
        <div
          className="absolute rounded-full"
          style={{
            top: "10%",
            left: "-20%",
            width: "80%",
            height: "30%",
            background: "radial-gradient(circle, rgba(168,200,232,0.35) 0%, transparent 55%)",
            filter: "blur(80px)",
          }}
        />
      </div>
    </div>
  );
}
