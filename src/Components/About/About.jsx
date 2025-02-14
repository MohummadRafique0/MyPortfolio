import React from "react";
import { FaArrowRight } from "react-icons/fa";
import AboutImg from "../../assets/About.png";

function About() {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-12"
    >
      <div className="flex flex-col items-center md:items-center">
        <h2 className="text-4xl md:text-6xl flex items-center justify-center text-white font-bold mb-6">
          About
        </h2>
        <div className="md:flex flex-wrap items-center">
          <img
            className="w-full md:w-1/2 h-auto" 
            src={AboutImg}
            alt="About img"
            style={{ maxHeight: "40rem" }}
          />
          <ul className="md:w-1/2">
            {" "}
            <div className="flex gap-3 py-4">
              <FaArrowRight size={30} className="mt-1" />
              <span className="w-full md:w-96">
                {" "}
      
                <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                  Front-End 
                </h1>
                <p className="text-md md:text-lg leading-tight">
                  Front-End Developer skilled in HTML, CSS,TailwindCSS bootstraps, and JavaScript with
                  expertise in React,NextJs. Passionate about creating responsive,
                  user-friendly web applications that deliver seamless
                  experiences.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <FaArrowRight size={30} className="mt-1" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                  Back-End 
                </h1>
                <p className="text-md md:text-lg leading-tight">
                  Back-End Developer skilled in PHP and Laravel,
                  faimlier with ExpressJs,NodeJs focused on
                  building secure and efficient web applications. Passionate
                  about optimizing performance and improving user experience.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
