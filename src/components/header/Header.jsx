// src/components/header/Header.jsx
import React from 'react';
import { IconButton, InputBase } from '@mui/material';
import { StarBorder, Dashboard, Search, Brightness6, Notifications, ViewModule, History } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Header = ({ toggleTheme, darkMode }) => {
  const theme = useTheme();

  return (
    <div
      className={`flex justify-between items-center w-3/4 h-[68px] border-b px-7 py-5 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md fixed z-10`}
    >
      {/* Left Section (Breadcrumbs or Dashboard Navigation) */}
      <div className="flex items-center space-x-2">
        <IconButton>
          <Dashboard />
        </IconButton>
        <IconButton>
          <StarBorder />
        </IconButton>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Dashboards</span>
        <span className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>/ Default</span>
      </div>

      {/* Right Section (Search, Icons) */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className={`flex items-center border rounded-full px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
          <Search fontSize="small" />
          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            className={`ml-2 text-sm ${darkMode ? 'text-white' : 'text-black'}`}
          />
        </div>

        {/* Icons */}
        <IconButton onClick={toggleTheme}>
          <Brightness6 />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <History />
        </IconButton>
        <IconButton>
          <ViewModule />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
