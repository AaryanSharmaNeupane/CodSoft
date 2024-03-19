import React from "react";

export const ProjectCard = ({ project }) => {
  const { id, name, description, technologies, github_link, image } = project;
  return (
    <div className="max-w-sm mx-auto my-5 rounded-lg shadow bg-gray-100 flex flex-col h-full">
      <div className="flex-grow">
        <div className="h-64 flex items-center justify-center overflow-hidden rounded-t-lg">
          <img className="object-cover h-full" src={image} alt="project" />
        </div>
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-600">{description}</p>
        <a
          href={github_link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Github Link
          <svg
            className="w-3.5 h-3.5 ml-2"
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
  );
};
