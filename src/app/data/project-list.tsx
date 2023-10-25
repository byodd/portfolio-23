import { Project } from "../utils/project";

export default function ProjectList() {
  let projects: Project[] = [
    {
      id: "hostin-agency",
      name: "Hostin Agency",
      description: "My first personal project, Hostin Agency is a site that aims to facilitate the search for tenants for luxury real estate. The aim is to use popular platforms such as Booking and Airbnb to maximize property visibility and ensure optimal occupancy.",
      role: "Design, Frontend Development",
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
      id: "crous-kebab",
      name: "Crous Kebab",
      description: "🎓 My first university project, a food ordering website, inspired by the Uber Eats model. The platform enables students to place orders online with their Crous restaurant and have them delivered directly to their campus.",
      role: "Design, Frontend Development",
      techStack: "Html, Css",
      visitLink: "https://crous-kebab.vercel.app/",
      repoLink: "https://github.com/gattacode/CrousKebab",
      images: [
        {
          url: "/crous-kebab/ck1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/crous-kebab/ck2.png",
          description: "Vue",
        },
      ],
    },
  ];

  return projects;
}
