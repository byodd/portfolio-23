import Image from 'next/image'
import Header from './components/header'
import Presentation from './components/presentation'
import About from './components/about'
import ProjectsShowcase from './components/projects/projects-showcase'
import ContactFooter from './components/contact-footer'

export default function Home() {
  return (
    <main className="flex bg-soft-grey text-dark-grey min-h-screen flex-col box-border">
      <Header/>
      <Presentation/>
      <About/>
      <ProjectsShowcase/>
      <ContactFooter/>
    </main>
  )
}
