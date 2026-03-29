import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

// Animated floating spheres
function FloatingSpheres() {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = t * 0.05;
      group.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} position={[-8, 2, -5]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[0.7, 24, 24]} position={[6, -3, -3]}>
          <MeshDistortMaterial
            color="#059669"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere args={[1.2, 32, 32]} position={[0, 4, -8]}>
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
  const count = 150; // Reduced from 500 for LCP
  const mesh = useRef();
  
  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    
    return [positions];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.05;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.05;
      mesh.current.rotation.y = t * 0.03;
    }
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
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Geometric shapes
function GeometricShapes() {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-10, -5, -10]}>
        <torusGeometry args={[3, 0.5, 8, 50]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      <mesh position={[8, 5, -8]}>
        <octahedronGeometry args={[2, 0]} />
        <meshBasicMaterial
          color="#059669"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
      <Stars
        radius={80}
        depth={40}
        count={500}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
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
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
