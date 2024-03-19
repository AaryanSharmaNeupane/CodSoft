import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [hidden, setHidden] = useState(true);

  const activeClass =
    "text-base block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white";
  const inActiveClass =
    "text-base block py-2 pr-4 pl-3  rounded   md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700";

  return (
    <header>
      <nav className="px-2 sm:px-4 py-2 bg-gray-900 border-b-1 border-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <i className="self-center text-2xl font-semibold text-white">
              {`< Aaryan Sharma  />`}
            </i>
          </Link>

          <div id="mobile-nav" className="flex md:order-2">
            <button
              onClick={() => setHidden(!hidden)}
              data-collapse-toggle="hamburger-menu"
              type="button"
              className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="hamburger-menu"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              hidden ? "hidden" : ""
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="hamburger-menu"
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
