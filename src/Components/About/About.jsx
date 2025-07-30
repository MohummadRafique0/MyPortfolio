import React from "react";
import AboutImg from "../../assets/About.png";

function About() {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      {/* Left Section - About Me */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">About Me</h2>

        <p className="text-md md:text-lg leading-tight mt-4 text-gray-300">
          Aspiring 17-year-old programmer with 1.5+ years of hands-on experience
          in React, HTML, CSS, TailwindCSS, Bootstrap, and JavaScript. Expertise
          in React, Next.js, and backend development with PHP, Laravel, and
          familiarity with Express.js & Node.js. Passionate about web
          development, constantly learning to enhance my skills.
        </p>
      </div>

      {/* Right Section - Education */}
      <div className="md:w-1/2 mt-8 md:mt-0 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500">
          {/* School */}
          <div className="mb-6 ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 top-1"></div>
            <h3 className="text-xl font-semibold">
              High School Matric Certification
            </h3>
            <p className="text-gray-400 text-sm">2022 - 2024</p>
          </div>

          {/* Self-Taught Learning */}
          <div className="mb-6 ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 top-1"></div>
            <h3 className="text-xl font-semibold">Self-Taught Developer</h3>
            <p className="text-gray-400">
              Online Courses & Real-World Projects
            </p>
            <p className="text-gray-400 text-sm">2023 - Present</p>
          </div>

          {/* Future Goal */}
          <div className="ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 top-1"></div>
            <h3 className="text-xl font-semibold text-white">
              Future Goal
            </h3>
            <p className="text-gray-400">
              Pursue a Bachelor's Degree in Software Engineering.
            </p>
            <p className="text-gray-400 text-sm">Expected: 2025 - 2029</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
