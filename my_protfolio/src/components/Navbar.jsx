import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const links = [
    {
      id: 1,
      name: "Home",
      link: "home",
    },
    {
      id: 2,
      name: "About",
      link: "about",
    },
    {
      id: 3,
      name: "resume",
      link: "resume",
    },
    {
      id: 4,
      name: "Projects",
      link: "Projects",
    },
    {
      id: 5,
      name: "Services",
      link: "services",
    },

    {
      id: 6,
      name: "Contact",
      link: "contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="md:w-20 w-16 md:ml-1 ">
        <header className="bg-black p-4">
          <div className="flex items-center justify-between">
            {/* Logo or title */}
            <div className="text-white text-xl"></div>

            {/* Hamburger Icon for mobile and desktop */}
            <button
              onClick={toggleMenu}
              className="text-[#ff00cc] focus:outline-none pr-3 "
            >
              {isOpen ? (
                <p className="md:text-4xl text-3xl md:pr-1 ">x</p>
              ) : (
                <svg
                  className="w-6 h-6  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile and Desktop Menu (Visible only when hamburger is clicked) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-black md:px-4 p-2 text-white`} // For mobile
        >
          <nav className="space-y-6 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                smooth={true}
                duration={50}
                className="cursor-pointer hover:text-[#ff00cc] hover:scale-105 duration-100 md:text-base text-xs"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
