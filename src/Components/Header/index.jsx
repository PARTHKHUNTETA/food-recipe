import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Header = () => {
  const {
    searchParam,
    setSearchParam,
    recipeList,
    error,
    loading,
    handleInputChange,
  } = useContext(GlobalContext);
  return (
    <div>
      <nav className="flex justify-between items-center py-8 container mx-auto  lg:flex-grow gap-5 lg:gap-0">
        <h2 className="text-2xl font-bold">
          <NavLink to="/" className="text-black hover:text-gray-700 duration">
            Food Recipe By Dr.Bush
          </NavLink>
        </h2>
        <form onSubmit={handleInputChange}>
          <input
            name="search"
            placeholder="Search for the Recipe"
            type="text"
            onChange={(e) => setSearchParam(e.target.value)}
            value={ searchParam }
            className="bg-white/75 p-3 px-8 rounded-full m-3 outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          ></input>
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" className="text-black hover:text-gray-700 duration">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className="text-black hover:text-gray-700 duration"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
