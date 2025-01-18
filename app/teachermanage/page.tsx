'use client';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import styles from './teacher.module.css'; // Ensure you adjust the path to the correct location for your styles

// Layout component
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="RUPP Logo" className={styles.logo} />
          <ul className={styles.universityInfo}>
            <li className={styles.khmerText}>សាកលវិទ្យាល័យភូមន្ទភ្នំពេញ</li>
            <li className={styles.englishText}>ROYAL UNIVERSITY OF PHNOM PENH</li>
          </ul>
        </div>
      </header>
      <aside className={styles.sidebar}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/dashboard">
                <span className={styles.icon}>📊</span> Dashboard
              </Link>
            </li>
            <li>
              <Link href="/teachermanage">
                <span className={styles.icon}>📘</span> Teacher
              </Link>
            </li>
            <li>
              <Link href="/studentmanage">
                <span className={styles.icon}>👥</span> Student
              </Link>
            </li>
            <li>
              <Link href="/notification">
                <span className={styles.icon}>🔔</span> Notification
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

// Teacher Class Form component
const TeacherClassForm = () => {
  const [formData, setFormData] = useState({
    college: '',
    department: '',
    year: '',
    semester: '',
    generation: '',
    className: '',
    subject: '',
  });

  const colleges = [
    'Faculty of Science',
    'Faculty of Social Science and Humanities',
    'Faculty of Engineering',
    'Faculty of Development Studies',
    'Faculty of Education',
    'Institute For International Study and Public Policy',
  ];

  const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
  const semesters = ['Semester 1', 'Semester 2'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (Object.values(formData).includes('')) {
      alert('Please fill all the fields.');
      return;
    }
    console.log('Form Data:', formData);
    // Perform necessary actions on form submission, like API calls
  };

  return (
    <div className={styles.formContainer}>
      <h1>Create Class</h1>
      <form>
        <label>
          College:
          <select name="college" value={formData.college} onChange={handleChange} required>
            <option value="">Select College</option>
            {colleges.map((college, index) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
          />
        </label>
        <br />
        <label>
          Year:
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Semester:
          <select name="semester" value={formData.semester} onChange={handleChange} required>
            <option value="">Select Semester</option>
            {semesters.map((semester, index) => (
              <option key={index} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Generation:
          <input
            type="text"
            name="generation"
            value={formData.generation}
            onChange={handleChange}
            placeholder="Enter Generation"
            required
          />
        </label>
        <br />
        <label>
          Class:
          <input
            type="text"
            name="className"
            value={formData.className}
            onChange={handleChange}
            placeholder="Enter Class"
            required
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            required
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Ok
        </button>
      </form>
    </div>
  );
};

// Main layout rendering the form
const MainPage = () => {
  return (
    <Layout>
      <TeacherClassForm />
    </Layout>
  );
};

export default MainPage;
