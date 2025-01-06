import { createContext, useContext } from "react";

const SERVER_ADDRESS = process.env.BACKEND_EXPOSE_PORT

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
