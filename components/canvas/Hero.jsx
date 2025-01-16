'use client';

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { SpotLight, OrbitControls, Preload } from '@react-three/drei';
import { Vector3 } from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import CanvasLoader from '../CanvasLoader';

// Extend THREE with TextGeometry for react-three-fiber
extend({ TextGeometry });

const Hero = ({ lightColor }) => (
  <Canvas
    shadows={false}
    dpr={[1, 2]}
    camera={{ position: [-2, 2, 6], fov: 60, near: 1, far: 20 }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <ThreeDText
        text="Thank You for visiting"
        position={[-2.5, -1, 0.2]}
        color="white"
      />
      <Scene lightColor={lightColor} />
    </Suspense>
    <Preload all />
  </Canvas>
);

function ThreeDText({ text, position, color }) {
  const font = useMemo(() => {
    const loader = new FontLoader();
    return loader.parse(
      require('three/examples/fonts/helvetiker_regular.typeface.json')
    );
  }, []);

  const textOptions = useMemo(
    () => ({
      font,
      size: 0.35, // Font size
      height: 0.1, // Depth for 3D effect
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.03,
      bevelSegments: 8,
    }),
    [font]
  );

  return (
    <mesh position={position} rotation-x={-Math.PI / 2}>
      <textGeometry args={[text, textOptions]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Scene({ lightColor }) {
  return (
    <>
      <MovingSpot color="#fff" position={[3, 2.6, 1.5]} />
      <MovingSpot color={lightColor} position={[1, 3.25, 0]} />
      <mesh position={[0, -1.03, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial
          clearcoat={0.2}
          clearcoatRoughness={1}
          thickness={1}
          roughness={0.35}
        />
      </mesh>
      <mesh receiveShadow={false} position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);

  useFrame((state) => {
    if (window.innerWidth <= 768) return;

    light.current.target.position.lerp(
      vec.set(
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });

  return (
    <SpotLight
      ref={light}
      penumbra={1}
      distance={7}
      angle={0.32}
      attenuation={5}
      anglePower={4}
      intensity={6}
      {...props}
    />
  );
}

export default Hero;
