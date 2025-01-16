'use client'

import { Wrapper } from "@/hoc";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";



const ProjectsHero = () => {
    return (
        <Wrapper className="mt-20">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
                <div>
                    <span className="block mb-4 text-xs md:text-sm text-secondary font-medium">
                        Crafting solutions, one project at a time
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold">
                        Building practical solutions through code
                    </h3>
                    <p className="text-base md:text-lg my-4 md:my-6">
                        Whether it's delivering client solutions, collaborating with teams to build robust software, or 
                        experimenting with new technologies, every project pushes me forward.
                    </p>
                    <a href="/pages/contact">
                        <Button>Contact Me</Button>
                    </a>
                </div>

                <ShuffleGrid />
            </section>
        </Wrapper>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "/projects/funfuse.webp",
    },
    {
        id: 2,
        src: "/projects/appleclone.webp",
    },
    {
        id: 3,
        src: "/projects/fizzi.webp",
    },
    {
        id: 4,
        src: "/projects/virtualbank.webp",
    },
    // {
    //     id: 5,
    //     src: "/projects/aora.webp",
    // },
    {
        id: 6,
        src: "/projects/petopia.webp",
    },
    {
        id: 7,
        src: "/projects/wegro.webp",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full bg-center"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center", 
                backgroundRepeat: "no-repeat",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 h-[450px] 
        content-center gap-6 sm:gap-1">
            {squares.slice(0, 9).map((sq) => sq)}
        </div>
    );
};

export default ProjectsHero;