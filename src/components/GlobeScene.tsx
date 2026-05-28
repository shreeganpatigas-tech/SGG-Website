import { useEffect, useRef, useState } from "react";

export default function GlobeScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transitPercent, setTransitPercent] = useState<number>(98.7);

  useEffect(() => {
    // Randomize telemetry logs on the side
    const interval = setInterval(() => {
      setTransitPercent((prev) => {
        const delta = (Math.random() - 0.5) * 0.1;
        return parseFloat(Math.min(Math.max(prev + delta, 97.5), 99.9).toFixed(2));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let rotationAngle = 0;
    let tilt = 0.35; // tilt the globe axis slightly

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    handleResize();
    const ro = new ResizeObserver(() => {
      window.requestAnimationFrame(handleResize);
    });
    if (containerRef.current) ro.observe(containerRef.current);

    // Generate globe coordinate latitude & longitude paths
    const sphereRadius = 1.0;
    const lats = 9;  // horizontal grid divisions
    const lons = 14; // vertical grid divisions

    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    const gridLinesX: Point3D[][] = []; // Lines for latitudes
    const gridLinesY: Point3D[][] = []; // Lines for longitudes

    // Generate latitude rings
    for (let i = 1; i < lats; i++) {
      const latAngle = (Math.PI * i) / lats - Math.PI / 2;
      const ringPoints: Point3D[] = [];
      for (let j = 0; j <= 50; j++) {
        const lonAngle = (2 * Math.PI * j) / 50;
        ringPoints.push({
          x: sphereRadius * Math.cos(latAngle) * Math.cos(lonAngle),
          y: sphereRadius * Math.sin(latAngle),
          z: sphereRadius * Math.cos(latAngle) * Math.sin(lonAngle),
        });
      }
      gridLinesX.push(ringPoints);
    }

    // Generate longitude semi-circles
    for (let i = 0; i < lons; i++) {
      const lonAngle = (2 * Math.PI * i) / lons;
      const arcPoints: Point3D[] = [];
      for (let j = 0; j <= 50; j++) {
        const latAngle = (Math.PI * j) / 50 - Math.PI / 2;
        arcPoints.push({
          x: sphereRadius * Math.cos(latAngle) * Math.cos(lonAngle),
          y: sphereRadius * Math.sin(latAngle),
          z: sphereRadius * Math.cos(latAngle) * Math.sin(lonAngle),
        });
      }
      gridLinesY.push(arcPoints);
    }

    // Mark high value coordinate for Shahdol, Madhya Pradesh, India
    // Coordinates approximate position on a 3D sphere: lat=23.1557° N, lon=81.3653° E
    const indiaGeo = { lat: 23.1557 * (Math.PI / 180), lon: 81.3653 * (Math.PI / 180) };
    const shahdolNode: Point3D = {
      x: sphereRadius * Math.cos(indiaGeo.lat) * Math.cos(indiaGeo.lon),
      y: sphereRadius * Math.sin(indiaGeo.lat),
      z: sphereRadius * Math.cos(indiaGeo.lat) * Math.sin(indiaGeo.lon),
    };

    // Simulated satellite/supply routes orbiting the globe over Shahdol
    const satOrbitRadius = 1.35;
    const orbitPoints: Point3D[] = [];
    for (let j = 0; j <= 40; j++) {
      const theta = (2 * Math.PI * j) / 40;
      orbitPoints.push({
        x: satOrbitRadius * Math.cos(theta),
        y: satOrbitRadius * Math.sin(theta) * 0.35,
        z: satOrbitRadius * Math.sin(theta) * Math.cos(0.35),
      });
    }

    const drawLoop = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      // Rotate over time
      rotationAngle += 0.0035;

      const cosRot = Math.cos(rotationAngle);
      const sinRot = Math.sin(rotationAngle);
      const cosTilt = Math.cos(tilt);
      const sinTilt = Math.sin(tilt);

      const radiusScale = Math.min(w, h) * 0.35;

      const project = (pt: Point3D) => {
        // Rotate Y (longitude spin)
        let x1 = pt.x * cosRot - pt.z * sinRot;
        let z1 = pt.x * sinRot + pt.z * cosRot;

        // Apply axis tilt
        let y2 = pt.y * cosTilt - z1 * sinTilt;
        let z2 = pt.y * sinTilt + z1 * cosTilt;

        // 3D orthographic projection centered in canvas
        const screenX = w / 2 + x1 * radiusScale;
        const screenY = h / 2 - y2 * radiusScale;
        return { x: screenX, y: screenY, depth: z2 };
      };

      // Draw active orbital outline connection
      ctx.strokeStyle = "rgba(110, 193, 228, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      orbitPoints.forEach((p, idx) => {
        const pt = project(p);
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();
      ctx.stroke();

      // Draw Orbiting Gas satellite node pulse indicator
      const oPulseIdx = Math.floor((Date.now() * 0.015) % orbitPoints.length);
      const activeOrbitNode = project(orbitPoints[oPulseIdx]);
      if (activeOrbitNode.depth > 0) {
        ctx.beginPath();
        ctx.fillStyle = "#6EC1E4";
        ctx.shadowColor = "#6EC1E4";
        ctx.shadowBlur = 8;
        ctx.arc(activeOrbitNode.x, activeOrbitNode.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Latitude grid lines (Render only front-facing segments with depth checks)
      ctx.lineWidth = 1;
      gridLinesX.forEach((ring) => {
        ctx.beginPath();
        let drawing = false;
        ring.forEach((p) => {
          const pt = project(p);
          if (pt.depth >= 0) { // Front facing
            // Fade grid opacity towards sphere edge
            const opacity = Math.min(Math.max(0, pt.depth * 0.3), 0.25);
            ctx.strokeStyle = `rgba(181, 18, 27, ${opacity})`;
            if (!drawing) {
              ctx.moveTo(pt.x, pt.y);
              drawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            drawing = false;
          }
        });
        ctx.stroke();
      });

      // Draw Longitude grid lines
      gridLinesY.forEach((arc) => {
        ctx.beginPath();
        let drawing = false;
        arc.forEach((p) => {
          const pt = project(p);
          if (pt.depth >= 0) { // Front facing
            const opacity = Math.min(Math.max(0, pt.depth * 0.3), 0.25);
            ctx.strokeStyle = `rgba(181, 18, 27, ${opacity})`;
            if (!drawing) {
              ctx.moveTo(pt.x, pt.y);
              drawing = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            drawing = false;
          }
        });
        ctx.stroke();
      });

      // Project Shahdol coordination point
      const targetPin = project(shahdolNode);

      // Render pins and pointers if front-facing
      if (targetPin.depth >= 0) {
        // Core blinking LED on coordinates
        ctx.beginPath();
        ctx.fillStyle = "#B5121B";
        ctx.shadowColor = "#B5121B";
        ctx.shadowBlur = 12;
        ctx.arc(targetPin.x, targetPin.y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Expanding outer sonar ring
        const sonarRingRadius = 6 + (Date.now() * 0.015) % 15;
        const opacity = (15 - (sonarRingRadius - 6)) / 15 * 0.55;
        ctx.strokeStyle = `rgba(181, 18, 27, ${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(targetPin.x, targetPin.y, sonarRingRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label flag for Shahdol
        ctx.fillStyle = "rgba(17, 17, 17, 0.9)";
        ctx.strokeStyle = "rgba(181, 18, 27, 0.6)";
        ctx.lineWidth = 1;
        
        const labelX = targetPin.x + 18;
        const labelY = targetPin.y - 18;
        
        // draw call-out line
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.moveTo(targetPin.x, targetPin.y);
        ctx.lineTo(labelX, labelY);
        ctx.lineTo(labelX + 85, labelY);
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(labelX, labelY - 24, 85, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 8px monospace";
        ctx.fillText("SGG PLANT HUB", labelX + 6, labelY - 11);
      }

      // Outer sphere thin outline border
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, radiusScale, 0, Math.PI * 2);
      ctx.stroke();

      animId = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-[#111111]/60 border border-white/[0.04] rounded-2xl min-h-[300px] overflow-hidden"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Telemetry coordinate feed overlay */}
      <div className="absolute top-4 left-4 p-3 bg-black/85 backdrop-blur-md rounded border border-white/[0.06] font-mono text-[9px] text-zinc-400 space-y-1 text-left">
        <div className="text-white font-bold text-[10px] tracking-wider">
          COORDINATES (SHAHDOL):
        </div>
        <div>LATID: 23° 09' 20.52\" N</div>
        <div>LONGD: 81° 21' 55.08\" E</div>
        <div className="text-[#6EC1E4] font-semibold mt-1 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          DISPATCH ACTIVE: {transitPercent}%
        </div>
      </div>
    </div>
  );
}
