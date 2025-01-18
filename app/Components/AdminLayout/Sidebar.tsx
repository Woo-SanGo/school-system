'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <Link href="/Components/home" className={styles.link}>Home</Link>
        </li>
        <li><Link href="/Components/manageStudent" className={styles.link}>Manage Teacher</Link></li>
        <li><Link href="/Components/AddTeacher" className={styles.link}>Add Teacher</Link></li>
        <li>Manage Student</li>
        <li>Add Student</li>
        <li>Manage Department</li>
        <li>Add Department</li>
        <li>Manage Subject</li>
        <li>Add Subject</li>
      </ul>
    </div>
  );
};

export default Sidebar;
