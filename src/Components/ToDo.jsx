import React, { useContext, useState } from "react";
import { FaPencilAlt,FaTrash } from "react-icons/fa";

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
    <div className="toDo card d-flex flex-column accordion-faq-item" key={toDo._id}>
      <div className="accordion-faq-item-heading card-header d-flex px-3 justify-content-between align-items-center">
        {" "}
        <div className="inputContainer d-flex align-items-center">
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
        <div className="float-right">
          <label>Datum</label>
          <button
            className="deleteToDoBtn icon-button"
            onClick={() => deleteToDo(toDo._id)}
          >
            <FaTrash />
          </button>

          <a
            className=" collapsed"
            id="helpHeadingOne"
            data-toggle="collapse"
            data-target={`#helpCollapseOne${toDo._id}`}
            aria-expanded="false"
            aria-controls="helpCollapseOne"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-down accordion-faq-item-heading-arrow"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>{" "}
          </a>
        </div>{" "}
      </div>

      <div
        className="collapse"
        aria-labelledby="helpHeadingOne"
        data-parent="#helpAccordion"
        id={`helpCollapseOne${toDo._id}`}
      >
        <div className="card-body border-bottom bg-primary-soft">
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
