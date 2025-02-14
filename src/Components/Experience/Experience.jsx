import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiExpress } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-12">
      <h1 className="text-2xl md:text-5xl flex items-center justify-center text-white font-bold">
        Hands-on Experience
      </h1>
      <h2 className="text-xl md:text-3xl flex items-center justify-center text-white font-bold pt-8">
        Front-End Tools
      </h2>
      <div className="flex flex-wrap items-center justify-center py-3">
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <FaHtml5 color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">HTML</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Experienced
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <FaCss3 color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">CSS</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Experienced
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <FaJs color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">JavaScript</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Experienced
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <FaReact color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">React</h2>
              <p className="text-lg leading-tight py-2 font-semibold ">
                Experienced
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <SiTailwindcss color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">Tailwind CSS</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Experienced
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <SiNextdotjs color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">Next JS</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Intermediate
              </p>
            </span>
          </div>
        </div>
      </div>
      <h2 className="text-xl md:text-3xl flex items-center justify-center text-white font-bold pt-10">
        Back-End Tools
      </h2>
      <div className="flex flex-wrap items-center justify-center py-3 ">
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <FaNodeJs color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">Node JS</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <FaPhp color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">PHP</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Experienced
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-cente hover:scale-105 cursor-pointerr">
            <FaLaravel color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">Laravel</h2>
              <p className="text-lg leading-tight py-2 font-semibold">
                Intermediate
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <SiExpress color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">ExpressJs</h2>
              <p className="text-lg leading-tight py-2 font-semibold">Basic </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:scale-105 cursor-pointer">
            <SiMongodb color="#4285F4" size={80} />
            <span className="text-white">
              <h2 className="leading-tight font-bold text-xl">Mongo DB</h2>
              <p className="text-lg leading-tight py-2 font-semibold">Basic </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
