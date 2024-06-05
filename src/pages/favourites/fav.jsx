import { useContext } from "react";
import GlobalState, { GlobalContext } from "../../context/context";
import RecipeItem from "../../components/recipe/recipe-item";

export default function Favourites() {
  const { favouriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl ext-xl text-center text-black font-extrabold">
            Nothing is added.
          </p>
        </div>
      )}
    </div>
  );
}
