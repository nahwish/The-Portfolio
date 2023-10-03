import React from "react";
import { skills,tableSkills,tableEducation,education } from "../../utils/TableSkills";
import { TableSkills } from "@/components/Skills";

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
  ];

  const SkillsData = ({tab}) =>{
    return SKILLS_DATA.find((t) => t.id === tab)?.content;
  }

  export default SkillsData;
