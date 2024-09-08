'use client';
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ModelWithAnimation = () => {
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
            const clip = animations.find(clip => clip.name === "chr205_br01_rd");
            if (clip) {
                const action = mixer.current.clipAction(clip);
                action.play(); // Play the selected animation
                action.loop = THREE.LoopRepeat; // Ensure the animation loops
            } else {
                console.warn(`Animation "AnimationName" not found.`);
            }
        }
    }, [animations, scene]);

    useFrame((state, delta) => {
        mixer.current?.update(delta); // Update the animation on each frame
    });

    return (
        <group ref={group} rotation={[0, Math.PI, 0]}>
            <primitive object={scene} scale={[1, 1, 1]} />
        </group>
    );
};

const ModelViewer = () => {
    return (
        <Canvas camera={{ position: [-1, 3, -4], fov: 70 }}>
            <ambientLight intensity={1} />
            {/* <spotLight position={[20, 20, 20]} angle={0.40} penumbra={1} />
            <pointLight position={[-20, -20, -20]} /> */}

            <ModelWithAnimation />

            <OrbitControls
                enableZoom={false} // Disable zoom
                enablePan={true} // Enable panning if needed
                enableRotate={true} // Enable rotation
                minPolarAngle={Math.PI / 10} // Minimum vertical angle (e.g., 45 degrees)
                maxPolarAngle={Math.PI / 2} // Maximum vertical angle (e.g., 90 degrees)
                // minAzimuthAngle={true}
                // maxAzimuthAngle={true}
                zoomSpeed={0} // Set zoom speed to 0 to ensure no zoom effect
            />
        </Canvas>
    );
};

export default ModelViewer;
