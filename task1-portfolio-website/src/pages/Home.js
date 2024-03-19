import React from "react";
import { Link } from "react-scroll";
import Coding from "../assets/images/coding.gif";

export const Home = ({ id }) => {
  return (
    <>
      <section className="text-slate-400 bg-slate-900" id={id}>
        <div className="max-w-7xl m-auto py-5 flex flex-row-reverse justify-around items-center ">
          <div className>
            <img
              className="mt-4 rounded-lg max-w-lg"
              src={Coding}
              alt="Coding Gif"
            />
          </div>
          <span className=" text-3xl flex flex-col justify-between ">
            <p>
              Namaste! I am{" "}
              <Link className="text-blue-600" to="/">
                Aaryan Sharma,
              </Link>
            </p>
            <p className="pl-28"> a Full Stack Developer from Nepal.</p>
          </span>
        </div>
        <div className="flex max-w-7xl m-auto flex-col items-center justify-center">
          <span className="m-5">
            <button className="border p-3 rounded text-lg  m-3 hover:text-white  hover:ring-1 hover:ring-slate-50">
              Download Resume
            </button>
            <button className="border p-3 rounded text-lg  m-3 hover:text-white  hover:ring-1 hover:ring-slate-50">
              Visit Github
            </button>
          </span>
          <p className="text-white text-lg p-4">
            Explore my projects, learn about my skills, and get in touch!
          </p>
        </div>
      </section>
    </>
  );
};
