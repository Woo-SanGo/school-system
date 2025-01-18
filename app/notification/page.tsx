'use client'; // Marking this as a client-side component
import Link from "next/link";
import React, { useState, ReactNode } from 'react';
import Notification from './notification.module.css'; // Import the Notification component
import styles from './notification.module.css'; // Import CSS module for layout

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
      <main className={styles.main}>
        {children}

      </main>
    </div>
  );
};

const TaskPage: React.FC = () => {
  const [notifications, setNotifications] = useState<JSX.Element[]>([]);

  const triggerNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const newNotification = (
      <Notification key={Date.now()} message={message} type={type} />
    );
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.filter(n => n.key !== newNotification.key));
    }, 3000);
  };

  return (
    <Layout>
      <div className={styles.notification}>
        <h1> Notifications</h1>
        <h3>New</h3><hr />

      </div>
    </Layout>
  );
};

export default TaskPage;
