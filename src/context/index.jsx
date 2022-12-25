import { createContext, useContext } from "react"

const SERVER_ADDRESS = (process.env.NODE_ENV == "development") ? (
        "http://127.0.0.1:5000" 
    ) : ( 
        ""
    )

const Context = createContext()

export default function MainContext({ children }) {

    return ( 
        <Context.Provider value={{
            SERVER_ADDRESS
        }}>
            { children }
        </Context.Provider>
    )
} 

export const GlobalStates = () => useContext(Context)
