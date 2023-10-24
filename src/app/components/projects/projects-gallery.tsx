import ProjectCard from "./project-card";
import Projects from '../../data/project-list';

export default function ProjetsGallery() {
  const projects = Projects();
  return (
    <div className="w-full p-5 flex flex-row gap-20 justify-center flex-wrap">
      <ProjectCard {...projects[0]}></ProjectCard>
      <ProjectCard {...projects[1]}></ProjectCard>
      <ProjectCard {...projects[0]}></ProjectCard>
      <ProjectCard {...projects[1]}></ProjectCard>
    </div>
  );
}
