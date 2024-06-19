import ContactFooter from "../components/contact-footer";
import Header from "../components/header";
import GonexaCard from "../components/experiences/gonexa-card";
import Link from "next/link";
import LinkButton from "../components/project/link-button";

export default function Experiences() {
  return (
    <>
      <Header></Header>
      <div className="pt-10 w-full px-4 md:px-20">
        <span className="text-3xl md:text-6xl font-semibold">
          Mes expériences en informatique
        </span>
        <div className="flex flex-col items-center justify-center text-center mt-8 gap-12">
          <GonexaCard></GonexaCard>
          <LinkButton name="Voir d'autres projets" link="/projects" isMain></LinkButton>
        </div>
      </div>
      <ContactFooter></ContactFooter>
    </>
  );
}
