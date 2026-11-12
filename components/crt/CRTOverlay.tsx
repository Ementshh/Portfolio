"use client";

import { useEffect, useState } from "react";

let cachedNoiseDataUrl: string | null = null;

function getNoiseDataUrl(): string {
  if (cachedNoiseDataUrl) return cachedNoiseDataUrl;

  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  // Pre-bake a 128x128 CRT phosphor grain bitmap once (zero ongoing CPU filter cost)
  // Includes both bright cyan speckles (visible on dark mode) and dark slate speckles (visible on light mode)
  for (let i = 0; i < data.length; i += 4) {
    const rand = Math.random();
    if (rand > 0.55) {
      data[i] = 178;     // R
      data[i + 1] = 230; // G
      data[i + 2] = 255; // B (bright cyan phosphor for dark mode)
      data[i + 3] = Math.floor(Math.random() * 22) + 4;
    } else if (rand < 0.45) {
      data[i] = 0;       // R
      data[i + 1] = 50;  // G
      data[i + 2] = 100; // B (dark blue-slate grain for light mode)
      data[i + 3] = Math.floor(Math.random() * 24) + 6;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  cachedNoiseDataUrl = canvas.toDataURL("image/png");
  return cachedNoiseDataUrl;
}

export default function CRTOverlay() {
  const [noiseUrl, setNoiseUrl] = useState<string>("");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const updateNoise = (matches: boolean) => {
      if (matches) {
        setNoiseUrl(getNoiseDataUrl());
      } else {
        setNoiseUrl("");
      }
    };

    updateNoise(mq.matches);

    const handler = (e: MediaQueryListEvent) => updateNoise(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]"
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      {/* Static horizontal scanlines + GPU-animated refresh bar */}
      <div className="absolute inset-0 scanlines" />

      {/* GPU-composited raster static noise (desktop only, shifted via translate3d) */}
      {noiseUrl && (
        <div
          className="static-noise"
          style={{ backgroundImage: `url(${noiseUrl})` }}
        />
      )}

      {/* Combined static CRT curvature vignette, phosphor glow & screen reflection */}
      <div className="absolute inset-0 crt-vignette" />
    </div>
  );
}
