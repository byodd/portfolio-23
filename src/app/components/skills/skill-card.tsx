import Image from "next/image";
import Link from "next/link";
import { Skill } from "@/app/utils/skill";

export default function SkillCard(skill: Skill) {
  let coverUrl = skill.images.length > 0 ? skill.images[0].url : "/errorbot.png";
  let name = skill.name.length > 0 ? skill.name : "Compétence";
  let detail = skill.detail?.length > 0 ? skill.detail : "Compétence";
  let link = "/skill/" + skill.id;

  return (
    <div className="max-w-[504px] h-[600px] p-6 md:p-0">
      <Link href={link}>
        <div className="h-[462px] relative">
          <Image
            src={coverUrl}
            alt="skill-cover"
            fill
            className="object-cover"
            quality={100}
          ></Image>
        </div>
        <div className="border-b-2 border-light-grey py-5">
          <span className="text-4xl font-semibold">{name}</span>
        </div>
        <div className="flex flex-row w-full mt-5">
          <span className="text-base font-medium">{detail}</span>
        </div>
      </Link>
    </div>
  );
}
