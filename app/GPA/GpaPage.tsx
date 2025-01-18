// 'use client';  // Mark this file as a client-side component

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import Link from 'next/link';  // Import Link for client-side navigation
// import Header from '../Components/Header';  // Import Header component
// import Navbar from '../Components/Navbar';  // Import Navbar component
// import styles from '../Components/styles.module.css';  // Import styles

// const GpaPage = () => {
//   const [isPopupOpen, setPopupOpen] = useState(false);  // State to control the popup visibility

//   const openPopup = () => setPopupOpen(true);  // Open the popup
//   const closePopup = () => setPopupOpen(false);  // Close the popup

//   return (
//     <div className={styles.container}>
//       <Header /> {/* Keep the Header as it is */}
//       <Navbar /> {/* Keep the Navbar as it is */}

//       <div className={styles.background}></div> {/* Background Section */}

//       <div className={styles.gpaContainer}>
//         <h1 className={styles.title}>Select Year for GPA</h1>
//         <button onClick={openPopup} className={styles.gpaButton}>Select Year</button>

//         {/* GPA Year Selection Pop-Up */}
//         {isPopupOpen && (
//           <div className={styles.overlay}>
//             <div className={styles.popup}>
//               <h2>Select Your Year</h2>
//               <ul className={styles.yearList}>
//                 <li>
//                   <Link href="/GPA/firstyear">
//                     <button className={styles.yearButton}>Year 1</button>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/GPA/secondyear">
//                     <button className={styles.yearButton}>Year 2</button>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/GPA/thirdyear">
//                     <button className={styles.yearButton}>Year 3</button>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/GPA/fourthyear">
//                     <button className={styles.yearButton}>Year 4</button>
//                   </Link>
//                 </li>
//               </ul>
//               <button className={styles.closeButton} onClick={closePopup}>Close</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GpaPage;
