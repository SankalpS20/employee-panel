import React from 'react';

const TimeButtons = ({ handleTimeIn, handleTimeOut }) => {
  return (
    <div className="time-buttons">
      <button onClick={handleTimeIn} className="btn btn-success">Time In</button>
      <button onClick={handleTimeOut} className="btn btn-danger">Time Out</button>
    </div>
  );
};

export default TimeButtons;
