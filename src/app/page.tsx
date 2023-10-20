import Image from 'next/image'
import Header from './components/header'
import Presentation from './components/presentation'

export default function Home() {
  return (
    <main className="flex bg-soft-grey text-dark-grey min-h-screen flex-col box-border">
      <Header/>
      <Presentation/>
    </main>
  )
}
