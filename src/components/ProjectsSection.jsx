"use client";
import React,{ useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectTag } from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: " una descripcón lore ipsum",
    image: "/image/projects/mercado.png",
    gitUrl: "/",
    tag: ["All", "Web"],
    previewUrl: "/",
  },

  {
    id: 2,
    title: "Juego",
    description: " una descripcón lore ipsum",
    image: "/image/projects/mix.png",
    gitUrl: "/",
    tag: ["All", "Mobile"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Juego",
    description: " una descripcón lore ipsum",
    image: "/image/projects/mix.png",
    gitUrl: "/",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Portfolio",
    description: " una descripcón lore ipsum",
    image: "/image/projects/mercado.png",
    gitUrl: "/",
    tag: ["All", "Game"],
    previewUrl: "/",
  },
];



export const ProjectsSection = () => {
  const [ tag,setTag] = useState("All");
  const handleTagChange = (newTag) =>{
    setTag(newTag)
  }
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        Mis Projectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map(
          ({ id, description, title, image, gitUrl, previewUrl }) => (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              imgUrl={image}
              gitUrl={gitUrl}
              previewUrl={previewUrl}
            />
          )
        )}
      </div>
    </>
  );
}
