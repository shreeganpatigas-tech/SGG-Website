import { useEffect, useRef, useState } from "react";

interface TurbineNode {
  x: number;
  y: number;
  z: number;
  r: number;
  color: string;
}

export default function IndustrialScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pressure, setPressure] = useState<number>(148.6);
  const [activeGas, setActiveGas] = useState<string>("Oxygen (O₂)");

  // Randomize gas label and pressure fluctuations slightly for operational liveness
  useEffect(() => {
    const interval = setInterval(() => {
      setPressure((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        const next = prev + delta;
        return parseFloat(Math.min(Math.max(next, 142.0), 154.0).toFixed(1));
      });
    }, 1500);

    const gases = ["Oxygen (O₂)", "Nitrogen (N₂)", "Argon (Ar)", "LPG (C₃H₈)"];
    const labelInterval = setInterval(() => {
      setActiveGas((prev) => {
        const idx = gases.indexOf(prev);
        const nextIdx = (idx + 1) % gases.length;
        return gases[nextIdx];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(labelInterval);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angleX = 0.25;
    let angleY = -0.45;
    let angleZ = 0;
    
    // Interactive mouse controls for cinematic parallax depth
    let mouseX = 0;
    let mouseY = 0;
    let targetAngleX = 0.25;
    let targetAngleY = -0.45;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleY = -0.45 + x * 0.4;
      targetAngleX = 0.25 + y * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(resizeCanvas);
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // 3D projections variables
    const scale = 110;
    
    // Generate static point mesh of industrial equipment, tanks, and platform
    // 3D coordinate arrays
    // Spherical Oxygen Storage Tank (Sphere mesh)
    const tankPoints: TurbineNode[] = [];
    const tankLines: [number, number][] = [];
    const sphereRadius = 1.0;
    const sphereLatitude = 7;
    const sphereLongitude = 12;

    for (let i = 0; i < sphereLatitude; i++) {
      const lat = (Math.PI * i) / (sphereLatitude - 1) - Math.PI / 2;
      for (let j = 0; j < sphereLongitude; j++) {
        const lon = (2 * Math.PI * j) / sphereLongitude;
        const x = sphereRadius * Math.cos(lat) * Math.cos(lon) - 1.2;
        const y = sphereRadius * Math.sin(lat) + 0.3;
        const z = sphereRadius * Math.cos(lat) * Math.sin(lon);
        tankPoints.push({ x, y, z, r: 1.5, color: "#6EC1E4" });
      }
    }

    // Add longitudinal connection lines
    for (let i = 0; i < sphereLatitude; i++) {
      const offset = i * sphereLongitude;
      for (let j = 0; j < sphereLongitude; j++) {
        const p1 = offset + j;
        const p2 = offset + ((j + 1) % sphereLongitude);
        tankLines.push([p1, p2]);
        if (i < sphereLatitude - 1) {
          const p3 = p1 + sphereLongitude;
          tankLines.push([p1, p3]);
        }
      }
    }

    // Add vertical high-pressure cylinder points and cylinders
    const cylinderIndexOffset = tankPoints.length;
    const cylinderHeight = 2.0;
    const cylinderRadius = 0.32;
    const cylinderRotations = 8;
    const cylinderLevels = 5;

    // We will place 2 large compression columns on key Coordinates
    const columnPositions = [
      { cx: 0.6, cz: -0.6, name: "N₂ Unit", color: "#BFC3C7" },
      { cx: 1.5, cz: 0.5, name: "LPG Unit", color: "#F39C12" }
    ];

    columnPositions.forEach((col, cIdx) => {
      const baseIdx = tankPoints.length;
      for (let l = 0; l < cylinderLevels; l++) {
        const y = (l / (cylinderLevels - 1)) * cylinderHeight - 1.0;
        for (let r = 0; r < cylinderRotations; r++) {
          const theta = (2 * Math.PI * r) / cylinderRotations;
          const x = col.cx + cylinderRadius * Math.cos(theta);
          const z = col.cz + cylinderRadius * Math.sin(theta);
          tankPoints.push({ x, y, z, r: 1.2, color: col.color });
        }
      }

      // Connectivity
      for (let l = 0; l < cylinderLevels; l++) {
        const levelOffset = baseIdx + l * cylinderRotations;
        for (let r = 0; r < cylinderRotations; r++) {
          const curr = levelOffset + r;
          const next = levelOffset + ((r + 1) % cylinderRotations);
          tankLines.push([curr, next]);
          if (l < cylinderLevels - 1) {
            const nextLevelNode = curr + cylinderRotations;
            tankLines.push([curr, nextLevelNode]);
          }
        }
      }
    });

    // Create 3D Pipeline networks
    const pipelinePoints: { x: number; y: number; z: number }[] = [];
    const pipelineColors = ["#6EC1E4", "#F39C12", "#BFC3C7"];
    
    // Oxygen line (glowing cyan): sphere to ground to columns
    const oLinePoints = [
      { x: -1.2, y: -1.0, z: 0 },
      { x: -1.2, y: -1.2, z: 0.8 },
      { x: 0.6, y: -1.2, z: 0.8 },
      { x: 0.6, y: -1.0, z: -0.6 }
    ];

    // Condensation particles flowing in pipes
    interface FlowParticle {
      pipeIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const flowParticles: FlowParticle[] = [
      { pipeIndex: 0, progress: 0.1, speed: 0.006, color: "#6EC1E4" },
      { pipeIndex: 0, progress: 0.5, speed: 0.005, color: "#6EC1E4" },
      { pipeIndex: 0, progress: 0.8, speed: 0.007, color: "#6EC1E4" },
      { pipeIndex: 1, progress: 0.2, speed: 0.008, color: "#F39C12" },
      { pipeIndex: 1, progress: 0.6, speed: 0.009, color: "#F39C12" },
      { pipeIndex: 2, progress: 0.4, speed: 0.005, color: "#BFC3C7" }
    ];

    const pipePaths = [
      // Pipe 1 (Oxygen Blue)
      [
        { x: -1.2, y: 0.3, z: 0 },
        { x: -1.2, y: -1.2, z: 0 },
        { x: 0.6, y: -1.2, z: 0 },
        { x: 0.6, y: -1.0, z: -0.6 }
      ],
      // Pipe 2 (LPG Orange)
      [
        { x: 1.5, y: -1.0, z: 0.5 },
        { x: 1.5, y: -1.3, z: 0.5 },
        { x: -1.2, y: -1.3, z: -0.5 },
        { x: -1.2, y: -0.7, z: 0 }
      ],
      // Pipe 3 (Nitrogen Silver)
      [
        { x: 0.6, y: -1.0, z: -0.6 },
        { x: 0.6, y: -1.4, z: -0.6 },
        { x: 1.5, y: -1.4, z: 0.5 }
      ]
    ];

    // Atmospheric mist / condensation vapor particles
    interface VaporParticle {
      x: number;
      y: number;
      z: number;
      vy: number;
      vx: number;
      size: number;
      alpha: number;
      maxAlpha: number;
    }

    const vaporParticles: VaporParticle[] = [];
    const maxVapors = 18;
    for (let i = 0; i < maxVapors; i++) {
      vaporParticles.push({
        x: -1.2 + (Math.random() - 0.5) * 0.4,
        y: -1.0 + Math.random() * 2.0,
        z: (Math.random() - 0.5) * 1.5,
        vy: 0.01 + Math.random() * 0.015,
        vx: (Math.random() - 0.5) * 0.005,
        size: 3 + Math.random() * 6,
        alpha: 0,
        maxAlpha: 0.15 + Math.random() * 0.25
      });
    }

    const renderLoop = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;

      // Clear with elegant deep industrial gradient
      ctx.clearRect(0, 0, w, h);
      
      // Interpolate angles for smooth orbital rotation
      angleY += (targetAngleY - angleY) * 0.05;
      angleX += (targetAngleX - angleX) * 0.05;
      
      // Auto hover pulse rotation (slow cinematic drifting)
      const autoAngleZ = Date.now() * 0.0001;

      // Projection mapping matrices
      const cosY = Math.cos(angleY + autoAngleZ);
      const sinY = Math.sin(angleY + autoAngleZ);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const project = (pt: { x: number; y: number; z: number }) => {
        // Rotate Y (yaw)
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.x * sinY + pt.z * cosY;
        
        // Rotate X (pitch)
        let y2 = pt.y * cosX - z1 * sinX;
        let z2 = pt.y * sinX + z1 * cosX;

        // Apply simple perspective centering
        const screenX = w / 2 + x1 * scale * (1.1 + z2 * 0.1);
        const screenY = h / 2.1 - y2 * scale * (1.1 + z2 * 0.1);
        return { x: screenX, y: screenY, depth: z2 };
      };

      // Draw grid floor
      ctx.strokeStyle = "rgba(181, 18, 27, 0.07)";
      ctx.lineWidth = 1;
      const gridSize = 10;
      const gridStep = 0.5;
      for (let i = -gridSize; i <= gridSize; i++) {
        // X Lines
        const p1 = project({ x: -gridSize * gridStep, y: -1.5, z: i * gridStep });
        const p2 = project({ x: gridSize * gridStep, y: -1.5, z: i * gridStep });
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        // Z Lines
        const p3 = project({ x: i * gridStep, y: -1.5, z: -gridSize * gridStep });
        const p4 = project({ x: i * gridStep, y: -1.5, z: gridSize * gridStep });
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.stroke();
      }

      // Render 3D pipe systems
      pipePaths.forEach((pathPoints, pipeIdx) => {
        ctx.lineWidth = 4;
        ctx.strokeStyle = pipelineColors[pipeIdx];
        ctx.shadowColor = pipelineColors[pipeIdx];
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        for (let i = 0; i < pathPoints.length; i++) {
          const pt = project(pathPoints[i]);
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
        
        // Reset shadows
        ctx.shadowBlur = 0;
      });

      // Render flowing particles inside pipes
      flowParticles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1.0) p.progress = 0;

        // Interpolate along pipe path segment
        const path = pipePaths[p.pipeIndex];
        const numSegments = path.length - 1;
        const totalSeg = p.progress * numSegments;
        const segIdx = Math.floor(totalSeg);
        const segProgress = totalSeg - segIdx;

        if (segIdx >= 0 && segIdx < numSegments) {
          const p1 = path[segIdx];
          const p2 = path[segIdx + 1];
          const currX = p1.x + (p2.x - p1.x) * segProgress;
          const currY = p1.y + (p2.y - p1.y) * segProgress;
          const currZ = p1.z + (p2.z - p1.z) * segProgress;

          const screenPt = project({ x: currX, y: currY, z: currZ });

          // Draw double glowing gas pulse dot
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.arc(screenPt.x, screenPt.y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1.5;
          ctx.arc(screenPt.x, screenPt.y, 7, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Project and cache structure points
      const projectedNodes = tankPoints.map((pt) => {
        const proj = project(pt);
        return { ...proj, ptColor: pt.color, radius: pt.r };
      });

      // Render plant blueprint wireframes
      ctx.lineWidth = 1;
      tankLines.forEach(([i1, i2]) => {
        const n1 = projectedNodes[i1];
        const n2 = projectedNodes[i2];
        
        if (!n1 || !n2) return;

        // Depth cue opacity
        const avgDepth = (n1.depth + n2.depth) / 2;
        const opacity = Math.min(Math.max(0.12, 0.4 + avgDepth * 0.25), 0.7);

        ctx.strokeStyle = `rgba(191, 195, 199, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      });

      // Draw vector structural joint nodes
      projectedNodes.forEach((node) => {
        const opacity = Math.min(Math.max(0.15, 0.5 + node.depth * 0.25), 0.95);
        ctx.fillStyle = node.ptColor === "#6EC1E4" ? `rgba(110, 193, 228, ${opacity})` : `rgba(239, 68, 68, ${opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * Math.min(Math.max(0.6, 1.2 + node.depth * 0.2), 2), 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and render vapor/mist condensation particles (subtle exhaust plume simulation)
      vaporParticles.forEach((v) => {
        v.y += v.vy;
        v.x += v.vx;
        // loop particles
        if (v.y > 1.2) {
          v.y = -1.0;
          v.x = -1.2 + (Math.random() - 0.5) * 0.4;
          v.alpha = 0;
        }

        // Pulse transparent visibility
        if (v.y < -0.4) {
          v.alpha = Math.min(v.alpha + 0.01, v.maxAlpha);
        } else {
          v.alpha = Math.max(v.alpha - 0.005, 0);
        }

        const screenVapor = project(v);
        ctx.beginPath();
        const radialGradient = ctx.createRadialGradient(
          screenVapor.x,
          screenVapor.y,
          0,
          screenVapor.x,
          screenVapor.y,
          v.size * (1.2 + screenVapor.depth * 0.2)
        );
        radialGradient.addColorStop(0, `rgba(110, 193, 228, ${v.alpha})`);
        radialGradient.addColorStop(0.5, `rgba(247, 247, 247, ${v.alpha * 0.4})`);
        radialGradient.addColorStop(1, "rgba(17, 17, 17, 0)");
        
        ctx.fillStyle = radialGradient;
        ctx.arc(screenVapor.x, screenVapor.y, v.size * (1.2 + screenVapor.depth * 0.2), 0, Math.PI * 2);
        ctx.fill();
      });

      // Drawing cinematic overlay indicators inside the HUD
      // Simple technical grid HUD details
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      
      // HUD Compass Reticle (Left corner)
      ctx.beginPath();
      ctx.arc(40, h - 40, 20, 0, Math.PI * 2);
      ctx.stroke();
      
      // Compass needle
      ctx.beginPath();
      ctx.strokeStyle = "#B5121B";
      ctx.moveTo(40, h - 40);
      ctx.lineTo(40 + Math.cos(angleY) * 16, h - 40 + Math.sin(angleY) * 16);
      ctx.stroke();

      // Industrial technical crosshairs on target center
      ctx.strokeStyle = "rgba(181, 18, 27, 0.2)";
      ctx.beginPath();
      ctx.moveTo(w / 2 - 15, h / 2.1);
      ctx.lineTo(w / 2 + 15, h / 2.1);
      ctx.moveTo(w / 2, h / 2.1 - 15);
      ctx.lineTo(w / 2, h / 2.1 + 15);
      ctx.stroke();

      // Request next tick
      animationId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-radial from-[#18181A] to-[#111111] overflow-hidden border border-white/[0.04] rounded-2xl md:min-h-[500px] min-h-[350px]"
    >
      {/* 3D Render Port */}
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Industrial CAD Data Overlay / telemetry details (literal and clean) */}
      <div className="absolute top-4 left-4 p-3 bg-black/75 backdrop-blur-md rounded border border-white/[0.08] font-mono text-[10px] text-zinc-400 space-y-1">
        <div className="text-white flex items-center justify-between gap-4 font-bold tracking-wider">
          <span>ENGINEERING LINK STATUS:</span>
          <span className="text-emerald-500 animate-pulse font-bold">ONLINE</span>
        </div>
        <div className="text-zinc-500 bg-zinc-950/40 p-1.5 rounded">
          COORDINATES: 23.1557° N, 81.3653° E
        </div>
        <div className="flex justify-between">
          <span>COMPRESSION RATIO:</span>
          <span className="text-[#6EC1E4]">32.8 MPa</span>
        </div>
        <div className="flex justify-between gap-6">
          <span>SYSTEM TEMPERATURE:</span>
          <span>-42.5°C</span>
        </div>
        <div className="flex justify-between">
          <span>SGG MATRIX SECTOR:</span>
          <span className="text-white">SH-MP-BURHAR</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 p-3 bg-black/75 backdrop-blur-md rounded border border-white/[0.08] font-mono text-[10px] text-zinc-400 space-y-1">
        <div className="text-zinc-500 font-bold">MONITORING VALVE V-09</div>
        <div className="flex justify-between gap-4">
          <span>NOMINAL PRESSURE:</span>
          <span className="text-white">{pressure} bar</span>
        </div>
        <div className="flex justify-between">
          <span>FEED STREAMING:</span>
          <span className="text-[#F39C12] font-semibold">{activeGas}</span>
        </div>
        <div className="h-1 bg-zinc-950 rounded-full overflow-hidden mt-1 relative">
          <div
            className="h-full bg-red-600 transition-all duration-300"
            style={{ width: `${((pressure - 140) / 15) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
