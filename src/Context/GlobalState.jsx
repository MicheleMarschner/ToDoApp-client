import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


//Initial State
const initialState = {
    toDos: [], 
    error: null,
    loading: true
}


//create context
const GlobalContext = createContext(initialState);

//ProviderComponent
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Action
    const getToDos = async () => {
      try {
        const res = await axios.get('https://powerful-eyrie-34001.herokuapp.com/api/todos');

        dispatch({
          type: 'GET_TODOS', 
          payload: res.data.data
        });

      } catch (err) {
        dispatch({
          type: 'TODOS_ERROR', 
          payload: err.response.data.error
        });
      }
    }

    const addToDo = async (toDo) => {
      const option = {
        headers: {
          'Content-type': 'application/json'
        }
      }

      try {
        const res = await axios.post('https://powerful-eyrie-34001.herokuapp.com/api/todos', toDo, option);
        dispatch({
          type: 'ADD_TODO', 
          payload: res.data.data
        });

      } catch (err) {
        dispatch({
          type: 'TODOS_ERROR', 
          payload: err.response.data.error
        });
      }
    }

    const deleteAll = async () => {
        try {
          const res = await axios.delete('https://powerful-eyrie-34001.herokuapp.com/api/todos');
  
          dispatch({
            type: 'DELETE_ALL',
            payload: res.data.data
          });
  
        } catch (err) {
          dispatch({
            type: 'TODOS_ERROR', 
            payload: err.response.data.error
          });
        }
    }

    const deleteToDo = async (id) => {
        try {
          const res = await axios.delete(`https://powerful-eyrie-34001.herokuapp.com/api/todos/${id}`);
  
          dispatch({
            type: 'DELETE_TODO', 
            payload: id
          });
  
        } catch (err) {
          dispatch({
            type: 'TODOS_ERROR', 
            payload: err.response.data.error
          });
        }
    }

    const editToDo = async (id, update) => {
      try {
        const res = await axios.put(`http://localhost:5000/api/todos/${id}`, update);

        dispatch({
          type: 'EDIT_TODO', 
          payload: res.data.data
        });
        console.log("update" + res.data.data.title);

      } catch (err) {
        dispatch({
          type: 'TODOS_ERROR', 
          payload: err.response.data.error
        });
      }
    }

    return (
        <GlobalContext.Provider value={{
            toDos: state.toDos, 
            error: state.error,
            loading: state.loading,
            getToDos,
            deleteToDo,
            addToDo,
            deleteAll,
            editToDo
        }}>
          {children}
        </GlobalContext.Provider>);
  }
  

export { GlobalContext, GlobalProvider };