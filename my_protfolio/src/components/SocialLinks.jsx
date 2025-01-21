import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const SocialLinks = () => {
  return (
    <div>
      <div className="relative lg:top-6 -top-6 max-w-4xl mx-auto text-white flex gap-8 justify-center">
        <a href="https://github.com/raghuveeersharma" target="_blank">
          <IoLogoGithub className="hover:text-pink-700 duration-500 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/__raghusharma__?igsh=MjkwYTRxb3ljaXBx"
          target="_blank"
        >
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
    </div>
  );
};

export default SocialLinks;
