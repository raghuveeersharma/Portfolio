import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoGlobeOutline } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { PiDevices } from "react-icons/pi";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const list = [
    {
      id: 1,
      title: "Front-end",
      description:
        "Front-end development, crafting responsive and dynamic user interfaces using modern technologies. Integrate the front end with backend services via REST APIs, ensuring smooth data flow and real-time updates. Additionally, I leverage tools like Axios or Fetch API for API communication, and manage global state efficiently using libraries such as Redux Toolkit or React Context API. By combining these technologies, I deliver scalable, performant, and visually appealing web applications that provide an exceptional user experience.",
      GitHub: "https://github.com/raghuveeersharma/Text_Util/tree/master",
      more: "https://raghuveeersharma.github.io/Text_Util",
      tag: <IoGlobeOutline />,
    },
    {
      id: 2,
      title: "Back-end",
      description:
        "Backend development, creating robust and scalable server-side applications using Node.js and Express.js. My tech stack includes CORS for secure cross-origin resource sharing, bcrypt for hashing sensitive data like passwords, and JWT (JSON Web Tokens) for implementing secure authentication and authorization. I design and manage structured data storage using MongoDB with well-defined schemas via Mongoose. I also focus on implementing RESTful APIs, handling middleware effectively, I deliver backend solutions that are secure, scalable, and seamlessly integrate with front-end systems.",
      GitHub: "https://github.com/raghuveeersharma/password_manager",
      more: "https://raghuveeersharma.github.io/password_manager/",
      tag: <FaDatabase />,
    },
    {
      id: 3,
      title: "Morden UI",
      description:
        "Building modern and responsive user interfaces using cutting-edge technologies. Leveraging Tailwind CSS, I create pixel-perfect designs with a utility-first approach, I develop dynamic and component-based UIs, enhanced with React Icons for elegant and customizable iconography. I incorporate tools like React Slick to implement smooth, interactive carousels and sliders, and React Animation library for seamless transitions and engaging animations. With these technologies, I deliver user experiences that are both functional and captivating, optimized for performance across devices and screen sizes.",
      GitHub: "https://github.com/raghuveeersharma/BookStoreWeb",
      more: "",
      tag: <PiDevices className="text-4xl" />,
    },
  ];
  var settings = {
    dots: true,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: i === activeIndex ? "blue" : "gray", // Dynamic styling based on activeIndex
          borderRadius: "50%",
        }}
        className="cursor-pointer md:mt-8 lg:md:mt-3 "
      ></div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setActiveIndex(next),
  };
  return (
    <div>
      <section
        className="relative bg-cover bg-fixed bg-black bg-center h-screen md:max-h-full w-full overflow-x-hidden pb-20 pt-8 overflow-y-hidden"
        id="services"
      >
        <div className="absolute inset-0 opacity-60 items-center bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[100%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        <div className="relative z-10 md:max-w-4xl mx-auto text-center pt-24 pb-20 items-center max-w-2xl">
          <h1 className=" text-xl font-bold text-pink-700 mb-2">SERVICES</h1>
          <h1 className=" md:text-4xl text-2xl text-white font-bold">
            What can I do for you.
          </h1>
        </div>
        <div className="relative z-30 text-slate-400 md:px-28 px-12 mx-auto ">
          <Slider {...settings} className="">
            {list.map((item) => {
              return (
                <div
                  className="bg-transparent md:h-80 h-96 w-52 py-3  mx-auto hover:scale-105 duration-700 "
                  key={item.id}
                >
                  <div className="text-2xl text-slate-400 font-bold mx-auto text-center flex flex-col items-center">
                    <span className="text-3xl text-[#ff00cc]">{item.tag}</span>
                    {item.title}
                    <p className="md:text-sm text-xs md:w-[90%] w-60 md:mt-4 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Services;
