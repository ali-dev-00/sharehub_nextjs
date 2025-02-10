"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Array to store star details
    const stars: { x: number; y: number; radius: number; alpha: number }[] = [];

    // Initialize stars
    const createStars = () => {
      stars.length = 0; // Clear stars on resize
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
        });
      }
    };
    createStars();

    // Function to draw stars on the canvas
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animate stars with GSAP
    const animateStars = () => {
      stars.forEach((star) => {
        gsap.to(star, {
          alpha: Math.random(),
          duration: 1 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          onUpdate: drawStars, // Redraw stars on alpha change
        });
      });
    };

    drawStars();
    animateStars();

    // Resize handler to adjust canvas size and recreate stars
    const resizeHandler = () => {
      setCanvasSize();
      createStars();
      drawStars();
    };

    window.addEventListener("resize", resizeHandler);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeHandler);
      gsap.globalTimeline.clear(); // Stop GSAP animations
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] bg-background" />;
}
