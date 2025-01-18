'use client';

import React, { useState } from 'react';
import AdminLayout from '../AdminLayout/adminLayout';
import styles from './ManageStuden.module.css';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  joinedDate: string;
}

const ManageStudentPage = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      lastLogin: '2025-01-17',
      joinedDate: '2024-12-20',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      lastLogin: '2025-01-16',
      joinedDate: '2024-12-22',
    },
  ]);

  const deleteStudent = (id: number) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <AdminLayout>
      {/* Topbar */}
      <div className={styles.topbar}>Manage Students</div>

      {/* Red Popup Box */}
      <div className={styles.popupBox}>Student Management</div>

      {/* Student Table */}
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
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.lastLogin}</td>
              <td>{student.joinedDate}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteStudent(student.id)}
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

export default ManageStudentPage;
