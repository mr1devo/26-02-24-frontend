import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import EventForm from './EventForm';
import AdminLoginForm from './AdminLoginForm';
import Enquiries from './Enquiries';
import About from './About';
import Footer from './Footer';
import Navbar from './UserNav';
import AdminNav from './AdminNav';
import Works from './Works';
import Places from './Places';

const Mainrouter = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userRegister" element={<UserRegister />} />
      <Route path="/userLogin" element={<UserLogin/>} />
      <Route path="/userEvent" element={<EventForm/>} />
      <Route path="/adminLogin" element={<AdminLoginForm/>} />
      <Route path="/adminEnquiries" element={<Enquiries/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/Nav" element={<Navbar/>} />
      <Route path="/AdminNav" element={<AdminNav/>} />
      <Route path="/work" element={<Works/>} />
      <Route path="/Places" element={<Places/>} />
      </Routes>
    </div>
  );
}

export default Mainrouter;
