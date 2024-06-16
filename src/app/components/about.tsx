"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    },
  },
};

export default function About() {
  // handle animation on small screens
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
    rootMargin: screenWidth && screenWidth > 870 ? "50px 0px" : "0px 0px",
    triggerOnce: true,
  });
  return (
    <div className="w-full h-full mt-16 mb-64 flex flex-col md:flex-row p-8">
      <Link
        href="/aboutme"
        className="font-semibold text-3xl whitespace-nowrap mx-24 pb-6 overflow-hidden md:pb-0 hover:font-bold"
      >
        About me
      </Link>
      <div className="font-medium text-2xl overflow-hidden md:border-l-2 md:border-dark-grey p-1 md:pl-16 md:mr-24">
        <motion.ul
          className="flex flex-col flex-wrap"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.li variants={item}>
            En commençant mon parcours technologique avec un talent pour le
            design, je me suis lancé dans la programmation.
          </motion.li>
          <motion.li variants={item}>
            Actuellement en deuxième année de BUT en informatique, j&apos;ai
            appris en autodidacte au-delà de la salle de classe en
            m&apos;attaquant à des projets logiciels et full-stack.
          </motion.li>
          <motion.li variants={item}></motion.li>
          <motion.li variants={item}>
            Maintenant, avec une meilleure compréhension de la programmation,
            combinée à mon amour pour le design, j&apos;ai hâte de voir ce que
            je peux créer de nouveau.
          </motion.li>
          <motion.li variants={item}>
            <br />
            Je suis toujours prêt à apprendre plus et à travailler sur des
            projets passionnants.
          </motion.li>
          <motion.li variants={item}>
            Construisons quelque chose de grand ensemble ! 🚀
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
