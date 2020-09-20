import React, { useContext, useEffect, useState } from 'react';
import ToDo from './ToDo.jsx';
import { Spinner } from 'react-rainbow-components';
import { FaTrash } from 'react-icons/fa';

import { GlobalContext } from '../Context/GlobalState';

export default function ToDoContainer() {
  const { toDos, getToDos, loading, deleteAll } = useContext(GlobalContext);
  const [filter, setFilter] = useState('All');

  //fetches all toDo items from own Api / Mongodb database when component gets mounted
  useEffect(
    () => {
      setTimeout(() => getToDos(), 1000);
    },
    [
      /*toDos*/
    ]
  );

  //maps and renders single toDo items as soon as they are put into the local state after the api call
  const renderToDos = toDos => {
    if (loading) return <Spinner />;
    return toDos
      .filter(filterOptions[filter])
      .map(item => <ToDo toDo={item} key={item._id} />);
  };

  //manages filter options in the dropdown menu
  const filterOptions = {
    All: () => true,
    Uncompleted: item => !item.isCompleted,
    Completed: item => item.isCompleted,
  };

  return (
    <div className='container container-right py-5'>
      <div className='d-flex justify-content-between mb-3'>
        <button
          className='btn primary-button btn-primary-color btn-sm rounded-pill deleteAll'
          type='button'
          onClick={deleteAll}
        >
          <strong>Delete All</strong> <FaTrash />
        </button>
        <button
          className='btn primary-button btn-primary-color btn-sm rounded-pill dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <strong>Filter</strong>
        </button>
        <div
          className='dropdown-menu'
          onClick={e => setFilter(e.target.innerHTML)}
          aria-labelledby='dropdownMenuButton'
        >
          <a className='dropdown-item all active' href='#0'>
            All
          </a>
          <a className='dropdown-item uncompleted' href='#0'>
            Uncompleted
          </a>
          <a className='dropdown-item completed' href='#0'>
            Completed
          </a>
        </div>
      </div>
      <div className='accordion accordion my-5' id='helpAccordion'>
        {toDos.length === 0 && !loading ? (
          <p>Yeah nothing to do</p>
        ) : (
          renderToDos(toDos)
        )}
      </div>
    </div>
  );
}
