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
        className="text-white md:grid md:grid-cols-3 gap-4 pt-8 pb-0 "
      >
        <Image
          src="/image/personal/about.jpg"
          width={400}
          height={400}
          className="py-10"
          alt="about"
        />
        <p className="text-[#ADB7BE] self-center text-base pb-8 sm:text-lg lg:text-lg mb-6 p-10 pb-0 py-10 shadow-inner shadow-black rounded-3xl border-2 bg-[#170b3b3c] border-[#151515]">
          Mi enfoque se centra en la creación de experiencias digitales
          innovadoras que trasciendan los límites convencionales de la web y el
          entretenimiento interactivo.
        </p>
        <Image
          src="/image/personal/about.jpg"
          width={400}
          height={400}
          className="py-10"
          alt="about"
        />
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
      <div className="mt-8 flex  justify-center items-center ">
        <SkillsData tab={tab} />
      </div>
    </>
  );
};

export default AboutSection;
