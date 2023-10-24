import Image from "next/image";
import { Project } from "../../utils/project";
import Link from "next/link";

export default function ProjectCard(project: Project) {
  let coverUrl = project.images.length > 0 ? project.images[0].url : "/errorbot.png";
  let name = project.name.length > 0 ? project.name : "Projet";
  let role = project.role.length > 0 ? project.role : "Contributor";
  let techStack = project.techStack.length > 0 ? project.techStack : "Computer";
  let link = "/projects/" + project.id;

  return (
    <div className="w-[504px] h-[600px]">
      <Link href={link}>
        <div className="h-[462px] relative">
          <Image
            src={coverUrl}
            alt="project-cover"
            fill={true}
            objectFit="cover"
          ></Image>
        </div>
        <div className="border-b-2 border-light-grey py-5">
          <span className="text-4xl font-semibold">{name}</span>
        </div>
        <div className="flex flex-row w-full mt-5">
          <span className="text-base font-medium">{role}</span>
          <span className="text-base font-medium ml-auto">{techStack}</span>
        </div>
      </Link>
    </div>
  );
}
