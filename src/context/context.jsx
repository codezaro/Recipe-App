import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [details, setDetails] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setLoading(false);
        setRecipe(data?.data?.recipes);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      setLoading(false);
      setSearchParam("");
    }
  }
  console.log(loading, recipe);

  function handleAddToFav(getItem) {
    console.log("getItem", getItem);
    let copyItem = [...favouriteList];
    const index = copyItem.findIndex((item) => item.id === getItem.id);
    if (index === -1) {
      copyItem.push(getItem);
    } else {
      copyItem.splice(index);
    }
    setFavouriteList(copyItem);
  }
  console.log(favouriteList);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        recipe,
        searchParam,
        setSearchParam,
        handleSubmit,
        details,
        setDetails,
        favouriteList,

        handleAddToFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
