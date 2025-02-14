import React from "react";
const ProjectsCard = ({ title, main,link,soucre,picture }) => {
  return (
    <div className="p-3 flex-wrap md:p-6 flex flex-col w-1/3 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img src={picture} className=""></img>
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal py-2">
        {title}
      </h3>
      <p className="px-3 text-sm md:text-lg leading-tight ">{main}</p>
      <div className=" p-2 md:p-3 flex gap-2 md:gap-4">
        <a href={link} target="_blank">
          <button className="md:mt-6 text-white  px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
        </a>
        <a href={soucre} target="_blank">
          <button className="md:mt-6 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
