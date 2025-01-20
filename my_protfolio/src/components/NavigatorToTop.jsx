import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const NavigatorToTop = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true); // Show while scrolling

      // Hide after scrolling stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Adjust delay as needed
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  return (
    <div>
      {isScrolling && (
        <Link
          to="home"
          smooth={true}
          duration={50}
          className={`fixed md:bottom-0 bottom-2 md:right-0 right-4 z-50 transform bg-pink-700 text-white rounded-sm shadow-md md:w-[3.8%] w-10 h-14 transition-opacity duration-700  ${
            isScrolling ? "opacity-100" : "opacity-0 "
          }`}
        >
          <div className="cursor-pointer hover:text-slate-300 hover:scale-105 duration-100 text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FaArrowUp />
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavigatorToTop;
