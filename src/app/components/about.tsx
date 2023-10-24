"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    }
  },
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "50px 0px",
    triggerOnce: true,
  });
  return (
    <div className="w-full h-full mt-16 mb-64 flex flex-row p-8">
      <span className="font-semibold text-3xl whitespace-nowrap mx-24">
        About me
      </span>
      <div className="font-medium text-2xl border-l-2 border-dark-grey p-1 pl-16 mr-24">
        <motion.ul
          className="flex flex-row flex-wrap"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.li variants={item}>
            Starting my tech journey with a knack for design,I dove into coding
          </motion.li>
          <motion.li variants={item}>
            {" "}
            throughout my Computer Science Bachelor&#39;s program.
          </motion.li>
          <motion.li variants={item}>
            Currently in my second year, I&#39;ve self-taught beyond the
            classroom,
          </motion.li>
          <motion.li variants={item}>
            tackling software and full-stack projects.
          </motion.li>
          <motion.li variants={item}>
            Now, with a better understanding of coding,
            combined with my love for 
          </motion.li>
          <motion.li variants={item}>design,
            I&#39;m looking forward to what I can create next.
            </motion.li>
          <motion.li variants={item}>
          <br/>
          I&#39;m always ready to learn more and work on exciting projects.
          </motion.li>
          <motion.li variants={item}>
          Let’s build something great together! 🚀
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
