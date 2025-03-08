"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      originalSize: number;
      angle: number;
      angleSpeed: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.originalSize = Math.random() * 4 + 1;
        this.size = this.originalSize;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.angle = Math.random() * 360;
        this.angleSpeed = Math.random() * 0.5 - 0.25;
        this.pulseSpeed = Math.random() * 0.1;

        // Different color schemes for dark and light modes
        if (resolvedTheme === "dark") {
          const blueHue = Math.floor(Math.random() * 60) + 200; // Blue range
          const saturation = Math.floor(Math.random() * 40) + 60; // 60-100%
          const lightness = Math.floor(Math.random() * 20) + 50; // 50-70%
          this.color = `hsla(${blueHue}, ${saturation}%, ${lightness}%, 0.4)`;
        } else {
          const blueHue = Math.floor(Math.random() * 60) + 180; // Blue-purple range
          const saturation = Math.floor(Math.random() * 30) + 70; // 70-100%
          const lightness = Math.floor(Math.random() * 20) + 70; // 70-90%
          this.color = `hsla(${blueHue}, ${saturation}%, ${lightness}%, 0.2)`;
        }
      }

      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Rotate particles
        this.angle += this.angleSpeed;

        // Pulse size
        this.size =
          this.originalSize +
          Math.sin(Date.now() * this.pulseSpeed) * (this.originalSize * 0.5);

        // Wrap around screen edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);

        // Draw a more interesting shape - a small star
        ctx.fillStyle = this.color;
        ctx.beginPath();

        // Simple circle with glow effect
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();

        ctx.restore();
      }
    }

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(60, Math.floor(window.innerWidth / 25));

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Connect particles with lines
    function connect() {
      if (!ctx) return;
      const maxDistance = 180;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;

            // Create gradient for line
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x,
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y,
            );

            if (resolvedTheme === "dark") {
              gradient.addColorStop(0, `rgba(100, 100, 255, ${opacity * 0.3})`);
              gradient.addColorStop(1, `rgba(150, 100, 255, ${opacity * 0.3})`);
            } else {
              gradient.addColorStop(
                0,
                `rgba(100, 150, 255, ${opacity * 0.15})`,
              );
              gradient.addColorStop(
                1,
                `rgba(150, 100, 255, ${opacity * 0.15})`,
              );
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 2;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connect();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 transition-opacity duration-1000"
    />
  );
}
