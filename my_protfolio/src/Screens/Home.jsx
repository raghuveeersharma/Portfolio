import React from "react";

import About from "./About";
import Contact from "./Contact";
import { TypeAnimation } from "react-type-animation";
import { BsPersonRaisedHand } from "react-icons/bs";
import Resume from "./Resume";
import Projects from "./Projects";
import Services from "./Services";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import NavigatorToTop from "../components/NavigatorToTop";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <>
      <div className="fixed z-50">
        <Navbar />
      </div>
      {/* Section with Background Image */}
      <section
        className="relative bg-cover bg-center md:bg-fixed min-h-screen w-full overflow-x-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pZ2h0JTIwc2t5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')",
        }}
        id="home"
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-55 items-center"></div>

        {/* Sticky Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center py-32 items-center">
          <h1 className="relative md:text-3xl text-xl font-bold text-pink-700 mb-2 ">
            Hello there .
            <span className="text-white absolute md:top-0 top-1 hover:animate-spin duration-1000">
              <BsPersonRaisedHand />
            </span>
          </h1>
          <span className="lg:text-7xl md:text-5xl text-2xl font-normal text-slate-100 mb-4 border-r-2 ">
            <TypeAnimation
              sequence={[
                "I'm Raghuveer Sharma",
                2500, // wait 1s before replacing "Mice" with "Hamsters"
                "I'm a Full Stack Developer",
                2500,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
          <p className="md:text-xl text-sm text-gray-400 mt-4">
            | Full Stack JavaScript Developer |
          </p>
          <Link to="about" smooth={true} duration={50} className=" ">
            <div className="border-4 border-slate-400 md:w-1/4 w-44 p-4 hover:border-pink-700 duration-700 text-slate-200 mx-auto mt-16 cursor-pointer">
              More About me
            </div>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 text-5xl">
          <SocialLinks />
        </div>
      </section>
      <div>
        <NavigatorToTop />
      </div>

      {/* About Section */}
      <section className="relative bg-white">
        <About />
      </section>

      {/* Another Scrollable Content Section */}
      <section className="relative">
        <Resume />
      </section>

      {/* Projects Section */}
      <section className="relative">
        <Projects />
      </section>

      {/* Another Scrollable Content Section */}
      <section className="relative">
        <Services />
      </section>

      {/* Contact Section */}
      <section className="relative">
        <Contact />
      </section>
    </>
  );
};

export default Home;
