import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';

const Login = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Log hashed password for demonstration
    console.log('Role:', role);
    console.log('Email:', email);
    console.log('Hashed Password:', hashedPassword);

    // Example: Save email in localStorage if "Remember Me" is checked
    if (rememberMe) {
      localStorage.setItem('email', email);
    }

    // Redirect based on role
    if (role === 'student') {
      // Redirect to student dashboard
    } else if (role === 'teacher') {
      // Redirect to teacher dashboard
    } else if (role === 'admin') {
      // Redirect to admin dashboard
    }
  };

  return (
    <div className="login-container">
      <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
