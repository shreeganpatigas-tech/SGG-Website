"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function Tank({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  const ref = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.position.y = Math.sin(clock.elapsedTime * 0.7 + x) * 0.03;
  });
  return (
    <group ref={ref} position={[x, -0.85, z]} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.36, 0.42, 2.5, 48]} />
        <meshStandardMaterial color="#bfc3c7" metalness={0.85} roughness={0.24} />
      </mesh>
      <mesh position={[0, 1.32, 0]}>
        <sphereGeometry args={[0.36, 32, 16]} />
        <meshStandardMaterial color="#d7dadc" metalness={0.82} roughness={0.22} />
      </mesh>
      <mesh position={[0, -1.32, 0]}>
        <sphereGeometry args={[0.42, 32, 16]} />
        <meshStandardMaterial color="#aeb3b8" metalness={0.82} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Pipe({ position, rotation, color = "#6EC1E4" }: { position: [number, number, number]; rotation: [number, number, number]; color?: string }) {
  const pulse = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (pulse.current) pulse.current.scale.x = 0.7 + Math.sin(clock.elapsedTime * 2.2) * 0.08;
  });
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <cylinderGeometry args={[0.075, 0.075, 3.8, 32]} />
        <MeshTransmissionMaterial color="#d9e1e5" thickness={0.18} transmission={0.55} roughness={0.08} />
      </mesh>
      <mesh ref={pulse}>
        <cylinderGeometry args={[0.035, 0.035, 3.86, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.72} />
      </mesh>
    </group>
  );
}

function SceneObjects() {
  const rig = useRef<Group>(null);
  useFrame(({ clock, mouse }) => {
    if (!rig.current) return;
    rig.current.rotation.y = Math.sin(clock.elapsedTime * 0.16) * 0.13 + mouse.x * 0.08;
    rig.current.rotation.x = -0.06 + mouse.y * 0.035;
  });

  return (
    <group ref={rig}>
      <Float speed={1.1} rotationIntensity={0.16} floatIntensity={0.18}>
        <Tank x={-1.7} z={0} scale={1.1} />
        <Tank x={0.1} z={-0.35} scale={1.35} />
        <Tank x={1.9} z={0.2} scale={1} />
        <Pipe position={[0, 0.12, 0]} rotation={[0, 0, Math.PI / 2]} />
        <Pipe position={[0.45, -0.45, 0.25]} rotation={[Math.PI / 2, 0, Math.PI / 2]} color="#D7782A" />
        <Pipe position={[-0.8, 0.82, -0.2]} rotation={[0, Math.PI / 2.7, Math.PI / 2]} color="#BFC3C7" />
      </Float>
      <mesh position={[0, -2.25, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial color="#171717" metalness={0.4} roughness={0.46} />
      </mesh>
    </group>
  );
}

export default function IndustrialScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className="h-full min-h-[420px] w-full">
      <Canvas shadows dpr={[1, compact ? 1.35 : 1.7]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <PerspectiveCamera makeDefault position={[0, 1.2, compact ? 6.2 : 5.2]} fov={42} />
        <ambientLight intensity={0.7} />
        <spotLight position={[3, 4, 3]} angle={0.35} penumbra={0.8} intensity={4.2} color="#f7f7f7" castShadow />
        <pointLight position={[-3, 1.5, 1.5]} intensity={2.4} color="#B5121B" />
        <pointLight position={[2.5, 1, -1]} intensity={2.6} color="#6EC1E4" />
        <Suspense fallback={null}>
          <SceneObjects />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
