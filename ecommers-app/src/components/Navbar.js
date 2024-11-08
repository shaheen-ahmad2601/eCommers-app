

import React from 'react';
import { FiStar, FiFileText, FiSun, FiBell, FiClock, FiFile } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="flex items-center w-[870px] justify-between px-4 py-2 bg-white shadow-md">
      <div className="flex items-center space-x-4 flex-1">
        <FiFileText className="text-gray-600 w-6 h-6 cursor-pointer" />
        <FiStar className="text-gray-600 w-6 h-6 cursor-pointer" />
        
        <div className="text-gray-500 text-sm hidden md:block">
          <span className="font-semibold">Dashboard</span> / Default
        </div>
      </div>

      <div className="flex items-center space-x-4 flex-shrink-0">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg p-2 w-48">
          <BiSearch className="text-gray-400 w-5 h-5 ml-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none px-2 text-gray-700"
          />
        </div>

        <div className="flex items-center space-x-4">
          <FiSun className="text-gray-600 w-6 h-6 cursor-pointer" />
          <FiClock className="text-gray-600 w-6 h-6 cursor-pointer" />
          <FiBell className="text-gray-600 w-6 h-6 cursor-pointer" />
          <FiFile className="text-gray-600 w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
