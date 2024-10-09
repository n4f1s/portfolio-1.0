
export const NavMenuButtonVariants = {
  top: {
      open: {
          rotate: ["0deg", "0deg", "45deg"],
          top: ["35%", "50%", "50%"],
      },
      closed: {
          rotate: ["45deg", "0deg", "0deg"],
          top: ["50%", "50%", "35%"],
      },
  },
  middle: {
      open: {
          rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
          rotate: ["-45deg", "0deg", "0deg"],
      },
  },
  bottom: {
      open: {
          rotate: ["0deg", "0deg", "45deg"],
          bottom: ["35%", "50%", "50%"],
          left: "50%",
      },
      closed: {
          rotate: ["45deg", "0deg", "0deg"],
          bottom: ["50%", "50%", "35%"],
          left: "calc(50% + 10px)",
      },
  },
}

export const mobileMenuSlide = {
  initial: { x: "calc(100% + 150px)" },
  enter: { x: "0", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 150px)", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.6 } }
}

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };