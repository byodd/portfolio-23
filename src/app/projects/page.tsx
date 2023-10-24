import Header from '../components/header'
import ProjectsShowcase from '../components/projects/projects-showcase'
import ContactFooter from '../components/contact-footer'

export default function Projects() {
  return (
    <main className="flex bg-soft-grey text-dark-grey min-h-screen flex-col items-center justify-between">
      <Header/>
      <div className='pt-10'>
      <ProjectsShowcase/>
      </div>
      <ContactFooter/>
    </main>
  )
}
