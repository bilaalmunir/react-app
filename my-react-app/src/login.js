import './login.css'
import myImage from './portal.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login () {
  // State to hold the form data (email and password)
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted:', formData); // For demonstration: log form data to console
    Navigate('/home');
    // Add your authentication logic here (e.g., sending form data to a server)
  };
  return (
    <div className='container'>
      <h1>Authentication Portal</h1>
      <div className='box'>
        <div className='imgrid'><img src={myImage}></img></div>


        <div className='loginbox'>

        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
        </div>
      </div>
    </div>
  );
}
export default Login