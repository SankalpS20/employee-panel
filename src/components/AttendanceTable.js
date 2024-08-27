import React from 'react';

const AttendanceTable = ({ attendanceRecords }) => {
  return (
    <div>
      <h2>Attendance</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time In</th>
          <th>Time Out</th>
        </tr>
      </thead>
      <tbody>
        {attendanceRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.timeIn}</td>
            <td>{record.timeOut}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default AttendanceTable;
