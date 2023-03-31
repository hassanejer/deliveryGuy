import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-lg font-bold " >DeliveryGuy</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                to="/explore"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Explore
              </Link>
              <Link
                to="/become-delivery-guy"
                className="ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Become a Delivery Guy
              </Link>
              <Link
                to="/sign-in"
                className="ml-4 px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                to="/join"
                className="ml-4 px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Join
              </Link>
            </div>
          </div>
          <div className="mr-2 flex md:hidden" onClick={toggle}>
            {!isOpen ?<AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
          </div>

        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/explore"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" 
          >
            Explore
          </Link>
          <Link
            to="/become-delivery-guy"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Become a Delivery Guy
          </Link>

          <Link
            to="/sign-in"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" 
          >
            Sign In
          </Link>
          <Link 
            to="/join"
            className="block px-3 py-2 text-center rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Join
          </Link>
        </div>
      </div>

    </nav>

  );
};

export default Navbar;