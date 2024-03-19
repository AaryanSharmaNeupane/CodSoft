import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/company_logo.png";

export const Footer = () => {
  return (
    <footer className="border-t-2  bg-gray-900 ">
      <div className="flex justify-center w-1/2 mx-auto p-4 md:py-8  ">
        <div className=" mr-4 sm:flex sm:items-center sm:justify-between">
          <Link to="/" className=" sm:mb-0 ">
            <img
              src={Logo}
              className="h-10 max-sm:hidden "
              alt="Company Logo"
            />
          </Link>
        </div>

        <span className="block mt-3 text-sm  sm:text-center text-gray-400">
          © 2024
          <Link to="/" className="hover:underline">
            Portfilio™
          </Link>
          . All Rights Reserved.
          <p>Aaryan's Tech</p>
        </span>
      </div>
    </footer>
  );
};
