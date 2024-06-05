import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../components/recipe/recipe-item";

export default function Home() {
  const { loading, recipe } = useContext(GlobalContext);

  if (loading) return <div>Loading... Please wait</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {/* {recipe && recipe.length > 0 ? <img src={recipe.image_url} /> : null} */}

      {recipe && recipe.length > 0 ? (
        recipe.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl ext-xl text-center text-black font-extrabold">
            Nothing to show. Please search something!
          </p>
        </div>
      )}
    </div>
  );
}
