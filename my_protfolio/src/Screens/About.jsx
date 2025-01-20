import React from "react";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-scroll";
import Profile from "../assets/Profile12 (1).jpeg";

const About = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-fixed bg-white bg-center h-full md:max-h-full w-full overflow-x-hidden"
        id="about"
      >
        <div className="absolute inset-0 opacity-55  items-center"></div>
        <div className="relative z-10 md:max-w-4xl mx-auto text-center py-32 items-center max-w-2xl">
          <h1 className=" text-xl font-bold text-pink-700 mb-2">ABOUT</h1>
          <h1 className=" md:text-4xl text-2xl text-slate-800 font-bold">
            Let me introduce myself.
          </h1>
          <div className="mx-auto md:flex mt-10">
            <img
              src={Profile}
              alt="Profile"
              className="lg:w-40 lg:h-40 md:size-32 h-20 w-h-20 mx-auto rounded-full  "
            />
            <p className="md:text-lg lg:text-xl text-xm text-slate-500 md:w-[600px] w-[250px] md:text-start text-center mx-auto md:mt-1 mt-3 items-center">
              Hi, I’m Raghu Sharma. I’m currently in the final semester of my
              B.Tech in Information Technology at Chameli Devi Group of
              Institutions, affiliated with RGPV Rajiv Gandhi Proudyogiki
              Vishwavidyalaya. I live in Indore, and I’m deeply passionate about
              leveraging technology to build innovative and impactful solutions.
              With a strong interest in full-stack web development, I am
              committed to continuously learning and growing as a developer.
            </p>
          </div>
        </div>
        <div className="lg:flex gap-16 lg:gap-48 mx-auto justify-center  lg:px-0 md:px-16 w-full lg:w-screen text-slate-800 ">
          <div>
            <div className="mb-2 ">
              <h1 className="lg:text-xl text-lg font-bold md:text-start text-center">
                PROFILE
              </h1>
              <p className="mt-1 w-80 md:w-96 text-slate-600 md:text-lg lg:text-xl text-sm md:mx-0 mx-auto">
                I’m a Full Stack JavaScript Developer. Passionate about crafting
                efficient, scalable, and user-friendly solutions, I thrive at
                the intersection of creativity and technology.
              </p>
            </div>
            <div className="md:px-0 px-9">
              <h1 className="md:text-lg text-sm font-semibold mt-7 md:mt-10">
                BIRTH DATE:
              </h1>
              <p className="text-slate-600  text-sm md:text-lg">july 8, 2003</p>
              <h1 className="md:text-lg text-sm font-semibold mt-4 md:mt-10">
                WEB SITE:
              </h1>
              <p className="text-slate-600 text-sm md:text-lg">
                https://raghuveersharma.com
              </p>
              <h1 className="md:text-lg text-sm font-semibold mt-4 md:mt-10">
                EMAIL:
              </h1>
              <p className="text-slate-600 text-xs md:text-lg">
                sharmaraghu157@gmail.com
              </p>
              <h1 className="md:text-lg text-sm font-semibold mt-4 md:mt-10">
                PHONE:
              </h1>
              <p className="text-slate-600 text-sm md:text-lg">9575136951</p>
              <h1 className="md:text-lg text-sm font-semibold mt-4 md:mt-10">
                Location:
              </h1>
              <p className="text-slate-600 text-sm md:text-lg">
                Indore , Madhya Pradesh , India
              </p>
              <h1 className="md:text-lg text-sm font-semibold mt-4 md:mt-10">
                Languages:
              </h1>
              <p className="text-slate-600 text-sm md:text-lg">
                Hindi , English
              </p>
            </div>
          </div>
          <div>
            <div className="mb-2 lg:mt-0 mt-12 ">
              <h1 className="md:text-xl text-lg font-bold md:text-start text-center ">
                SKILLS
              </h1>
              <p className=" mt-1 w-80 md:w-96 text-slate-600 md:text-lg lg:text-xl text-sm md:mx-0 mx-auto">
                Full Stack Developer skilled in MERN stack with expertise in
                React.js, Next.js, Tailwind CSS, Node.js, Express.js, and
                MongoDB. Proficient in building responsive, scalable web
                applications with a focus on performance and design.
              </p>
            </div>
            <div className="md:mt-4 mt-7 md:px-0 px-9">
              <ul>
                <li className="md:mt-3 ">
                  <ProgressBar skill="React.js" percentage="70" />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar skill="Node.js" percentage="75" />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar skill="Express.js" percentage="75" />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar skill="MongoDB" percentage="65" />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar skill="Git/GitHub" percentage="70" />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar
                    skill="Tailwind CSS / Bootstrap"
                    percentage="75"
                  />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar skill="C/C++" percentage="80" />
                </li>
                <li className="md:mt-3 mt-1">
                  <ProgressBar skill="Data Structure" percentage="65" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-20 mt-10 text-xs md:text-lg font-semibold pb-10">
          <Link
            to="contact"
            smooth={true}
            duration={200}
            className="relative z-10"
          >
            <div className=" border-4 border-slate-300 w-24 md:w-52 px-2 md:px-4  py-2 text-slate-800 hover:border-pink-700 duration-700 cursor-pointer text-center ">
              Hire Me
            </div>
          </Link>
          <a
            href="/Raghuverr.pdf"
            download
            className="relative z-50 bg-slate-800 w-24 md:w-52 md:px-4 px-2 py-2  text-slate-100 cursor-pointer text-center "
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
