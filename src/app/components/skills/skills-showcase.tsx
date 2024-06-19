import ProjectsBanner from "./skills-banner";
import ProjectsGallery from "./skills-gallery";

export default function ProjectsShowcase() {
  return (
    <div className="z-10">
      <ProjectsBanner />
      <ProjectsGallery />
    </div>
  );
}
