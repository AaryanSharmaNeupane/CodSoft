import React from "react";
import { Link } from "react-scroll";

import Coding from "../assets/images/coding.gif";

export const Home = ({ id }) => {
  return (
    <>
      <section className="text-slate-400 bg-slate-900" id={id}>
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center">
          <span className="lg:order-2 text-3xl flex flex-col justify-between lg:w-1/2 lg:text-left lg:ml-8">
            <p>
              Namaste! I am{" "}
              <Link className="text-blue-600" to="/">
                Aaryan Sharma,
              </Link>
            </p>
            <p className="lg:pl-28">
              <span className="hidden lg:inline">a Full Stack Developer .</span>
            </p>
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start">
              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="border p-3 rounded text-lg m-3 hover:text-white hover:ring-1 hover:ring-slate-50"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/AaryanSharmaNeupane"
                target="_blank"
                rel="noreferrer"
                className="border p-3 rounded text-lg m-3 hover:text-white hover:ring-1 hover:ring-slate-50"
              >
                Visit Github
              </a>
            </div>
          </span>
          <div className="lg:order-1 lg:w-1/2 lg:mr-8">
            <img
              className="mt-4 rounded-lg max-w-full h-auto mx-auto lg:mx-0"
              src={Coding}
              alt="Coding Gif"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
          <p className="text-white text-lg p-4">
            Explore my projects, learn about my skills, and get in touch!
          </p>
        </div>
      </section>
    </>
  );
};
