'use client';

import { styles } from "@/app/styles";
import { motion } from "framer-motion";


const HeroLoader = () => {
    const text = "Crafted with Next.js, Three.js, Tailwind CSS, and Framer Motion."

    const words = text.split(" ");

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <motion.div
                className={`${styles.sectionHeadText} text-center pt-6 mx-10 overflow-hidden max-w-screen-2xl`}
            >
                {words.map((w, i) => (
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: "100%"
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.12 * i,
                            type: "spring",
                            mass: 1.5,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {w} &nbsp;
                    </motion.span>
                ))}
            </motion.div>

            <motion.div
                className="bg-secondary w-full h-4 mt-10"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                    duration: 3
                }}
            />
        </div>
    )
}

export default HeroLoader