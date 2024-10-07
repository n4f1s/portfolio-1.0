'use client'

import { motion } from 'framer-motion';
import { Wrapper } from '@/hoc';
import { textVariant } from '@/utils/motion';
import { styles } from '@/app/styles';

const Experience = () => {
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "wegro",
      icon: "/company/wegro.png",
      iconBg: "bg-[#383E56]",
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
      icon: "/company/wegro.png",
      iconBg: "bg-[#E6DEDD]",
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
      icon: "/company/wegro.png",
      iconBg: "bg-[#383E56]",
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
      icon: "/company/wegro.png",
      iconBg: "bg-[#E6DEDD]",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  const ExperienceCard = ({ experience, index }) => {
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

          <div className="w-0 h-0 border-l-[6px] md:border-l-[12.5px] border-l-transparent 
            border-r-[6px] md:border-r-[12.5px] border-r-transparent border-b-[12.5px] 
            md:border-b-[25px] border-b-[#9ca3af] absolute top-1 -rotate-90 -left-[25px]" 
          />
        
        </motion.div>
      </div>
    );
  };


  return (
    <>
      <Wrapper idName="work" className="overflow-hidden">
        <motion.div variants={textVariant()} >
          <p className={styles.sectionSubText}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} hover-trigger`}>
            Work Experience
          </h2>
        </motion.div>

        <div className='mt-20 space-y-10'>

          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}

        </div>

      </Wrapper>
    </>
  )
}

export default Experience
