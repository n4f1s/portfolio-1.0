import React, { useEffect, useRef, useState } from "react";
import { easeIn, easeInOut, motion } from "framer-motion";



export const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
    top: "20%",
    left: "10%",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
    top: "25%",
    left: "20%",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
    top: "30%",
    left: "15%",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
    top: "50%",
    left: "50%",
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

export const DragIcons = () => {
  return (
    <>
      <div className="relative h-[40vh] w-full place-content-center overflow-hidden 
        border-b-8 hidden md:block">
        <Cards />
        <h2 className="relative text-[20vw] font-black text-white/10 text-center
            md:text-[120px] mb-40 pointer-events-none z-[-1]">
          Interactive
        </h2>
      </div>

      <div className="flex flex-row flex-wrap w-full h-full overflow-hidden items-center 
          justify-center md:hidden">
            {technologies.map((e, id) => {
              return (
                <div key={id} className="w-[80px] h-[100px]">
                  <motion.img
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, delay: .10 * id, ease: easeIn }}
                    className="size-[50px] pointer-events-none"
                    src={e.icon}
                    alt={e.name}
                  />
                </div>
              );
            })}
          </div>
    </>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {/* Map through technologies with conditional bottom position */}
      {technologies.map((e, id) => {
        const isTopRow = id < 9; // Determine if it's in the top row
        if (!isTopRow) id = id - 9;
        return (
          <Card
            key={e.name}
            containerRef={containerRef}
            src={e.icon}
            alt={e.name}
            left={`${(isTopRow ? id * 11 : id * 11)}%`}
            bottom={isTopRow ? "0" : "25%"}
            name={e.name}
            index={id}
          />
        );
      })}
    </div>
  );
};

const Card = ({ containerRef, src, alt, bottom, left, className, name, index }) => {
  const [zIndex, setZIndex] = useState(0);


  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeInOut" }}
      style={{
        bottom: bottom,
        left: left,
        zIndex,
        position: "absolute",
      }}
      className={`drag-elements absolute w-[100px] h-[100px] p-1 pb-4 
      rounded-full cursor-pointer active:cursor-grabbing flex flex-col items-center justify-center 
      ${className}`}
      onMouseDown={updateZIndex}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      <motion.img
        className="size-[60px] pointer-events-none"
        src={src}
        alt={alt}
      />
      <p className='text-center text-white text-sm'>
        {name}
      </p>
    </motion.div>
  );
};