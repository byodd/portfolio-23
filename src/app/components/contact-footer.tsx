import Link from "next/link";

export default function ContactFooter() {
  return (
    <div className="bg-darker-grey w-full min-h-screen text-white flex flex-col">
      <div className="font-semibold text-xl pl-24 ">
        <div>
          <span>Quick Links</span>
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
          <span>Socials</span>
          <div className="flex flex-row gap-3 text-3xl">
            <Link href="https://www.linkedin.com/in/gattaba/" className="hover:underline">
              LinkedIn
            </Link>
            -
            <Link href="https://github.com/gattacode" className="hover:underline">
              Github
            </Link>
            -
            <Link href="https://twitter.com/spacialkid" className="hover:underline">
              Twitter
            </Link>
          </div>
        </div>
        <div>
          <span>Extras</span>
          <div className="flex flex-row gap-3 text-3xl">
            <Link href="/" className="hover:underline">
              Resume
            </Link>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Gatta Ba</p>
    </div>
  );
}
