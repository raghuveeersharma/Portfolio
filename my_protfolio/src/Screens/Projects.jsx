import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TextUtils ",
      description:
        "A text Editor built on React.js, it can manipulate text like Convert to uuper case,to lower case, Remove extra spaces.",
      image: "../src/assets/TextUtil.png",
      GitHub: "https://github.com/raghuveeersharma/Text_Util/tree/master",
      more: "https://raghuveeersharma.github.io/Text_Util",
    },
    {
      id: 2,
      title: "PassOP ",
      description:
        "A password manager built with React.js. Fully secure as it store password on your local storage.",
      image: "../src/assets/PassOP.png",
      GitHub: "https://github.com/raghuveeersharma/password_manager",
      more: "https://raghuveeersharma.github.io/password_manager/",
    },
    {
      id: 3,
      title: "E-BookStore",
      description:
        "A modern e-BookStore platform with MERN stack.It is a dynamic web app , all the books are fetch via API from server.",
      image: "../src/assets/BookStore.png",
      GitHub: "https://github.com/raghuveeersharma/BookStoreWeb",
      more: "",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Responsive portfolio showcasing my work.I use react-animation in it, and it is fully responsive.",
      image: "../src/assets/Portfolio.png",
      GitHub: "#",
      more: "",
    },
    {
      id: 5,
      title: "Todo App",
      description:
        "A simple todo app built on MERN stack. It saves users tasks in database and user can perform CURD operations too on tasks, The UI of it is fully responsive.",
      image: "../src/assets/Todo.png",
      GitHub: "https://github.com/raghuveeersharma/TODO_FRONTEND",
      more: "",
    },
  ];

  return (
    <div>
      <section
        className="relative bg-cover bg-fixed bg-[#f2fcff] bg-center h-full md:max-h-full w-full overflow-x-hidden pb-20"
        id="Projects"
      >
        <div className="absolute inset-0 opacity-55 items-center"></div>
        <div className="relative z-10 md:max-w-4xl mx-auto text-center py-32 items-center max-w-2xl">
          <h1 className=" text-xl font-bold text-pink-700 mb-2">PROJECTS</h1>
          <h1 className=" md:text-4xl text-2xl text-slate-800 font-bold">
            Check out some of my works
          </h1>
          <p className="mt-5 lg:px-0 px-4 text-slate-600">
            Projects and Technologies - Throughout my academic & professional
            journey, I have worked on various projects that demonstrate my
            expertise in modern technologies. My projects primarily utilize the
            MERN stack (MongoDB, Express.js, React.js, Node.js), showcasing my
            ability to create full-stack applications. I have also leveraged
            Vite for fast & efficient development, and Tailwind CSS to craft
            responsive and visually appealing user interfaces. My projects often
            incorporate tools like React Hot Toast, UUID, and React animations
            for an enhanced user experience. These technologies, combined with
            my problem-solving approach, have enabled me to develop innovative &
            functional web applications tailored to user needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-20 mx-[14.5%] gap-16 my-10 items-center ">
          {projects.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
