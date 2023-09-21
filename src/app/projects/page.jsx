"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectTag } from "../../components/ProjectTag";
import { motion, useInView } from "framer-motion";

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

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center project-text mt-24 mx-auto px-12 py-4 text-4xl font-bold text-white mb-2 bg-[#121212]">
        Mis Projectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-3">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map(
          ({ id, description, title, image, gitUrl, previewUrl }, index) => (
            <motion.li
              key={index}
              animate={isView ? "animate" : "initial"}
              variants={cardVariant}
              initial="initial"
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={id}
                title={title}
                description={description}
                imgUrl={image}
                gitUrl={gitUrl}
                previewUrl={previewUrl}
              />
            </motion.li>
          )
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;