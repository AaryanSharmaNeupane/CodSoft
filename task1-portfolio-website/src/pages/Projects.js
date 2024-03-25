import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/ProjectList";

export const Projects = ({ id }) => {
  return (
    <section>
      <h1 className="text-3xl font-semibold  py-4 text-center text-gray-800">
        Projects
      </h1>
      <div
        className="max-w-7xl flex flex-wrap items-center    justify-between m-auto  "
        key={id}
      >
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};
