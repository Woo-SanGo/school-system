// app/admin/signup.tsx
'use client';

import { useState } from 'react';
import styles from '../adminz/style.module.css'; // Assuming you have styles

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send POST request to the signup API
    const response = await fetch('/api/admin/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
      setSuccessMessage('');
    } else {
      setSuccessMessage('Admin signed up successfully');
      setError('');
      // Optionally, redirect the user after signup
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Super Admin">Super Admin</option>
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;