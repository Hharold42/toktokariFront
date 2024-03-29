import axios from "axios";
import { createContext, useContext, useState } from "react";

const GContext = createContext();

export const useG = () => useContext(GContext);

const GlobalContext = ({ children }) => {
  const [cats, setCats] = useState([]);
  const [catUrl, setCatUrl] = useState("");

  const providerValues = {
    cats,
    setCats,
    catUrl,
    setCatUrl,
  };

  return (
    <GContext.Provider value={providerValues}>{children}</GContext.Provider>
  );
};

export default GlobalContext;
