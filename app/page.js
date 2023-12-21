import Image from 'next/image'
import Herosection from './components/Herosection'

export default function Home() {
  return (
   <main className='flex min-h-screen flex-col bg-[#121212] container mx-auto py-12 '>
    <Herosection />
   </main>
  )
}
