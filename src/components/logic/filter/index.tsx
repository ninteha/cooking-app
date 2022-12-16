import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ViewModel from "../ViewModel";
import { capitalizeFirstLetter } from "../../../helper/helper";
import { SyntheticEvent } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";

export default function CheckboxesTags() {
  const { getRecipes } = ViewModel();
  const { setFilterValue } = useGlobalContext();
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={getRecipes?.ingredients}
      disableCloseOnSelect
      clearIcon={null}
      onChange={(event: SyntheticEvent, value: any) => {
        setFilterValue(value.map((e: any) => e.name.toString()));
      }}
      getOptionLabel={(e) => e.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {capitalizeFirstLetter(option.name)}
        </li>
      )}
      style={{ width: "328px" }}
      renderInput={(params) => (
        <TextField {...params} label="Filter Ingredients" />
      )}
    />
  );
}