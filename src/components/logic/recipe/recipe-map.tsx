import { Fragment } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";
import RecipeCard from "../../ui/recipe-card";
import ViewModel from "../ViewModel";

const RecipeMap = () => {
  const { getRecipes } = ViewModel();
  const { filterValue } = useGlobalContext();

  return (
    <>
      {getRecipes?.recipes.map((recipe: any) => {
        return (
          <Fragment key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Fragment>
        );
      })}
    </>
  );
};

export default RecipeMap;
