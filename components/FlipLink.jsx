'use client'
import React from "react";
import { motion } from "framer-motion";


const DURATION = 0.40;
const STAGGER = 0.07;

const FlipLink = ({ children, href, className }) => {
    const words = children.split("");

    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className={`relative block overflow-hidden whitespace-nowrap uppercase ${className}`}
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {words.map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-200%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {words.map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "200%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

export default FlipLink;