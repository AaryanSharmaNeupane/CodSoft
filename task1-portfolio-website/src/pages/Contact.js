import React from "react";

export const Contact = ({ id }) => {
  return (
    <section id={id} className="py-12 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4  text-center text-white">
          Contact Me
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-gray-600 mb-6">
            Have a question or want to work together? Feel free to reach out to
            me via email or phone. You can also connect with me on social media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Email
              </h3>
              <p className="text-gray-600">sonofnaleen@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+9779860221380</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Social Media
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/AaryanSharmaNeupane"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19c-2.18 0-4-1.996-4-4.5V10m0-4V5a2 2 0 012-2h2a2 2 0 012 2v.5m0 8.5V15a2 2 0 002 2c1.105 0 2-.896 2-2v-1.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 6.5v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2v1.5M12 11.5a3 3 0 110-6 3 3 0 010 6z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/aaryan-sharma09/"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10V9a4 4 0 00-4-4H6a4 4 0 00-4 4v11a4 4 0 004 4h4a4 4 0 004-4v-1a1 1 0 00-1-1h-2m-3-9a1 1 0 110-2 1 1 0 010 2zM20 9v11a4 4 0 01-4 4h-2a4 4 0 01-4-4V9m8 0h-3M4 20h3m-2-3h2m11-1h2m-2 3h3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
