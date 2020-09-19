import React, { useState, useEffect } from 'react';

export default function Header() {
  const [date, setDate] = useState('');

  useEffect(
    () => {
      //hier oder doch außerhalb von  useEffect?
      setDate(displayCurrentDate());
    },
    [
      /*App bleibt über nacht geöffnet*/
    ]
  );

  function displayCurrentDate() {
    let now = new Date();
    let month = formattingDate(now.getUTCMonth() + 1);
    let day = formattingDate(now.getUTCDate());
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
