"use client";

import { useEffect, useState } from "react";

export default function AmbientGlow() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(107, 89, 76, 0.25), transparent 80%)`,
      }}
    />
  );
}
