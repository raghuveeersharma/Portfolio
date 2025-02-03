import React from "react";

const ProgressBar = ({ skill, percentage }) => {
  return (
    <>
      <h1 className="md:text-lg text-sm font-semibold">{skill}</h1>
      <div className="md:w-full w-[300px] bg-gray-300 h-1 md:h-2">
        <div
          className="bg-slate-800 h-1 md:h-2  transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="mt-1 text-center md:text-sm text-xs text-gray-700 ">
        {percentage}%
      </div>
    </>
  );
};

export default ProgressBar;
