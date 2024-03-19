import React from "react";
import { Link } from "react-scroll";
import Myphoto from "../assets/images/aaryan.jpg";

export const Home = ({ id }) => {
  return (
    <>
      <section className="text-slate-400 " id={id}>
        <div className="max-w-7xl m-auto py-5 flex justify-evenly items-center ">
          <div className="max-w-56 ">
            <img className=" rounded-xl   mt-4" src={Myphoto} alt="Aaryan" />
          </div>
          <span className=" px-12 text-3xl flex flex-col justify-between  ">
            <p>
              Namaste! I am{" "}
              <Link className="text-blue-600" to="/">
                Aaryan Sharma
              </Link>
            </p>
            <p className="mx-32"> , a Full Stack Developer from Nepal.</p>
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
