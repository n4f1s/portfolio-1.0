'use client'
import { motion } from "framer-motion"
import { styles } from "@/app/styles"
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"

const ModelViewer = dynamic(() => import('@/components/canvas/ModelWithAnimation'), {
  ssr: false
});




const animations = ["chr205_br01_rd", "chr205_bs01_rd", "chr205_ba02_rd"]

const ServiceCard = ({ title, icon, color1, color2, id, onHover }) => {
  return (
    <motion.div
      className="relative z-0 p-8 w-[250px] group"
      variants={fadeIn("right", "spring", 0.5 * id, 0.75)}
      onMouseEnter={() => onHover(id)} // Trigger animation change
    >
      {/* Cutt corner */}
      <div className={`absolute size-16 rounded-xl ${color1} top-1.5 right-1.5 -z-10 
      blur-lg opacity-0 group-hover:opacity-100 transition duration-300`} />

      <div className={`absolute size-16 rounded-xl ${color1} top-1.5 right-1.5 -z-10
      ${color2} transition duration-300`} />

      {/* Card background */}
      <div className="absolute inset-0 bg-tertiary -z-10 rounded-2xl 
      [mask-image:linear-gradient(225deg,transparent,transparent_30px,black_30px)]" />

      <div className="flex justify-center -mt-20 ">
        <div className="inline-flex relative">
          {/* Image shadow */}
          <div className="absolute h-4 group-hover:h-3 w-full top-[calc(100%+16px)] bg-black
          group-hover:bg-black/60 transition duration-300
          rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]" />
          <Image
            src={icon}
            alt="Pill"
            width={100}
            height={100}
            className="group-hover:-translate-y-6 transition duration-300"
          />
        </div>
      </div>

      <h3 className="text-white text-base font-bold text-center mt-12">
        {title}
      </h3>
    </motion.div>
  )
}

const About = () => {
  const Services = [
    {
      id: 1,
      title: "Web Developer",
      icon: "/pill.png",
      color1: "bg-fuchsia-600",
      color2: "group-hover:bg-fuchsia-500",
    },
    {
      id: 2,
      title: "React Native Developer",
      icon: "/icosahedron.png",
      color1: "bg-lime-600",
      color2: "group-hover:bg-lime-500",
    },
    {
      id: 3,
      title: "Backend Developer",
      icon: "/cube.png",
      color1: "bg-violet-600",
      color2: "group-hover:bg-violet-500",
    },
  ];

  const [animation, setAnimation] = useState("chr205_bn01_rd")

  const handleHover = (id) => {
    setAnimation(animations[id - 1]); // Change animation based on hovered card
  }

  return (
    <>
      <motion.div
        id="about"
        className="sm:px-16 px-6 sm:py-16 pt-10 w-full lg:h-screen overflow-hidden 
        max-w-7xl mx-auto relative z-0"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.10 }}
      >
        <div className="w-full lg:h-[25vh]">
          <motion.div variants={textVariant(0.5)}>
            <p className={styles.sectionSubText}>
              Introduction
            </p>
            <h2 className={styles.sectionHeadText}>
              Overview.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            As a skilled software developer, I bring extensive experience in TypeScript and JavaScript, 
            with a strong focus on modern frameworks such as React, Next.js, and Three.js. Known for 
            being a quick learner, I collaborate closely with clients to deliver efficient, scalable, 
            and user-friendly solutions tailored to real-world challenges. Let's work together to turn
             your ideas into impactful results!
          </motion.p>
        </div>

        <div className="mt-20 lg:mt-10 flex flex-col md:flex-row w-full lg:h-[75vh] relative">
          <div className="flex flex-col items-center gap-10 mx-10 md:mx-0 md:ml-4 space-y-8">
            {Services.map((service) => (
              <ServiceCard key={service.title} {...service} onHover={handleHover} />
            ))}
          </div>

          <div className="md:ml-10 w-full h-[50vh] md:h-[60vh] mt-10 md:-mt-[125px]">
            <ModelViewer animation={animation} />
          </div>

          {/* <div className="absolute top-10 left-[300px] font-semibold text-5xl font-serif hidden md:block">
              Interact with the cards
          </div> */}
        </div>
      </motion.div>
    </>
  )
}

export default About;