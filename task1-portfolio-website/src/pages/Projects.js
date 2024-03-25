import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/ProjectList";

export const Projects = ({ id }) => {
  return (
    <section id={id}>
      <h1 className="text-3xl font-semibold  py-4 text-center text-gray-800">
        Projects
      </h1>
      <div className="max-w-7xl flex flex-wrap items-center    justify-between m-auto  ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
