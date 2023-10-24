import { Project } from "../utils/project";

export default function ProjectList() {
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
          url: "/errorbot.png",
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

  return projects;
}
