import Image from "next/image";

export default function Herosection() {
    return (
        <section className="">
 
       <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
            <h1 className="text-4xl lg:text-6xl text-white font-black">
            Hello, I am Samir  
            </h1>
            <p className="text-white text-xl lg:text-2xl mb-6">
            I am a full stack developer. I love to code and learn new things.
            </p>
            <div className="flex space-x-4">
            <button className="bg-[#F5F5F5] text-black px-4 py-2 rounded-full text-xl font-semibold">
                Hire Me
            </button>
            <button className="bg-transparent border-solid border-2 border-slate-200 text-slate-200 px-4 py-2 rounded-full text-xl font-semibold">
                Resume
            </button>
            </div>
         </div>
         <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
            <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400] lg:h-[400] overflow-hidden relative">
            <Image
            src="/images/her.png"
            alt="Picture of the author"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
            </div>
         </div>
        </div>

        </section>
    );
    }