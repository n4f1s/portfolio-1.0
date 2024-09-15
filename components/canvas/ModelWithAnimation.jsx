'use client';
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Reflector, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../CanvasLoader';

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
        if (window.innerWidth <= 768) return;

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

            {/* Conditionally render OrbitControls based on screen size */}
            {isDesktop && (
                <OrbitControls
                    enableZoom={false}
                    enablePan={true}
                    minPolarAngle={Math.PI / 10}
                    maxPolarAngle={Math.PI / 3}
                    zoomSpeed={0}
                />
            )}
        </Canvas>
    );
};

export default ModelViewer;
