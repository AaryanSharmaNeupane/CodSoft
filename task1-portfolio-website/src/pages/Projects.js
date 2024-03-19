import React from "react";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      name: "Yatraa",
      description: "Developed using Flutter, Django, and RESTful API.",
      technologies: ["Flutter", "Django", "RESTful API"],
      github_link: "github.com/AaryanSharmaNeupane/yatraa.git",
    },
    {
      name: "Parichaya",
      description: "Built with Flutter, Django, and RESTful API.",
      technologies: ["Flutter", "Django", "RESTful API"],
      github_link: "github.com/AaryanSharmaNeupane/Parichaya-frontend.git",
    },
    {
      name: "Cinemate",
      description: "Technologies: React, Tailwind CSS, JavaScript.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github_link: "github.com/AaryanSharmaNeupane/cinemate_react.git",
    },
    {
      name: "Amazon Clone",
      description: "Developed using HTML and CSS.",
      technologies: ["HTML", "CSS"],
      github_link: "github.com/AaryanSharmaNeupane/Amazon_css_clone.git",
    },
    {
      name: "Taskmate",
      description: "Technologies: HTML, CSS, React.",
      technologies: ["HTML", "CSS", "React"],
      github_link: "github.com/AaryanSharmaNeupane/Taskmate_React.git",
    },
    {
      name: "Taskmate (Mobile App)",
      description: "Technologies: Flutter, Dart.",
      technologies: ["Flutter", "Dart"],
      github_link: "github.com/AaryanSharmaNeupane/Taskmate.git",
    },
  ];

  return (
    <>
      <div className="max-w-7xl flex flex-wrap items-center    justify-between m-auto">
        {projects.map((project) => (
          <ProjectCard />
        ))}
      </div>
    </>
  );
};
