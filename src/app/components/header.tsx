"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-gb.png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <div className="w-full pl-6 md:w-1/3 text-xl font-semibold flex items-center pt-4 md:pl-11 md:mr-auto">
      <Link className="w-12" href="/">
        <motion.div
          className="container w-12"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            triggerOnce: true,
          }}
        >
          <Image src={Logo} className="w-12" alt="logo" />
        </motion.div>
      </Link>
      <div className="flex pl-5 md:ml-20 gap-8">
        <Link
          href="/"
          className={
            currentRoute === "/"
              ? "text-dark-grey"
              : "text-mid-grey hover:text-dark-grey"
          }
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={
            currentRoute === "/projects"
              ? "text-dark-grey"
              : "text-mid-grey hover:text-dark-grey"
          }
        >
          Projects
        </Link>
        <Link
          href="/aboutme"
          className={
            currentRoute === "/aboutme"
              ? "text-dark-grey  whitespace-nowrap"
              : "text-mid-grey hover:text-dark-grey whitespace-nowrap"
          }
        >
          About Me
        </Link>
        <Link
          href="#contact"
          className={
            currentRoute === "/contact"
              ? "text-dark-grey"
              : "text-mid-grey hover:text-dark-grey"
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
