"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import {
  skills,
  tableSkills,
  tableEducation,
  education,
} from "../utils/TableSkills";
import { TableSkills } from "@/components/TableSkills";

const SKILLS_DATA = [
  {
    title: "Educación",
    id: "education",
    content: <TableSkills skills={education} info={tableEducation} />,
  },
  {
    title: "Skills",
    id: "skills",
    content: <TableSkills skills={skills} info={tableSkills} />,
  },
  {
    title: "Certificaciones",
    id: "certification",
    content: (
      <table class="table-auto">
        <thead>
          <tr className="border-b  border-b-indigo-900">
            <th className="p-3 padding-4px bg-stone-900 ">Institución</th>
            <th className="p-3 padding-4px bg-stone-900">Año</th>
            <th className="p-3 padding-4px bg-stone-900">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="p-3 padding-4px bg-stone-700">Henry</td>
            <td className="p-3 padding-4px bg-stone-700 ">2021</td>
            <td className="p-3 padding-4px bg-stone-700 ">Link</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className="text-white md:grid md:grid-cols-2 gap-4 pt-8 pb-0 px-7">
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
          selecTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          Skills
        </TabButton>
        <TabButton
          selecTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Educación
        </TabButton>
        <TabButton
          selecTab={() => handleTabChange("certification")}
          active={tab === "certification"}
        >
          Certicifaciones
        </TabButton>
      </div>
      <div className="mt-8">
        {SKILLS_DATA.find((t) => t.id === tab).content}
      </div>
    </>
  );
};

export default AboutSection;
