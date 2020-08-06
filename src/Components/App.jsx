import React, { useEffect } from 'react';
import './App.css';

import Header from './Header.jsx';
import AddToDo from './AddToDo.jsx';
import ToDoContainer from './ToDoContainer.jsx';

import {GlobalProvider} from '../Context/GlobalState';

//import { getToDoItems } from './client.js';

//const promise = getToDoItems();

function App() {

  useEffect(() => {
    /*promise.then(Items => {
      setToDoItems(Items);
      
    });*/
  }, [/*ToDoItems*/])


  return (
    <GlobalProvider>
      <div className="row height">
        <div className="col header height">
          
            <div className="header-bg"></div>
            <div className="container height">
              <div className="row height">
                <div className="col-12">
                  <Header />
                  <AddToDo />
                </div>
              </div>
            </div>
         
        </div>
        <div className="col py-5 px-5 height ">
          <ToDoContainer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
