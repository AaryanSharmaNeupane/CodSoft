import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/ProjectList";

export const Projects = ({ id }) => {
  return (
    <section className="">
      <h1 className="text-3xl font-semibold  py-4 text-center text-gray-800">
        Projects
      </h1>
      <div
        className="max-w-7xl flex flex-wrap items-center    justify-between m-auto  "
        id={id}
      >
        {projects.map((project) => (
          <ProjectCard />
        ))}
      </div>
    </section>
  );
};
