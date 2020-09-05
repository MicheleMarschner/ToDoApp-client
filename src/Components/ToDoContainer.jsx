import React, { useContext, useEffect, useState } from 'react';
import ToDo from './ToDo.jsx';
import spinner from '../assets/spinner.gif';

import { GlobalContext } from '../Context/GlobalState';

export default function ToDoContainer() {
    const { toDos, getToDos, loading } = useContext(GlobalContext);
    const [ filter, setFilter ] = useState('All');

    useEffect(() => {
        setTimeout(() =>  getToDos(), 1000);
    }, [])

    const renderToDos = (toDos) => {
        if(loading)  return  (
            <img src={spinner} alt='loading' className='d-block mx-auto' />
          );
          return toDos
                .filter(filterOptions[filter])
                .map(item => (<ToDo toDo={item} key={item._id} />));
    }

    const filterOptions = {
        All: () => true,
        Uncompleted: item => !item.isCompleted,
        Completed: item => item.isCompleted
    };

    return (
        <div className="container container-right overflow-auto h-100">
            <div className="dropdown filter">
                <button className="btn primary-button dropdown-toggle rounded-pill mb-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter
                </button>
                <div className="dropdown-menu" onClick={(e) => setFilter(e.target.innerHTML)} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item all" href="#">All</a>
                    <a className="dropdown-item uncompleted" href="#">Uncompleted</a>
                    <a className="dropdown-item completed" href="#">Completed</a>
                </div>
            </div>
            <div className="listWrapper"> 
                <ul className="toDos p-0">
                    {!toDos? <p>Yeah nothing to do</p> : renderToDos(toDos)}
                </ul>
            </div>
      </div>
    )
}