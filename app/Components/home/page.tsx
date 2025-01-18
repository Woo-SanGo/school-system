// /pages/home/page.tsx
import React from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './home.module.css'; // Make sure to create this CSS module

const HomePage = () => {
  // Example static data. You can replace this with dynamic data based on your backend.
  const stats = [
    { title: 'Students', value: 0, link: '/manage-student', color: '#D8B0FF' },  // Red
    { title: 'Teachers', value: 0, link: '/manage-teacher', color: '#33c1ff' },  // Blue
    { title: 'Departments', value: 0, link: '/manage-department', color: '#4caf50' },      // Green
    { title: 'Subjects', value: 0, link: '/manage-subject', color: '#f4b400' },             // Yellow
  ];

  return (
    <AdminLayout>
      <div className={styles.dashboard}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={styles.box}
            style={{ backgroundColor: stat.color }}  // Set the background color dynamically
          >
            <div className={styles.boxContent}>
              <h3>{stat.title}</h3>
              <p className={styles.number}>{stat.value}</p>
              <a href={stat.link} className={styles.moreInfo}>
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default HomePage;
