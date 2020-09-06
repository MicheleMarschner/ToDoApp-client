import React, { useContext, useEffect, useState } from "react";
import ToDo from "./ToDo.jsx";
import { Spinner } from "react-rainbow-components";

import { GlobalContext } from "../Context/GlobalState";

export default function ToDoContainer() {
  const { toDos, getToDos, loading } = useContext(GlobalContext);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTimeout(() => getToDos(), 1000);
  }, []);

  const renderToDos = (toDos) => {
    if (loading)
      return <Spinner />;
    return toDos
      .filter(filterOptions[filter])
      .map((item) => <ToDo toDo={item} key={item._id} />);
  };

  const filterOptions = {
    All: () => true,
    Uncompleted: (item) => !item.isCompleted,
    Completed: (item) => item.isCompleted,
  };

  return (
    <div className="container container-right overflow-auto h-100">
      <div class="accordion accordion-faq mb-5" id="helpAccordion">
        {!toDos ? <p>Yeah nothing to do</p> : renderToDos(toDos)}
      </div>
    </div>
  );
}
