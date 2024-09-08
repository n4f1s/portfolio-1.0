'use client'
import { Wrapper } from '@/hoc'
import React from 'react'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'
import { styles } from '@/app/styles'



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
      name: "React JS",
      icon: "/tech/reactjs.png",
    },
    {
      name: "React Native",
      icon: "/tech/reactnative.png",
    },
    {
      name: "Next JS",
      icon: "/tech/nextjs.svg",
    },
    {
      name: "WordPress",
      icon: "/tech/wordpress.png",
    },
    {
      name: "Redux Toolkit",
      icon: "/tech/redux.png",
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: "/tech/tailwind.png",
    // },
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
      name: "Three JS",
      icon: "/tech/threejs.svg",
    },
    {
      name: "git",
      icon: "/tech/git.png",
    },
    // {
    //   name: "Figma",
    //   icon: "/tech/figma.png",
    // },
    {
      name: "Firebase",
      icon: "/tech/firebase.png",
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

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className="size-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='text-center'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Tech