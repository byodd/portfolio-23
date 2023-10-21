"use client";
import Image from "next/image";
import Portrait from "../../../public/gattapicture.png";
import Arrow from "../../../public/south-arrow.png";

export default function Presentation() {
  return (
    <div className="w-full h-screen flex flex-colw">
      <Image
        className="w-1/3 absolute top-10 right-10 z-0"
        src={Portrait}
        alt="portrait"
      />
      <div className="flex flex-col items-center absolute right-5 bottom-5">
        <Image src={Arrow} alt="arrow"
        className="w-5 h-7 animate-bounce" />
        <span className="font-medium text-2xl	">Scroll</span>
      </div>
      <div className="pl-24 font-semibold text-8xl flex flex-col relative z-10 mt-auto mb-64">
        <p className="mb-3">Gatta Ba</p>
        <div className="px-5 pb-1 bg-soft-blue w-44 flex justify-center -rotate-14 -mb-7 -ml-16">
          <p className="text-3xl text-soft-grey">Aspiring</p>
        </div>
        <p>Software Developer</p>
        <p className="text-4xl">(fullstack capable)</p>
      </div>
    </div>
  );
}
