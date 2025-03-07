import React from 'react';
import { Link } from 'react-router-dom';
import prof from "../Images/profile.tiff"
import "../App.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/projects" className='nav-link'>Projects</Link>
        <Link to="/skills" className='nav-link'>Skills</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
        <img src={prof} alt=""/>
      </div>
    </div>
  );
};

export default Header;