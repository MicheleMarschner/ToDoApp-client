import React, { useContext, useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import moment from 'moment';

import { GlobalContext } from '../Context/GlobalState';
import { useEffect } from 'react';

export default function ToDo({ toDo }) {
  const { deleteToDo, editToDo } = useContext(GlobalContext);
  const [editedToDo, setEditedToDo] = useState(null);
  const [showIconTitle, setShowIconTitle] = useState(false);
  const [showIconText, setShowIconText] = useState(false);

  //when local state changes, the changes of the toDo item will get sent via the context/reducer to the backend and stored in the database
  useEffect(() => {
    editToDo(toDo._id, editedToDo);
  }, [editedToDo]);

  //handles the editing of a single todo item (title or text) and stores the changes temp. in the local state
  const handleFocusOut = e => {
    const text = e.target.innerHTML;
    const key = e.target.parentNode.id;
    console.log(key);
    if (!text) {
      return alert('Please add some text!');
    }
    setEditedToDo({ ...editedToDo, [key]: text });
    console.log(editedToDo);
  };

  //changes the status of an todo item when its checkbox gets toggled and puts it in local state
  const markAsCompleted = e => {
    toDo.isCompleted = !toDo.isCompleted;
    editToDo(toDo._id, { isCompleted: toDo.isCompleted });
  };

  return (
    <div className='toDo card d-flex flex-column accordion-item' key={toDo._id}>
      <div className='accordion-item-heading card-header px-3 m-0 row'>
        {' '}
        <div id='title' className='col d-flex no-wrap align-items-center'>
          <input
            id='check'
            type='checkbox'
            defaultChecked={toDo.isCompleted}
            onChange={e => markAsCompleted(e)}
          />
          <label
            contentEditable='true'
            suppressContentEditableWarning={true}
            name='title'
            onInput={e => handleFocusOut(e)}
            onMouseEnter={() => setShowIconTitle(true)}
            onMouseLeave={() => setShowIconTitle(false)}
          >
            {toDo.title}
          </label>
          {showIconTitle && <FaPencilAlt style={{ color: '#C51162' }} />}
        </div>
        <div className='col-4 d-flex align-items-center justtify-content-between'>
          <label className='dueDate m-0'>
            {moment(toDo.dueDate).format('DD.MM.YY')}
          </label>
          <button
            className='deleteToDoBtn icon-button'
            onClick={() => deleteToDo(toDo._id)}
          >
            <FaTrash />
          </button>

          <a
            className=' collapsed'
            data-toggle='collapse'
            data-target={`#Collapse${toDo._id}`}
            aria-expanded='false'
            aria-controls='Collapse'
            href='#0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='var(--primary-color)'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-chevron-down accordion-item-heading-arrow'
            >
              <polyline points='6 9 12 15 18 9'></polyline>
            </svg>{' '}
          </a>
        </div>{' '}
      </div>

      <div
        className='collapse'
        aria-labelledby='Heading'
        id={`Collapse${toDo._id}`}
      >
        <div id='text' className='card-body border-bottom bg-primary-soft'>
          <label
            contentEditable='true'
            suppressContentEditableWarning={true}
            name='text'
            onInput={e => handleFocusOut(e)}
            onMouseEnter={() => setShowIconText(true)}
            onMouseLeave={() => setShowIconText(false)}
          >
            {toDo.text}
          </label>
          {showIconText && <FaPencilAlt style={{ color: '#C51162' }} />}
        </div>
      </div>
    </div>
  );
}
