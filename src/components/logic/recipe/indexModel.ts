import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";
import { recipesData } from "../../../data/api";

const filterModel = () => {
  const { filterValue } = useGlobalContext();
  const filters: string[] = [];
  let filteredData: any = [];

  const [data, setData] = useState(recipesData.recipes);

  filterValue?.forEach((element: any) => {
    filters.push(...element);
  });

  recipesData.recipes.forEach((element: any) => {
    element?.ingredients.forEach((ingredient: string) => {
      filters.forEach((filter: string) => {
        if (ingredient.includes(filter)) {
          filteredData.push(element);
        }
      });
    });
  });

  filteredData = [...new Set(filteredData)];

  useEffect(() => {
    filters.length >= 1 ? setData(filteredData) : setData(recipesData.recipes);
  }, [filterValue]);

  return {
    data,
  };
};

export default filterModel;
