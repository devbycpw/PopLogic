import { useEffect, useRef, useState } from "react";
import { Sparkles, RefreshCw, Move } from "lucide-react";

export default function MorphingExperience() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Resize handler using ResizeObserver as instructed in the sizing guide
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;
        
        // Scale physics for canvas sharp display
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Keep track of target mouse position relative to center
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    // Outer Chrome & Cyan fluid rendering logic
    const render = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      time += 0.0055 * speedMultiplier;

      // Smooth mouse follow (easing)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const centerX = width / 2 + currentX;
      const centerY = height / 2 + currentY;
      
      // Responsive base dynamic radius
      const baseRadius = Math.min(width, height) * 0.28;

      // 1. Draw glowing background aura
      const auraGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        baseRadius * 2.2
      );
      auraGlow.addColorStop(0, "rgba(0, 240, 255, 0.12)"); // Electric Cyan aura
      auraGlow.addColorStop(0.5, "rgba(17, 117, 240, 0.04)"); // Marine blue glow
      auraGlow.addColorStop(1, "rgba(253, 251, 247, 0)"); // Fades to cream canvas
      
      ctx.fillStyle = auraGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw outer Chrome Reflective Shell with morphing vertex points (using noise simulation)
      const numPoints = 140;
      ctx.beginPath();

      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        
        // Complex fluid noise model (morphing noise using layered sin waves)
        const wave1 = Math.sin(angle * 3 + time * 1.5) * 22;
        const wave2 = Math.cos(angle * 5 - time * 2.2) * 12;
        const wave3 = Math.sin(angle * 8 + time * 0.8) * 8;
        const dynamicDeform = wave1 + wave2 + wave3;
        
        const r = baseRadius + dynamicDeform;
        
        const x = centerX + Math.cos(angle + time * 0.2) * r;
        const y = centerY + Math.sin(angle + time * 0.2) * r;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      // Create majestic Chrome Reflective gradient
      const chromeGrad = ctx.createLinearGradient(
        centerX - baseRadius,
        centerY - baseRadius,
        centerX + baseRadius,
        centerY + baseRadius
      );
      chromeGrad.addColorStop(0, "#E2E8F0"); // Light reflective silver
      chromeGrad.addColorStop(0.3, "#00F0FF"); // Highlight cyan reflex
      chromeGrad.addColorStop(0.45, "#1175f0"); // Marine reflection index
      chromeGrad.addColorStop(0.65, "#0b469c"); // Deep sea ocean absorption shadow
      chromeGrad.addColorStop(1, "#FDFBF7"); // Pure shiny cream highlight

      ctx.fillStyle = chromeGrad;
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.stroke();

      // 3. Draw Electric Cyan Inner Core (fluid energy core)
      ctx.beginPath();
      const corePoints = 90;
      const coreRadius = baseRadius * 0.58;

      for (let i = 0; i <= corePoints; i++) {
        const angle = (i / corePoints) * Math.PI * 2;
        
        // High frequency active core waves
        const c1 = Math.sin(angle * 4 - time * 3) * 12;
        const c2 = Math.cos(angle * 6 + time * 4) * 6;
        const coreDeform = c1 + c2;

        const cr = coreRadius + coreDeform;
        
        const x = centerX + Math.cos(angle - time * 0.4) * cr;
        const y = centerY + Math.sin(angle - time * 0.4) * cr;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      // Inner glowing core colors
      const innerCoreGrad = ctx.createRadialGradient(
        centerX - coreRadius * 0.2,
        centerY - coreRadius * 0.2,
        2,
        centerX,
        centerY,
        coreRadius
      );
      innerCoreGrad.addColorStop(0, "#FFFFFF"); // Incandescent white-hot center
      innerCoreGrad.addColorStop(0.2, "#00F0FF"); // Pure Electric Cyan
      innerCoreGrad.addColorStop(0.7, "#1175f0"); // Transition to Marine Blue
      innerCoreGrad.addColorStop(1, "rgba(11, 70, 156, 0.4)"); // Fuses dark margins

      ctx.fillStyle = innerCoreGrad;
      ctx.fill();
      
      // Core highlight flare line
      ctx.strokeStyle = "rgba(0, 240, 255, 0.9)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 4. Ambient Floating Micro-particles (reflecting cyan energy spheres)
      const numParticles = 18;
      for (let p = 0; p < numParticles; p++) {
        const orbitAngle = time * 0.5 + (p * Math.PI * 2) / numParticles;
        // Orbit scaling expands/contracts organically
        const orbitRadius = baseRadius * (1.35 + Math.sin(time + p) * 0.12);
        
        const px = centerX + Math.cos(orbitAngle) * orbitRadius;
        const py = centerY + Math.sin(orbitAngle) * orbitRadius;
        const pSize = Math.max(1.5, 3.5 + Math.sin(time * 2 + p) * 1.5);

        // Core dot
        ctx.fillStyle = "#00F0FF";
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();

        // Core cyan dot glow
        ctx.strokeStyle = "rgba(17, 117, 240, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, pSize * 2, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [speedMultiplier]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[480px] lg:h-[520px] flex items-center justify-center cursor-pointer select-none group"
      onMouseEnter={() => {
        setIsHovered(true);
        setSpeedMultiplier(2.5); // Accellerate morph on hover
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setSpeedMultiplier(1);
      }}
    >
      {/* Outer Glow Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full" id="morphing-3d-canvas" />

      {/* Decorative Overlay Info Cues */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2 bg-text-dark/95 backdrop-blur px-4 py-2 rounded-full border border-electric-cyan/25 shadow-lg pointer-events-none transition-all duration-300 group-hover:scale-105 group-hover:border-electric-cyan/60">
        <Move className="w-3.5 h-3.5 text-electric-cyan animate-bounce" />
        <span className="font-mono text-[10px] text-cream uppercase tracking-widest flex items-center gap-1">
          Hover to Morph <RefreshCw className={`w-2.5 h-2.5 inline text-electric-cyan ${isHovered ? "animate-spin" : ""}`} />
        </span>
      </div>

      {/* Ambient Decorative Corners */}
      <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-text-dark/40 tracking-[0.2em] uppercase select-none pointer-events-none hidden sm:block">
        [ SYS.NODE_07 ]
      </div>
      <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-text-dark/40 tracking-[0.2em] uppercase text-right select-none pointer-events-none hidden sm:block">
        [ REFLECTIONS: LIVE ]
      </div>
    </div>
  );
}
