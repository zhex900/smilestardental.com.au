"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full overflow-hidden", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize}
          animationSpeed={animationSpeed}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent" />
      )}
    </div>
  );
};

const DotMatrix: React.FC<{
  colors: number[][];
  dotSize: number;
  animationSpeed: number;
}> = ({ colors, dotSize, animationSpeed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const dots: Array<{
      x: number;
      y: number;
      opacity: number;
      delay: number;
      color: string;
    }> = [];

    // Create dots
    const spacing = 20;
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        dots.push({
          x: j * spacing,
          y: i * spacing,
          opacity: 0,
          delay: Math.random() * 2,
          color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        });
      }
    }

    let startTime = Date.now();
    let animationId: number;

    const animate = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const progress = Math.max(0, currentTime - dot.delay) * animationSpeed;
        dot.opacity = Math.min(1, progress) * (0.3 + Math.random() * 0.7);

        if (dot.opacity > 0) {
          ctx.fillStyle = dot.color;
          ctx.globalAlpha = dot.opacity;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [colors, dotSize, animationSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default CanvasRevealEffect;