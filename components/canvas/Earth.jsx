'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../CanvasLoader'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 760);

  const handleResize = () => {
    if (window.innerWidth > 760) {
      setIsDesktop(true);  // Enable OrbitControls for desktop
    } else {
      setIsDesktop(false); // Disable OrbitControls for mobile
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render to set the correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>

        {/* Conditionally render OrbitControls based on screen size */}
        {isDesktop && (
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas