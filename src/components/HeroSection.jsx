import React from 'react'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            ¡Hola! Soy Nahuel
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolorum id fuga aut repudiandae sunt voluptatum numquam eum! Hic,
            expedita sunt. Quae, nulla sapiente. Aut sit ducimus iure excepturi
            magni!
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              hire me
            </button>
            <button className="px-6 py-3 rounded-full mr-4  transparent hover:bg-slate-200 hover:text-black mt-3 text-white border border-white">
              cv
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src="/image/fotico.jpeg"
              width={150}
              height={150}
              alt="personal-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
