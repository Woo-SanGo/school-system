'use client';

import React, { useState } from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './ManageTeacher.module.css';

interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  joinedDate: string;
}

const ManageTeacherPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alicejohnson@example.com',
      lastLogin: '2025-01-15',
      joinedDate: '2024-12-10',
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bobbrown@example.com',
      lastLogin: '2025-01-14',
      joinedDate: '2024-12-15',
    },
  ]);

  const deleteTeacher = (id: number) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>Manage Teachers</div>

      {/* Red Popup Box */}
      <div className={styles.popupBox}>Teacher Management</div>

      {/* Teacher Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Last Login</th>
            <th>Joined</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.email}</td>
              <td>{teacher.lastLogin}</td>
              <td>{teacher.joinedDate}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTeacher(teacher.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ManageTeacherPage;
