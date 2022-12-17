import { useEffect } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";
import styles from "./index.module.scss";
import FilteredRecipes from "./filtered-recipes";

const Recipe = () => {
  const { filterValue } = useGlobalContext();
  useEffect(() => {
    FilteredRecipes;
  }),
    [filterValue];

  return (
    <div className={styles.wrapper}>
      <FilteredRecipes />
    </div>
  );
};

export default Recipe;
