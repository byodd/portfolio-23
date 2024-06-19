"use client";
import Projects from "../../data/skills-list";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header";
import Info from "@/app/components/project/info";
import ContactFooter from "@/app/components/contact-footer";
import Arrow from "../../../../public/north_east.png";
import { motion } from "framer-motion";
import AnimWrapper from "@/app/components/anim-wrapper";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/app/components/projects/project-card";
import { useRouter } from 'next/navigation'

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
    },
  },
};

export default function Page({ params }: { params: { id: string } }) {
  const projects = Projects();
  const project = projects.find((p) => p.id === params.id);
  const router = useRouter()

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
    rootMargin: screenWidth && screenWidth > 870 ? "900px 0px" : "8000px 0px",
    triggerOnce: true,
  });

  if (!project) {
    return <div>Projet introuvable!</div>;
  } else {
    var transitionColor = project.color;
  }

  return (
    <AnimWrapper>
      <Header />
      <div className="overflow-hidden absolute flex justify-end gap-5 p-5 ml-auto mb-3 top-24 right-3 z-10">
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
        >
          <button
            className={
              "box w-full flex flex-row items-center border border-dark-grey font-semibold rounded-full p-4 rotate-180 pt-3.5 pb-4 hover:bg-rv-dark-grey hover:text-black hover:invert"
            }
            onClick={() => router.back()}
          >
            <Image src={Arrow} alt="arrow" />
          </button>
        </motion.div>
      </div>
      {project.images.map((image, index) => {
        if (index === 0) {
          return (
            <div className="w-full h-[70vh] mt-6 relative" key={index}>
              <Image
                src={image.url}
                className="border rounded-t-[40px]"
                alt="img"
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="px-10 text-dark-grey">
        <div className="md:p-20 pt-10 flex flex-col">
          <span className=" text-2xl md:text-8xl mb-6 font-medium ">
            {project.name}
          </span>
          <div className="flex flex-col w-full gap-10">
            <Info title="Détails" description={project.detail} />
            <Info title="Recul réflexif" description={project.review} />
            <Info
              title="Compétences mise en oeuvre"
              description={project.description}
              list={project.skillList}
            />
          </div>
          <Info title="Traces/preuves" description="" />
          <motion.ul
            className="flex flex-row pt-20 mb-10 gap-20 justify-center flex-wrap"
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            {project.projects.map((project, index) => (
              <motion.li
                key={index}
                className="item w-[504px] h-[600px]"
                whileHover={{ scale: 1.1 }}
                variants={item}
              >
                <ProjectCard {...project}></ProjectCard>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <ContactFooter />
    </AnimWrapper>
  );
}
