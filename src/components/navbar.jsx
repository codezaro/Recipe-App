import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { useContext } from "react";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex flex-col justify-between items-center py-8 container mx-auto lg:flex-row gap-5 lg:gap-0 ">
      <h2 className="text-2xl font-semibold">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className="text-black hover:text-gray-700 duration-700"
            >
              Food Recipe
            </NavLink>
          </li>
        </ul>
      </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search items here.."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none  lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-700"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-700"
          >
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/recipe-item/:id"}
            className="text-black hover:text-gray-700 duration-700"
          >
            Details
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
