import { Project } from "../utils/project";

export default function ProjectList() {
  let projects: Project[] = [
    {
      id: "unishare",
      name: "Unishare",
      description: "🎓 Unishare est une plateforme conçue pour la communauté de l'Université Lyon 1. Elle offre aux étudiants, enseignants et anciens élèves un espace pour publier et commenter des articles.",
      role: "Design, Développement Frontend",
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
      description: "The Art Of... est une toile numérique pour les artistes du monde entier pour exposer leurs chefs-d'œuvre, y compris des œuvres captivantes de divers films d'animation. Cette galerie d'art en ligne permet non seulement aux artistes de montrer leurs œuvres uniques mais offre également un podium pour créer des liens vers leurs portfolios personnels et leurs boutiques en ligne. Engagez-vous dans le voyage coloré de nombreux artistes et trouvez peut-être la pièce qui vous parle.",
      role: "Design, Développement Frontend",
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
      description: "🚧 En développement : The Suite est une solution en ligne tout-en-un pour la gestion du temps et l'organisation personnelle.",
      role: "Design, Développement Fullstack",
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
      description: "🎓 MediPath est une application innovante de planification de parcours pour les dispensaires de santé dans une région donnée. En utilisant la théorie des graphes, cette application fournit des outils pour visualiser, analyser et optimiser les connexions entre différents dispensaires sur une carte.",
      role: "Design, Développement de logiciels",
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
      description: "Mon premier projet personnel, Hostin Agency est un site qui vise à faciliter la recherche de locataires pour l'immobilier de luxe. Le but est d'utiliser des plateformes populaires telles que Booking et Airbnb pour maximiser la visibilité des propriétés et assurer une occupation optimale.",
      role: "Design, Développement Frontend",
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
      description: "🚧 En développement : Agora est la plateforme dédiée aux contenus purement informatifs et éducatifs. Sans distraction, sans divertissement. Pensez à un espace où seules les vidéos à but éducatif, similaires à TedTalks ou aux vulgarisations scientifiques, sont présentées.",
      role: "Design, Développement Fullstack",
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
      description: "🎓 Unifree est une université en ligne gratuite. Tout le monde peut apprendre et tout le monde peut partager ses connaissances avec le reste de la communauté.",
      role: "Design, Développement Fullstack",
      techStack: "React, Node, Tailwind",
      visitLink: "https://unifree-official.vercel.app/",
      repoLink: "https://forge.univ-lyon1.fr/p2203929/sae-s3-s4",
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
      description: "🎓 Mon premier projet universitaire, un site de commande de nourriture, inspiré du modèle Uber Eats. La plateforme permet aux étudiants de passer des commandes en ligne avec leur restaurant Crous et de les faire livrer directement sur leur campus.",
      role: "Design, Développement Frontend",
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
