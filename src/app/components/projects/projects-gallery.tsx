import ProjectCard from "./project-card";
import { Project } from '../../utils/project';

export default function ProjetsGallery() {
  let projects: Project[] = [
    {
      id: "zoba",
      name: "Projet A",
      description: "Un projet innovant sur le Web",
      role: "Développeur Frontend",
      techStack: "React, TypeScript, GraphQL",
      collaborators: "Alice, Bob",
      images: [
        {
          url: "/gattapicture.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "../../../../public/errorbot.png",
          description: "Vue mobile du tableau de bord",
        },
      ],
    },
    {
      id: "boza",
      name: "Projet B",
      description: "Une application mobile pour les amateurs de café",
      role: "Développeur Full Stack",
      techStack: "React Native, Node.js, MongoDB",
      images: [{ url: "/errorbot.png" }],
    },
  ];

  return (
    <div className="w-full p-5 flex flex-row gap-20 justify-center flex-wrap">
      <ProjectCard {...projects[0]}></ProjectCard>
      <ProjectCard {...projects[1]}></ProjectCard>
      <ProjectCard {...projects[0]}></ProjectCard>
      <ProjectCard {...projects[1]}></ProjectCard>
    </div>
  );
}
