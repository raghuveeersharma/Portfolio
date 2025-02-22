import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card lg:card-side bg-[#ffffff] shadow-2xl hover:shadow-black md:w-[100%] w-72 rounded-md text-slate-700 border-2 border-[#dddef0] hover:scale-105 duration-500  ">
        <figure>
          <img src={item.image} alt={item.title} className="w-fit h-72" />
        </figure>
        <div className="card-body md:w-52 w-full">
          <h2 className="card-title text-base font-bold">{item.title}</h2>
          <p className="text-sm">
            {item.description}{" "}
            {item.more !== "" && (
              <a
                href={item.more}
                target="_blank"
                className="text-blue-700 cursor-pointer text-base"
              >
                Link
              </a>
            )}
          </p>
          <div className="card-actions justify-center md:mt-0 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 w-32 h-8 rounded-md text-white">
              <a href={item.GitHub} target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
