import Image from 'next/image'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import About from './components/About'

export default function Home() {
  return (
   <main className='flex min-h-screen flex-col bg-[#121212] '>
    <div className='container mx-auto '><Navbar /></div>
    <div className='container mx-auto py-12 mt-24 '><Herosection /></div>
    <div className='container mx-auto py-12 mt-24 '><About /></div>
   </main>
  )
}
