import { ReactNode } from "react";
import Image from "next/image"; // Import Image from next/image for optimized image loading
import Link from "next/link";
import styles from "../dashboard/dashboard.module.css"; // Adjust this path to where your styles are located

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* Using Next.js Image for optimized image */}
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

const MainPage = () => {
  return (
    <Layout>
      {/* Main content for the page */}
      <h1>Welcome to the Dashboard!</h1>
      <p>This is the main content area of the dashboard page.</p>
    </Layout>
  );
};

export default MainPage;
