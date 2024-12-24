"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Timeline = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  const timelineData = [
    {
      year: "2020",
      title: "Project Launch",
      description: "Initial release of our flagship product",
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Expanded operations to 15 new countries",
    },
    {
      year: "2022",
      title: "Major Milestone",
      description: "Reached 1 million active users",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Received industry recognition for technological advancement",
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Setting new standards in the industry",
    },
  ];

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Timeline animates as it scrolls fully into view
  });

  // Dynamically adjust the progress bar height
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setProgress(value); // Track the current scroll position
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gray-50 overflow-hidden"
    >
      {/* Center vertical scroll bar */}
      <motion.div
        className="absolute left-1/2 top-0 w-1 bg-gray-200"
        style={{ height: "100%", transform: "translateX(-50%)" }}
      >
        <motion.div
          className="absolute left-0 w-full bg-blue-500"
          style={{ height: barHeight }}
        />
      </motion.div>

      {/* Timeline content */}
      <div className="max-w-4xl mx-auto">
        {timelineData.map((item, index) => {
          // Calculate when this item should appear based on progress
          const itemStart = index / timelineData.length;
          const itemEnd = (index + 1) / timelineData.length;

          // Dynamically calculate the item's opacity and position
          const opacity = useTransform(scrollYProgress, [itemStart, itemEnd], [0, 1]);
          const translateY = useTransform(
            scrollYProgress,
            [itemStart, itemEnd],
            [50, 0]
          );

          return (
            <motion.div
              key={index}
              className={`flex items-center gap-8 my-32 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{ opacity, transform: translateY }}
            >
              {/* Left/Right text content */}
              <div className="w-1/2 text-right">
                <div className="inline-block">
                  <h3 className="text-xl font-bold text-blue-500">{item.year}</h3>
                  <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>

              {/* Timeline marker */}
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-blue-500 relative z-10" />
                <div
                  className="absolute top-0 left-0 w-4 h-4 rounded-full 
                  bg-blue-300 animate-ping"
                />
              </div>

              {/* Placeholder for spacing */}
              <div className="w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
