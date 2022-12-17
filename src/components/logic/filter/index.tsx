import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { capitalizeFirstLetter } from "../../../helper/helper";
import { SyntheticEvent } from "react";
import { useGlobalContext } from "../../../context/RecipesContext";
import { recipesData } from "../../../data/api";
import styles from "./index.module.scss";

export default function CheckboxesTags() {
  const style = {
    "& .MuiAutocomplete-inputRoot": {
      padding: "0",
      "& .MuiAutocomplete-input": {
        padding: "16px",
      },
    },
    "& .MuiAutocomplete-option[data-focus='true']": {
      backgroundColor: "#f5f5f5",
    },

    "& .MuiAutocomplete-tag": {
      backgroundColor: "#fff",
      "& .MuiChip-label": {
        color: "#000",
        fontSize: "18px",
        height: "20px",
        lineHeight: "18px",
        paddingRight: "0",
      },
      "& .MuiChip-deleteIcon": {
        display: "none",
      },
    },
  };
  const { setFilterValue } = useGlobalContext();
  return (
    <Autocomplete
      sx={style}
      multiple
      freeSolo={true}
      options={recipesData?.ingredients}
      disableCloseOnSelect
      clearIcon={null}
      onChange={(event: SyntheticEvent, value: any) => {
        setFilterValue(value.map((e: any) => [e.name]));
      }}
      getOptionLabel={(e: any) => e.name}
      renderOption={(props, option, { selected }) => (
        <li className={styles.options} {...props}>
          <Checkbox
            checked={selected}
            disableRipple
            sx={{
              color: "rgba(0, 0, 0, 0.6)",
              "&.Mui-checked": {
                color: "#F60257",
              },
            }}
          />
          {capitalizeFirstLetter(option.name)}
        </li>
      )}
      limitTags={1}
      style={{ width: "328px" }}
      renderInput={(params) => (
        <TextField {...params} label="Filter Ingredients" />
      )}
    />
  );
}
