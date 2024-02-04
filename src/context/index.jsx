import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const navigate = useNavigate();
  const [savedRecipe, setSavedRecipe] = useState(() => {
    if (localStorage.getItem("savedRecipe")) {
      return JSON.parse(localStorage.getItem("savedRecipe"));
    } else {
      return [];
    }
  });

  async function handleInputChange(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      setRecipeList(data?.data?.recipes);
      setLoading(false);
      setSearchParam("");
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err?.message);
      setLoading(false);
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavList = [...savedRecipe];
    const index = cpyFavList.findIndex((item) => item.id === getCurrentItem.id);
    if (index == -1) {
      cpyFavList.push(getCurrentItem);
    } else {
      cpyFavList.splice(index);
    }

    setSavedRecipe(cpyFavList);
    localStorage.setItem("savedRecipe", JSON.stringify(cpyFavList));
  }

  console.log("savedRecipe", savedRecipe);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        recipeList,
        error,
        loading,
        handleInputChange,
        recipeData,
        setRecipeData,
        setLoading,
        savedRecipe,
        setSavedRecipe,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
