'use client';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';


const curve = (initialPath, targetPath) => {
    return {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, delay: .15, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        }
    }
}

const translate = {
    initial: {
        top: "-300px"
    },
    enter: {
        top: "-100vh",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: {
            top: "100vh"
        }
    },
    exit: {
        top: "-300px",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
}

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    }
}

export default function PageTwo({ children, backgroundColor }) {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })

    const url = usePathname()
    // Remove '/pages/' from the pathname
    let pageName = url.replace('/pages/', '');
    if(pageName === "/") pageName = "home"

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <div className='z-50' style={{ backgroundColor }}>
            <div style={{ opacity: dimensions.width == null ? 1 : 0, height: "calc(100vh + 600px)" }}
                className="fixed w-[100vw] pointer-events-none left-0 top-0 bg-secondary
                transition-opacity delay-100 z-[60]" />
            <motion.p
                className='absolute top-[40%] left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 text-6xl sm:text-8xl font-bold text-black z-[60] capitalize'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
            >
                {pageName}
            </motion.p>
            {dimensions.width != null && <SVG {...dimensions} />}
            {
                children
            }
        </div>
    )
}

const SVG = ({ height, width }) => {

    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 500}
        Q${width / 2} ${height + 200} 0 ${height + 500}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 800
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg {...anim(translate)} className="fixed w-[100vw] pointer-events-none left-0 top-0 z-50"
            style={{ height: "calc(100vh + 600px)" }}>
            <motion.path {...anim(curve(initialPath, targetPath))} fill="#aaa6c3" />
        </motion.svg>
    )
}