import React from 'react';
import ToDoContainer from '../Components/ToDoContainer.jsx';
import Header from '../Components/Header.jsx';
import Weather from '../Components/Weather.jsx';
import Quote from '../Components/Quote.jsx';

export default function Layout() {
  return (
    <div className='row bg-light vh-100 m-0 pt-5'>
      <div className='col-lg-4 col-xs-12'>
        <Header />
        <div className='dashboard row'>
          <div className='col-lg-12 col-sm-6 d-flex align-items-center justify-content-center'>
            {' '}
            <Weather />
          </div>
          <div className='col-lg-12 col-sm-6 d-flex align-items-center justify-content-center'>
            {' '}
            <Quote />
          </div>
        </div>
      </div>
      <div className='col-lg-8 col-xs-12 h-100'>
        <ToDoContainer />
      </div>
    </div>
  );
}
