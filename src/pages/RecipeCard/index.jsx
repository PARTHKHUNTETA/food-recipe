import React from "react";
import { Link } from "react-router-dom";

const index = ({ recipe }) => {
  return (
    <div className="w-80 border-2 flex justify-evenly bg-white/75 flex-col overflow-hidden rounded-lg shadow-xl gap-5 p-5">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          className="block w-full"
          src={recipe?.image_url}
          alt={recipe?.title}
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipe?.title.length > 20
            ? recipe?.title.slice(0, 20) + "..."
            : recipe?.title}
        </h3>
        <Link
          to={`/recipe-detail/${recipe?.id}`}
          className="text-sm p-3 px-8 rounded-lg mt-5 uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default index;
