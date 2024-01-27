import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
    transactions: [
        { id: 1, text: 'Chocolate', amount: -20 },
        { id: 2, text: 'Pocket Money', amount: 300 },
        { id: 3, text: 'Box', amount: -10 },
        { id: 4, text: 'Speaker', amount: 150 }
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}