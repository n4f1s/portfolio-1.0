'use client'
import { styles } from "@/app/styles";
import { Wrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Button from "./Button";


export const projectsData = [
  {
    id: 1,
    heading: "FunFuse",
    subheading: "Learn what we do here",
    img: "/projects/funfuse.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 2,
    heading: "Play Boom Games",
    subheading: "Learn what we do here",
    img: "/projects/PlayBoom.webp",
    href: "https://playboom.netlify.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 3,
    heading: "Apple Clone",
    subheading: "Learn what we do here",
    img: "/projects/appleclone.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 4,
    heading: "Virtual Bank",
    subheading: "Learn what we do here",
    img: "/projects/virtualbank.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 5,
    heading: "About",
    subheading: "Learn what we do here",
    img: "/projects/funfuse.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 6,
    heading: "About",
    subheading: "Learn what we do here",
    img: "/projects/funfuse.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 7,
    heading: "About",
    subheading: "Learn what we do here",
    img: "/projects/petopia.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 8,
    heading: "About",
    subheading: "Learn what we do here",
    img: "/projects/aora.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    id: 9,
    heading: "About",
    subheading: "Learn what we do here",
    img: "/projects/funfuse.webp",
    href: "#",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
]

const Projects = () => {
  const [number, setNumber] = useState(4)
  const handleClick = () => {
    if (number < projectsData.length) {
      setNumber(number + 5);
    }
  }
  return (
    <Wrapper>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      {projectsData.slice(0, number).map((item, index) => (
        <Link
          heading={item.heading}
          subheading={item.subheading}
          imgSrc={item.img}
          href={item.href}
          tags={item.tags}
          key={index}
        />
      ))}

      <div className={`flex w-full h-full mt-10 items-center"
        ${number < projectsData.length ? "block" : "hidden"}`}>
        <Button handleClick={() => handleClick()} className="mx-auto">
          Load More
        </Button>
      </div>
    </Wrapper>
  );
};

const Link = ({ heading, imgSrc, subheading, href, tags }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      target="new"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 
      border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors 
          duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 
        transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>

        {/* colorfull tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] font-semibold ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover sm:h-auto sm:w-[300px] lg:w-[600px]"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export default Projects;