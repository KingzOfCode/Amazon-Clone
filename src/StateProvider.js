import React, { createContext, useContect, useContext, useReducer } from 'react';

// prepares the dataLayer
export const StateContext = createContext();

// wrap or app and provide the Data Layer
export const StateProviver =  ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);