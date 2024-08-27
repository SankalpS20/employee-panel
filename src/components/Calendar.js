import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { format, isSameDay } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await axios.get('https://date.nager.at/api/v3/publicholidays/2024/US'); // Replace with your country code
        setHolidays(response.data);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const holiday = holidays.find(holiday => isSameDay(new Date(holiday.date), date));
      return holiday ? <p className="holiday">{holiday.localName}</p> : null;
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
      />
      <p>Selected Date: {format(date, 'PPP')}</p>
    </div>
  );
};

export default MyCalendar;