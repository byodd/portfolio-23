import { Project } from "../utils/project";

export default function ProjectList() {
  let projects: Project[] = [
    {
      id: "hostin-agency",
      name: "Hostin Agency",
      description: "Hostin Agency is a site that aims to facilitate the search for tenants for luxury real estate. The aim is to use popular platforms such as Booking and Airbnb to maximize property visibility and ensure optimal occupancy.",
      role: "Design, Fullstack Development",
      techStack: "Html, Css, Javascript",
      visitLink: "https://hostin-agency.vercel.app/",
      repoLink: "https://github.com/gattacode/hostin-agency",
      images: [
        {
          url: "/hostin-agency/ha1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/hostin-agency/ha2.png",
          description: "Vue",
        },
        {
          url: "/hostin-agency/ha3.png",
          description: "Vue",
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
