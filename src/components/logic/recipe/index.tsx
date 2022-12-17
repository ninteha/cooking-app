import RecipeCard from "../../ui/recipe-card";
import styles from "./index.module.scss";
import filterModel from "./indexModel";

const Recipe = () => {
  const { data } = filterModel();

  return (
    <div className={styles.wrapper}>
      {data.map((recipe: any, i: any) => {
        return <RecipeCard key={i} recipe={recipe} />;
      })}
    </div>
  );
};

export default Recipe;
