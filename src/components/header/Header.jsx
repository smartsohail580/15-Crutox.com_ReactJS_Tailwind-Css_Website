import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import logo from '../../assests/svg/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const DropdownMenu = () => {
    return (
      <div className="absolute md:w-56 mt-4 right-7 bg-white border border-gray-300 rounded-lg p-2 text-gray-700">
        <div><NavLink to="faqs">FAQs</NavLink></div>
        <div><NavLink to="terms">Terms and Conditions</NavLink></div>
        <div><NavLink to="privacy">Privacy Policy</NavLink></div>
      </div>
    );
  };

  return (
    <div>
      <header className='sticky top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between break-before-auto p-5'>
        {/* Logo */}
        <div className='flex items-center'>
          <div className='w-12 h-12 md:mx-14'>
            <NavLink to='/'>
              <img src={logo} alt='logo' />
            </NavLink>
          </div>
        </div>

        {/* Toggle Icon for Small Screens */}
        <div className="md:hidden " onClick={toggleNavbar}>
          <Menu size={24} />
        </div>

        {/* Links for Large Screens */}
        <nav className="w-full md:w-[30%] md:mx-12   text-xl">
          <div className={`w-full md:flex md:justify-between ${isOpen ? 'block' : 'hidden'}`}>
            <NavLink to="/" exact activeClassName="text-blue-500" className={`hover:text-blue-500 ${location.pathname === '/' ? 'text-blue-500' : ''}`}>Home</NavLink>
            <NavLink to="/about" activeClassName="text-blue-500" className={`hover:text-blue-500 ${location.pathname === '/about' ? 'text-blue-500' : ''}`}>About</NavLink>
            <NavLink to="/roadmap" activeClassName="text-blue-500" className={`hover:text-blue-500 ${location.pathname === '/roadmap' ? 'text-blue-500' : ''}`}>Road Map</NavLink>
            <div className="relative group">
              <NavLink to="#" activeClassName="text-blue-500" className={`group hover:text-blue-500 ${showDropdown ? 'text-blue-500' : ''}`} onClick={toggleDropdown}>
                Others
              </NavLink>
              {showDropdown && <DropdownMenu />}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
