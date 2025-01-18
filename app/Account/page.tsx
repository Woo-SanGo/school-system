"use client"; // Ensure client-side rendering

import { useState } from 'react'; // Import useState hook
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import styles from '../Components/styles.module.css'; // Import styles from the Components/Styles
import Image from 'next/image'; // Import Image component

const Account = () => {
  // Initialize userData state with default values
  const [userData, setUserData] = useState({
    firstName: 'Dok',
    lastName: 'Vottey',
    email: 'choi.san@gmail.com',
    university: 'Royal University of Phnom Penh',
    department: 'Computer Science',
    class: '3rd Year',
    shift: 'Morning',
    profilePicture: '/default-profile.jpg', // Default profile picture
  });

  // Handle profile picture change
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          profilePicture: reader.result as string, // Update profile picture in state
        }));
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={styles.background}></div>

      {/* Account Information Section */}
      <section className={styles.accountContent}>
        <h2 className={styles.accountTitle}>Account Information</h2>

        <div className={styles.profileSection}>
          {/* Profile Picture */}
          <div className={styles.profilePictureWrapper}>
            <label htmlFor="profilePicture" className={styles.uploadLabel}>
              <input
                type="file"
                accept="image/*"
                id="profilePicture"
                className={styles.uploadInput}
                onChange={handleProfilePictureChange}
                style={{ display: 'none' }} // Hide file input
              />
              {userData.profilePicture === '/default-profile.jpg' ? (
                <div className={styles.circle}>
                  <span>Upload your pic</span>
                </div>
              ) : (
                <Image
                  src={userData.profilePicture}
                  alt="Profile"
                  className={styles.profilePicture}
                  width={100} // Set the width for the image
                  height={100} // Set the height for the image
                />
              )}
            </label>
          </div>

          {/* User Information Table */}
          <div className={styles.accountTableWrapper}>
            <table className={styles.accountTable}>
              <tbody>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{userData.firstName} {userData.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{userData.email}</td>
                </tr>
                <tr>
                  <td><strong>University:</strong></td>
                  <td>{userData.university}</td>
                </tr>
                <tr>
                  <td><strong>Department:</strong></td>
                  <td>{userData.department}</td>
                </tr>
                <tr>
                  <td><strong>Class:</strong></td>
                  <td>{userData.class}</td>
                </tr>
                <tr>
                  <td><strong>Shift:</strong></td>
                  <td>{userData.shift}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
