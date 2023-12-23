import react from 'react';
import Image from 'next/image';
const About = () => {
    return (
        <section className="bg-[#121212]">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
           <Image src="/images/about.png" alt="Picture of the author" width={500} height={500} />
           <div className="space-y-4">
            <h2 className="text-4xl text-white font-black">About Me</h2>
            <p className="text-white text-xl">Lorem ipsum </p>
            </div>
        </div>
        </section>
    );
}

export default About;