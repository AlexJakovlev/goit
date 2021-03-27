import styles from "./friend_list.module.css";
import friend from "../../../dataJSON/friends.json";
import List from "./List/list";

function FriendList() {
  return (
    <section className={styles.description}>
      <h2 className={styles.title}>Friend list</h2>
      <ul className={styles.items}>
        {friend.map((index) => (
          <List key={index.id} item={index} />
        ))}
      </ul>
    </section>
  );
}

export default FriendList;
