"use client"

import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "./Button";



const VideoScreen = () => {
    const { width, height } = useWindowSize();
    const carouselWrapperRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ["start start", "end start"],
    });

    const maximumScale = useMemo(() => {
        const windowYRatio = height / width;
        const xScale = 1.66667;
        const yScale = xScale * (16 / 9) * windowYRatio;
        return Math.max(xScale, yScale);
    }, [width, height]);

    const scale = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.66],
        [maximumScale * 1.1, maximumScale, 1],
    );

    const [carouselVariant, setCarouselVariant] = useState("inactive");
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (progress >= 0.67) {
            setCarouselVariant("active");
        } else {
            setCarouselVariant("inactive");
        }
    });

    const [videoSrc, setVideoSrc] = useState(window.innerHeight < 760 ? "/projects/mobileVideo.mp4" : "/projects/video.mp4");

    const handleVideoSrcSet = () => {
        if (window.innerHeight < 760) {
            setVideoSrc("/projects/mobileVideo.mp4")
        } else {
            setVideoSrc("/projects/video.mp4")
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [handleVideoSrcSet])


    return (
        <div className="mt-10">
            <motion.div animate={carouselVariant}>
                <div
                    ref={carouselWrapperRef}
                    className="h-[300vh] overflow-clip"
                >
                    <div className="sticky top-0 flex h-screen items-center">
                        <div className="relative mb-5 flex mx-auto">
                            <motion.div
                                style={{ scale }}
                                className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline={true}
                                    key={videoSrc}
                                    preload="auto"
                                    className='pointer-events-none h-[450px] w-[300px] 
                                    md:h-full md:w-full object-cover mx-auto'
                                >
                                    <source
                                        src={videoSrc}
                                        type='video/mp4'
                                    />
                                </video>
                                <motion.div
                                    variants={{
                                        active: { opacity: 1 },
                                        inactive: { opacity: 0 },
                                    }}
                                    className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 
                                    py-5 px-10 text-lg text-white md:flex-row md:justify-between md:gap-0"
                                >
                                    <p className="text-gray1 font-bold text-2xl">Live project</p>
                                    <a href="https://apple-six-liard.vercel.app/" target="new">
                                        <Button>Visit now</Button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div
                    variants={{
                        active: { opacity: 1, y: 0 },
                        inactive: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.4 }}
                    className=" space-y-3 pt-4
                    -mt-[calc((100vh-(60vw*(9/16)))/2)]"
                />
            </motion.div>
        </div>
    );
};




export default VideoScreen;