import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/RecipesContext";
import HomePage from "./views/home";

function App() {
  const [filterValue, setFilterValue] = useState([]);

  return (
    <GlobalContext.Provider value={{ filterValue, setFilterValue }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
