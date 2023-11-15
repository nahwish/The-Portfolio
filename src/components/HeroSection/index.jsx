"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion"
import Link from "next/link";


export default function HeroSection() {
  return (
    <section id="home" className="pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-span-7 place-self-center  "
        >
          <h1 className="text-white text-center py-4 shadow-inner shadow-black rounded-full border-2 bg-[#170b3b3c] border-[#151515] mb-10 text-4xl sm:text-5xl lg:text-4xl font-extrabold">
            <span
              id="yosoy"
              className="  font-bold text-transparent p-3 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              ¡Hola! Yo soy{" "}
            </span>

            <br />
            <span id="animation" className="shadow-md text-center">
              <TypeAnimation
                sequence={[
                  "Nahuel",
                  1000,
                  "Web developer",
                  1000,
                  "Game Developer",
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
            Motivado por encontrar soluciones creativas y altamente efectivas.
          </p>
          <div className="pt-20 pb-20 text-center">
            <Link
              href="https://www.linkedin.com/in/nahuelrojas-dev/"
              target="_blank"
              className="align-top "
            >
              <button className=" text-center hover:text-[#BFFF00] px-6 py-3  mr-4  w-full sm:w-fit shadow shadow-black rounded-full border-2 bg-[#181818] border-[#151515]">
                <Image
                  src="/image/tecnologies/linkedin.png"
                  width={25}
                  height={25}
                  alt="icono de linkedin"
                />
              </button>
            </Link>
            <a
              href="/image/personal/Nahuel_Rojas_cv.pdf"
              download="Nahuel_Rojas_cv.pdf"
            >
              <button className=" hover:text-[#BFFF00] px-6 py-3  mr-4  w-full sm:w-fit shadow shadow-black rounded-full border-2 bg-[#181818] border-[#151515]">
                <span className=""> cv </span>
              </button>
            </a>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            id="personalFoto"
            className=" bg-[#170b3b3c] w-[250px] h-[250px] relative lg:w-[300px] lg:h-[400px] shadow-inner shadow-black rounded-full border-2 border-[#151515]"
          >
            <Image
              src="/image/personal/fotico.jpeg"
              priority={true}
              width={150}
              height={150}
              alt="personal-image"
              id="personalFoto"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
