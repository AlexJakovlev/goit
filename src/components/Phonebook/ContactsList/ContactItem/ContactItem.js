import styles from "./ContactItem.module.css";

function ContacItem({ item, HandleDelete }) {
  return (
    <>
      <span className={styles.name}>{item.name}:</span>
      <span className={styles.tellnumber}>{item.number}</span>
      <div
        className={styles.delete}
        data-id={item.id}
        type="button"
        onClick={HandleDelete}
      ></div>
    </>
  );
}

export default ContacItem;
