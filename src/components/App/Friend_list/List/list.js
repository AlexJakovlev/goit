import styles from "./List.module.css";

function List({ item }) {
  const { isOnline, avatar, name } = item;
  return (
    <li>
      <span
        className={isOnline === true ? styles.online : styles.offline}
      ></span>
      <img className={avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
export default List;
