'use client'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Wrapper } from '@/hoc';
import { textVariant } from '@/utils/motion';
import { styles } from '@/app/styles';
import { useInView } from "react-intersection-observer";
import MouseFollower from './MouseFollower';


const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: "/company/starbucks.png",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: "/company/starbucks.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: "/company/starbucks.png",
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: "/company/starbucks.png",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  return (
    <>
      <div className={`${inView ? "sm:block hidden" : "hidden"}`}>
        <MouseFollower sectionId="work" />
      </div>

      <div className='absolute top-[30vh] right-20 violet-gradient w-80 h-80 rounded-3xl blur-[100px]' />
      <div className='absolute top-[70vh] left-20 green-pink-gradient w-80 h-80 rounded-full blur-[100px]' />

      <Wrapper idName="work" refName={ref}>
        <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} hover-trigger`}>
            Work Experience
          </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline lineColor='#fff' animate={true}>

            {experiences.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: false,
                delay: 700,
                threshold: 0.5,
              });

              return (
                <div key={index} ref={ref} className="vertical-timeline-element">
                  <VerticalTimelineElement
                    contentStyle={{
                      background: '#0000',
                      color: '#fff',
                      boxShadow: 'none',
                      // border: '1px solid rgba(0, 0, 0, 0.05)',
                      textAlign: 'left',
                      // padding: '1.3rem 2rem',
                    }}
                    contentArrowStyle={{
                      borderRight: '0.4rem solid #9ca3af',
                    }}
                    visible={inView}
                    date={item.date}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img
                          src={item.icon}
                          alt={item.company_name}
                          className='size-[60%] object-contain'
                        />
                      </div>
                    }
                  >
                    <div>
                      <h3 className='text-white text-[24px] font-bold -mt-3'>
                        {item.title}
                      </h3>
                      <p className='text-secondary text-[16px] font-semibold'>
                        {item.company_name}
                      </p>

                      <ul className="mt-5 list-disc ml-5 space-y-2">
                        {item.points.map((point, index) => (
                          <li
                            key={`item-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </VerticalTimelineElement>
                </div>
              )
            })}

          </VerticalTimeline>
        </div>
      </Wrapper>
    </>
  )
}

export default Experience