import { Skill } from "../utils/skill";
import { Project } from "../utils/project";

export default function SkillsList() {
  let projects: Project[] = [
    {
      id: "unishare",
      name: "Unishare",
      description:
        "🎓 Unishare est une plateforme conçue pour la communauté de l'Université Lyon 1. Elle offre aux étudiants, enseignants et anciens élèves un espace pour publier et commenter des articles.",
      role: "Design, Développement Frontend",
      techStack: "Php, Tailwind",
      visitLink: "https://unifree38.000webhostapp.com/Pages/Feed.php",
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
      description:
        "The Art Of... est une toile numérique pour les artistes du monde entier pour exposer leurs chefs-d'œuvre, y compris des œuvres captivantes de divers films d'animation. Cette galerie d'art en ligne permet non seulement aux artistes de montrer leurs œuvres uniques mais offre également un podium pour créer des liens vers leurs portfolios personnels et leurs boutiques en ligne. Engagez-vous dans le voyage coloré de nombreux artistes et trouvez peut-être la pièce qui vous parle.",
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
      description:
        "🚧 En développement : The Suite est une solution en ligne tout-en-un pour la gestion du temps et l'organisation personnelle.",
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
      description:
        "🎓 MediPath est une application innovante de planification de parcours pour les dispensaires de santé dans une région donnée. En utilisant la théorie des graphes, cette application fournit des outils pour visualiser, analyser et optimiser les connexions entre différents dispensaires sur une carte.",
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
      description:
        "Mon premier projet personnel, Hostin Agency est un site qui vise à faciliter la recherche de locataires pour l'immobilier de luxe. Le but est d'utiliser des plateformes populaires telles que Booking et Airbnb pour maximiser la visibilité des propriétés et assurer une occupation optimale.",
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
      description:
        "🚧 En développement : Agora est la plateforme dédiée aux contenus purement informatifs et éducatifs. Sans distraction, sans divertissement. Pensez à un espace où seules les vidéos à but éducatif, similaires à TedTalks ou aux vulgarisations scientifiques, sont présentées.",
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
      description:
        "🎓 Unifree est une université en ligne gratuite. Tout le monde peut apprendre et tout le monde peut partager ses connaissances avec le reste de la communauté.",
      role: "Design, Développement Fullstack",
      techStack: "React, Node, Tailwind",
      visitLink: "https://unifree-official.vercel.app/",
      repoLink: "https://forge.univ-lyon1.fr/p2203929/sae-s3-s4",
      collaborators:
        "Felmon 'Filex' Tewelde, Sami Abbas, Abdel 'TawahinBeirut' Gueribi",
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
      description:
        "🎓 Mon premier projet universitaire, un site de commande de nourriture, inspiré du modèle Uber Eats. La plateforme permet aux étudiants de passer des commandes en ligne avec leur restaurant Crous et de les faire livrer directement sur leur campus.",
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

  let skills: Skill[] = [
    {
      id: "realiser",
      name: "Réaliser",
      detail:
        "Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.",
      review:
        "J'ai acquis une solide expérience en concevant, codant, testant et intégrant des solutions informatiques pour des clients. J'ai appris à créer des applications simples et efficaces, à tester rigoureusement mes travaux, et à respecter les spécifications fonctionnelles et non fonctionnelles. En appliquant des principes d'accessibilité, d'ergonomie et de bonnes pratiques de conception, j'ai validé la qualité des applications. Mon expertise comprend également l'évolution et la maintenance des applications, ainsi que l'intégration de solutions dans des environnements de production. Ces compétences me permettent de fournir des solutions de haute qualité adaptées aux besoins des clients.",
      description:
        "Élaborer, faire évoluer et maintenir une application informatique :",
      projects: projects,
      color: "#333333",
      skillList: [
        "Élaborer et implémenter des conceptions simples",
        "Faire des essais et évaluer leurs résultats en regard des spécifications",
        "Développer des interfaces utilisateurs",
        "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
        "Appliquer des principes d’accessibilité et d’ergonomie",
        "Adopter de bonnes pratiques de conception et de programmation",
        "Vérifier et valider la qualité de l’application par les tests",
        "Choisir et implémenter les architectures adaptées",
        "Faire évoluer une application existante",
        "Intégrer des solutions dans un environnement de production",
      ],
      images: [
        {
          url: "/crous-kebab/ck1.png",
          description: "Capture d'écran de la page d'accueil",
        },
      ],
    },
    {
      id: "optimiser",
      name: "Optimiser",
      detail:
        "Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d’exécution, précision, consommation.",
      review:
        "J'ai développé une expertise dans la création d'applications optimisées en analysant les problèmes et en choisissant des structures de données et des algorithmes appropriés. J'ai comparé des algorithmes pour résoudre des problèmes classiques et utilisé des techniques avancées pour des problèmes complexes, tout en tenant compte des enjeux de sécurisation des données.",
      description:
        "Améliorer les performances des programmes dans des contextes contraints, limiter l’impact environnemental d’une application informatique et mettre en place des applications informatiques adaptées et efficaces :",
      projects: [projects[3]],
      color: "#333333",
      skillList: [
        "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)",
        "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)",
        "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique",
        "Choisir des structures de données complexes adaptées au problème",
        "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...)",
        "Comprendre les enjeux et moyens de sécurisation des données et du code",
        "Évaluer l’impact environnemental et sociétal des solutions proposées",
        "Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire, montée en charge...)",
        "Profiler, analyser et justifier le comportement d’un code existant",
        "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)",
      ],
      images: [
        {
          url: "/medipath/m1.png",
          description: "Capture d'écran de la page d'accueil",
        },
      ],
    },
    {
      id: "administrer",
      name: "Administrer",
      detail:
        "Installer, configurer, mettre à disposition, maintenir opérationnels et optimiser des infrastructures, des services et des réseaux.",
      review:
        "J'ai acquis une bonne expérience en administration de systèmes en installant, configurant et maintenant des infrastructures et des réseaux. J'ai déployé de nouvelles architectures techniques, optimisé des infrastructures existantes et sécurisé des applications et services. J'ai identifié et géré les composants matériels et logiciels, utilisé les fonctionnalités de base de systèmes multitâches/multiutilisateurs et installé des systèmes d'exploitation ainsi que des outils de développement. J'ai configuré des postes de travail en réseau, conçu des applications communicantes et utilisé des machines virtualisés. Il me reste à approfondir mes compétences en sécurité des services et des données.",
      description:
        "Déployer une nouvelle architecture technique, améliorer une infrastructure existante et sécuriser les applications et les services :",
      projects: [projects[2]],
      color: "#333333",
      skillList: [
        "Identifier les différents composants (matériels et logiciels) d’un système numérique",
        "Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs",
        "Installer et configurer un système d’exploitation et des outils de développement",
        "Configurer un poste de travail dans un réseau d’entreprise",
        "Concevoir et développer des applications communicantes",
        "Utiliser des serveurs et des services réseaux virtualisés",
        "Sécuriser les services et données d’un système",
      ],

      images: [
        {
          url: "/annuaire/a1.png",
          description: "Capture d'écran de la page d'accueil",
        },
      ],
    },
    {
      id: "gerer",
      name: "Gérer",
      detail:
        "Concevoir, gérer, administrer et exploiter les données et mettre à disposition les informations pour un bon pilotage de l’entreprise.",
      review:
        "J'ai acquis une expertise en gestion des données en concevant et administrant des bases de données relationnelles à partir de cahiers des charges. J'ai optimisé les modèles de données, assuré la sécurité et mis à jour des bases de données via des requêtes directes et des applications. J'ai également facilité la prise de décisions en visualisant les données et en manipulant des données hétérogènes, garantissant ainsi des solutions adaptées aux besoins des projets.",
      description:
        "Lancer un nouveau projet, sécuriser des données et les exploiter des données pour la prise de décisions:",
      projects: [projects[1], projects[6]],
      color: "#333333",
      skillList: [
        "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
        "Visualiser des données",
        "Concevoir une base de données relationnelle à partir d’un cahier des charges",
        "Optimiser les modèles de données de l’entreprise",
        "Assurer la sécurité des données (intégrité et confidentialité)",
        "Organiser la restitution de données à travers la programmation et la visualisation",
        "Manipuler des données hétérogènes",
      ],
      images: [
        {
          url: "/the-art-of/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
      ],
    },
    {
      id: "conduire",
      name: "Conduire",
      detail:
        "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique.",
      review:
        "En pilotant le projet Unifree, j'ai lancé et maintenu un projet en condition opérationnelle en appréhendant les besoins des clients et des utilisateurs. J'ai mis en place des outils de gestion de projet, identifié les acteurs clés et les phases de développement, et formalisé les besoins du client. J'ai également identifié les processus organisationnels pour améliorer les systèmes d'information et évalué la faisabilité du projet. La mise en œuvre d'une démarche de suivi de projet, incluant l'utilisation de diagrammes de Gantt et de tableaux Kanban partagés, a été cruciale pour le succès et l'évolution d'Unifree.",
      description:
        "Lancer un nouveau projet, piloter le maintien d’un projet en condition opérationnelle et faire évoluer un système d’information:",
      projects: [projects[6]],
      color: "#333333",
      skillList: [
        "Appréhender les besoins du client et de l'utilisateur",
        "Mettre en place les outils de gestion de projet",
        "Identifier les acteurs et les différentes phases d’un cycle de développement",
        "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information",
        "Formaliser les besoins du client et de l'utilisateur",
        "Identifier les critères de faisabilité d’un projet informatique",
        "Définir et mettre en œuvre une démarche de suivi de projet",
      ],
      images: [
        {
          url: "/unifree/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
      ],
    },
    {
      id: "collaborer",
      name: "Collaborer",
      detail:
        "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
      review:
        "Lors du projet Unishare, j'ai développé des compétences essentielles pour travailler efficacement en équipe. J'ai compris l'écosystème numérique, identifié les rôles de chaque membre, et acquis des compétences interpersonnelles cruciales. J'ai organisé mon travail en lien avec l'équipe, partagé des veilles technologiques, et rendu compte de mes activités régulièrement. Ce projet m'a permis d'accompagner le management et de guider le changement, renforçant ainsi ma capacité à collaborer à des projets informatiques. J'aimerais aussi collaborer à des projets open-source pour renforcer ces compétences d'intégration à des projets impliquants de grandes équipes.",
      description:
        "Lancer un nouveau projet, organiser son travail en relation avec celui de son équipe puis élaborer, gérer et transmettre de l’information:",
      projects: [projects[0],projects[6]],
      color: "#333333",
      skillList: [
        "Appréhender l’écosystème numérique",
        "Découvrir les aptitudes requises selon les différents secteurs informatiques",
        "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire",
        "Acquérir les compétences interpersonnelles pour travailler en équipe",
        "Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI,...)",
        "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation",
        "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
        "Rendre compte de son activité professionnelle",
        "Organiser et partager une veille technologique et informationnelle",
        "Identifier les enjeux de l’économie de l’innovation numérique",
        "Guider la conduite du changement informatique au sein d’une organisation",
        "Accompagner le management de projet informatique",
      ],
      images: [
        {
          url: "/unishare/img1.png",
          description: "Capture d'écran de la page d'accueil",
        },
      ],
    },
  ];

  return skills;
}
