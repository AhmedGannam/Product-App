import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { useTheme } from './provider';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" className="navbar-title-link">
          Product Store 🛒
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/create" className="navbar-add-product">
          <button className="add-product-button">
            <FaPlusSquare size={20} /> 
            <span>Add Product</span>
          </button>
        </Link>
        <button 
          className="theme-toggle"
          onClick={toggleColorMode}
          aria-label="Toggle theme"
        >
          {colorMode === 'light' ? <IoMoon size={20} /> : <LuSun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

