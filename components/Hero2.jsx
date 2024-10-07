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
          <div className='mt-[80px] sm:mt-[120px]'>
            <motion.h1
              variants={textVariant(0.6)}
              className={`${styles.heroHeadText} text-gray1`}
            >
              Hi, I am <span className='text-white/70'>Nafis</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "spring", 1, 1)}
              className={`${styles.heroSubText} mt-2 text-gray1`}
            >
              I develop user interfaces for 👉🏼 <br className='sm:block hidden' />
              Web and Mobile applications
            </motion.p>
          </div>
        </Wrapper>
      </div>

      {/* 3D dragon */}
      <Hero lightColor={light} />

      <div className="absolute bottom-20 z-10 right-0">
        <div className="sm:px-16 px-6 flex space-x-3">
          {[
            { bg: "bg-[#656565]", size: "scale-[40%]", color: "#656565" },
            { bg: "bg-[#915eff]", size: "scale-[40%]", color: "#915eff" },
            { bg: "bg-[#98FF98]", size: "scale-[40%]", color: "#98FF98" },
          ].map(({ color, size, bg }) => (
            <div
              key={color}
              className={`rounded-full h-10 md:h-20 w-6 ${
                light === color ? size : ""
              } transition duration-700 ease-in-out ${bg} cursor-pointer`}
              onClick={() => setLight(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

