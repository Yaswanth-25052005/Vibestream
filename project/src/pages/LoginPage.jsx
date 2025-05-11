import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Check if user exists in localStorage
  const userExists = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      setError('');
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (userExists(email)) {
      setError('Email already registered');
      return;
    }

    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setError('');
    setMessage('Account created successfully! Please login.');
    setIsLogin(true);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={isLogin ? handleLogin : handleRegister}>
        <h2 className="title">{isLogin ? 'Log In' : 'Create Account'}</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}

        {!isLogin && (
          <>
            <label htmlFor="name" className="label">Full Name</label>
            <input
              id="name"
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </>
        )}

        <label htmlFor="email" className="label">Email</label>
        <input
          id="email"
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <label htmlFor="password" className="label">Password</label>
        <input
          id="password"
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          required
        />

        {!isLogin && (
          <>
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </>
        )}

        <button type="submit" className="login-button">
          {isLogin ? 'Login' : 'Register'}
        </button>

        <div className="form-footer">
          <button
            type="button"
            className="link-button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
              setError('');
            }}
          >
            {isLogin ? 'Create Account' : 'Already have an account?'}
          </button>
        </div>
      </form>

      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 600px;
          width: 450px;
          margin: 0 auto;
          background: #121212;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(29, 185, 84, 0.6);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .login-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          color: #eee;
        }
        .title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 30px;
          color: #1db954;
        }
        .label {
          margin-bottom: 10px;
          font-size: 1rem;
          font-weight: 600;
          color: #ccc;
        }
        .input {
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 8px;
          border: none;
          background: #222;
          color: #eee;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }
        .input:focus {
          background: #333;
          box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.5);
        }
        .login-button {
          padding: 14px 0;
          border-radius: 10px;
          border: none;
          background-color: #1db954;
          color: #121212;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }
        .login-button:hover {
          background-color: #17a64a;
          transform: translateY(-2px);
        }
        .link-button {
          background: none;
          border: none;
          color: #1db954;
          cursor: pointer;
          font-size: 0.9rem;
          margin-top: 10px;
          text-align: center;
          text-decoration: underline;
        }
        .link-button:hover {
          color: #17a64a;
        }
        .form-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 15px;
        }
        .error {
          margin-bottom: 20px;
          color: #ff4c4c;
          font-weight: 700;
          text-align: center;
          user-select: none;
          font-size: 0.95rem;
        }
        .message {
          margin-bottom: 20px;
          color: #1db954;
          font-weight: 600;
          text-align: center;
          user-select: none;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .login-container {
            width: 90%;
            max-width: 400px;
            padding: 30px;
          }
        }
        @media (max-width: 480px) {
          .login-container {
            width: 100%;
            max-width: 100%;
            min-height: 100vh;
            border-radius: 0;
            padding: 40px 20px;
            box-shadow: none;
          }
          .title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
