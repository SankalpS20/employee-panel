import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MyCalendar from './Calendar';
import TimeButtons from './TimeButtons';
import AttendanceTable from './AttendanceTable';

const Dashboard = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleTimeIn = () => {
    const currentRecord = {
      date: new Date().toDateString(),
      timeIn: new Date().toLocaleTimeString(),
      timeOut: '',
    };
    setAttendanceRecords([...attendanceRecords, currentRecord]);
  };

  const handleTimeOut = () => {
    const updatedRecords = [...attendanceRecords];
    const lastRecord = updatedRecords[updatedRecords.length - 1];
    if (lastRecord && !lastRecord.timeOut) {
      lastRecord.timeOut = new Date().toLocaleTimeString();
      setAttendanceRecords(updatedRecords);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content">
        <MyCalendar />
        <TimeButtons handleTimeIn={handleTimeIn} handleTimeOut={handleTimeOut} />
        <AttendanceTable attendanceRecords={attendanceRecords} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
