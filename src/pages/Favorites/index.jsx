import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeCard from '../RecipeCard/index'

const Favorites = () => {
  const { savedRecipe} = useContext(GlobalContext);
  console.log(savedRecipe)
  if (!savedRecipe) {
    return (
      <h1 className="text-center mt-11 font-extrabold text-2xl lg:text-4xl">
        Nothing to show .Please search something
      </h1>
    );
  }
  if (savedRecipe && savedRecipe.length === 0) {
    return (
      <h1 className="text-center mt-11 font-extrabold text-2xl">
        There is no recipe to display
      </h1>
    );
  }
  return (
    <div className=" flex flex-wrap justify-around items-center gap-5">
      {savedRecipe.map((recipe) => (
          <RecipeCard key={recipe?.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Favorites;
