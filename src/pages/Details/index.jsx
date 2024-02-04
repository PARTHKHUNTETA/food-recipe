import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeData,
    setRecipeData,
    loading,
    setLoading,
    savedRecipe,
    setSavedRecipe,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  async function getDataWithRecipeId() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeData(data?.data?.recipe);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getDataWithRecipeId();
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1 className="text-center mt-11 font-extrabold text-2xl">
          Loading ......
        </h1>
      ) : (
        recipeData && (
          <div className="flex justify-evenly items-center gap-5 container mx-auto py-10">
            <div className="h-96 overflow-hidden rounded-xl group">
              <img
                className="h-full w-full object-cover block group-hover:scale-105 duration-300"
                src={recipeData?.image_url}
                alt={recipeData?.title}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="font-bold text-2xl truncate text-cyan-400">
                {" "}
                {recipeData?.publisher}
              </div>
              <div className="font-bold text-2xl truncate text-black">
                Time (in min) :{recipeData?.cooking_time}
              </div>

              <div className="font-bold text-xl truncate text-black">
                Serving :{recipeData?.servings}
              </div>

              <div>
                {recipeData?.ingredients &&
                  recipeData.ingredients.length > 0 &&
                  recipeData.ingredients.map((item) => (
                    <ul className="list-disc">
                      <li key={item?.description}>
                        <span>{`${
                          item?.description.charAt(0).toUpperCase() +
                          item?.description.slice(1)
                        } `}</span>
                        <span>
                          {item?.quantity ? ` :: ${item?.quantity} ` : " "}
                        </span>
                        <span>{item?.unit === "" ? " " : item?.unit}</span>
                      </li>
                    </ul>
                  ))}
              </div>
              <div>
                <button
                  onClick={() => handleAddToFavorite(recipeData)}
                  className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider bg-black text-white"
                >
                  {savedRecipe &&
                  savedRecipe.length > 0 &&
                  savedRecipe.findIndex(
                    (item) => item.id === recipeData?.id
                  ) !== -1
                    ? "Remove From favorites"
                    : "Save Recipe"}
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Details;
