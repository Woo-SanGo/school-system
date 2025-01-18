'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Change from next/router to next/navigation
import styles from '../teacher/teacher.module.css';

const TeacherPage = () => {
  const router = useRouter();
  const [teacherInfo, setTeacherInfo] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacherInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (Object.values(teacherInfo).every((field) => field !== '')) {
      // Redirect to dashboard after form submission
      router.push('/dashboard');
    } else {
      alert('Please complete all fields.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Teacher Information Form</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={teacherInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={teacherInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={teacherInfo.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={teacherInfo.subject}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default TeacherPage;
