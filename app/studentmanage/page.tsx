'use client'
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import styles from "./student.module.css"; // Adjust the path to the correct location for your styles

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
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

// Editable Table component
interface Student {
  rollNo: number;
  name: string;
  score: number;
}

const EditableTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { rollNo: 1, name: "", score: 0 },
    { rollNo: 2, name: "", score: 0 },
    { rollNo: 3, name: "", score: 0 },
  ]);

  const handleInputChange = (index: number, field: "name" | "score", value: string | number) => {
    const updatedStudents = [...students];
    updatedStudents[index] = {
      ...updatedStudents[index],
      [field]: field === "score" ? parseInt(value as string, 10) : value,
    };
    setStudents(updatedStudents);
  };

  const handleAddRow = () => {
    const newStudent: Student = {
      rollNo: students.length + 1,
      name: "",
      score: 0,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Student Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => handleInputChange(index, "name", e.target.value)}
                  placeholder="Enter name"
                  className={styles.input}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.score === 0 ? "" : student.score}
                  onChange={(e) => handleInputChange(index, "score", e.target.value)}
                  placeholder="Enter score"
                  className={styles.input}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} className={styles.addButton}>
        Add Row
      </button>
    </div>
  );
};

// Main layout rendering the EditableTable component
const MainPage = () => {
  return (
    <Layout>
      <EditableTable />
    </Layout>
  );
};

export default MainPage;
