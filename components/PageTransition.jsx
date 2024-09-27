"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";


export const expand = {
    initial: {
        top: 0
    },
    enter: (i) => ({
        top: "100vh",
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", top: "0" }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
}
export const opacity = {
    initial: {
        opacity: 1
    },
    enter: {
        opacity: 0
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1,
            ease: [0.215, 0.61, 0.355, 1]
        }

    }
}

export default function PageTransition({ children, backgroundColor }) {

    const anim = (variants, custom = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 6
    return (
        <AnimatePresence mode="wait">
            <div style={{ backgroundColor }} className="">
                <motion.div {...anim(opacity)} className='fixed w-full h-screen bg-black z-50 
                pointer-events-none inset-0' />
                <div className='fixed w-[100vw] h-screen flex left-0 top-0 pointer-events-none z-50'>
                    {
                        [...Array(nbOfColumns)].map((_, i) => {
                            return (
                                <motion.div className="relative h-full w-full bg-white" 
                                key={i} {...anim(expand, nbOfColumns - i)} />
                            )
                        })
                    }
                </div>

                {
                    children
                }
            </div>
        </AnimatePresence>
    )
}