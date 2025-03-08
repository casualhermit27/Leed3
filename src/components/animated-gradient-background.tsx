"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AnimatedGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let gradientPosition = { x: 0, y: 0 };
    let targetPosition = { x: 0, y: 0 };
    let animationFrameId: number;

    // Set initial gradient position
    updateGradient(0, 0);

    // Update gradient position based on mouse movement
    function updateGradient(mouseX: number, mouseY: number) {
      if (!container) return;

      // Calculate relative position
      const width = window.innerWidth;
      const height = window.innerHeight;

      targetPosition = {
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
      };
    }

    // Smooth animation
    function animateGradient() {
      // Smoothly interpolate current position toward target position
      gradientPosition.x += (targetPosition.x - gradientPosition.x) * 0.05;
      gradientPosition.y += (targetPosition.y - gradientPosition.y) * 0.05;

      // Apply the gradient position
      const x = gradientPosition.x;
      const y = gradientPosition.y;

      // Different gradients for light and dark modes
      if (resolvedTheme === "dark") {
        container.style.background = `
          radial-gradient(circle at ${x}% ${y}%, rgba(50, 50, 150, 0.15) 0%, rgba(30, 30, 60, 0) 50%),
          radial-gradient(circle at ${100 - x}% ${y}%, rgba(100, 50, 200, 0.1) 0%, rgba(30, 30, 60, 0) 60%),
          radial-gradient(circle at ${x}% ${100 - y}%, rgba(50, 100, 200, 0.1) 0%, rgba(30, 30, 60, 0) 50%),
          radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(100, 100, 255, 0.05) 0%, rgba(30, 30, 60, 0) 70%)
        `;
      } else {
        container.style.background = `
          radial-gradient(circle at ${x}% ${y}%, rgba(200, 220, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at ${100 - x}% ${y}%, rgba(220, 200, 255, 0.3) 0%, rgba(255, 255, 255, 0) 60%),
          radial-gradient(circle at ${x}% ${100 - y}%, rgba(200, 230, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(220, 220, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)
        `;
      }

      animationFrameId = requestAnimationFrame(animateGradient);
    }

    // Start animation
    animateGradient();

    // Add mouse move listener
    function handleMouseMove(e: MouseEvent) {
      updateGradient(e.clientX, e.clientY);
    }

    // Add scroll listener to create parallax effect
    function handleScroll() {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / height;

      // Slightly adjust gradient based on scroll position
      updateGradient(
        targetPosition.x + scrollPercent * 20,
        targetPosition.y + scrollPercent * 30,
      );
    }

    // Auto animation when no mouse movement
    let autoAnimationInterval: NodeJS.Timeout;
    function startAutoAnimation() {
      let time = 0;
      autoAnimationInterval = setInterval(() => {
        time += 0.01;
        const x = 50 + Math.sin(time) * 30;
        const y = 50 + Math.cos(time * 0.8) * 30;
        updateGradient(
          (x * window.innerWidth) / 100,
          (y * window.innerHeight) / 100,
        );
      }, 50);
    }

    // Start auto animation initially
    startAutoAnimation();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Clear auto animation when mouse moves
    let mouseTimeout: NodeJS.Timeout;
    function handleMouseActivity() {
      clearInterval(autoAnimationInterval);
      clearTimeout(mouseTimeout);

      // Restart auto animation after 5 seconds of inactivity
      mouseTimeout = setTimeout(() => {
        startAutoAnimation();
      }, 5000);
    }

    window.addEventListener("mousemove", handleMouseActivity);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(autoAnimationInterval);
      clearTimeout(mouseTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseActivity);
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 transition-all duration-1000"
      style={{ opacity: 0.8 }}
    />
  );
}
