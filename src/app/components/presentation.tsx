"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Portrait from "../../../public/gattapicture.png";
import Arrow from "../../../public/south-arrow.png";
import Link from "next/link";

// mask for sticker animation
const hiddenMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 600px, rgba(0,0,0,1) 600px, rgba(0,0,0,1) 600px)`;
const visibleMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 600px)`;

export default function Presentation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="w-full h-screen flex flex-col">
      <Image
        className="w-2/3 md:w-1/3 absolute top-36 md:top-10 right-10 z-0 rotate-15"
        src={Portrait}
        alt="portrait"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="flex flex-col items-center absolute right-5 bottom-5">
        <Image src={Arrow} alt="arrow" className="w-5 h-7 animate-bounce" />
        <span className="font-medium text-2xl	">Scroll</span>
      </div>
      <div className=" pl-12 md:pl-24 font-semibold text-4xl md:text-8xl flex flex-col relative z-10 mt-auto mb-64">
        <p className="mb-3 whitespace-nowrap">Gatta Ba</p>
        <motion.div
          ref={ref}
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 0.4 }}
          className="px-5 pb-1 bg-soft-blue w-20 md:w-44 flex justify-center -rotate-14 -mb-5 md:-mb-7 -ml-12 md:-ml-16"
        >
          <p className="text-base md:text-3xl text-soft-grey">Aspirant</p>
        </motion.div>
        <p className="whitespace-nowrap">Software Developer</p>
        <p className="text-lg md:text-4xl">(compétent fullstack)</p>
        <div className="overflow-hidden flex justify-start py-3 pl-2">
          <motion.div
            className="flex justify-center "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="box border border-dark-grey hover:border-white rounded-full text-xs md:text-base flex flex-row px-4 md:px-8 pt-3.5 mt-6 pb-4 duration-300 hover:bg-white hover:text-dark-grey"
              href="https://drive.google.com/file/d/1Ws9VBPS50wVBEFkEbvx9OTVMC8SDquwV/view?usp=sharing"
            >
              Voir mon CV
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
