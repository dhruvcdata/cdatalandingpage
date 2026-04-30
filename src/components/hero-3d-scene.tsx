'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type Geometry = 'box' | 'octahedron' | 'icosahedron' | 'torus';

function GlassShape({
    position,
    size = 1,
    color = '#3b82f6',
    geometry = 'box',
    rotationSpeed = 0.15,
}: {
    position: [number, number, number];
    size?: number;
    color?: string;
    geometry?: Geometry;
    rotationSpeed?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * rotationSpeed;
            meshRef.current.rotation.y += delta * rotationSpeed * 1.3;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                {geometry === 'box' && <boxGeometry args={[size, size, size]} />}
                {geometry === 'octahedron' && <octahedronGeometry args={[size * 0.75, 0]} />}
                {geometry === 'icosahedron' && <icosahedronGeometry args={[size * 0.7, 0]} />}
                {geometry === 'torus' && <torusGeometry args={[size * 0.6, size * 0.22, 16, 64]} />}
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.15}
                    roughness={0.05}
                    transmission={0.92}
                    thickness={1.2}
                    ior={1.5}
                    clearcoat={1}
                    clearcoatRoughness={0.08}
                    attenuationColor="#1e3a8a"
                    attenuationDistance={2.5}
                    envMapIntensity={1.2}
                />
            </mesh>
        </Float>
    );
}

function CameraDrift() {
    useFrame(({ camera, clock }) => {
        const t = clock.getElapsedTime();
        camera.position.x = Math.sin(t * 0.15) * 0.4;
        camera.position.y = Math.cos(t * 0.12) * 0.25;
        camera.lookAt(0, 0, 0);
    });
    return null;
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.35} />
            <directionalLight position={[6, 6, 6]} intensity={0.9} color="#ffffff" />
            <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#3b82f6" />
            <pointLight position={[0, 0, 4]} intensity={0.6} color="#60a5fa" />

            <Environment preset="city" />
            <CameraDrift />

            <GlassShape position={[0, 0.2, 0]} size={1.5} color="#3b82f6" geometry="box" />
            <GlassShape position={[2.4, 1.3, -1]} size={0.9} color="#60a5fa" geometry="octahedron" rotationSpeed={0.2} />
            <GlassShape position={[-2.2, -0.8, -0.6]} size={0.85} color="#1e40af" geometry="icosahedron" rotationSpeed={0.18} />
            <GlassShape position={[1.7, -1.6, 0.9]} size={0.65} color="#06b6d4" geometry="torus" rotationSpeed={0.25} />
            <GlassShape position={[-1.7, 1.7, 0.5]} size={0.55} color="#8b5cf6" geometry="octahedron" rotationSpeed={0.22} />
        </>
    );
}

export default function Hero3DScene({ className = '' }: { className?: string }) {
    return (
        <div className={className}>
            <Suspense
                fallback={
                    <div className="h-full w-full rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
                }
            >
                <Canvas
                    camera={{ position: [0, 0, 6.5], fov: 42 }}
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                    style={{ background: 'transparent' }}
                >
                    <Scene />
                </Canvas>
            </Suspense>
        </div>
    );
}
