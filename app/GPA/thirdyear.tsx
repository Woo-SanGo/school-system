// import Header from '../Components/Header';
// import Navbar from '../Components/Navbar';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '../Components/styles.module.css';


// export default function Year3() {
//   return (
//     <div className={styles.container}>
//     <div className={styles.container}>
//       <Header />
//       <Navbar />
//     </div>
//       <div className={styles.mainContent}>
//         <h2 className={styles.transcriptTitle}>ព្រឹត្តិប័ត្រពិន្ទុ</h2>
//         <h2 className={styles.transcriptTitle}>Academic Transcript</h2>
//         <table className={styles.transcriptTable}>
//           <caption className={styles.studentID}>ID: 000001</caption>
//           <caption className={styles.studentID}>ឆ្នាំសិក្សា : 2022 - 2023</caption>
//           <caption className={styles.semester} style={{ color: 'red' }}>Semester 1</caption>
//           <caption className={styles.studentGPA}>GPA: 4.0</caption>
//           <thead>
//             <tr>
//               <th>EE</th>
//               <th>មុខវិជ្ជាទូទៅ</th>
//               <th>General Subjects</th>
//               <th>Credit</th>
//               <th>Score</th>
//               <th>Grade</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>គណិតវិទ្យា</td>
//               <td>Mathematics</td>
//               <td>3</td>
//               <td>95</td>
//               <td>A</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>រូបវិទ្យា</td>
//               <td>Physics</td>
//               <td>4</td>
//               <td>88</td>
//               <td>B+</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>គីមីវិទ្យា</td>
//               <td>Chemistry</td>
//               <td>3</td>
//               <td>92</td>
//               <td>A-</td>
//             </tr>
//             <tr>
//               <td>4</td>
//               <td>ជីវវិទ្យា</td>
//               <td>Biology</td>
//               <td>2</td>
//               <td>85</td>
//               <td>B</td>
//             </tr>
//             <tr>
//               <td>5</td>
//               <td>ភាសាអង់គ្លេស</td>
//               <td>English</td>
//               <td>2</td>
//               <td>93</td>
//               <td>A</td>
//             </tr>
//             <tr>
//               <td>6</td>
//               <td>វិទ្យាសាស្រ្តកុំព្យូទ័រ</td>
//               <td>Computer Science</td>
//               <td>3</td>
//               <td>90</td>
//               <td>A-</td>
//             </tr>
//             <tr>
//               <td>7</td>
//               <td>ប្រវត្តិវិទ្យា</td>
//               <td>History</td>
//               <td>3</td>
//               <td>87</td>
//               <td>B+</td>
//             </tr>
//             <tr>
//               <td>8</td>
//               <td>សេដ្ឋកិច្ចវិទ្យា</td>
//               <td>Economics</td>
//               <td>3</td>
//               <td>94</td>
//               <td>A</td>
//             </tr>
//           </tbody>
//         </table>
//         <div className={styles.noted}>
//           <p>Noted:</p>
//           <div className={styles.notedColumns}>
//             <div className={styles.leftColumn}>
//               <p>A = 85% - 100% = ល្អប្រសើរ</p>
//               <p>B+ = 80% - 85% = ល្អណាស់</p>
//               <p>B = 70% - 79% = ល្អ</p>
//               <p>C+ = 65% - 69% = ល្អបង្គួរ</p>
//             </div>
//             <div className={styles.rightColumn}>
//               <p>C = 50% - 64% = មធ្យម</p>
//               <p>D = 45% - 49% = ខ្សោយ</p>
//               <p>E = 40% - 49% = ខ្សោយណាស់</p>
//               <p>F &lt;= 39% = ធ្លាក់</p>
//             </div>
//           </div>
//         </div>
//         <hr className={styles.fullWidthLine} />
//         <table className={styles.transcriptTable}>
//           <caption className={`${styles.semester} ${styles.semesterSpacing}`} style={{ color: 'red' }}>Semester 2</caption>
//           <caption className={styles.studentGPA}>GPA: 4.0</caption>
//           <thead>
//             <tr>
//               <th>EE</th>
//               <th>មុខវិជ្ជាទូទៅ</th>
//               <th>General Subjects</th>
//               <th>Credit</th>
//               <th>Score</th>
//               <th>Grade</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>គណិតវិទ្យា</td>
//               <td>Mathematics</td>
//               <td>3</td>
//               <td>95</td>
//               <td>A</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>រូបវិទ្យា</td>
//               <td>Physics</td>
//               <td>4</td>
//               <td>88</td>
//               <td>B+</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>គីមីវិទ្យា</td>
//               <td>Chemistry</td>
//               <td>3</td>
//               <td>92</td>
//               <td>A-</td>
//             </tr>
//             <tr>
//               <td>4</td>
//               <td>ជីវវិទ្យា</td>
//               <td>Biology</td>
//               <td>2</td>
//               <td>85</td>
//               <td>B</td>
//             </tr>
//             <tr>
//               <td>5</td>
//               <td>ភាសាអង់គ្លេស</td>
//               <td>English</td>
//               <td>2</td>
//               <td>93</td>
//               <td>A</td>
//             </tr>
//             <tr>
//               <td>6</td>
//               <td>វិទ្យាសាស្រ្តកុំព្យូទ័រ</td>
//               <td>Computer Science</td>
//               <td>3</td>
//               <td>90</td>
//               <td>A-</td>
//             </tr>
//             <tr>
//               <td>7</td>
//               <td>ប្រវត្តិវិទ្យា</td>
//               <td>History</td>
//               <td>3</td>
//               <td>87</td>
//               <td>B+</td>
//             </tr>
//             <tr>
//               <td>8</td>
//               <td>សេដ្ឋកិច្ចវិទ្យា</td>
//               <td>Economics</td>
//               <td>3</td>
//               <td>94</td>
//               <td>A</td>
//             </tr>
//           </tbody>
//         </table>
//         <div className={styles.noted}>
//           <p>Noted:</p>
//           <div className={styles.notedColumns}>
//             <div className={styles.leftColumn}>
//               <p>A = 85% - 100% = ល្អប្រសើរ</p>
//               <p>B+ = 80% - 85% = ល្អណាស់</p>
//               <p>B = 70% - 79% = ល្អ</p>
//               <p>C+ = 65% - 69% = ល្អបង្គួរ</p>
//             </div>
//             <div className={styles.rightColumn}>
//               <p>C = 50% - 64% = មធ្យម</p>
//               <p>D = 45% - 49% = ខ្សោយ</p>
//               <p>E = 40% - 49% = ខ្សោយណាស់</p>
//               <p>F &lt;= 39% = ធ្លាក់</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
