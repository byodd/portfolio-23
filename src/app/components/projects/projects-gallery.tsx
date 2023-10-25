"use client";
import ProjectCard from "./project-card";
import Projects from "../../data/project-list";
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
  const projects = Projects();
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "200px 0px",
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
      <motion.li className="item w-[504px] h-[600px]" whileHover={{ scale: 1.1 }} variants={item}>
        <ProjectCard {...projects[0]}></ProjectCard>{" "}
      </motion.li>
      <motion.li className="item w-[504px] h-[600px]" whileHover={{ scale: 1.1 }} variants={item}>
        <ProjectCard {...projects[0]}></ProjectCard>
      </motion.li>
      <motion.li className="item w-[504px] h-[600px]" whileHover={{ scale: 1.1 }} variants={item}>
        <ProjectCard {...projects[1]}></ProjectCard>
      </motion.li>
      <motion.li className="item w-[504px] h-[600px]" whileHover={{ scale: 1.1 }} variants={item}>
        <ProjectCard {...projects[1]}></ProjectCard>
      </motion.li>
    </motion.ul>
  );
}
