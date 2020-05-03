import React, { createContext, useReducer } from 'react';
import { reducer } from "./reducer.js";

const initialState = {
  units: "imperial",
  cityName: "",
  weather: null,
  fetchType: "current",
  forecast: [],
  theme: "light"
}

export const Context = createContext(initialState)

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  )
}