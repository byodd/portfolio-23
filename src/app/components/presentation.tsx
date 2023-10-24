"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Portrait from "../../../public/gattapicture.png";
import Arrow from "../../../public/south-arrow.png";

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
        className="w-1/3 absolute top-10 right-10 z-0 rotate-15"
        src={Portrait}
        alt="portrait"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="flex flex-col items-center absolute right-5 bottom-5">
        <Image src={Arrow} alt="arrow" className="w-5 h-7 animate-bounce" />
        <span className="font-medium text-2xl	">Scroll</span>
      </div>
      <div className="pl-24 font-semibold text-8xl flex flex-col relative z-10 mt-auto mb-64">
        <p className="mb-3">Gatta Ba</p>
        <motion.div
          ref={ref}
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 0.4 }}
          className="px-5 pb-1 bg-soft-blue w-44 flex justify-center -rotate-14 -mb-7 -ml-16"
        >
          
            <p className="text-3xl text-soft-grey">Aspiring</p>
        </motion.div>
        <p>Software Developer</p>
        <p className="text-4xl">(fullstack capable)</p>
      </div>
    </div>
  );
}
