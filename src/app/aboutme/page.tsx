"use client";
import Header from "../components/header";
import ContactFooter from "../components/contact-footer";
import LinkButton from "../components/project/link-button";
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
      duration: 0.8,
    },
  },
};

export default function Projects() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "10000px 0px",
    triggerOnce: true,
  });

  return (
    <main className="flex bg-soft-grey text-dark-grey min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="pt-36 w-full">
        <div className="w-full h-full mt-16 mb-64 flex flex-col md:flex-row p-8">
          <span className="font-semibold text-3xl whitespace-nowrap mx-24 pb-6 md:pb-0">
            Who am I
          </span>
          <div className="font-medium text-2xl overflow-hidden md:border-l-2 md:border-dark-grey p-1 md:pl-16 md:mr-24">
            <motion.ul
              className="flex flex-col flex-wrap"
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              <motion.li variants={item}>
                I&apos;m a <b>CS student</b> who&apos;s always loved creating
                things. Ever since I got my first computer, I&apos;ve explored
                everything from 3D modeling and game development to video
                editing and digital art. But when But it was coding that really
                stood out as my favorite. <br />I love turning ideas into sleek,
                user-friendly <b>websites</b> and <b>applications</b>. I&apos;m
                not just about web development work, though — I enjoy diving
                into every aspect of <b>computer science</b>. Working on{" "}
                <b>challenging projects</b> with a positive team in a great
                environment is what I enjoy most.
              </motion.li>
            </motion.ul>
          </div>
        </div>

        <div className="w-full h-full mt-16 mb-64 flex flex-col md:flex-row p-8">
          <span className="font-semibold text-3xl whitespace-nowrap mx-24 pb-6 md:pb-0">
            What I do
          </span>
          <div className="font-medium text-2xl overflow-hidden md:border-l-2 md:border-dark-grey p-1 md:pl-16 md:mr-24">
            <motion.ul
              className="flex flex-col flex-wrap"
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              <motion.li variants={item}>
                After earning my <b>French Baccalauréat</b> with a
                specialization in Mathematics and Physics and achieving{" "}
                <b>honors</b>, I enrolled in the <b>Bachelor of Science</b> in
                Computer Science program at{" "}
                <b>Claude Bernard University Lyon 1</b>
                . <br />I devote considerable time to exploring a wide range of
                topics outside of class, be it related to computer science or
                spanning diverse fields from <b>marketing</b> to{" "}
                <b>philosophy</b>. I continue to engage in <b>art</b>,
                channeling my creativity through drawing, writing, and design
                creation. <br /> This broad spectrum of interests not only
                enriches my understanding but also complements my studies in
                computer science.
              </motion.li>
            </motion.ul>
          </div>
        </div>

        <div className="w-full h-full mt-16 mb-64 flex flex-col md:flex-row p-8">
          <span className="font-semibold text-3xl whitespace-nowrap mx-24 pb-6 md:pb-0">
            My Skills
          </span>
          <div className="font-medium text-2xl flex flex-col md:flex-row gap-32 overflow-hidden md:border-l-2 md:border-dark-grey p-1 md:pl-16 md:mr-24">
            <motion.ul
              className="flex flex-col flex-wrap"
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              <motion.li className="mb-2" variants={item}>
                Languages
              </motion.li>
              <motion.li variants={item}>
                <ul className="font-normal text-lg [&>*]:pb-2 [&>*]:ml-4 list-disc">
                  <li>HTML/CSS</li>
                  <li>SASS/SCSS</li>
                  <li>Javascript/Typescript</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>PHP</li>
                  <li>Java</li>
                </ul>
              </motion.li>
            </motion.ul>
            <motion.ul
              className="flex flex-col flex-wrap"
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              ref={ref}
            >
              <motion.li className="mb-2" variants={item}>
                Framworks/ Librairies/ Others
              </motion.li>
              <motion.li className="flex flex-row gap-24" variants={item}>
                <ul className="font-normal text-lg [&>*]:pb-2 [&>*]:ml-4 list-disc">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Framer motion</li>
                </ul>
                <ul className="font-normal text-lg [&>*]:pb-2 [&>*]:ml-6 list-disc">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>PowerBi</li>
                  <li>Adobe Photoshop</li>
                  <li>Figma</li>
                  <li>Blender</li>
                  <li>MySQL</li>
                </ul>
              </motion.li>
            </motion.ul>
          </div>
        </div>
            <div className="overflow-hidden flex flex-col items-center md:flex-row whitespace-nowrap justify-center md:justify-end gap-5 p-5 ml-auto mb-12">
          <LinkButton
            name="Take a look at my Resume"
            link={"https://drive.google.com/file/d/1Ws9VBPS50wVBEFkEbvx9OTVMC8SDquwV/view?usp=sharing"}
            isMain={true}
          />
        </div>
            
      </div>
      <ContactFooter />
    </main>
  );
}
