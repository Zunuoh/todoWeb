import React, {createContext,  useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    users: [
        {id:1, name:"User One"},
        {id:2, name:"User Two"},
        {id:3, name:"User Three"}
    ]
};

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

// create actions
const deleteUser = (id) =>{
    dispatch({
        type: 'REMOVE_USER',
        payload: id
    })
}


    return(
       <GlobalContext.Provider value={{
           users: state.users,
           deleteUser: deleteUser
       }}>
           {children}
       </GlobalContext.Provider>
    )
}
