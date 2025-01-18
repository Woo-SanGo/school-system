import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import styles from './styles.module.css';
import Link from 'next/link'; 

export default function Homepage() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={styles.background}></div>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
    </div>
  );
}
