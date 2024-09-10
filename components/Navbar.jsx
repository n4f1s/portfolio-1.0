"use client"
import React, { useEffect, useState } from 'react'
import { styles } from '@/app/styles'
import Link from 'next/link'
import { MotionConfig, motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { NavMenuButtonVariants } from '@/utils/motion';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  // Show navbar when scrolling up hide when scrolling down
  const { scrollY } = useScroll();

  const [navBg, setNavBg] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 550) {
      setHidden(true);
      setNavBg(true);
    } else if (latest < 550) {
      setNavBg(false);
    }
    else {
      setHidden(false);
    }
  })

  return (
    <motion.nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-50 
      ${!navBg ? "bg-transparent" : "bg-slate-800/50 backdrop-blur-sm"}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src='/logo.png'
            alt='Logo'
            className='size-16 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Nafis &nbsp; <span className='sm:block hidden'>| Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? "text-white" : "text-secondary"} 
              text-[18px] font-medium cursor-pointer`}
            >
              <Link
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Mobile menu button */}
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={toggle ? "open" : "closed"}
              onClick={() => {
                setToggle(!toggle);
              }}
              className="relative h-10 w-20 rounded-full transition-colors hover:bg-white/20"
            >
              <motion.span
                variants={NavMenuButtonVariants.top}
                className="absolute h-1 w-10 bg-white"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={NavMenuButtonVariants.middle}
                className="absolute h-1 w-10 bg-white"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={NavMenuButtonVariants.bottom}
                className="absolute h-1 w-5 bg-white"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                }}
              />
            </motion.button>
          </MotionConfig>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 
          right-0 mx-4 my-2 min-w[140px] z-40 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-center gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} 
                  hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar