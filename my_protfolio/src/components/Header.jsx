import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-slate-800 text-white items-center p-2">
        <div className=" text-3xl">Raghu Sharma</div>
        <div className="">
          <ul className="flex gap-10 text-lg">
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="bg-green-500 m-1 p-2 rounded-md text-xl font-bold hover:bg-green-600 ">
            Hire me
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
