"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white border-2 shadow-inner shadow-black rounded-full border-2 bg-[#181818] border-[#151515] mb-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="  font-bold text-transparent p-3 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              ¡Hola! Yo soy{" "}
            </span>

            <br />
            <span className="shadow-md shadow-zinc-600">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Nahuel",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web developer",
                  1000,
                  "Game Developer",
                  1000,
                  "Creative Code",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "0.8em",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolorum id fuga aut repudiandae sunt voluptatum numquam eum! Hic,
            expedita sunt. Quae, nulla sapiente. Aut sit ducimus iure excepturi
            magni!
          </p>
          <div>
            <button className=" hover:text-[#BFFF00] px-6 py-3  w-full sm:w-fit mr-4 hover:text-white shadow-inner shadow-black rounded-full border-2 bg-[#181818] border-[#151515]">
              hire me
            </button>
            <button className=" hover:text-[#BFFF00] px-6 py-3  mr-4  w-full sm:w-fit shadow-inner shadow-black rounded-full border-2 bg-[#181818] border-[#151515]">
              <span className=""> cv </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px] shadow-inner shadow-black rounded-full border-2 border-[#151515]">
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
