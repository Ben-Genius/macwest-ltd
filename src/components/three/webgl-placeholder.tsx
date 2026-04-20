"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * Lightweight WebGL placeholder — swap for art-directed scenes per section.
 * Loaded with `next/dynamic` + `{ ssr: false }` on pages that use 3D.
 */
export function WebGLPlaceholder() {
  return (
    <div className="h-[min(420px,50vh)] w-full overflow-hidden rounded-2xl bg-zinc-950 shadow-inner ring-1 ring-white/10">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#09090b"]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 6, 4]} intensity={1.1} />
          <mesh rotation={[0.35, 0.65, 0]}>
            <boxGeometry args={[1.4, 1.4, 1.4]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.2} roughness={0.35} />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
