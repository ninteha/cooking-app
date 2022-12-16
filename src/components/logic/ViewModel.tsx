import { recipesData } from "../../data/api";

const ViewModel = () => {
  const getRecipes = recipesData;

  return {
    getRecipes,
  };
};

export default ViewModel;
