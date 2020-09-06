import React, { useContext, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { GlobalContext } from "../Context/GlobalState";

export default function ToDo({ toDo }) {
  const { deleteToDo, editToDo } = useContext(GlobalContext);
  const [showIconTitle, setShowIconTitle] = useState(false);
  const [showIconText, setShowIconText] = useState(false);

  const handleFocusOut = (e) => {
    const text = e.target.innerHTML;
    if (!text) {
      return alert("Please add some text!");
    }
    editToDo(toDo._id, { text: text });
  };

  const markAsCompleted = (e) => {
    toDo.isCompleted = !toDo.isCompleted;
    editToDo(toDo._id, { isCompleted: toDo.isCompleted });
  };

  return (
    <div class="toDo row card accordion-faq-item" key={toDo._id}>
      <div class="accordion-faq-item-heading d-flex px-3">
        {" "}
        <div className="inputContainer col-1">
            
          <input
            id="check"
            type="checkbox"
            defaultChecked={toDo.isCompleted}
            onChange={(e) => markAsCompleted(e)}
          />
          <label
            contentEditable="true"
            onInput={(e) => handleFocusOut(e)}
            onMouseEnter={() => setShowIconTitle(true)}
            onMouseLeave={() => setShowIconTitle(false)}
          >
            {toDo.text}
          </label>
          {showIconTitle && <FaPencilAlt style={{ color: "#C51162" }} />}
        </div>
        <div className="col-1 p-0">
          <button
            className="deleteToDoBtn float-right icon-button"
            onClick={() => deleteToDo(toDo._id)}
          >
            <FaTrash />
          </button>
        </div>{" "}
        <a
          class="card-header collapsed"
          id="helpHeadingOne"
          data-toggle="collapse"
          data-target="#helpCollapseOne"
          aria-expanded="false"
          aria-controls="helpCollapseOne"
          href="javascript:void(0);"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down accordion-faq-item-heading-arrow"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>{" "}
        </a>
      </div>

      <div
        class="collapse"
        id="helpCollapseOne"
        aria-labelledby="helpHeadingOne"
        data-parent="#helpAccordion"
      >
        <div class="card-body border-bottom">
          <label
            contentEditable="true"
            onInput={(e) => handleFocusOut(e)}
            onMouseEnter={() => setShowIconText(true)}
            onMouseLeave={() => setShowIconText(false)}
          >
            {toDo.text}
          </label>
          {showIconText && <FaPencilAlt style={{ color: "#C51162" }} />}
        </div>
      </div>
    </div>
  );
}

//<date> ${new Date().toLocaleDateString()} </date>
