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
            Qui suis-je ?
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
                Je suis un <b>étudiant en informatique</b> qui a toujours aimé
                créer des choses. Depuis que j&apos;ai eu mon premier
                ordinateur, j&apos;ai tout exploré, de la modélisation 3D et du
                développement de jeux à la création de vidéos et à l&apos;art
                numérique. Parmi toutes ces activités, c&apos;est la
                programmation qui m&apos;a le plus captivé.
                <br />
                J&apos;adore transformer des idées en <b>sites web</b> et{" "}
                <b>applications</b> élégants et conviviaux. Mes intérêts ne se
                limitent pas au développement web, j&apos;aime plonger dans tous
                les aspects de l&apos;<b>informatique</b>. Travailler sur des{" "}
                <b>projets stimulants</b> avec une équipe positive est ce que
                j&apos;apprécie le plus.
              </motion.li>
            </motion.ul>
          </div>
        </div>

        <div className="w-full h-full mt-16 mb-64 flex flex-col md:flex-row p-8">
          <span className="font-semibold text-3xl whitespace-nowrap mx-24 pb-6 md:pb-0">
            Que fais-je ?
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
                Après avoir obtenu mon <b>Baccalauréat </b> avec une
                spécialisation en Mathématiques et Physique, je me suis inscrit
                dans le programme de{" "}
                <b>Bachelor Universitaire de Technologie</b> en informatique à
                l&apos;
                <b>Université Claude Bernard Lyon 1</b>.
                <br />
                Je consacre beaucoup de temps à explorer une large gamme de
                sujets en dehors des cours, qu&apos;ils soient liés à
                l&apos;informatique ou couvrant des domaines divers allant du{" "}
                <b>marketing</b> à la philosophie. Je continue à m&apos;engager
                dans l&apos;<b>art</b>, canalisant ma créativité à travers le
                dessin, l&apos;écriture et la création de designs.
                <br />
                Ce large éventail d&apos;intérêts enrichit non seulement ma
                compréhension mais complète également mes études en
                informatique.
              </motion.li>
            </motion.ul>
          </div>
        </div>

        <div className="w-full h-full mt-16 mb-64 flex flex-col md:flex-row p-8">
          <span className="font-semibold text-3xl whitespace-nowrap mx-24 pb-6 md:pb-0">
            Ma stack technique
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
                Langages
              </motion.li>
              <motion.li variants={item}>
                <ul className="font-normal text-lg [&>*]:pb-2 [&>*]:ml-4 list-disc">
                  <li>HTML/CSS</li>
                  <li>SASS/SCSS</li>
                  <li>Javascript/Typescript</li>
                  <li>C</li>
                  <li>C#</li>
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
                Frameworks/ Librairies/ Autres
              </motion.li>
              <motion.li className="flex flex-row gap-24" variants={item}>
                <ul className="font-normal text-lg [&>*]:pb-2 [&>*]:ml-4 list-disc">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Next.js</li>
                  <li>Vue.js</li>
                  <li>Tailwind CSS</li>
                  <li>Framer motion</li>
                </ul>
                <ul className="font-normal text-lg [&>*]:pb-2 [&>*]:ml-6 list-disc">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Kotlin</li>
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
            name="Jeter un oeil à mon CV"
            link={
              "https://drive.google.com/file/d/11RBj13EX7f4bnYdMgVMjvrdRAagFufzx/view?usp=drive_link"
            }
            isMain={true}
          />
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
