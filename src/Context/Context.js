import React, { createContext, useReducer } from 'react';
import axios from "axios"
export const contactsContext = createContext()


//ссылка
const API = 'http://localhost:8000/contacts';
//начальное состояние
const INIT_STATE = {

    contacts : []
}
//
const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACTS":
            return {...state, contacts:action.payload }
            default:
            break;
    }
}


const Context = ({children}) => {
    const [state,dispatch] = useReducer(reducer,INIT_STATE);

    const addContacts = async (contacts) =>{
        await axios.post(API, contacts)
    } 

    const getContacts = async () =>{
        const {data} = await axios.get(API)
        dispatch({
            type:"GET_CONTACTS",
            payload: data
        })
    }

    return (
        <contactsContext.Provider
                value={{
                contacts:  state.contacts,
                addContacts,
                getContacts
            }}>

            {children}
        </contactsContext.Provider>
    );
};

export default Context;