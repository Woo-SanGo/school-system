import Link from 'next/link';
import styles from '../Homepage/styles.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/Home" className={styles.navItem}>Home</Link>
        </li>
        <li>
          <Link href="/GPA" className={styles.navItem}>GPA</Link>
        </li>
        <li>
          <Link href="/schedule" className={styles.navItem}>Schedule</Link>
        </li>
        <li>
          <Link href="/About" className={styles.navItem}>About Us</Link>
        </li>
        <li>
          <Link href="/Help" className={styles.navItem}>Help</Link>
        </li>
        <li>
          <Link href="/Account" className={styles.navItem}>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
