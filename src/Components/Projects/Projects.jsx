import React from "react";
import ProjectCard from "./ProjectsCard";
import Devhaven from "../../assets/Dev-Haven.png";
import EMS from "../../assets/EMS.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-5xl flex items-center justify-center text-white font-bold">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">
        <ProjectCard
          soucre={"https://github.com/MohummadRafique0/Dev-Haven"}
          picture={Devhaven}
          link={"https://dev-haven-rafee.netlify.app/"}
          title="Dev-Haven"
          main="Fully Responsive Landing Page: React JS + Tailwind CSS"
        />
        <ProjectCard
          soucre={"https://github.com/MohummadRafique0/EMS"}
          picture={EMS}  
          link={"https://ems-rafique.netlify.app/"}
          title="EMS"
          main="Employee Management System build with React JS + Tailwind CSS."
        />

      </div>
    </div>
  );
};

export default Projects;
