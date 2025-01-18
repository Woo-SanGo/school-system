'use client';

import Image from 'next/image';
import styles from './name.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

const ContinueName: FC = () => {
  const router = useRouter(); // Initialize useRouter

  // Submit handler function (with redirection logic)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted');
    // Add any form submission logic here (like sending data to an API or saving in state)
    
    // After the form is submitted, redirect to the Homepage
    router.push('/Home');
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.png" // Replace with your logo path
            alt="University Logo"
            width={120}
            height={120}
          />
        </div>
        <h1>សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</h1>
        <h2>Royal University Of Phnom Penh</h2>
        <div className={styles.welcomeText}>
          <h3>Welcome to the student login form.</h3>
          <p>
            The Royal University of Phnom Penh (RUPP), established in 1960,
            has continuously evolved to meet the needs of its students and the demands
            of modern education. As part of this evolution, RUPP has introduced a
            new school management platform designed to enhance academic transparency
            and accessibility. This innovative system enables students to conveniently
            check their exam scores and track their GPA, fostering a more streamlined
            approach to academic management. These advancements reflect the university's
            commitment to leveraging technology to support student success and achieve
            its vision for continued growth and development.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <h2>Welcome to Student Registration</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Login Information</h3>
          <div className={styles.inputGroup}>
            <label>គោត្តនាម​​ និង​​ នាម​​ </label>
            <div className={styles.dualInput}>
              <input
                type="text" name="famName" placeholder="នាមត្រកូល"
                required
              />
              <input
                type="text" name="name" placeholder="នាមខ្លួន"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>ឈ្មោះឡាតាំង</label>
            <div className={styles.dualInput}>
              <input
                type="text" name="engName" placeholder="Family Name"
                required
              />
              <input
                type="text" name="NameEnglish" placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Gender</label>
            <div className={styles.gender}>
              <label>
                <input type="radio" name="gender" value="male" required />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" required />
                Female
              </label>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Birth Date</label>
            <div className={styles.birthDate}>
              <input
                type="text" name="day" placeholder="DD"
                maxLength={2}
                required
              />
              <input
                type="text" name="month" placeholder="MM"
                maxLength={2}
                required
              />
              <input
                type="text" name="year" placeholder="YYYY"
                maxLength={4}
                required
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email (school email*)</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password"
            maxLength={6}
            required
             />
          </div>
          <div className={styles.buttons}>
            <Link href="/student">
              <button type="button" className={styles.backButton}>
                Back
              </button>
            </Link>
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </div>
        </form>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ContinueName;
