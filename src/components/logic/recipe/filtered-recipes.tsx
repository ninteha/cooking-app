import { Fragment } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";
import { recipesData } from "../../../data/api";
import RecipeCard from "../../ui/recipe-card";

const FilteredRecipes = () => {
  const { filterValue } = useGlobalContext();
  const list = [];
  let recipes: any = [recipesData.recipes];
  // for (const recipe of recipes) {
  //   console.log(recipe);
  //   list.push(<></>);
  // }
  return (
    <>
      {recipes
        .map((recipe: any) => <RecipeCard recipe={recipe} />)
        .filter((recipe: any) => {
          for (let i = 0; i < filterValue.length; i++) {
            const ingredients = recipe.props.recipe.map((item: any) => {
              return item.ingredients;
            });
            for (let j = 0; j < ingredients?.length; j++) {

              


              ingredients[j].includes(filterValue[i]);
              console.log(ingredients[j].includes(filterValue[i]));
              console.log("ingredients[j]", ingredients[j]);
              console.log("filterValue[i]", filterValue[i]);
            }
            // ingredients?.includes(filterValue[i]);
            console.log(ingredients.includes(filterValue[i]));
            // console.log(ingredients?.includes(filterValue[i]));
          }
        })}
    </>
  );
};

export default FilteredRecipes;
