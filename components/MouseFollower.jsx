'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const colors = [
  "#fdaf50", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
  "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
];


const MouseFollower = () => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultSize = 24;
  const hoverSize = 90;
  const numberOfCircles = 12;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { damping: 20, stiffness: 300, mass: 0.5 }),
    y: useSpring(mouse.y, { damping: 20, stiffness: 300, mass: 0.5 }),
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX - defaultSize / 2);
      mouse.y.set(e.clientY - defaultSize / 2);

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      setIsHovered(hoveredElement?.classList.contains('hover-trigger') || false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouse.x, mouse.y]);

  return (
    <>
      {Array.from({ length: numberOfCircles }).map((_, index) => {
        const angle = (2 * Math.PI / numberOfCircles) * index;
        const xOffset = isHovered ? Math.sin(angle) * 20 : Math.sin(angle) * 50;
        const yOffset = isHovered ? Math.cos(angle) * 20 : Math.cos(angle) * 50;

        return (
          <motion.div
            key={index}
            style={{
              left: smoothMouse.x,
              top: smoothMouse.y,
              width: isHovered ? hoverSize : defaultSize,
              height: isHovered ? hoverSize : defaultSize,
              backgroundColor: colors[index % colors.length],
              translateX: `${xOffset}px`,
              translateY: `${yOffset}px`,
            }}
            className="fixed pointer-events-none rounded-full -z-10 transition duration-700 
            ease-in-out"
          />
        );
      })}
    </>
  );
};

export default MouseFollower;







