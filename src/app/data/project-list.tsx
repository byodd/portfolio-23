import { Project } from "../utils/project";

export default function ProjectList() {
  let projects: Project[] = [
    {
      id: "unishare",
      name: "Unishare",
      description: "🎓 Unishare is a platform tailored for the community of Lyon 1 University. It provides students, faculty, and alumni with a space to publish and comment on articles.",
      role: "Design, Frontend Development",
      techStack: "Php, Tailwind",
      visitLink:"https://unifree38.000webhostapp.com/Pages/Feed.php",
      repoLink: "https://github.com/gattacode/unishare",
      collaborators: "Abdel 'TawahinBeirut' Gueribi",
      color: "#febf92",
      images: [
        {
          url: "/unishare/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/unishare/img2.png",
          description: "Vue",
        },
      ],
    },
    {
      id: "the-art-of",
      name: "The Art Of...",
      description: "The Art Of... is a digital canvas for artists from around the globe to exhibit their masterpieces, including captivating art from various animated movies. This web-based art gallery not only allows artists to showcase their unique works but also provides a podium to link back to their personal portfolios and online shops. Engage with the colorful journey of numerous artists and perhaps, find the piece that speaks to you.",
      role: "Design, Frontend Development",
      techStack: "React, Sass",
      visitLink: "https://the-art-of.vercel.app/",
      repoLink: "https://github.com/gattacode/the-art-of-app",
      color: "#dceff4",
      images: [
        {
          url: "/the-art-of/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/the-art-of/img2.png",
          description: "Vue",
        },
      ],
    },
    {
      id: "the-suite",
      name: "The Suite",
      description: "🚧 Under development: The Suite is an all-in-one online solution for time management and personal organization.",
      role: "Design, Fullstack Development",
      techStack: "Next, Tailwind",
      color: "#666666",
      images: [
        {
          url: "/the-suite/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/the-suite/img2.png",
          description: "Vue",
        },
      ],
    },
    {
      id: "medipath",
      name: "MediPath",
      description: "🎓 MediPath is an innovative route planning application for health dispensaries in a given region. Utilizing graph theory, this application provides tools to visualize, analyze, and optimize connections between different dispensaries on a map.",
      role: "Design, Software Development",
      techStack: "Java",
      repoLink: "https://github.com/gattacode/medipath",
      color: "#f0a7a8",
      images: [
        {
          url: "/medipath/m1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/medipath/m2.png",
          description: "Vue",
        },
      ],
    },
    {
      id: "hostin-agency",
      name: "Hostin Agency",
      description: "My first personal project, Hostin Agency is a site that aims to facilitate the search for tenants for luxury real estate. The aim is to use popular platforms such as Booking and Airbnb to maximize property visibility and ensure optimal occupancy.",
      role: "Design, Frontend Development",
      techStack: "Html, Css, Javascript",
      visitLink: "https://hostin-agency.vercel.app/",
      repoLink: "https://github.com/gattacode/hostin-agency",
      color: "#f3f0e6",
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
      id: "agora",
      name: "Agora",
      description: "🚧 Under development: Agora is the dedicated platform for pure informative and educational content. Distraction-free, entertainment-free. Think of it as a space where only knowledge-driven videos, similar to TedTalks or scientific vulgarizations, are showcased.",
      role: "Design, Fullstack Development",
      techStack: "React, Sass, Node",
      visitLink: "https://agora-videos.vercel.app/",
      repoLink: "https://github.com/gattacode/agora",
      color: "#c6f0f8",
      images: [
        {
          url: "/agora/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/agora/img2.png",
          description: "Vue",
        },
      ],
    },
    {
      id: "unifree",
      name: "Unifree",
      description: "🚧 Under development: Unifree is a free online university.",
      role: "Design, Fullstack Development",
      techStack: "React, Node, Tailwind",
      collaborators: "Felmon 'Filex' Tewelde, Sami Abbas, Abdel 'TawahinBeirut' Gueribi",
      color: "#ce77f4",
      images: [
        {
          url: "/unifree/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
        {
          url: "/unifree/img2.png",
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
      color: "#f8dc7f",
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
