// src/components/sidebar/Sidebar.jsx
import React from 'react';
import LogoSection from './LogoSection';
import Favorites from './Favorites';
import Dashboards from './Dashboards';
import Pages from './Pages';

const Sidebar = ({ darkMode }) => {
  return (
    <div
      className={`h-screen w-52 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} border-r border-gray-300 p-5 space-y-4 shadow-lg`}
    >
      <LogoSection />
      <Favorites />
      <Dashboards />
      <Pages />
    </div>
  );
};

export default Sidebar;
