"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectTag } from "../../components/ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTab } from "../../../context/TabContext";
import { projectsData } from "./ProjectsData";


const ProjectsSection = () => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const { tag, handleTagChange } = useTab([]);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects" className="">
      
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-12">
        {filteredProjects.map(
          (
            { id, description, title, image, gitUrl, previewUrl, hashtag },
            index
          ) => (
            <motion.li
              key={index}
              animate={isView ? "animate" : "initial"}
              variants={cardVariant}
              initial="initial"
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <div className="">
              <ProjectCard
                key={id}
                title={title}
                description={description}
                imgUrl={image}
                gitUrl={gitUrl}
                previewUrl={previewUrl}
                hashtag={hashtag}
              />

              </div>
            </motion.li>
          )
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;