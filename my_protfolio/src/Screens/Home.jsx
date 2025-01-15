import React from "react";
import Header from "../components/Header";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Navbar from "../components/Navbar";
import About from "./About";

const Home = () => {
  return (
    <div>
      {/* Section with Background Image */}
      <section
        className="relative bg-cover bg-fixed bg-center h-screen w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pZ2h0JTIwc2t5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')",
        }}
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-55  items-center"></div>

        {/* Sticky Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center py-32 items-center ">
          <h1 className="md:text-3xl text-xl font-bold text-pink-700 mb-2">
            Hello World.
          </h1>
          <h1 className="lg:text-7xl md:text-5xl text-2xl font-normal text-slate-100 mb-4">
            I'm Raghuveer Sharma
          </h1>
          <p className="md:text-xl text-sm text-gray-300">
            | Full Stack JavaScript Developer |
          </p>
          <div className="border-4 border-slate-300 w-1/4 p-4 hover:border-pink-700 duration-300 text-slate-200 mx-auto mt-10 cursor-pointer">
            More About me
          </div>
        </div>
        <div className="relative top-14 max-w-4xl mx-auto text-5xl text-white flex gap-8 justify-center">
          <a href="https://github.com/raghuveeersharma" target="_blank">
            <IoLogoGithub className="hover:text-pink-700 duration-500 cursor-pointer" />
          </a>
          <a href="">
            <FaInstagram className="hover:text-pink-700 duration-500 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/raghuveer-sharma-810124252/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-pink-700 duration-500 cursor-pointer" />
          </a>

          <a href="https://leetcode.com/u/RaghuSharma48/" target="_blank">
            <SiLeetcode className="hover:text-pink-700 duration-500 cursor-pointer" />
          </a>
        </div>
      </section>

      {/* Section with sticky content */}
      <section className="">
        <About />
      </section>

      {/* Another Scrollable Content Section */}
      <section className="p-8 bg-gray-800">
        <h2 className="text-3xl font-semibold text-cyan-300 mb-4">
          What We Do
        </h2>
        <p className="text-lg text-gray-400 mb-4">
          Curabitur euismod orci vitae est sollicitudin, at tempor libero
          placerat. Integer sit amet interdum ligula. Mauris ultricies euismod
          metus, nec tincidunt felis accumsan eu. Aliquam erat volutpat. Donec
          tempor lacinia nisi, id ullamcorper ex dapibus id. Proin nec diam sed
          sapien posuere volutpat.
        </p>
      </section>
    </div>
  );
};

export default Home;
