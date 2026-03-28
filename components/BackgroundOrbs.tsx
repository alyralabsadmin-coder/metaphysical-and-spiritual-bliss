"use client";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Large flowing blue gradients */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "-15%",
          width: "55%",
          height: "40%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,200,232,0.6) 0%, transparent 55%)",
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "-10%",
          width: "45%",
          height: "35%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,200,232,0.45) 0%, transparent 55%)",
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "-5%",
          width: "40%",
          height: "30%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,200,232,0.4) 0%, transparent 55%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
