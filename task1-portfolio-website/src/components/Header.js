import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    const handleResize = () => {
      setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0">
      <nav className="px-2 sm:px-4 py-2 bg-gray-900 border-b-1 border-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="home" className="flex items-center cursor-pointer">
            <i className="self-center text-2xl font-semibold text-white">
              {`< Aaryan Sharma  />`}
            </i>
          </Link>

          <div
            className={` justify-between items-center w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="home"
                  delay={20}
                  smooth={true}
                  offset={-headerHeight}
                  className="text-slate-400 hover:text-white cursor-pointer"
                  end
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  delay={20}
                  smooth={true}
                  offset={-headerHeight - 65}
                  className="text-slate-400 hover:text-white cursor-pointer "
                  end
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  delay={20}
                  smooth={true}
                  offset={-headerHeight + 35}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  delay={20}
                  smooth={true}
                  offset={-headerHeight}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
