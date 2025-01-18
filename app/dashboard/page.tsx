import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "../dashboard/dashboard.module.css"; // Update this path to where the styles are located

interface LayoutProps {
  children: ReactNode;
  layoutType?: "layout1" | "layout2" | "layout3";
}

const Layout: React.FC<LayoutProps> = ({ children, layoutType }) => {
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
      <main className={styles.main}>{children}
        <div className={styles.layout1}>{children}
        <div className={styles.left}>
          <ul>
            <li><p>0</p></li>
            <li><a href="#"><span>📘</span>Total teacher</a></li>
          </ul>
        </div>
        <div className={styles.right}>
        <ul>
            <li><p>0</p></li>
            <li><a href="#"><span>👥</span>Total student</a></li>
          </ul>
        </div>
        </div>
        <div className={styles.layout2}><p>Dear teachers, please create a class first before proceeding with student grading.</p>{children}
        </div>
        <div className={styles.layout3}>{children}
          <div className={styles.top}>{children}
            <div className={styles.one}>
              <ul>
              <Link href="/teacher">
                <span className={styles.icon}>📘</span> Teacher
              </Link>
              </ul>
            </div>
            <div className={styles.two}>
            <ul>
                <Link href="/student">
                <span className={styles.icon}>👥</span> Student
              </Link>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Layout;
