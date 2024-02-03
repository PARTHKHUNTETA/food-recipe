import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

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
    } catch (err) {
      console.log(err);
      setError(err?.message);
      setLoading(false);
    }
  }
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
