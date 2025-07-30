import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={80} />, level: "Experienced" },
  { name: "CSS", icon: <FaCss3 size={80} />, level: "Experienced" },
  { name: "JavaScript", icon: <FaJs size={80} />, level: "Experienced" },
  { name: "React", icon: <FaReact size={80} />, level: "Experienced" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={80} />,
    level: "Experienced",
  },
  { name: "Next.js", icon: <SiNextdotjs size={80} />, level: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs size={80} />, level: "Intermediate" },
  { name: "PHP", icon: <FaPhp size={80} />, level: "Experienced" },
  { name: "Laravel", icon: <FaLaravel size={80} />, level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress size={80} />, level: "Basic" },
  { name: "MongoDB", icon: <SiMongodb size={80} />, level: "Basic" },
];

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-12 text-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Hands-on Experience
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
            }}
            className="flex flex-col items-center bg-slate-950 bg-opacity-45 rounded-lg p-6 hover:cursor-pointer"
          >
            <div className="text-blue-400">{skill.icon}</div>
            <h2 className="mt-4 text-xl font-bold">{skill.name}</h2>
            <p className="text-lg font-semibold mt-2">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
