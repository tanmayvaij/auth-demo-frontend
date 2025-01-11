import { createContext, useContext } from "react";

const SERVER_ADDRESS = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"

const Context = createContext();

export default function MainContext({ children }) {
  return (
    <Context.Provider
      value={{
        SERVER_ADDRESS,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const GlobalStates = () => useContext(Context);
