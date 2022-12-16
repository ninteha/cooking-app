import { useEffect } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";
import styles from "./index.module.scss";
import RecipeMap from "./recipe-map";

const Recipe = () => {
  const { filterValue } = useGlobalContext();
  useEffect(() => {
    RecipeMap;
  }), [filterValue];

  return (
    <div className={styles.wrapper}>
      <RecipeMap />
    </div>
  );
};

export default Recipe;
