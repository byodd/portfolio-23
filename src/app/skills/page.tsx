import Header from "../components/header";
import ProjectsShowcase from "../components/skills/skills-showcase";
import ContactFooter from "../components/contact-footer";

export default function Skills() {
  return (
    <main className="flex bg-soft-grey text-dark-grey min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="pt-10 w-full">
        <ProjectsShowcase />
      </div>
      <ContactFooter />
    </main>
  );
}
