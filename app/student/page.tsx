'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './student.module.css'; 
import Link from 'next/link';

const StudentPage = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [searchMajor, setSearchMajor] = useState('');
  const [batch, setBatch] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [classInfo, setClassInfo] = useState('');
  const [shift, setShift] = useState('');

  const collegeMajors: Record<string, string[]> = {
    science: [
      'Department of Biology',
      'Department of Chemistry',
      'Department of Computer Science',
      'Department of Environmental Science',
      'Department of Mathematics',
      'Department of Physics',
    ],
    humanities: [
      'Department of Geography',
      'Department of History',
      'Department of International Business Management',
      'Department of Khmer Literature',
      'Department of Linguistics',
      'Department of Media and Communication',
      'Department of Philosophy',
      'Department of Psychology',
      'Department of Sociology',
      'Department of Social Work',
      'Department of Tourism',
    ],
    engineering: [
      'Automation and Supply Chain Systems Engineering',
      'Bioengineering',
      'Data Science Engineering',
      'Environmental Engineering',
      'Information Technology Engineering',
      'Telecommunication and Electronic Engineering',
    ],
    development: [
      'Community Development',
      'Economic Development',
      'Natural Resources Management and Development',
    ],
    education: [
      'Higher Education Development and Management',
      'Lifelong Learning',
    ],
  };

  const filteredMajors =
    selectedCollege && collegeMajors[selectedCollege]
      ? collegeMajors[selectedCollege].filter((major) =>
          major.toLowerCase().includes(searchMajor.toLowerCase())
        )
      : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCollege || !batch || !academicYear || !classInfo || !shift) {
      alert('Please fill out all required fields.');
      return;
    }

    // Store data in localStorage
    const studentData = {
      selectedCollege,
      batch,
      academicYear,
      classInfo,
      shift,
    };
    localStorage.setItem('studentData', JSON.stringify(studentData));

    console.log('Form submitted');
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="University Logo"
            width={120}
            height={120}
          />
        </div>
        <h1>សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</h1>
        <h2>Royal University Of Phnom Penh</h2>
        <div className={styles.welcomeText}>
          <h3>Welcome student login form.</h3>
          <p>
            The Royal University of Phnom Penh (RUPP), established in 1960, has continuously evolved to meet the needs of its students and the demands of modern education.
            As part of this evolution, RUPP has introduced a new school management platform designed to enhance academic transparency and accessibility. This innovative system enables students to conveniently check their exam scores and track their GPA, fostering a more streamlined approach to academic management. These advancements reflect the university's commitment to leveraging technology to support student success and achieve its vision for continued growth and development.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h2>Welcome to student registration</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Academic Information</h3>
          <div className={styles.inputGroup}>
            <label htmlFor="degree">Degree *</label>
            <select id="degree" name="degree" required>
              <option value=""></option>
              <option value="bachelor">Bachelor Degree</option>
              <option value="master">Master Degree</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="college">College*</label>
            <select
              name="college"
              id="college"
              onChange={(e) => setSelectedCollege(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="science">Faculty of Science</option>
              <option value="humanities">Faculty of Social Sciences and Humanities</option>
              <option value="engineering">Faculty of Engineering</option>
              <option value="development">Faculty of Development Studies</option>
              <option value="education">Faculty of Education</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="major">Major*</label>
            <select id="major" name="major" required>
              <option value="">Select Major</option>
              {filteredMajors.map((major, index) => (
                <option key={index} value={major}>
                  {major}
                </option>
              ))}
            </select>
          </div>

          {/* Generation */}
          <div className={styles.inputGroup}>
            <label htmlFor="batch">ជំនាន់ *</label>
            <input
              type="text"
              id="batch"
              name="batch"
              placeholder="Enter Genaretion"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="academicYear">ឆ្នាំសិក្សា *</label>
            <input
              type="text"
              id="year"
              placeholder="Enter your Academic year"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="class">Class/ថ្នាក់ *</label>
            <input
              type="text"
              id="class"
              name="class"
              placeholder="Enter your class (A3,M3)"
              value={classInfo}
              onChange={(e) => setClassInfo(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="shift">shift/វេន *</label>
            <select
              id="shift"
              name="shift"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
            >
              <option value="#"></option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
          <div className={styles.buttons}>
            <Link href="/register">
              <button type="button" className={styles.backButton}>
                Back
              </button>
            </Link>
            <Link href="/continueName">
              <button type="submit" className={styles.submitButton}>
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentPage;
