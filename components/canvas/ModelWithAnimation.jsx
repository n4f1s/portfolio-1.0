'use client';
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Reflector, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../CanvasLoader';

const ModelWithAnimation = ({ animationName }) => {
    const { scene, animations } = useGLTF('/models/model1.glb'); // Load the GLTF model
    const mixer = useRef(null);  // Ref to store the AnimationMixer
    const group = useRef();  // Ref for the model group
  
    useEffect(() => {
      if (animations.length && scene) {
        // Initialize the mixer and play the selected animation
        mixer.current = new THREE.AnimationMixer(scene);
  
        const clip = animations.find(clip => clip.name === animationName);
        if (clip) {
          const action = mixer.current.clipAction(clip);
          action.play();
          action.loop = THREE.LoopRepeat;
        } else {
          console.warn(`Animation "${animationName}" not found.`);
        }
      }
  
      // Clean-up function to stop the mixer and release memory
      return () => {
        if (mixer.current) {
          mixer.current.stopAllAction();  // Stop any playing animations
          mixer.current.uncacheRoot(scene);  // Remove the scene from the mixer cache
          mixer.current = null;  // Clear the mixer reference
        }
      };
    }, [animations, scene, animationName]);

    useFrame((state, delta) => {
        mixer.current?.update(delta); // Update the animation on each frame
    });

    return (
        <group ref={group} rotation={[0, Math.PI, 0]}>
            <primitive object={scene} scale={[1, 1, 1]} />
        </group>
    );
};

function Ground(props) {
    const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
    return (
        <Reflector resolution={700} args={[8, 4]} {...props}>
            {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
        </Reflector>
    )
}

const ModelViewer = ({ animation }) => {
    return (
        <Canvas camera={{ position: [-1, 3, -4], fov: 60 }}>

            <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={1} />

                <Ground
                    mirror={1}
                    blur={[500, 100]}
                    mixBlur={12}
                    mixStrength={0.8}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    position-y={-0.1}
                />

                <ModelWithAnimation animationName={animation} />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={true}
                minPolarAngle={Math.PI / 10}
                maxPolarAngle={Math.PI / 3}
                zoomSpeed={0}
            />
        </Canvas>
    );
};

export default ModelViewer;
