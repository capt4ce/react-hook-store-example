import React, { createContext, useContext, useReducer } from 'react'

import ToDoReducer, { initialState } from './reducer'

export const ToDoContext = createContext()

export const ToDoProvider = ({ children }) => {
  return (
    <ToDoContext.Provider value={useReducer(ToDoReducer, initialState)}>
      {children}
    </ToDoContext.Provider>
  )
}

export const useToDoStore = () => useContext(ToDoContext)
