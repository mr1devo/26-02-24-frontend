import React, { useState } from 'react';
import { adminLogin } from '../services/Userapi';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminLogin({ username, password });
      console.log('Admin logged in successfully!');
      navigate('/adminEnquiries')
    } catch (error) {
      console.error('Error logging in as admin:', error.message);
    }
  };

  return (
    <div className="login-container"> 
      <div className="login-form">
        <div className="login">
          <div>
            <h1>Admin Login</h1> 
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label">Username</label>
              <input
                className="input-form"
                type="username"
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
