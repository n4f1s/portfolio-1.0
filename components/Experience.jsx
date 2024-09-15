'use client'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Wrapper } from '@/hoc';
import { textVariant } from '@/utils/motion';
import { styles } from '@/app/styles';
import { useInView } from "react-intersection-observer";


const Experience = () => {
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

  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 1000,
  });

  const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      visible={inView}
      className="vertical-timeline-element--work z-20 "
      contentStyle={{ background: '#151030', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='size-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-secondary text-[16px] font-semibold'>
          {experience.company_name}
        </p>
  
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )

  return (
    <>
      <Wrapper idName="work" refName={ref} className="bg-primary">
        <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}>
            What I have done so far
          </p>
          <h2 className={styles.sectionHeadText}>
            Work Experience
          </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline lineColor='#fff' animate={true}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </Wrapper>
    </>
  )
}

export default Experience