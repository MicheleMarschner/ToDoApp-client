import React, { useRef, useState } from "react";
import "./App.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";


import AddToDo from "./AddToDo.jsx";
import Layout from "../Layout/Layout.jsx";

import { GlobalProvider } from "../Context/GlobalState";

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
        <div id="topbar" ref={topBar}>
          <AddToDo />
        </div>
        <div className="bg-light w-100">
          <div className="navbar " onClick={toggleTopBar}>
            <button
              id="topbarCollapse"
              className="icon-button"
              type="button"
              ref={toggle}
            > <strong>Add Task  </strong>
              {collapsed ? (
                <FaArrowDown id="arrowDown" />
              ) : (
                <FaArrowUp id="arrowUp" />
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
