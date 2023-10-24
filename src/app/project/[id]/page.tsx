import Projects from "../../data/project-list";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const projects = Projects();
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return <div>Projet introuvable!</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Rôle: {project.role}</p>
      <p>Technologies utilisées: {project.techStack}</p>
      {project.collaborators && <p>Collaborateurs: {project.collaborators}</p>}
      {project.images.map((image, index) => (
        <div key={index}>
          <Image src={image.url} alt="img" width={50} height={50}/>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
}
