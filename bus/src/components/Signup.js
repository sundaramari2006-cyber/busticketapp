import React, { useState } from 'react';


const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:4400/signup/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Signup successful!');
        localStorage.setItem('token', data.token);
      } else {
        setMessage(data.message || 'Signup failed.');
      }
    } catch (err) {
      setMessage('Error: ' + err.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">GoBus</h1>
        <h3 className="signup-subtitle">Create Your Account</h3>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="signup-input"
          />
          <button type="submit" className="signup-button">Signup</button>
        </form>
        {message && <p className="signup-message">{message}</p>}
        <p className="signup-link">Already have an account? <a href="/">Login</a></p>
      </div>
    </div>
  );
};

export default SignupPage;
