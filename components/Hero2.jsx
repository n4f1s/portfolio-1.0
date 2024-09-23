'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrapper } from '@/hoc';
import { styles } from '@/app/styles';
import dynamic from 'next/dynamic';
import { fadeIn, textVariant } from '@/utils/motion';



const Hero = dynamic(() => import('./canvas/Hero'), {
  ssr: false
});



export default function Home2() {
  const [light, setLight] = useState("#98FF98");


  return (
    <div className='h-screen w-full'>
      <div className='absolute inset-0'>
        <Wrapper>
          <div className='mt-[80px] xs:mt-[120px]'>
            <motion.h1
              variants={textVariant(1)}
              className={`${styles.heroHeadText} text-gray1`}
            >
              Hi, I am <span className='text-white/60'>Nafis</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "spring", 1.5, 1)}
              className={`${styles.heroSubText} mt-2 text-gray1-100 text-gray1`}
            >
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </motion.p>
          </div>
        </Wrapper>
      </div>

      {/* 3D dragon */}
      <Hero lightColor={light} />

      <div className='absolute bottom-10 md:bottom-4 w-full flex justify-center items-center'>
        <a
          href='#about'
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray1 flex justify-center 
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
              className='size-3 rounded-full bg-gray1 mb-1'
            />
          </div>
        </a>
      </div>

      <div className='absolute bottom-32 left-0 sm:px-16 px-6'>
        <p className='text-gray1 text-[11px] md:text-lg font-semibold'>
          Crafted with Next.js, Three.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>

      <div className="absolute bottom-10 md:bottom-16 z-10 right-0">
        <div className="sm:px-16 px-6 flex space-x-2 md:space-x-3">
          {[
            { color: "#656565", size: "scale-[40%]" },
            { color: "#915eff", size: "scale-[40%]" },
            { color: "#98FF98", size: "scale-[40%]" },
          ].map(({ color, size }) => (
            <div
              key={color}
              className={`rounded-full h-10 md:h-20 w-6 ${
                light === color ? size : ""
              } transition duration-700 ease-in-out bg-[${color}] cursor-pointer`}
              onClick={() => setLight(color)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

