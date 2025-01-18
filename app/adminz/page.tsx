'use client';

import React from 'react';
import Login from './login'; // Correct path to Login component
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const AdminPage = () => {
  const router = useRouter(); // Use router for navigation

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Add logic here to validate login credentials
    // For now, assume successful login and navigate to the admin page
    router.push('/admin');
  };

  return (
    <div>
      <Login onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default AdminPage;
