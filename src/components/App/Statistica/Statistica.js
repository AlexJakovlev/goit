import styles from "./statistica.module.css";
import statistica from "../../../dataJSON/statistica.json";
import List from "./List/List";

function Statistics({ title }) {
  return (
    <section className={styles.description}>
      {title && <h2 className={styles.title}>Statistica</h2>}
      <ul className={styles.items}>
        {statistica.map((index) => (
          <List key={index.id} item={index} />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
