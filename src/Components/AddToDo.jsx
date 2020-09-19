import React, { useRef, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { FaPlus } from 'react-icons/fa';
import { DatePicker } from 'react-rainbow-components';
import FloatingLabelInput from './Styling/FloatingLabel';
import './Styling/floatingLabel.css';

const initialState = { date: new Date() };

export default function AddToDo({ state }) {
  const [newToDo, setNewToDo] = useState({});
  const [dueDate, setdueDate] = useState(initialState);
  const { addToDo } = useContext(GlobalContext);

  const form = useRef();

  useEffect(() => {
    state
      ? setTimeout(() => {
          form.current.classList.toggle('none');
        }, 800)
      : form.current.classList.toggle('none');
  }, [state]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!newToDo.title)
      return window.alert(
        'The usefulness of a cup is in its emptiness (old chinese proverb). And the usefulness of a todo lies in its text! Please type something in the input field.'
      );

    addToDo({ ...newToDo, markAsCompleted: 'false', dueDate: dueDate.date });

    setNewToDo({});
    setdueDate(initialState);
  };
  const handleFormChange = (name, newValue) => {
    setNewToDo({ ...newToDo, [name]: newValue });
  };
  return (
    <form className='pt-3  w-100 none' onSubmit={handleSubmit} ref={form}>
      <div className='newToDo__container w-100 px-5'>
        <FloatingLabelInput
          placeholder='Enter a title'
          name='title'
          callback={handleFormChange}
          value={newToDo.title || ''}
          required={true}
        />
        <FloatingLabelInput
          placeholder='Enter a text'
          name='text'
          value={newToDo.text || ''}
          callback={handleFormChange}
        />
        <div className='rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto'>
          <DatePicker
            value={dueDate.date}
            minDate={new Date(1900, 0, 4)}
            maxDate={new Date(2020, 9, 1)}
            onChange={value => setdueDate({ date: value })}
          />
        </div>
        <button
          className='btn primary-button btn-primary-color btn-sm rounded-pill'
          type='submit'
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
