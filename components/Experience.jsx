'use client'

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrapper } from '@/hoc';
import { textVariant } from '@/utils/motion';
import { styles } from '@/app/styles';


/* eslint-disable react-hooks/rules-of-hooks */
const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company_name: "wegro",
      icon: "/company/wegro.png",
      iconBg: "bg-[#383E56]",
      date: "March 2024 - Present",
      points: [
        "Developing and maintaining web applications using Next.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "Funfuse Games",
      icon: "/company/funfuse.png",
      iconBg: "bg-[#E6DEDD]",
      date: "Jan 2024 - March 2024",
      points: [
        "Customized WordPress theme according to a Figma design provided by the client.",
        "Collaborated with the design and product teams to implement seamless functionality and ensure brand consistency.",
        "Enhanced user experience by optimizing the theme for performance and responsiveness.",
        "Delivered a fully functional website tailored to the company's specific needs."
      ],
    },
    {
      title: "Developer",
      company_name: "Freelancer",
      icon: "/company/freelancer.svg",
      iconBg: "bg-white",
      date: "Feb 2022 - Nov 2023",
      points: [
        "Creating and maintaining applications using React.js, Next.js, React Native and WordPress.",
        "Collaborating with clients to deliver custom web solutions tailored to their business needs.",
        "Implementing responsive design for optimal performance on various devices and browsers.",
        "Ensuring website scalability, SEO optimization, and delivering engaging user experiences."
      ],
    },
  ];


  const ExperienceCard = ({ experience }) => {
    return (
      <div className="grid grid-cols-12 group">
        <div className='lg:block hidden col-span-3 px-4 mt-2'>
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.6,
              mass: 2,
              type: "spring",
              ease: "easeInOut",
              delay: 0.3
            }}
            className="text-right text-xl">
            {experience.date}
          </motion.p>
          <div className='w-full h-0.5 bg-white my-2' />
          <p className="text-secondary text-[16px] font-semibold text-right">{experience.company_name}</p>
        </div>
        <div className="col-span-2 lg:col-span-1 h-full relative ml-[17px]">
          <div className="w-1 bg-white relative" style={{ height: 'calc(100% + 40px)' }}>
            <motion.div
              initial={{ scale: [0, 0, 0] }}
              whileInView={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.3
              }}
              className={`absolute top-0 -left-[19px] size-[42px] ${experience.iconBg} rounded-full 
              flex items-center justify-center`}>
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="size-[40px]"
              />
            </motion.div>
            {/* Group hover gradiant backgroup */}
            <div className='absolute top-0 -left-20 green-pink-gradient group-hover:w-40 h-40 
            rounded-full blur-3xl' />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{
            duration: 0.6,
            mass: 2,
            type: "spring",
            ease: "easeInOut",
            delay: 0.3
          }}
          className="col-span-10 lg:col-span-8 h-full mt-1 relative border-b-2">
          <div className="w-full h-full bg-tertiary px-4 py-4">
            <h3 className="text-white text-[24px] font-bold -mt-3">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold lg:hidden">{experience.company_name}</p>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 
                tracking-wider">
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-6 lg:hidden block">{experience.date}</p>
          </div>
          {/* Arrow */}
          <div className="w-0 h-0 border-l-[6px] md:border-l-[12.5px] border-l-transparent 
            border-r-[6px] md:border-r-[12.5px] border-r-transparent border-b-[12.5px] 
            md:border-b-[25px] border-b-[#9ca3af] absolute top-1 -rotate-90 -left-[14px] lg:-left-[25px]"
          />

        </motion.div>
      </div>
    );
  };
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Timeline animates as it scrolls fully into view
  });

  // Dynamically adjust the progress bar height
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setProgress(value); // Track the current scroll position
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper idName="work" className="overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} hover-trigger`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 space-y-10">
        <div ref={containerRef} className="relative overflow-hidden">
          {/* Center vertical scroll bar */}
          <motion.div
            className="absolute left-[36px] lg:left-1/3 top-0 w-1 h-screen bg-tertiary"
            style={{ height: "100%", transform: "translateX(-50%)" }}
          >
            <motion.div
              className="absolute left-0 w-full bg-white"
              style={{ height: barHeight }}
            />
          </motion.div>

          {/* Timeline content */}
          <div className="mx-auto">
            {experiences.map((item, index) => {
              // Timeline item progress calculations
              const totalItems = experiences.length;
              const itemStart = index / totalItems;
              const itemMid = itemStart + (1 / totalItems) * 0.3;
              const itemEnd = (index + 1) / totalItems;

              // Visibility control using `useTransform`
              const isVisible = useTransform(
                scrollYProgress,
                [itemStart + 0.03, itemMid, itemEnd + 0.25],
                [0, 1, 0]
              );

              // Visibility state
              const [visible, setVisible] = useState(false);

              useEffect(() => {
                const timeout = setTimeout(() => setVisible(isVisible.get() > 0.5), 50);
                const unsubscribe = isVisible.on("change", (value) => {
                  clearTimeout(timeout);
                  setVisible(value > 0.5);
                });
                return () => {
                  unsubscribe();
                  clearTimeout(timeout);
                };
              }, [isVisible]);

              // Animations and style transformations
              const translateY = useTransform(scrollYProgress, [itemStart, itemEnd], [50, 0]);
              const textColor = useTransform(scrollYProgress, [itemStart, itemMid], ["#4F4F4F", "#FFFF"]);

              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 my-32 w-full lg:h-[300px]"
                  style={{ color: textColor, y: translateY }}
                >
                  {/* Left Section: Year and Image */}
                  <div className="lg:w-1/3 relative">
                    <div className="lg:block hidden">
                      {/* Render Text only when visible */}
                      {visible && (
                        <div className="mr-8 z-10">
                          <p className="text-2xl font-medium text-right z-10 text-white">
                            {item.date}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline Marker */}
                  <div className="relative w-[40px] h-auto">
                    <motion.div
                      className={`absolute -right-3 lg:right-[45px] lg:-left-[45px] z-10 flex items-center justify-center`}
                    >
                      <motion.img
                        initial={{ scale: 0.5 }}
                        animate={{ scale: visible ? 1 : 0.5 }}
                        src={item.icon}
                        alt={item.company_name}
                        className="w-[40px] flex shrink-0"
                      />
                    </motion.div>
                    <div className="absolute -top-8 -left-[45px] size-[80px] lg:size-[100px] rounded-full bg-primary z-0" />
                  </div>

                  {/* Right Section: Title and Text */}
                  <div className="lg:w-1/2 z-10">
                    <div className="inline-block -mt-[6px]">
                      <div className="w-full h-full bg-tertiary px-4 py-6">
                        <h3 className="text-[24px] font-bold -mt-3">{item.title}</h3>
                        <p className="text-secondary text-[16px] font-semibold lg:hidden">
                          {item.company_name}
                        </p>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                          {item.points.map((point, index) => (
                            <li key={`item-point-${index}`} className="text-[14px] pl-1 tracking-wider">
                              {point}
                            </li>
                          ))}
                        </ul>

                        <p className="mt-6 lg:hidden block">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
/* eslint-enable react-hooks/rules-of-hooks */
export default Experience
