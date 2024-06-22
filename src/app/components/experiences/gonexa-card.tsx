"use client";
import Image from "next/image";
import Logo from "../../../../public/gonexa-logo.png";
import Link from "next/link";
import { HoverEffect } from "./ui/hover-effect";

export default function GonexaCard() {
  const skills = [
    {
      title: "Réaliser",
      description:
        "J'ai conçu, codé, testé et intégré une application web de gestion des comptes clients. En respectant les spécifications fonctionnelles et en appliquant des principes d'ergonomie, j'ai développé une plateforme autonome pour le pôle succès client, réduisant leur dépendance envers les développeurs et améliorant leur efficacité opérationnelle.",
      link: "/skill/realiser",
    },
    {
      title: "Collaborer",
      description:
        "Travaillant avec un autre stagiaire, j'ai appris à coordonner efficacement les tâches, à échanger des retours constructifs et à assurer une communication fluide entre différentes personnes. Cette expérience a souligné l'importance des compétences interpersonnelles pour un travail d'équipe réussi.",
      link: "/skill/collaborer",
    },
    {
      title: "Conduire",
      description:
        "J'ai appris à appréhender les besoins du client, à mettre en place des outils de gestion de projet et à suivre les phases de développement de manière structurée. L'organisation et la gestion des tâches via des méthodologies agiles, ainsi que l'utilisation d'outils comme Azure DevOps, ont été cruciales pour la réussite du projet.",
      link: "/skill/conduire",
    },
    {
      title: "Optimiser & Gérer",
      description:
        "En développant des fonctionnalités avancées et en réalisant un bon modèle de données, j'ai amélioré les performances de l'application. J'ai également mis en place des systèmes de filtrage avancés et des interfaces utilisateur intuitives pour rendre l'application plus rapide et plus réactive, tout en garantissant la sécurité et la confidentialité des données.",
      link: "/skill/optimiser",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-12 bg-[#fefffa] rounded-3xl p-12 gap-6">
      <div className="text-white text-xl font-semibold bg-darker-grey px-5 py-3 border-box rounded-full">
        <p className="w-full">
          <i className="font-light">Avril 2024 - Juillet 2024 |</i> Développeur
          Fullstack Stagiaire
        </p>
      </div>
      <Image src={Logo} alt="Gonexa" objectFit="contain" className="my-12" />
      <div className="text-left flex flex-col md:flex-row gap-16 p-6">
        <div>
          <span className="font-semibold">
            Description de l&apos;entreprise
          </span>
          <p>
            Spécialiste de l&apos;environnement Salesforce et éditeur de
            logiciel, Gonexa édite des applications incontournables dans le
            cycle de vie des documents. Elle permet, entre autres, de générer
            des documents sur Salesforce avec Gonexa Doc et de faire des
            signatures électroniques avec Gonexa Sign. Vous pouvez découvrir
            toutes les solutions offertes sur{" "}
            <Link className="font-bold" href="https://gonexa.fr">
              gonexa.fr
            </Link>
          </p>
        </div>
        <div>
          <span className="font-semibold">Travail effectué</span>
          <p>
            En rejoignant le pôle développement de Gonexa, j&apos;ai eu
            l&apos;occasion de travailler sur des projets de développement web
            en utilisant des technologies spécifiques au développement
            Salesforce comme
            <Link
              href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/"
              className="font-bold"
            >
              {" "}
              Apex
            </Link>
            ,{" "}
            <Link
              href="https://developer.salesforce.com/docs/component-library/overview/components"
              className="font-bold"
            >
              LWC
            </Link>{" "}
            et SOQL. J&apos;ai aussi utilisé des technologies plus générales
            comme C#, Vue.js, TypeScript et Azure.
          </p>
        </div>
      </div>
      <div>
        <span className="font-semibold">Compétences mise en oeuvre</span>
        <div className="p-6 flex flex-row w-full">
          <HoverEffect items={skills} />
        </div>
      </div>
    </div>
  );
}
