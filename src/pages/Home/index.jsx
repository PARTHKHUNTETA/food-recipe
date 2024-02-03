import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeCard from "../RecipeCard/index";
import { Link } from "react-router-dom";

const Home = () => {
  const { recipeList, error, loading } = useContext(GlobalContext);
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return (
      <div className="text-center mt-11 font-extrabold text-2xl">
        Loading .....
      </div>
    );
  }
  if (!recipeList) {
    return (
      <h1 className="text-center mt-11 font-extrabold text-2xl lg:text-4xl">
        Nothing to show .Please search something
      </h1>
    );
  }
  if (recipeList && recipeList.length === 0) {
    return (
      <h1 className="text-center mt-11 font-extrabold text-2xl">
        There is no such recipe related to this search
      </h1>
    );
  }
  return (
    <div className=" flex flex-wrap justify-around items-center gap-5">
      {recipeList.map((recipe) => (
          <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
