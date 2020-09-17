import React, { createContext, useContext, useState } from "react";
const ComponentsContext = createContext([]);

const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  return (
    <ComponentsContext.Provider value={{ components, setComponents }}>
      {children}
    </ComponentsContext.Provider>
  );
};

const useComponents = () => useContext(ComponentsContext);

export { ComponentsContext, ComponentsProvider, useComponents };
