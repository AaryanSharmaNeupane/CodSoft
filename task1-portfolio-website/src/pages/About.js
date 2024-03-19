import React from "react";
import Aaryan from "../assets/images/aaryan.jpg";

export const About = ({ id }) => {
  return (
    <section className="py-12 bg-gray-900" id={id}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">About Me</h2>
          <img
            className="rounded-full w-40 h-40 mx-auto mb-8"
            src={Aaryan}
            alt="Aaryan"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Background and Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                Background
              </h3>
              <p className="text-gray-400">
                I hold a Bachelor's degree in Computer Engineering from Lalitpur
                Engineering College, where I honed my skills in software
                development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                Education
              </h3>
              <p className="text-gray-400">
                Completed High School from KIST College & SS in Science before
                pursuing my engineering degree.
              </p>
            </div>
            {/* Skills and Work Experience */}
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                Skills and Expertise
              </h3>
              <p className="text-gray-400">
                Proficient in JavaScript, Dart, Python, C, and C++, with
                expertise in frameworks like Flutter and Bootstrap.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">
                Work Experience
              </h3>
              <p className="text-gray-400">
                As a Flutter Developer Intern at Kimbu Tech, I contributed to
                building responsive user interfaces for mobile applications and
                designed websites and marketing materials.
              </p>
            </div>
          </div>
          {/* Passions and Goals */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              Passions and Goals
            </h3>
            <p className="text-gray-400">
              I am driven by challenges and committed to contributing to Nepal's
              technology industry. My passion lies in redefining user
              experiences through web and application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
