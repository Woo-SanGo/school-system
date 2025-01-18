import styles from '../adminz/style.module.css';

type LoginProps = {
  onSubmit: (event: React.FormEvent) => void; // Define the type for the onSubmit prop
};

export default function Login({ onSubmit }: LoginProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin</h1>
      <p className={styles.subtitle}>Please sign in to continue.</p>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Student ID | Gmail
          </label>
          <input
            type="text"
            id="email"
            className={styles.input}
            placeholder="Enter your ID or Email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
