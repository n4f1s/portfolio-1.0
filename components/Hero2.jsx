'use client'
import { Vector3 } from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, SpotLight, useDepthBuffer, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Wrapper } from '@/hoc';
import { styles } from '@/app/styles';

export default function Home2() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer to detect if the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // 0.1 means when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='h-full w-full'>
      <div className='absolute inset-0'>
        <Wrapper>
          <div className='mt-[120px]'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I am <span className='text-[#915eff]'>Nafis</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>
        </Wrapper>
      </div>

      {/* Only render the Canvas when the section is in view */}
      {isVisible && (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}>
          <OrbitControls
            // autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Scene />
        </Canvas>
      )}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a
          href='#about'
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center 
          items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='size-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
  );
}

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const { nodes, materials } = useGLTF('/Home2/model.gltf');

  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#fff" position={[3, 2.6, 1.5]} />
      <MovingSpot depthBuffer={depthBuffer} color="#98FF98" position={[1, 3.25, 0]} />
      <mesh
        position={[0, -1.03, 0]}
        geometry={nodes.dragon.geometry}
        material={materials['Default OBJ.001']}
        dispose={null}
      />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
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
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={10}
      {...props}
    />
  );
}
