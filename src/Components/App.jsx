import React, { useRef, useState } from 'react';
import './App.css';
import '../mediaQueries.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import AddToDo from './AddToDo.jsx';
import Layout from '../Layout/Layout.jsx';

import { GlobalProvider } from '../Context/GlobalState';

function App() {
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
        <div id='addToDo' ref={addToDo__container}>
          <AddToDo state={collapsed} />
        </div>
        <div id='test' className='bg-light w-100'>
          <div className='addToDo__wrapper' onClick={toggleAddToDo__container}>
            <button
              id='addToDo__containerCollapse'
              className='addToDo__button d-flex align-items-end justify-content-center'
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
