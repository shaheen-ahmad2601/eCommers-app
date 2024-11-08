// src/components/RightSidebar.js
import React from "react";
import { FiAlertCircle, FiUserPlus, FiShield, FiUser } from "react-icons/fi";

const RightSidebar = () => {
  return (
    <div className="w-[480px] h-[1206px] bg-white p-4">
      <div className="mb-8">
        <h2 className="text-[14px] font-semibold text-black mb-4">
          Notification
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <FiAlertCircle className="mr-2 text-gray-500" /> You have a bug...
          </li>
          <li className="flex items-center text-gray-600">
            <FiUserPlus className="mr-2 text-gray-500" /> New User Registered
          </li>
          <li className="flex items-center text-gray-600">
            <FiShield className="mr-2 text-gray-500" /> Anti Lane Subscribed.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-[14px] font-semibold text-gray-800 mb-4">
          Activities
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XVeBzEPiSEuELBD1ebzbGo0S3gbEzPM7sRbIlS7qsosrN8CpcBpALbBPPPW2zXssbmw&usqp=CAU"
              alt="User Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            You have a bug...
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo4gKYV4wC2CsxufOfQxUdEyssSnxF25GI_cPuJX716D4pETX8cvYO1g0AyHgfcRuAT4&usqp=CAU"
              alt="User Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            Released a new version
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_ULYrQJRGi_UodEyyn85uvD-IP_-yZUlT0Nfb_qZBugvEXn7qhebEHtiFRllNeEUqus&usqp=CAU"
              alt="User Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            Submitted a bug
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmTNamTPuIOm_FBM34QVq6u9xDIPiblv8llCbNNR3Wq6TOC9VyyhJaajNoGojITXklHY&usqp=CAU"
              alt="User Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            Modified a data
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjSk1U5km_xhIQpVv22WiNmwOm7WbXdySnHp_IYfNfkM-XW16f7MweiAHDZpYAY0NVF0&usqp=CAU"
              alt="User Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            Deleted a page
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Contacts</h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo4gKYV4wC2CsxufOfQxUdEyssSnxF25GI_cPuJX716D4pETX8cvYO1g0AyHgfcRuAT4&usqp=CAU"
              alt="Contact"
              className="w-6 h-6 rounded-full mr-2"
            />
            Alice Green
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjSk1U5km_xhIQpVv22WiNmwOm7WbXdySnHp_IYfNfkM-XW16f7MweiAHDZpYAY0NVF0&usqp=CAU"
              alt="Contact"
              className="w-6 h-6 rounded-full mr-2"
            />
            Bob White
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmTNamTPuIOm_FBM34QVq6u9xDIPiblv8llCbNNR3Wq6TOC9VyyhJaajNoGojITXklHY&usqp=CAU"
              alt="Contact"
              className="w-6 h-6 rounded-full mr-2"
            />
            Charlie Blue
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo4gKYV4wC2CsxufOfQxUdEyssSnxF25GI_cPuJX716D4pETX8cvYO1g0AyHgfcRuAT4&usqp=CAU"
              alt="Contact"
              className="w-6 h-6 rounded-full mr-2"
            />
            Diana Yellow
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjSk1U5km_xhIQpVv22WiNmwOm7WbXdySnHp_IYfNfkM-XW16f7MweiAHDZpYAY0NVF0&usqp=CAU"
              alt="Contact"
              className="w-6 h-6 rounded-full mr-2"
            />
            Edward Pink
          </li>
          <li className="flex items-center text-gray-600">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo4gKYV4wC2CsxufOfQxUdEyssSnxF25GI_cPuJX716D4pETX8cvYO1g0AyHgfcRuAT4&usqp=CAU"
              alt="Contact"
              className="w-6 h-6 rounded-full mr-2"
            />
            Fiona Orange
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
