import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { FaPlus } from "react-icons/fa";
import { DatePicker } from "react-rainbow-components";
import FloatingLabelInput from "./Styling/FloatingLabel";

const initialState = { date: new Date() };

export default function AddToDo() {
  const [newToDo, setNewToDo] = useState({});
  const [dueDate, setdueDate] = useState(initialState);
  const { addToDo } = useContext(GlobalContext);

  const handleChange = (name, newValue) => {
    setNewToDo({ ...newToDo, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!newToDo.title) return window.alert(
        "The usefulness of a cup is in its emptiness (old chinese proverb). And the usefulness of a todo lies in its text! Please type something in the input field."
      );
     
    addToDo({ ...newToDo, markAsCompleted: "false", dueDate: dueDate.date });

    setNewToDo({});
    setdueDate(initialState);
  };

  return (
    <form className="pt-3 newToDo w-100" onSubmit={handleSubmit}>
        <div className="d-flex align-items-end justify-content-between w-100 px-5"> 
        <FloatingLabelInput
          placeholder="Enter a title"
          name="title"
          style={{width: "20rem"}}
          value={newToDo.title || ""}
          onChange={(name, newValue) => {
            handleChange(name, newValue);
          }}
          required={true}
        />
        <FloatingLabelInput
          placeholder="Enter a text"
          name="text"
          style={{width: "30rem"}}
          value={newToDo.text || ""}
          onChange={(name, newValue) => {
            handleChange(name, newValue);
          }}
        />
      <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto">
        <DatePicker
          value={dueDate.date}
          minDate={new Date(1900, 0, 4)}
          maxDate={new Date(2020, 9, 1)}
          onChange={(value) => setdueDate({ date: value }) }
        />
        </div>
        <button
          className="btn primary-button btn-primary-color btn-sm rounded-pill"
          type="submit"
        >
          <strong>Add</strong> <FaPlus />
        </button>
        
      </div>
      
    </form>
  );
}



/*<input
        type="text"
        className="form-control rounded-pill"
        name="title"
        placeholder="Write your ToDo here"
        value={newToDo.text || ""}
        onChange={handleChange}
      />*/


      