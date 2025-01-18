import React from 'react';
import styles from './Topbar.module.css';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <img src="/logo.png" alt="University Logo" className={styles.logo} />
      <h1 className={styles.title}>Royal University of Phnom Penh</h1>
      <div className={styles.adminBox}>Admin</div>
    </div>
  );
};

export default Topbar;
