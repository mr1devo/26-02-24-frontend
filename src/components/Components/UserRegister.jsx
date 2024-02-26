import React, { useState } from 'react';
import { registerUser } from '../services/Userapi';
import './register.css'; 
import { Link, useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      console.log('User registered successfully!');
      navigate('/userLogin'); 
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div className="reg_page">
      <div className="form">
        <div className="register">
          <div>
            <h1>User Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Username</label>
              <input
                className="input-form"
                type="text"
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                className="input-form"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                className="input-form"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-reg">
              Register
            </button>
          </form>
          <p>Already have an account? <Link to="/userLogin">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
