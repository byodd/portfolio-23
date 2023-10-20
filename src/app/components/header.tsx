"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-gb.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <div className="w-1/3 text-xl font-semibold flex items-center pt-4 pl-11 mr-auto">
      <Link className="mr-20" href="/">
        <Image className="w-14" src={Logo} alt="logo" />
      </Link>
      <div className="flex gap-16">
        <Link
          href="/"
          className={currentRoute === "/" ? "text-dark-grey" : "text-mid-grey"}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={currentRoute === "/projects" ? "text-dark-grey" : "text-mid-grey"}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={currentRoute === "/contact" ? "text-dark-grey" : "text-mid-grey"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
