// Import necessary modules and components
import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import your updated CSS file
import baseUrl from '../Api';
import { useNavigate } from 'react-router-dom';

// Define the Signup component
const Signup = () => {
  // Define initial input values
  const initialInputs = {
    "FirstName": '',
    "lastname": '',
    "email": '',
    "username": '',
    "password": '',
  };

  // Define state variables and functions
  const [inputs, setInputs] = useState(initialInputs);
  const navigate = useNavigate();

  // Handle input changes
  const InputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  // Save data to backend
  const SaveData = () => {
    console.log("Attempting to save data:", inputs);
    axios.post(baseUrl+"/signup/snew", inputs)
      .then((response) => {
        alert("Record Saved");
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  // Handle form reset
  const handleReset = () => {
    setInputs(initialInputs);
  };

  // Return the JSX content
  return (
    <center>
      <div className='container'>
        <div className='signup-form'>
          <h1 className="header-text">Create an Account</h1>
          <form>
            <div className="form-group">
              <label htmlFor="FirstName">First Name:</label>
              <input
                type="text"
                name="FirstName"
                className="input-text"
                placeholder="First Name"
                onChange={InputHandler}
                value={inputs.FirstName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                name="lastname"
                className="input-text"
                placeholder="Last Name"
                onChange={InputHandler}
                value={inputs.lastname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="input-text"
                placeholder="Email"
                onChange={InputHandler}
                value={inputs.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="input-text"
                placeholder="Username"
                onChange={InputHandler}
                value={inputs.username}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="input-text"
                placeholder="Password"
                onChange={InputHandler}
                value={inputs.password}
              />
            </div>
            <div className="form-group">
              <button type="reset" className="btn-primary-soft login-btn" onClick={handleReset}>
                Reset
              </button>
              <button type="button" onClick={SaveData} className="btn-primary login-btn">
                Sign Up
              </button>
            </div>

            <div className="form-group">
              <label className="sub-text">
                Already have an account?
                <a href="Login" className="non-styled-link hover-link login-link">
                  Login
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
}

// Export the Signup component
export default Signup;
