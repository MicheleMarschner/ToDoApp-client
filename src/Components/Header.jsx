import React, { useState, useEffect } from 'react';

export default function Header() {
  const [date, setDate] = useState('');

  //sets current date when components gets mounted
  useEffect(() => {
    setDate(displayCurrentDate());
  }, []);

  //function to determine and format the current date to display it on the dashboard
  function displayCurrentDate() {
    let now = new Date();
    let month = formattingDate(now.getUTCMonth() + 1);
    let day = formattingDate(now.getUTCDate());

    //getDay() function only gives back a numerical index for the weekdays which needs to be tramsformed, to display the semantic word
    let dayName = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let dayIdx = now.getDay();

    return `${dayName[dayIdx]}, ${day}.${month}.`;
  }

  //helper function that adds a "0" in front of a date < 10
  function formattingDate(number) {
    if (number < 10) {
      number = '0' + number;
      return number;
    }
    return number;
  }

  return (
    <div>
      <p className='pl-2 pt-3'>{date}</p>
      <div className='header-content d-flex align-items-center justify-content-center'>
        <h1 className='text-center title'>What's up today?</h1>
      </div>
    </div>
  );
}
