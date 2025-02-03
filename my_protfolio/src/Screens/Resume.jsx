import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-fixed bg-[#ebebeb] bg-center h-full md:max-h-full w-full overflow-x-hidden pb-20"
        id="resume"
      >
        <div className="absolute inset-0 opacity-55  items-center"></div>
        <div className="relative z-10 md:max-w-4xl mx-auto text-center py-32 items-center max-w-2xl">
          <h1 className="md:text-xl text-xl font-bold text-pink-700 mb-2">
            RESUME
          </h1>
          <h1 className=" md:text-4xl text-2xl text-slate-800 font-bold">
            More of my Credentials.
          </h1>
          <p className="text-slate-500 md:w-[600px] w-[250px] text-center mx-auto md:mt-1 mt-5 md:text-lg text-base ">
            Educational Journey - I studied from nursery to 12th grade at City
            Star Convent H.S. School, where I gained a strong foundation and
            developed a fascination for science. Currently, I am doing my
            graduation in B.Tech in Information Technology at Chameli Devi Group
            of Institutions, affiliated with RGPV, focusing on modern
            technologies and full-stack development.
          </p>
          <h1 className="md:text-2xl text-xl font-bold text-[#ff00cc]  mt-6">
            Education
          </h1>
        </div>
        <div className="relative">
          <div className=" border-l md:border-slate-300 border-slate-400 h-screen md:mx-[40%] lg:mx-[40%] mx-[34%] "></div>
          <div className="bg-[#312e2e] rounded-full md:h-11 md:w-11 h-8 w-8 absolute top-[2%] md:mx-[37.8%]  xl:mx-[38.5%] mx-[30.5%] text-white">
            <span className="absolute  md:top-3 top-[20%] lg:left-[29%] md:left-[23%] left-[21%] md:text-xl text-lg">
              <FaGraduationCap />
            </span>
          </div>
          <div className="bg-[#312e2e] rounded-full md:h-11 md:w-11 h-8 w-8 absolute top-[35%] md:mx-[37.8%] xl:mx-[38.5%]  mx-[30.5%]  text-white">
            <span className="absolute  md:top-3 top-[20%] lg:left-[29%] md:left-[23%] left-[21%] md:text-xl text-lg">
              <FaGraduationCap />
            </span>
          </div>
          <div className="bg-[#312e2e] rounded-full md:h-11 md:w-11 h-8 w-8 absolute top-[68%] md:mx-[37.8%]  xl:mx-[38.5%]  mx-[30.5%] text-white">
            <span className="absolute  md:top-3 lg:left-[29%] top-[20%] md:left-[23%] left-[21%] md:text-xl text-lg">
              <FaGraduationCap />
            </span>
          </div>
          <div className="lg:flex absolute top-[2%] lg:left-64 xl:left-72 left-[45%] gap-28">
            <div className="md:text-2xl text-xl font-bold text-gray-700 md:w-[50%] w-[80%]">
              Bachelor Degree
              <p className="md:text-base text-xs font-semibold text-neutral-500 font-serif w-[80%] mt-2">
                OCT 2021 - Mar 2025
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-gray-700">
              Collage life
              <p className="md:text-base text-xs font-semibold text-neutral-500 font-serif md:w-[72%] w-[90%]  md:mt-6 mt-3 ">
                B.Tech in Information Technology IT at Chameli Devi Group of
                Institutions, affiliated with RGPV Rajiv Gandhi Proudyogiki
                Vishwavidyalaya.The Institution has played a pivotal role in
                shaping my academic and professional growth.
              </p>
            </div>
          </div>
          <div className="lg:flex absolute top-[35%]  lg:left-64 xl:left-72 left-[45%] gap-28">
            <div className="md:text-2xl text-xl font-bold text-gray-700 w-[50%]">
              XII th class
              <p className="md:text-base text-xs font-semibold text-neutral-500 font-serif w-[80%] mt-2">
                OCT-2021
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-gray-700 ">
              Schooling
              <p className="md:text-base text-xs font-semibold text-neutral-500 font-serif md:w-[72%] w-[90%] md:mt-6 mt-3  ">
                I completed my 12th grade from City Star Convent H.S. School, a
                state board institution located in nagin nagar, Indore, Madhya
                Pradesh. with a focus on Physics, Chemistry, & Math.This
                academic foundation of my engineering journey.
              </p>
            </div>
          </div>
          <div className="lg:flex absolute top-[68%]  lg:left-64 xl:left-72 left-[45%] gap-28">
            <div className="md:text-2xl text-xl font-bold text-gray-700 w-[50%]">
              X th Class
              <p className="md:text-base text-xs font-semibold text-neutral-500 font-serif w-[80%] mt-2">
                OCT-2021
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-gray-700">
              Schooling
              <p className="md:text-base text-xs font-semibold text-neutral-500 font-serif md:w-[72%] w-[90%] md:mt-6 mt-3 ">
                I completed my 10th grade from City Star Convent H.S. School,
                which is a state board institution located in , Indore. where my
                fascination with science began. My subjects were English, Social
                Science, Mathematics, Science, & Hindi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
