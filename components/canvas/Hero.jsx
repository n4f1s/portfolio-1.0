'use client'
import { Vector3 } from 'three';
import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, SpotLight, useDepthBuffer, OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../CanvasLoader';


const Hero = ({ lightColor }) => {
    return (
        <Canvas
            shadows={false}
            dpr={[1, 2]}
            camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Scene lightColor={lightColor} />
                <ambientLight intensity={0.015} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}


function Scene({ lightColor }) {
    const depthBuffer = useDepthBuffer({ frames: 1 });
    const { nodes, materials } = useGLTF('/Home2/model.gltf');

    return (
        <>
            <MovingSpot depthBuffer={depthBuffer} color="#fff" position={[3, 2.6, 1.5]} />
            <MovingSpot depthBuffer={depthBuffer} color={lightColor} position={[1, 3.25, 0]} />
            <mesh
                position={[0, -1.03, 0]}
                geometry={nodes.dragon.geometry}
                material={materials['Default OBJ.001']}
                dispose={null}
            />
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
            // castShadow
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


export default Hero