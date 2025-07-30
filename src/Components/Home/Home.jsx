import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Profile from "../../assets/Profile.jpg";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Hello I am Muhammad Rafique",
      "Web Developer",
      "Full Stack Developer",
    ],
    loop: {},
  });

  const handleDownload = () => {
    const resumeUrl = "/Muhummad Rafique's Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Muhummad Rafique's Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-10 min-h-screen">
      {/* Left Section - Profile Image */}
      <div className="flex justify-center w-full lg:w-1/2 lg:p-1">
        <img
          className="rounded-[30px] h-[75%] w-[90%] object-cover shadow-lg"
          src={Profile}
          alt="Profile Photo"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="md:w-2/4 pt-10 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-normal tracking-tighter">
          <span>
            {text}
            <Cursor />
          </span>
        </h1>
        <p className="text-sm md:text-3xl tracking-tight pt-3.5 text-gray-300">
          I am a Full-Stack Developer with 2 years of hands-on experience
          specializing in JavaScript, React.js, Next.js, PHP, and Laravel. With
          a strong focus on frontend development.
        </p>

        {/* Buttons */}
        <div className="mt-5 md:mt-10 flex gap-4">
          <a href="#Footer">
            <button className="text-white py-2 px-4 md:text-2xl text-sm md:py-3 md:px-6 transition duration-300 hover:opacity-75 hover:scale-105 font-semibold bg-slate-900 rounded-lg">
              Contact me
            </button>
          </a>
          <a
            target="_blank"
            onClick={handleDownload}
            href="https://drive.google.com/file/d/1fl1WMxRKOuMh5P6xSVXu2JohtEM3AxKD/view?usp=sharing"
            className="text-white py-2 px-4 md:text-2xl text-sm md:py-3 md:px-6 transition duration-300 hover:opacity-75 hover:scale-110 font-semibold bg-slate-900 rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
