"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Ellipse from "../../../public/footer-ellipse.png";

export default function ContactFooter() {
  return (
    <div className="bg-darker-grey w-full min-h-screen text-white flex flex-col z-0 overflow-hidden">
      <Image src={Ellipse} alt="ellipse" className="-mt-[70%]"></Image>
      <div
        id="contact"
        className="font-semibold text-xl md:text-3xl pl-12 md:pl-24 flex flex-col justify-center gap-11"
      >
        <div className=" my-20">
          <div className="overflow-hidden flex justify-start md:p-10 ml-auto">
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <Link
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="box border rounded-full flex flex-row px-12 pt-3.5 pb-4 duration-300 hover:bg-white hover:text-dark-grey"
                href="mailto:gatta.code@gmail.com"
              >
                gatta.code@gmail.com
              </Link>
            </motion.div>
          </div>
        </div>
        <div>
          <span className="text-base">Liens rapides</span>
          <div className="flex flex-row gap-3 text-xl md:text-3xl">
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
            -
            <Link href="/projects" className="hover:underline">
              Projets
            </Link>
            -
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base">Réseaux sociaux</span>
          <div className="flex flex-row gap-3 text-xl md:text-3xl">
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="https://www.linkedin.com/in/gattaba/"
              className="hover:underline"
            >
              LinkedIn
            </Link>
            -
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="https://github.com/gattacode"
              className="hover:underline"
            >
              Github
            </Link>
            -
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="https://twitter.com/spacialkid"
              className="hover:underline"
            >
              Twitter
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base">Extras</span>
          <div className="flex flex-row gap-3 text-xl md:text-3xl mb-36">
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="https://drive.google.com/file/d/1Ws9VBPS50wVBEFkEbvx9OTVMC8SDquwV/view?usp=sharing"
              className="hover:underline"
            >
              CV
            </Link>
            -
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="https://mail.google.com/mail/u/0/?fs=1&to=gatta.code@gmail.com&tf=cm"
              className="hover:underline"
            >
              Envoyer un mail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
