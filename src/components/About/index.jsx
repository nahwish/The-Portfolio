"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "../TabButton";
import SkillsData from "./SkillsData";


const AboutSection = () => {
  const [tab, setTab] = useState("education");

  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section
        id="about"
        className="text-white md:grid md:grid-cols-2 gap-4 pt-8 pb-0 "
      >
        <Image
          src="/image/about.jpg"
          width={400}
          height={400}
          className="py-10"
        />
        <div className="  items-center  xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              dolor reiciendis odio, porro nemo consequuntur, vero vitae
              necessitatibus ducimus doloribus optio aliquid labore tempora
              delectus, nihil quibusdam ad. Doloremque, harum.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-row  justify-center ">
        <TabButton
          selecTab={() => handleTabChange("education")}
          active={tab === "education"}
          name="education"
          setTab={false}
        >
          Educación
        </TabButton>
        <TabButton
          selecTab={() => handleTabChange("skills")}
          active={tab === "skills"}
          name="skills"
          setTab={setTab}
        >
          Skills
        </TabButton>
      </div>
      <div className="mt-8">
        <SkillsData tab={tab}/>
      </div>
    </>
  );
};

export default AboutSection;
