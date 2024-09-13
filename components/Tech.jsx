'use client'
import { Wrapper } from '@/hoc'
import React from 'react'

import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import { styles } from '@/app/styles'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: "/tech/html.png",
    },
    {
      name: "CSS 3",
      icon: "/tech/css.png",
    },
    {
      name: "JavaScript",
      icon: "/tech/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "/tech/typescript.png",
    },
    {
      name: "Three JS",
      icon: "/tech/three.webp",
    },
    {
      name: "React JS",
      icon: "/tech/reactjs.png",
    },
    {
      name: "React Native",
      icon: "/tech/reactnative.png",
    },
    {
      name: "Next JS",
      icon: "/tech/nextjs.png",
    },
    {
      name: "WordPress",
      icon: "/tech/wordpress.png",
    },
    {
      name: "Redux Toolkit",
      icon: "/tech/redux.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/tech/tailwind.png",
    },
    {
      name: "Framer motion",
      icon: "/tech/framermotion.png",
    },
    // {
    //   name: "Node JS",
    //   icon: "/tech/nodejs.png",
    // },
    {
      name: "MongoDB",
      icon: "/tech/mongodb.png",
    },
    {
      name: "git",
      icon: "/tech/git.png",
    },
    {
      name: "Figma",
      icon: "/tech/figma.png",
    },
    {
      name: "Firebase",
      icon: "/tech/firebase.webp",
    },
    {
      name: "Express",
      icon: "/tech/express.png",
    },
    {
      name: "POSTMAN",
      icon: "/tech/postman.png",
    },
  ];

  return (
    <Wrapper idName="Tech">
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
          Skills
        </p>
        <h2 className={styles.sectionHeadText}>
          Technologies
        </h2>
      </motion.div>

      <div className='mt-24'>
        <Marquee speed={80} pauseOnClick={true} pauseOnHover={true} gradient={true} direction='right'
          gradientColor="#050816" gradientWidth={100} autoFill={true} style={{ "overflow": "hidden" }}>
          {technologies.map((e, id) => (
            <div key={id}>
              <div className='w-full h-[70px]'>
                <Image
                  src={e.icon}
                  alt={e.name}
                  width={70}
                  height={70}
                  className="object-contain mx-4 sm:mx-10"
                />
              </div>
              <p className='text-center mt-2'>
                {e.name}
              </p>
            </div>
          ))}
        </Marquee>

        <Marquee speed={60} pauseOnClick={true} pauseOnHover={true} gradient={true} direction='left'
          className='mt-10'
          gradientColor="#050816" gradientWidth={100} autoFill={true} style={{ "overflow": "hidden" }}>
          {technologies.map((e, id) => (
            <div key={id}>
              <div className='w-full h-[70px]'>
                <Image
                  src={e.icon}
                  alt={e.name}
                  width={70}
                  height={70}
                  className="object-contain mx-4 sm:mx-10"
                />
              </div>
              <p className='text-center mt-2'>
                {e.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </Wrapper>
  )
}

export default Tech