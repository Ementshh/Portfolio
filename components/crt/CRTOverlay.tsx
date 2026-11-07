"use client";

export default function CRTOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]"
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      {/* Scanlines + moving refresh bar */}
      <div className="absolute inset-0 scanlines" />

      {/* GPU-composited static noise (oversized tiled layer shifted via translate3d) */}
      <div className="static-noise" />

      {/* CRT curvature vignette & phosphor screen glow */}
      <div className="absolute inset-0 crt-curve crt-glow" />

      {/* Screen reflection */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
