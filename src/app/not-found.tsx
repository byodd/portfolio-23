import Image from "next/image";
import Bot from "../../public/errorbot.png";
import Header from "./components/header";
import ContactFooter from "./components/contact-footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex bg-soft-grey text-dark-grey min-h-screen flex-col box-border">
      <Header />
      <div className="flex flex-col my-auto items-center content-center">
        <Image src={Bot} className="w-52" alt="sadbot"></Image>
        <span className="font-bold text-5xl">404</span>
        <p className="font-semibold text-3xl">
          Page not found. Go back to{" "}
          <Link className="text-soft-blue font-bold" href="/">
            Home
          </Link>
        </p>
      </div>
      <ContactFooter />
    </main>
  );
}
