"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Edges, Float, ContactShadows, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function ArchitecturalStructure() {
  const groupRef = useRef<THREE.Group>(null);

  // Rotate slowly over time
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  // Burgundy color parameter for edges
  const edgeColor = "#8B0B03";

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        
        {/* Main core tower */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 4, 1.5]} />
          <meshBasicMaterial color="#F5F0E8" transparent opacity={0.3} toneMapped={false} />
          <Edges scale={1.01} color={edgeColor} />
        </mesh>

        {/* Side block 1 */}
        <mesh position={[1.25, -0.5, 0]}>
          <boxGeometry args={[1, 3, 1.2]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.5} toneMapped={false} />
          <Edges scale={1.01} color={edgeColor} />
        </mesh>

        {/* Side block 2 */}
        <mesh position={[-1, -1, 0.5]}>
          <boxGeometry args={[1.2, 2, 1]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} toneMapped={false} />
          <Edges scale={1.01} color={edgeColor} />
        </mesh>

        {/* Connector bridge */}
        <mesh position={[0, 1, 1]}>
          <boxGeometry args={[0.5, 0.5, 1]} />
          <meshBasicMaterial color="#C5A55A" transparent opacity={0.8} />
          <Edges scale={1.01} color={edgeColor} />
        </mesh>
      </Float>
    </group>
  );
}

export function BlueprintModel() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ position: [6, 4, 6], fov: 35 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} />
        
        {/* Interactive Controls & Model */}
        <PresentationControls 
          global 
          snap 
          rotation={[0, 0.3, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Center>
            <ArchitecturalStructure />
          </Center>
        </PresentationControls>

        {/* Soft ground shadow reflecting the burgundy core */}
        <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={20} blur={2.5} far={4} color="#8B0B03" />
      </Canvas>
    </div>
  );
}
