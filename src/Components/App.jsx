import React, { useRef, useState } from "react";
import "./App.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import Header from "./Header.jsx";
import AddToDo from "./AddToDo.jsx";
import ToDoContainer from "./ToDoContainer.jsx";

import { GlobalProvider } from "../Context/GlobalState";

//import { getToDoItems } from './client.js';

//const promise = getToDoItems();

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const topBar = useRef();
  const toggle = useRef();
  const toggleTopBar = () => {
    topBar.current.classList.toggle("active");
    toggle.current.classList.toggle("collapsed");
    setCollapsed(!collapsed);
  };

  return (
    <GlobalProvider>
      <div>
        <div
          id="topbar"
          ref={topBar}
          
        >
          <AddToDo />
        </div>
        <div className="bg-light w-100">
          <div className="navbar " onClick={toggleTopBar}>
            <button id="topbarCollapse" class="icon-button" type="button" ref={toggle}>
              {collapsed ? (
                <FaArrowDown id="arrowDown" />
              ) : (
                <FaArrowUp id="arrowUp" />
              )}
            </button>
            
          </div>
        </div>
        <Header />
        <ToDoContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
