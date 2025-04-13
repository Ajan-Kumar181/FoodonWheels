import React, { createContext, useState } from "react";

// Create the context
export const RestrauntContext = createContext({
  restInfocont: null,
  setInfo: () => {}, // placeholder, gets overridden in Provider
});

// Context provider component
export const RestContextProvider = ({ children }) => {
  const [restInfocont, setInfo] = useState(null);

  return (
    <RestrauntContext.Provider value={{ restInfocont, setInfo }}>
      {children}
    </RestrauntContext.Provider>
  );
};
