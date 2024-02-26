import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

import './Navbar.css';

const AdminNav = () => {
  return (
    <div>
      <nav className="NavbarItems">
        <Link to="/" className="back-link" style={{color:'white'}}> 
          <FaArrowLeft className="back-icon" style={{color:'white'}} />HOME
        </Link  >
        <h1 className="navbar-logo">ADMIN--FOUND IT!</h1>
      </nav>
    </div>
  );
}

export default AdminNav;
