import React, { useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './App.css';
import '../mediaQueries.css';

import AddToDo from './AddToDo.jsx';
import Layout from '../Layout/Layout.jsx';

import { GlobalProvider } from '../Context/GlobalState';

function App() {
  //adds functionality for the top down slider
  const [collapsed, setCollapsed] = useState(false);
  const addToDo__container = useRef();
  const toggle = useRef();
  const toggleAddToDo__container = () => {
    addToDo__container.current.classList.toggle('active');
    addToDo__container.current.classList.toggle('collapsed');
    setCollapsed(!collapsed);
  };

  return (
    <GlobalProvider>
      <div>
        <div id='addToDo' className='shadow' ref={addToDo__container}>
          <AddToDo state={collapsed} />
        </div>
        <div id='test' className='bg-light w-100'>
          <div className='addToDo__wrapper' onClick={toggleAddToDo__container}>
            <button
              id='addToDo__containerCollapse'
              className='addToDo__button addToDo__button--paper addToDo__button--paper-curl d-flex align-items-end justify-content-center'
              type='button'
              ref={toggle}
            >
              {' '}
              {collapsed ? (
                <FaAngleDown style={{ fontSize: '2rem' }} id='arrowDown' />
              ) : (
                <FaAngleUp style={{ fontSize: '2rem' }} id='arrowUp' />
              )}
            </button>
          </div>
        </div>
        <Layout />
      </div>
    </GlobalProvider>
  );
}

export default App;
