import React, { createContext, useContext, useEffect, useState } from "react";

const Coin = createContext();

const CoinContext = ({ children }) => {
  const [currency, setCurrency] = useState("UAH");
  const [symbol, setSymbol] = useState("₴");

  useEffect(() => {
    if (currency === "UAH") setSymbol("₴");//₹
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Coin.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Coin.Provider>
  );
};

export default CoinContext;

export const CoinState = () => {
  return useContext(Coin);
};
