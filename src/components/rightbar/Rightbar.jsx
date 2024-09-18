// src/components/Rightbar.jsx

import React from 'react';
import Notifications from './Notifications';
import Activities from './Activities';
import Contacts from './Contacts';

const Rightbar = ({ darkMode }) => {
  return (
    <div className={`w-64 h-[1206px] 
    ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-5 border-l border-gray-200`}>
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default Rightbar;
