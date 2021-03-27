import styles from "./Badge.module.css";

function Badge({ stats }) {
  const list = () =>
    Object.keys(stats).map((key, value) => {
      return (
        <li key={value}>
          <span>{key}</span>
          <span className={styles.cnt}>{stats[key]}</span>
        </li>
      );
    });
  return <ul className={styles.description}>{list()}</ul>;
}

export default Badge;
