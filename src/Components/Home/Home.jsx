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
    const resumeUrl =
      import.meta.env.BASE_URL +
      `${window.location.origin}/Muhummad Rafique's Resume.pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Muhummad Rafique's Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-24 min-h-screen">
      <div className="md:w-2/4 pt-20">
        <h1 className="text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter">
          <span>
            {text}
            <Cursor />
          </span>
        </h1>
        <p className="text-sm md:text-3xl tracking-tight pt-3.5">
           I am a Full-Stack Developer with 2 years of hands-on experience
          specializing in JavaScript, React.js, Next.js, PHP, and Laravel. With
          a strong focus on frontend development, I build seamless,
          high-performance web applications with intuitive user experiences.
        </p>
        <a href="#Footer">
          <button className="mt-5 md:mt-15 md:text-2xl text-white py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-75 duration-300 hover:scale-105 font-semibold bg-slate-900">
            Contact me
          </button>
        </a>
        <div>
          <button
            onClick={handleDownload}
            className="mt-1 md:mt-4 md:text-2xl text-white py-2 px-3 text-sm md:py-2 md:px-4 hover:opacity-75 duration-300 hover:scale-110 font-semibold bg-slate-900"
          >
            Download Resume
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full lg:w-1/2 lg:p-4 rounded">
        <img
          className="rounded-[20px] h-[80%] w-[90%] object-cover"
          src={Profile}
          alt="Profile Photo"
        />
      </div>
    </div>
  );
}

export default Home;
