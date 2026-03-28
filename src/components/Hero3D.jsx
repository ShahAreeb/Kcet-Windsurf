import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating spheres
function FloatingSpheres() {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = t * 0.05;
    group.current.rotation.y = t * 0.03;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-8, 2, -5]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.7, 64, 64]} position={[6, -3, -3]}>
          <MeshDistortMaterial
            color="#059669"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <Sphere args={[1.2, 64, 64]} position={[0, 4, -8]}>
          <MeshDistortMaterial
            color="#1e3a5f"
            attach="material"
            distort={0.2}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </group>
  );
}

// Animated particles
function Particles() {
  const count = 500;
  const mesh = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      colors[i * 3] = 0.23 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.51 + Math.random() * 0.2;
      colors[i * 3 + 2] = 0.96;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    mesh.current.rotation.x = t * 0.05;
    mesh.current.rotation.y = t * 0.03;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Geometric shapes
function GeometricShapes() {
  const torusRef = useRef();
  const octahedronRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    torusRef.current.rotation.x = t * 0.5;
    torusRef.current.rotation.y = t * 0.3;
    octahedronRef.current.rotation.x = t * 0.4;
    octahedronRef.current.rotation.z = t * 0.2;
  });

  return (
    <group>
      <mesh ref={torusRef} position={[-10, -5, -10]}>
        <torusGeometry args={[3, 0.5, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <mesh ref={octahedronRef} position={[8, 5, -8]}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#059669"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#059669" intensity={0.5} />
      
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0.5}
        fade
        speed={1}
      />
      
      <FloatingSpheres />
      <Particles />
      <GeometricShapes />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
