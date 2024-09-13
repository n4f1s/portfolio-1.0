'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ModelWithAnimation = ({ animationName }) => {
    const { scene, animations } = useGLTF('/models/model1.glb'); // Your GLTF/GLB file path
    const mixer = useRef();
    const group = useRef();

    useEffect(() => {
        if (animations.length) {
            mixer.current = new THREE.AnimationMixer(scene);

            // Log all available animations and their names

            //   animations.forEach((clip, index) => {
            //     console.log(`Animation ${index}: ${clip.name}`);
            //   });


            //   Optionally, you can play a specific animation
            const clip = animations.find(clip => clip.name === animationName);
            if (clip) {
                const action = mixer.current.clipAction(clip);
                action.play(); // Play the selected animation
                action.loop = THREE.LoopRepeat; // Ensure the animation loops
            } else {
                console.warn(`Animation "AnimationName" not found.`);
            }
        }
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

const ModelViewer = ({ animation }) => {
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
        <Canvas camera={{ position: [-1, 3, -4], fov: 60 }}>
            <ambientLight intensity={1} />


            <ModelWithAnimation animationName={animation} />
            
            {/* Conditionally render OrbitControls based on screen size */}
            {isDesktop && (
                <OrbitControls
                    enableZoom={false}
                    enablePan={true}
                    minPolarAngle={Math.PI / 10}
                    maxPolarAngle={Math.PI / 2}
                    zoomSpeed={0}
                />
            )}
        </Canvas>
    );
};

export default ModelViewer;
