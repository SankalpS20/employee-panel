import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="Dashboard">Dashboard</a></li>
        <li><a href="reports">Reports</a></li>
        <li><a href="settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;