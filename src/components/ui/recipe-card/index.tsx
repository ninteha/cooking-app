import styles from "./index.module.scss";
import BulletIcon from "./../../../assets/svg/icons/bullet.svg";
import OpenLinkIcon from "./../../../assets/svg/icons/open-link.svg";
import { FC, useState } from "react";
import TransitionsModal from "../../logic/modal";
import { ThemeProvider } from "@mui/material";
import theme from "../../../styles/theme";

interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  timeToPrepare: string;
  ingredients: string[];
  preparationMethod: [{ step: string; text: string }];
}

interface IRecipeCard {
  recipe: RecipeCardProps;
}

const RecipeCard: FC<IRecipeCard> = ({ recipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <div>{recipe?.title}</div>
            </div>
            <div className={styles.subTitle}>{recipe?.timeToPrepare}</div>
          </div>
          <div className={styles.image}>
            <img src={recipe?.image} alt={recipe?.title} />
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.descriptionContainer}>
              {recipe?.ingredients?.map((ingredient: any, i: any) => {
                return (
                  <div key={i} className={styles.description}>
                    <img src={BulletIcon} alt="" />
                    <p className={styles.text}>{ingredient}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => setSelectedRecipe(true)}
          >
            <img src={OpenLinkIcon} alt="" />
          </button>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <TransitionsModal
          open={selectedRecipe}
          recipe={recipe}
          handleClose={() => setSelectedRecipe(false)}
        />
      </ThemeProvider>
    </div>
  );
};

export default RecipeCard;
