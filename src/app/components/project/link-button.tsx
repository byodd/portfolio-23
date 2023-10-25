"use client";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../../public/north_east.png";
import { motion } from "framer-motion";

type LinkProps = {
  name: string;
  link: string;
  isMain: boolean;
};

export default function LinkButton({ name, link, isMain }: LinkProps) {
  return (
    <motion.div
      className="flex justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      <Link
        className={`box w-full flex flex-row ${
          isMain
            ? "border rounded-full font-semibold pl-12 pr-6 pt-3.5 pb-4  bg-rv-dark-grey text-black invert"
            : "border border-dark-grey font-semibold rounded-full pl-12 pr-6 pt-3.5 pb-4  hover:bg-rv-dark-grey hover:text-black hover:invert"
        }`}
        href={link}
      >
        {name}
        <Image className="ml-5" src={Arrow} alt="arrow" />
      </Link>
    </motion.div>
  );
}
