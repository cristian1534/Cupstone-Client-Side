import React, { createContext, useState } from "react";

export const Cart_Context = createContext(null);

export const Cart_Context_Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <Cart_Context.Provider value={[cart, setCart]}>
      {children}
    </Cart_Context.Provider>
  );
};
