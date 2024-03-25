import React from "react";

export const Contact = ({ id }) => {
  return (
    <section id={id} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
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
                href="https://www.linkedin.com/in/aaryan-sharma09/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/AaryanSharmaNeupane"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
