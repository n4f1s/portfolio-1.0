'use client'
import { motion } from "framer-motion"
import { styles } from "@/app/styles"
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion"
import Button from "./Button"



const About = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2000;

  return (
    <>
      <motion.div
        id="about"
        className="sm:px-16 px-6 sm:py-16 pt-10 w-full h-full overflow-hidden 
        max-w-7xl mx-auto relative z-0"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.10 }}
      >
        <motion.div variants={textVariant(1)} className="mt-20 sm:mt-[120px] text-center">
          <h2 className={styles.sectionHeadText}>
            Get to know me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 mt-10 sm:mt-20 mb-20 lg:mb-0 w-full lg:h-[510px]">
          {/* Profile Image */}
          <div className="lg:col-span-2 w-full h-full">
            <img
              src="/profile.webp"
              alt="Profile"
              className="w-[420px] h-full object-cover mx-auto rounded-tr-[60px]"
            />
          </div>

          <div className="lg:col-span-3 w-full h-auto px-0 md:px-10 mt-10 lg:mt-0">
            <motion.p
              variants={fadeIn("", "", 1, 1)}
              className="text-secondary text-xl leading-[30px]"
            >
              Welcome
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 1, 1)}
              className="mt-4 text-white text-xl sm:text-3xl font-bold leading-[45px] flex flex-wrap"
            >
              I'm Musfiqur Rahman Nafis
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 1, 1)}
              className="mt-4 text-white text-lg sm:text-[17px] leading-[30px]"
            >
              As a skilled software developer, I specialize in TypeScript and JavaScript,
              with a strong focus on modern frameworks such as React, Next.js, and Three.js. Known for
              being a quick learner, I collaborate closely with industry professionals to deliver
              efficient, scalable, and user-friendly solutions tailored to real-world challenges.
            </motion.p>

            <div className="h-0.5 w-full bg-secondary my-6" />

            <div className="grid sm:grid-cols-2 text-sm sm:text-base">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white">
                  Name :
                  <span className="text-gray-500 ml-2 sm:ml-4">Musfiqur Rahman Nafis</span>
                </p>
                <p className="text-white">
                  Age :
                  <span className="text-gray-500 ml-2 sm:ml-4">{age}</span>
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-0">
                <p className="text-white">
                  Email :
                  <a href="mailto:musfiqurok@gmail.com" className="text-secondary ml-2 sm:ml-4">
                    musfiqurok@gmail.com
                  </a>
                </p>
                <p className="text-white">
                  From :
                  <span className="text-gray-500 ml-2 sm:ml-4">Khulna, Bangladesh</span>
                </p>
              </div>
            </div>

            <div className="flex mt-8 items-center">
              <a href="/Web Developer.pdf" download="Musfiqur_Rahman_Nafis.pdf">
                <Button>Download CV</Button>
              </a>
              <div className="flex items-center space-x-4 ml-6 sm:ml-0">
                <div className="h-[1px] w-full bg-gray-500 mx-4 hidden sm:block" />

                <a href="https://www.linkedin.com/in/musfiqur-rahman-8b8193265/" target="new"
                  className="group relative">
                  <img src="/linkedin.svg" alt="Linkedin" className="sm:size-20 size-10" />

                  <div className="absolute top-20 left-1/2 -translate-x-1/2 hidden group-hover:block 
                  bg-secondary rounded-xl text-white text-center py-2 px-4">
                    LinkedIn
                  </div>
                </a>

                <a href="https://github.com/n4f1s" target="new" className="group relative">
                  <img src="/github.svg" alt="GitHub" className="sm:size-20 size-10" />

                  <div className="absolute top-20 left-1/2 -translate-x-1/2 hidden group-hover:block 
                  bg-secondary rounded-xl text-white text-center py-2 px-4">
                    GitHub
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </>
  )
}

export default About;