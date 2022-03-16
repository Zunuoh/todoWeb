import React, {createContext,  useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    tasks: [
        
    ]
};

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // dispatch changes the state

// create actions
const deleteTask = (id) =>{
    dispatch({
        type: 'REMOVE_USER',
        payload: id
    })
}


const addTask = (user) =>{
    dispatch({
        type: 'ADD_USER',
        payload: user
    })
}

const addDescription = (descr) =>{
    dispatch({
        type: 'ADD_DESCRIPTION',
        payload: descr
    })
}

const editTask = (task) =>{
    dispatch({
        type: 'EDIT_TASK',
        payload: task,
    })
}

    return(
       <GlobalContext.Provider value={{
           tasks: state.tasks,
           deleteTask,
           addTask,
           editTask,
           addDescription
       }}>
           {children}
       </GlobalContext.Provider>
    )
}
