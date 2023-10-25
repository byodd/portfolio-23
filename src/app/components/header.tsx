"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-gb.png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <div className="w-1/3 text-xl font-semibold flex items-center pt-4 pl-11 mr-auto">
      <Link href="/">
        <motion.div
          className="container"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            triggerOnce: true,
          }}
        >
          <Image src={Logo} className="w-12" alt="logo" />{" "}
        </motion.div>
      </Link>
      <div className="flex ml-20 gap-16">
        <Link
          href="/"
          className={currentRoute === "/" ? "text-dark-grey" : "text-mid-grey hover:text-dark-grey"}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={
            currentRoute === "/projects" ? "text-dark-grey" : "text-mid-grey hover:text-dark-grey"
          }
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className={
            currentRoute === "/contact" ? "text-dark-grey" : "text-mid-grey hover:text-dark-grey"
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
