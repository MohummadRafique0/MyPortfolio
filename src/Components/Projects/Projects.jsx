import React from "react";
import ProjectCard from "./ProjectsCard";
import Devhaven from "../../assets/Dev-Haven.png";
import EMS from "../../assets/EMS.png";
import Movies from "../../assets/Movies-web.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-5xl flex items-center justify-center font-bold">
        Projects
      </h1>

      <div className="py-12 px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          soucre="https://github.com/MohummadRafique0/Dev-Haven"
          picture={Devhaven}
          link="https://dev-haven-rafee.netlify.app/"
          title="Dev-Haven"
          main="Fully Responsive Landing Page: React JS + Tailwind CSS"
        />
        <ProjectCard
          soucre="https://github.com/MohummadRafique0/EMS"
          picture={EMS}
          link="https://ems-rafique.netlify.app/"
          title="EMS"
          main="Employee Management System built with React JS + Tailwind CSS."
        />
        <ProjectCard
          soucre="https://github.com/MohummadRafique0/Movies-web"
          picture={Movies}
          link="https://moive-web-rafee.netlify.app/"
          title="Movie Web App"
          main="A responsive React.js movie app using TMDB API. Integrated Appwrite to manage trending content dynamically, styled with Tailwind CSS."
        />
      </div>
    </div>
  );
};

export default Projects;


