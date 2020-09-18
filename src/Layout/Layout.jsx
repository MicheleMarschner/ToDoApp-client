import React from 'react';
import ToDoContainer from '../Components/ToDoContainer.jsx';
import Header from '../Components/Header.jsx';
import Weather from '../Components/Weather.jsx';
import Quote from '../Components/Quote.jsx';

export default function Layout() {
  return (
    <div className='row bg-light vh-100 m-0'>
      <div className='col-3'>
        <Header />

        <Weather />
        <Quote />
      </div>
      <div className='col-9'>
        <ToDoContainer />
      </div>
    </div>
  );
}
