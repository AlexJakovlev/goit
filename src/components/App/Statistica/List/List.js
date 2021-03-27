import styles from "./list.module.css";

function List({ item }) {
  const { id, label, percentage } = item;

  return (
    <li className={styles[`${id}`]}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
}

export default List;
