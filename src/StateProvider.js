import React, {createContext , useContext, useReducer} from "react"; 

// this is the data layer
export const StateContext=createContext();

//build a provider
export const StateProvider=({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a componenttt
export const useStateValue =() => useContext(StateContext);