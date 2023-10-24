"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Ellipse from "../../../public/footer-ellipse.png";

export default function ContactFooter() {
  return (
    <div id="contact" className="bg-darker-grey w-full min-h-screen text-white flex flex-col z-0 overflow-hidden">
      <Image src={Ellipse} alt="ellipse" className="-mt-[70%]"></Image>
      <div className="font-semibold text-3xl pl-24 flex flex-col justify-center gap-11">
        <div className="my-36">
        <motion.div
      className="box"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 7 }}>
          <Link
            className="border rounded-full px-12 pt-3.5 pb-4 duration-300 hover:bg-white hover:text-dark-grey"
            href="mailto:gattacode@gmail.com"
          >
            gattacode@gmail.com
          </Link>
          </motion.div>
        </div>
        <div>
          <span className="text-base">Quick Links</span>
          <div className="flex flex-row gap-3 text-3xl">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            -
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            -
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base">Socials</span>
          <div className="flex flex-row gap-3 text-3xl">
            <Link
              href="https://www.linkedin.com/in/gattaba/"
              className="hover:underline"
            >
              LinkedIn
            </Link>
            -
            <Link
              href="https://github.com/gattacode"
              className="hover:underline"
            >
              Github
            </Link>
            -
            <Link
              href="https://twitter.com/spacialkid"
              className="hover:underline"
            >
              Twitter
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base">Extras</span>
          <div className="flex flex-row gap-3 text-3xl mb-36">
            <Link href="/" className="hover:underline">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
