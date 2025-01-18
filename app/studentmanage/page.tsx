'use client'
import Link from "next/link";
import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component from Next.js
import styles from "./student.module.css"; // Adjust the path to the correct location for your styles

// Layout component
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* Using Next.js Image for optimized image loading */}
          <Image 
            src="/logo.png" 
            alt="RUPP Logo" 
            className={styles.logo} 
            width={100} // Specify width
            height={100} // Specify height
          />
          <ul className={styles.universityInfo}>
            <li className={styles.khmerText}>សាកលវិទ្យាល័យភូមន្ទភ្នំពេញ</li>
            <li className={styles.englishText}>ROYAL UNIVERSITY OF PHNOM PENH</li>
          </ul>
        </div>
      </header>

      {/* Sidebar Section */}
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
          </ul>
        </nav>
      </aside>

      {/* Main Content Section */}
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
  email: string;
  score: number;
}

const EditableTable: React.FC = () => {
  // State to manage students
  const [students, setStudents] = useState<Student[]>([
    { rollNo: 1, name: "", email: "", score: 0 },
    { rollNo: 2, name: "", email: "", score: 0 },
    { rollNo: 3, name: "", email: "", score: 0 },
    { rollNo: 4, name: "", email: "", score: 0 },
  ]);

  // Use effect to only run in the browser
  useEffect(() => {
    const savedStudents = localStorage.getItem("studentsData");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []); // This effect runs only once when the component mounts

  const handleInputChange = (
    index: number,
    field: "name" | "email" | "score",
    value: string | number
  ) => {
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
      email: "",
      score: 0,
    };
    setStudents([...students, newStudent]);
  };

  const handleRemoveRow = (index: number) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    // Save students to localStorage (or do any other processing)
    localStorage.setItem("studentsData", JSON.stringify(students));
    alert("Data has been saved successfully!");
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Student Name</th>
            <th>Student Gmail</th>
            <th>Score</th>
            <th>Actions</th> {/* Add Actions column */}
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
                  type="email"
                  value={student.email}
                  onChange={(e) => handleInputChange(index, "email", e.target.value)}
                  placeholder="Enter Gmail"
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
              <td>
                <button
                  onClick={() => handleRemoveRow(index)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} className={styles.addButton}>
        Add Row
      </button>
      <button onClick={handleSubmit} className={styles.submitButton}>
        Submit
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
