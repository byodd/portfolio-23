"use client";
import ProjectCard from "./skill-card";
import Projects from "../../data/skills-list";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    }
  },
};

export default function ProjetsGallery() {
  // handle animation on small screens
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const projects = Projects();
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: (screenWidth && screenWidth > 870) ? "900px 0px" : "8000px 0px",
    triggerOnce: true,
  });
  
  return (
    <motion.ul
      className="flex flex-row pt-20 mb-10 gap-20 justify-center flex-wrap"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      {projects.map((project, index) => (
        <motion.li key={index} className="item w-[504px] h-[600px]" whileHover={{ scale: 1.1 }} variants={item}>
          <ProjectCard {...project}></ProjectCard>
        </motion.li>
      ))}
    </motion.ul>
  );
}
