import { useState } from "react";

export default function Card({ item }) {
  const [showFull, setShowFull] = useState(false);
  const words = item.description.split(" ");
  const shouldTruncate = words.length > 15;
  const truncatedText = words.slice(0, 15).join(" ") + "...";

  return (
    <div className="card lg:card-side bg-[#ffffff] shadow-2xl hover:shadow-black md:w-[100%] w-72 md:h-[300px] rounded-md text-slate-700 border-2 border-[#dddef0] hover:scale-105 duration-500">
      <figure>
        <img
          src={item.image}
          alt={item.title}
          className="md:w-full md:h-full md:object-cover w-fit h-72 rounded-md"
        />
      </figure>
      <div className="card-body md:w-52 w-full">
        <h2 className="card-title text-base font-bold">{item.title}</h2>
        <p className="text-sm">
          {showFull ? item.description : truncatedText}{" "}
          {shouldTruncate && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-blue-700 cursor-pointer text-base"
            >
              {showFull ? "Read Less" : "Read More"}
            </button>
          )}
          {item.more !== "" && (
            <a
              href={item.more}
              target="_blank"
              className="text-blue-700 cursor-pointer text-base ml-2"
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
  );
}
