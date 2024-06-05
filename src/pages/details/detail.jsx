import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/context";

export default function Details() {
  const { id } = useParams();
  const { details, setDetails, favouriteList, handleAddToFav } =
    useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data) {
        setDetails(data?.data);
      }
    }
    getRecipeDetails();
  }, [id]);
  console.log(details);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={details?.recipe?.image_url}
            className="h-full w-full object-cover block group-hover:scale-105 duration-700"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {details?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {details?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFav(details?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block mt-3 text-white shadow-md bg-black "
          >
            {favouriteList &&
            favouriteList.length > 0 &&
            favouriteList.findIndex(
              (item) => item.id === details?.recipe?.id
            ) !== -1
              ? "Remove from Favourites"
              : "Add to favourites"}
          </button>
          <div>
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-3">
              {details?.recipe?.ingredients.map((ing) => (
                <li>
                  <span className="text-l font-semibold text-black">
                    {ing.quantity} {ing.unit} {ing.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
