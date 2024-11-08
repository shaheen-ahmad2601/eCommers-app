
import React from 'react';
import { FiUser, FiHome, FiSettings, FiStar, FiClock, FiChevronDown } from 'react-icons/fi';
import { AiOutlineDashboard, AiOutlineShop, AiOutlineProject, AiOutlineBook, AiOutlineFile } from 'react-icons/ai';
import { BsPerson, BsPeople, BsFolder } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start w-[212px] h-[1198px] bg-white min-h-screen p-2 text-custom-color-sidebar">
      <div className="flex items-center mb-8 space-x-2">
        <FiUser className="w-8 h-8 text-black" />
        <span className="text-xl font-semibold text-black">Byewind</span>
      </div>

      <div className="flex mb-4 space-x-4">
        <span className="flex items-center ">
          <FiStar className="mr-2" />
          Favorite
        </span>
        <span className="flex items-center ">
          <FiClock className="mr-2" />
          Recently
        </span>
      </div>

     <ul className="mb-8 space-y-2">
  <li className="text-black hover:text-black flex items-center">
    <span className="w-2 h-2 rounded-full  bg-gray-300 mr-2"></span>
    Overview
  </li>
  <li className="text-black hover:text-black flex items-center">
    <span className="w-2 h-2 rounded-full bg-gray-300 mr-2"></span>
    Products
  </li>
</ul>


      <nav className="flex flex-col space-y-4">
        <div>
          <span className="text-[14px] font-semibold text-gray-400">Dashboard</span>
          <ul className="mt-2 space-y-2 pl-4 text-[14px">
            <li className="flex items-center text-black bg-gray-200 rounded">
              <AiOutlineDashboard className="mr-2" /> Default
            </li>
            <li className="flex items-center text-black ">
              <AiOutlineShop className="mr-2" /> E-commerce
            </li>
            <li className="flex items-center text-black ">
              <AiOutlineProject className="mr-2" /> Projects
            </li>
            <li className="flex items-center text-black ">
              <AiOutlineBook className="mr-2" /> Online Courses
            </li>
          </ul>
        </div>

        <div>
          <span className="text-[14px] font-semibold text-gray-400">Pages</span>
          <ul className="mt-2 space-y-2 pl-4">
            <li>
              <div className="flex items-center text-black hover:text-black">
                <BsPerson className="mr-2" /> User Profile
              </div>
              <ul className="mt-2 space-y-2 pl-6 text-[14px]">
                <li className="text-black">Overview</li>
                <li className="text-black">Projects</li>
                <li className="text-black">Campaigns</li>
                <li className="text-black">Documents</li>
                <li className="text-black">Followers</li>
              </ul>
            </li>

            <li className="flex items-center text-black hover:text-black mt-4">
              <BsFolder className="mr-2" /> Account
            </li>

            <li className="flex items-center text-black hover:text-black">
              <FiHome className="mr-2" /> Corporate
            </li>

            <li className="flex items-center text-black hover:text-black">
              <AiOutlineFile className="mr-2" /> Blog
            </li>

            <li className="flex items-center text-black hover:text-black">
              <BsPeople className="mr-2" /> Social
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
