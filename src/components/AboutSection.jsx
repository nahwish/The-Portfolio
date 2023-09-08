"use client";
import React,{ useTransition, useState} from 'react';
import Image from "next/image";

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    })
  }
  
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/about.jpg" width={400} height={400} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor
            reiciendis odio, porro nemo consequuntur, vero vitae necessitatibus
            ducimus doloribus optio aliquid labore tempora delectus, nihil
            quibusdam ad. Doloremque, harum.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</span>
            <span>Educación</span>
            <span>Experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
