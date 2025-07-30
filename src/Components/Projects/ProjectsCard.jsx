import React from "react";
const ProjectsCard = ({ title, main,link,soucre,picture }) => {
  return (
    <div className="flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl p-4 md:p-6 w-full max-w-sm mx-auto">
      <img
        src={picture}
        alt={title}
        className="h-40 w-full object-cover rounded-md mb-4"
      />

      <h3 className="text-xl md:text-2xl font-bold text-white px-2 mb-2 text-center">
        {title}
      </h3>

      <p className="text-sm md:text-lg text-white px-3 text-center mb-4">
        {main}
      </p>

      <div className="flex justify-center gap-4 mt-auto">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 text-white px-4 py-2 rounded-3xl text-sm md:text-base font-semibold">
            Demo
          </button>
        </a>
        <a href={soucre} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 text-white px-4 py-2 rounded-3xl text-sm md:text-base font-semibold">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
