"use client";
import Projects from "../../data/project-list";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import Info from "../../components/project/info";
import LinkButton from "../../components/project/link-button";
import ContactFooter from "../../components/contact-footer";
import Arrow from "../../../../public/north_east.png";
import { motion } from "framer-motion";

export default function Page({ params }: { params: { id: string } }) {
  const projects = Projects();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Projet introuvable!</div>;
  }

  return (
    <div>
      <Header />
      <div className="overflow-hidden absolute flex justify-end gap-5 p-5 ml-auto mb-3 top-24 right-3 z-10">
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
        >
          <Link
            className={"box w-full flex flex-row items-center border border-dark-grey font-semibold rounded-full p-4 rotate-180 pt-3.5 pb-4 hover:bg-rv-dark-grey hover:text-black hover:invert"
            }
            href={"/projects"}
          >
            <Image src={Arrow} alt="arrow" />
          </Link>
        </motion.div>
      </div>
      {project.images.map((image, index) => {
        if (index === 0) {
          return (
            <div className="w-full h-[70vh] mt-6 relative" key={index}>
              <Image
                src={image.url}
                className="border rounded-t-[40px]"
                alt="img"
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="px-10 text-dark-grey">
        <div className="p-20 pt-10 flex flex-col">
          <span className="text-8xl mb-6 font-medium ">{project.name}</span>
          <div className="flex w-full gap-20">
            <Info title="Description" description={project.description} />
            <Info title="Role in project" description={project.role} />
            <Info title="Technical sheet" description={project.techStack} />
            {project.collaborators && (
              <Info title="Collaborators" description={project.collaborators} />
            )}
          </div>
        </div>
        <div className="overflow-hidden flex justify-end gap-5 p-5 ml-auto mb-12">
          <LinkButton
            name="Visit website"
            link={project.visitLink || "/"}
            isMain={true}
          />
          <LinkButton
            name="Github repository"
            link={project.repoLink || "/"}
            isMain={false}
          />
        </div>
      </div>
      <div>
        {project.images.map((image, index) => {
          if (index !== 0) {
            return (
              <div className="w-full h-screen relative" key={index}>
                <Image
                  src={image.url}
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <ContactFooter />
    </div>
  );
}
