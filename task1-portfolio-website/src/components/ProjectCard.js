import React from "react";

export const ProjectCard = ({ project }) => {
  const { id, name, description, technologies, github_link, image } = project;

  return (
    <div className="max-w-sm mx-auto my-5 rounded-lg shadow bg-gray-100 overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="h-64">
          <img className="h-56" src={image} alt="project" />
        </div>
        <div className="flex-grow p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <div className="flex flex-wrap mb-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mb-2 px-2 py-1 bg-blue-200 text-blue-800 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mb-3 font-normal text-gray-600">{description}</p>
          <a
            href={`https://${github_link}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Github Link
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
