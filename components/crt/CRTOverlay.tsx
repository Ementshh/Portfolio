"use client";

export default function CRTOverlay() {
  return (
    <>
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none z-30" />
      
      {/* Subtle static noise */}
      <div className="absolute inset-0 static-noise opacity-[0.02] pointer-events-none z-25" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)"
        }}
      />
      
      {/* Screen reflection */}
      <div 
        className="absolute inset-0 pointer-events-none z-35 opacity-[0.03]"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)"
        }}
      />
    </>
  );
}
