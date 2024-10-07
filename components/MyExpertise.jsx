'use client'

import { Wrapper } from '@/hoc'
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';
import Image from 'next/image';
import { styles } from '@/app/styles';

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

const MyExpertise = () => {
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
        <Wrapper>
            <motion.div variants={textVariant(1)}>
                <h2 className={styles.sectionHeadText}>
                    My Expertise
                </h2>
            </motion.div>

            <div className="mt-20 sm:mt-24 flex flex-col md:flex-row w-full h-full relative">
                <div className="flex flex-col items-center gap-10 mx-10 md:mx-0 md:ml-4 space-y-8">
                    {Services.map((service) => (
                        <ServiceCard key={service.title} {...service} onHover={handleHover} />
                    ))}
                </div>
                {/* Arrow Image */}
                <img src="/arrow.gif" alt="Arrow" className="absolute top-20 left-[30%] md:block hidden" />

                <div className="md:ml-10 w-full h-[50vh] mt-0 md:-mt-[125px] mx-auto">
                    <ModelViewer animation={animation} />
                </div>

            </div>
        </Wrapper>
    )
}

export default MyExpertise