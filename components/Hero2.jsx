'use client'
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrapper } from '@/hoc';
import { styles } from '@/app/styles';
import dynamic from 'next/dynamic';
import { fadeIn, textVariant, zoomIn } from '@/utils/motion';


const Hero = dynamic(() => import('./canvas/Hero'), {
  ssr: false
});



export default function Home2() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [light, setLight] = useState("#98FF98");

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
    <div ref={sectionRef} className='h-screen w-full'>
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

      {/* Only render the Canvas when the section is in view */}
      {isVisible && (
        <Hero lightColor={light} />
      )}

      <div className='absolute bottom-10 sm:bottom-4 w-full flex justify-center items-center'>
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

      <div className='absolute bottom-32 z-40 text-[11px] sm:text-lg font-semibold'>
        <div className='sm:px-16 px-6 flex justify-between items-center text-gray1 
        transition-colors duration-500 hover:border-neutral-50'>
          Crafted with Next.js, Three.js, Tailwind CSS, and Framer Motion.
        </div>
      </div>

      <div className='absolute bottom-20 sm:bottom-32 z-10 right-0'>
        <div className='sm:px-16 px-6 flex space-x-2'>
          <div
            className='size-5 rounded-full bg-gray1 cursor-pointer'
            onClick={() => setLight("#656565")}
          />
          <div
            className='size-5 rounded-full bg-[#915eff] cursor-pointer'
            onClick={() => setLight("#915eff")}
          />
          <div
            className='size-5 rounded-full bg-[#98FF98] cursor-pointer'
            onClick={() => setLight("#98FF98")}
          />
        </div>
      </div>

    </div>
  );
}

